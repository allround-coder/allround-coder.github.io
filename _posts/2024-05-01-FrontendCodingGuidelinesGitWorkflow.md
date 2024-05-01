<img src="/assets/img/FrontendCodingGuidelinesGitWorkflow_0.png" />

# Introduction

This workflow is based on Gitflow, a git branching model that involves the use of feature branches and multiple primary branches. Under this model developers create a feature branch and delay merging it to the main trunk branch until the feature is complete. There are also GitHub Flow and GitLab flow.

# Recommended Practices for Utilizing Git

- Make clean, single purpose commit
- Write meaningful commits
- Commit Early & commit often
- Don’t alter published history (use rebase on your local branch only)
- Don’t commit generated files

# Git branches

## Primary Git Branches

- Master
- Main

## Environment Branches

- Development
- Staging
- Production

## Supporting Branches

- Bug
- Hotfix
- Release
- Feature

# Workflow

Instead of a single main branch to manage the history of the project. There will be environment branches and supporting branches. The main branch stores the official release history and environment branches serves as an integration branch for supporting branches.

First we will create an empty environment branch locally and push it to the server.

Development Branch

<img src="/assets/img/FrontendCodingGuidelinesGitWorkflow_1.png" />

Staging Branch

<img src="/assets/img/FrontendCodingGuidelinesGitWorkflow_2.png" />

## Feature branches

Each new feature should be in its own branch, which can be pushed to the central repo for backup or collaboration.

Note: Instead of branch off Primary branches, feature branches must use environment branches as their parent branch.

When the feature is complete it is merged back to its parent branch.

Feature branches should never directly interact with primary branches.

While creating a feature branch

<img src="/assets/img/FrontendCodingGuidelinesGitWorkflow_3.png" />

<img src="/assets/img/FrontendCodingGuidelinesGitWorkflow_4.png" />

While merging the feature branch code

## Release Branch

Once you have developed enough features for a release you create a release branch from the environment branch. Creating this branch will create the next release cycle.

Note: In the release branch no new feature is added, it will only include bug fixes and documentation generation and other release oriented tasks should go in this branch.

Once it is ready it is merged to the primary branch tagged with a version number.

It should be merged back to the environment branch, since the release was initiated.

## Advantages of using release branch

Using this branch will make it possible for one time to polish the current release while another team continues working on the next release.

Release branch are based on environment branch

<img src="/assets/img/FrontendCodingGuidelinesGitWorkflow_5.png" />

<img src="/assets/img/FrontendCodingGuidelinesGitWorkflow_6.png" />

Once the release is ready to ship it will get merged into the primary branch then the release branch will be deleted.

It’s important to merge back into the environment branch because critical updates may have been added to the release branch and they need to be accessible to new features.

## Hotfix Branches

Hotfix branches are used to quickly patch production releases. Hotfix branches are like release branches and feature branches except they are based on the primary branch instead of the environment branch. This is the only branch that should fork directly from primary branches. As soon as the fix is complete, it should be merged into primary branch and environment branches.

<img src="/assets/img/FrontendCodingGuidelinesGitWorkflow_7.png" />

<img src="/assets/img/FrontendCodingGuidelinesGitWorkflow_8.png" />

## Summary

- Environment branches are created from main branches
- A release branch is created from environment branch
- Feature branch is created from environment branch
- When release branch is done it is merged into environment branch and primary branch
- If an issue is in the primary branch, the hotfix branch is created from the primary branch and after hotfix is completed it is merged back to the primary and environment branch.

## Naming Conventions

- Start branch name with temporary git branches group word
- Use unique ids in branch name
- Use hyphens (-) or slash or separator ( _ )
- Avoid long descriptive names

Example: bug-logo-alignment-issue

If you are using Jira or any other project management tool in that case we can use following naming convention. {TAG}/{NAME_INITIAL}-{TICKET_ID}-{SHORT_TASK_DESCRIPTION}

Example: feat/SN-AMS-112-change-dashboard-layout

# Git commits

Git can be thought of as a timeline management utility. Commits are the core building block on a Git project timeline. Commits are created by git commit command to capture state of project at that time.

Commands

<img src="/assets/img/FrontendCodingGuidelinesGitWorkflow_9.png" />

## Semantic commit

<img src="/assets/img/FrontendCodingGuidelinesGitWorkflow_10.png" />

# Git Rebase

You want to use rebase you should only use it in supporting branches or local branches

## References

https://docs.gitlab.com/ee/topics/gitlab_flow.html

https://www.atlassian.com/git/tutorials/saving-changes/git-commit

https://github.com/git-guides/git-commit

https://www.gitkraken.com/learn/git/best-practices/git-branch-strategy#gitlab-flow-branch-strategy

https://docs.gitlab.com/ee/topics/git/cherry_picking.html

https://www.gitkraken.com/learn/git/git-flow

https://www.gitkraken.com/learn/git/best-practices/git-branch-strategy#gitlab-flow-branch-strategy

https://www.toptal.com/git/git-workflows-for-pros-a-good-git-guide