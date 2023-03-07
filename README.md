# Gatsby ( fundamentals )

![Gatsbyimage](/static/Gatsby%20logo.png)

## Introduction

Very first thing when would you wanna use gatsby over NextJS and other frameworks. Typically whenver you need a _static site generator_ known as _SSG_. This are the kind of site where there is not much of changes and the contents are quite static like a blog site, porfolio site and so on.

## Installation

You need to make sure you have `nodejs` installed to the latest version. Then simpley run `npm install -g gatsby-cli` to install the gatsby command line globally.

Run `gatsby develop` to start the server. You will have to server started. One with the local host something on `localhost:8000` and another `localhost:8000/---graphQl`. Latter is for graphQl playground.

As a starter, you have bunch of ways to start with gatsby. You can choose a `template` as a starter file of your choice from [here](https://www.gatsbyjs.com/starters/). You will have the `command` for the template right there.

## Start

## Project Structure

- _pages_ : This where all of your pages should be. Any sub routes can be inside of the pages folder. Look at the folder structure.

- _static_ : container for static content like images, vdo, etc.
  ⚠️ Putting images inside static folder is not an optimized solution to work with Gatsby. Keep on reading for better solution.

## Content Mesh

Gatsby brings you data thourgh a graphQL layer. The source of the data could be anything like WordPress, MongoDB, Shopify or file system.

It does so by using source plugin.

## Using GraphQL

![graphQlLogo](static/gqlogo.png)

This is when you need to go `http://localhost:8000/__graphql`. Here you will be adding site meta data and page information and more. Get familiar with the playground. This is incredibly useful. Since this is a whole new world if you are never worked with graphQl, lookup for some tutorials or docs, whichever suits you.

# Site Meta data

Go to [`gatsby-config.js`](gatsby-config.js) to update your site meta-data for SEO. This is where gatsby rocks! 🤘

Right after updating meta-data, you must restart the server with `gatsby develop`.

You build and place your query right at the bottom of the pages. for instance, here inside the [index](src/pages/index.js) file. You will have the data there.

⚠️ Placing your query other than the pages, at the bottom is not gonna work for any components outside of the pages. for that you need _static query_.

## Static Query

Essentially you will need to import `graphQl` and `useStaticQuery` hook to use that inside the components other than pages. see how we made a dynamic header inside the [Navbar](src/components/NavBar.js)

## Fetching data from sources

To fetch data from any sources, we need to register a plug-in.
you need to go to [config](gatsby-config.js). Go to [gatsby plugins](https://www.gatsbyjs.com/plugins/gatsby-source-filesystem) and grab the command and install the package. Gatsby has a great open source plugins.

Note that you can create as many instances as you need inside the plugins.

## Markdown transformation

Makrdown can be used as source for your data.
This is one of the way you can prepare your data without worrying about HTML format. see [blogs](src/blogs/blogs.md) for how you would do it as an example. You can always learn about markdown online. It is super easy.

once you have your file ready, you need to plugin to process or format the markdown into html. such as [gatsby-remark](https://www.gatsbyjs.com/plugins/gatsby-transformer-remark/). follow the same procedure of installation and tweak the config.

note that since we do not have much to config with plug in we will simply add the name of the plugin.

## Static query

For any query outside of the pages, like components you need to either use `useStaticQuery` hook or `StaticQuery` component. For more modern approch you can use the hook. Although I faced some bugs during usage of hooks but you can comment out or restatrt the server once or twice to make the query works. In case, nothign works, do follow the instruction and raise an issue.

If everything works, go to [blogs](src/pages/blogs.js) and see how the static data fethcing works.

💡 Remember you need to make your query first in the graphQL exlporer. You need to select the kind of query you wanna make from the explorer.

## Sorting Queries
