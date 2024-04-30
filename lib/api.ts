import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import Project from "@/interfaces/project";
import globby from "globby";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getPostByFile(file: string, fields: string[] = []) {
  let fileNameText: any = file.split("/");
  let fileName = fileNameText[fileNameText.length - 1];
  const realSlug = fileName.replace(/\.md$/, "");
  const fileContents = fs.readFileSync(file, "utf8");
  const { data, content } = matter(fileContents);
  type Items = {
    [key: string]: any;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }

    if (field === "content") {
      items[field] = content;
    }

    if (field === "readingTime") {
      items[field] = Math.ceil(content.length / 1000);
    }

    if (field === "tag") {
      items[field] = [...data[field].split(", ")];
      return;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

interface getPostsProps {
  tag?: string;
  fields: string[];
  file?: string;
}

export async function getPosts({ tag, file = "**", fields = [] }: getPostsProps) {
  const files = await globby([`_posts/${file}.md`]);
  let posts = files
    .map((file) => getPostByFile(file, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  if (tag) posts = posts.filter((post) => post.tag.includes(tag));
  return posts;
}
