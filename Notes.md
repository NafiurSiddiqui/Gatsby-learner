# Gatsby ( fundamentals )

Very first thing when would you wanna use gatsby over NextJS and so on. Typically whenver you need a _static site generator_ known as _SSG_. This are the kind of site where there is not much of changes and the contents are quite static like a blog site, porfolio site and so on.

As a starter, you have bunch of ways to start with gatsby. You can choose a `template` as a starter file of your choice from [here](https://www.gatsbyjs.com/starters/). You will have the `command` for the template right there.

## Project Structure

- _pages_ : This where all of your pages should be. Any sub routes can be inside of the pages folder. Look at the folder structure.

- _static_ : container for static content like images, vdo, etc.
  ⚠️ Putting images inside static folder is not an optimized solution to work with Gatsby. Keep on reading for better solution.

## Content Mesh

Gatsby brings you data thourgh a graphQL layer. The source of the data could be anything like WordPress, MongoDB, Shopify or file system.

It does so by using source plugin.
