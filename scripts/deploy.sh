#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn build

# navigate into the build output directory
cd out

# gh-pages clone
git clone -b gh-pages https://github.com/allround-coder/allround-coder.github.io/
cp -rf allround-coder.github.io/.git ./.git
git config user.name "allround-coder"
git config user.email "13akstjq.blog25@gmail.com"
rm -rf allround-coder.github.io

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git add .
git commit -m "add post"

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:ui-log/ui-log.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push origin gh-pages

cd -
