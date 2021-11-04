# How to contribute to Harmonica Hangout Docs

[[toc]]

## Prerequisites

- Knowledge of `Git`, `Markdown`, and `JavaScript` helpful
- Have `Node.js` installed
- Have `npm` or `yarn` installed
- See [VuePress Prerequisites Documentation](https://vuepress.vuejs.org/guide/getting-started.html#prerequisites)

## Clone Repository

- Clone [Harmonica Hangout Docs](https://github.com/harmonica-hangout/hh-docs.git)
- Change to the develop branch `git checkout develop`

## Install Dependencies

- Navigate to the repo's docs directory `cd ~/<repo-location>/docs/`
- Run `npm install` or `yarn install` to install dependencies

## Build & watch files for changes

- Run `npm run dev` or `yarn dev` to start a watcher that builds site files
- If successful, a page should be served at website address `localhost:8080`
- The site should rebuild automatically as you add and edit files

## Add or edit content in a new branch

- Content is stored in `~/<repo-location>/docs/src`
- See [VuePress Directory Structure Documentation](https://vuepress.vuejs.org/guide/directory-structure.html) for more info on how this folder is structured
- Create a new git branch for your changes `git branch <descriptive-branch-name>`
    - Make sure you're on the `develop` branch first
- Make your additions and changes, add them to the git repo `git add ...`, and commit with a description message `git commit -m "Adds x content"`
- Push your changes `git push origin <descriptive-branch-name>`
- Create a pull request for your changes

## Key VuePress Documentation 

- [VuePress Directory Structure](https://vuepress.vuejs.org/guide/directory-structure.html)
- [VuePress Markdown Extensions](https://vuepress.vuejs.org/guide/markdown.html)
- [VuePress Frontmatter](https://vuepress.vuejs.org/guide/frontmatter.html)
- [VuePress Using Vue in Markdown](https://vuepress.vuejs.org/guide/using-vue.html)
