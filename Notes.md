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

This is when you need to go `http://localhost:8000/__graphql`. Here you will be adding site meta data and page information and more.
