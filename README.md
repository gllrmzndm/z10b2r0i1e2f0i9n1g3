<!-- <p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby minimal starter
</h1>

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal starter.

    ```shell
    # create a new Gatsby site using the minimal starter
    npm init gatsby
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.js` to see your site update in real-time!

4.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

## 🚀 Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-minimal) -->

# My own website, number three technically...

Under the hood changes

Website is going to get changed (again) for efficiency and for better clarification. The thumbnails of the posts are falling behind in terms of efficiency and clarification; I can’t use .webp or .webm containers, since it doesn’t work and the site is based on modified mediumish theme, with not everything available and had to be adjusted by me. You can read more about .webp and .webm over here: WebP Compression Study | Google Developers What is WebP? Pros and cons of this next-gen image format - 99designs

With the new changes I’m able to support additional video players, like, Vimeo, YouTube, Twitch, Facebook video player and more. Loading the next page is going to be quicker. And more and better support for a variety of plugins and due changes in the hosting department.

Sincerely,

Guillermo


## Todo

- SEO every article it's social media "photo" and slug.
- index page SEO.
- Design.
- MDX Code blocks.
- webp and webm support.
- Video editing Need For Speed, WRC1, Grid Autosport, Valorant and more.
- Dedicated YouTube channel for videos (Done)
- Darkmode Gradually gradient?
- Themeable options (easy themes)?
- Ads?

## Notes

GraphQL for Index.jsx @ articles

```
http://localhost:8000/___graphql?query=query%20MyQuery%20%7B%0A%20%20allMdx(sort%3A%20%7Bfields%3A%20frontmatter___date%2C%20order%3A%20DESC%7D)%20%7B%0A%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20frontmatter%20%7B%0A%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20date(formatString%3A%20%22DD-MM-YYYY%22)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20slug%0A%20%20%20%20%20%20excerpt%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&operationName=MyQuery&codeExporterIsOpen=true
```


GraphQL for mdx.slug.jsx

```
http://localhost:8000/___graphql?query=query%20MyQuery%20%7B%0A%20%20allMdx(sort%3A%20%7Bfields%3A%20frontmatter___date%2C%20order%3A%20DESC%7D)%20%7B%0A%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20frontmatter%20%7B%0A%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20date(formatString%3A%20%22DD-MM-YYYY%22)%0A%20%20%20%20%20%20%20%20hero_image%0A%20%20%20%20%20%20%20%20hero_image_alt%0A%20%20%20%20%20%20%20%20hero_image_credit_link%0A%20%20%20%20%20%20%20%20hero_image_credit_text%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20body%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&operationName=MyQuery&codeExporterIsOpen=true
```

https://mdxjs.com/
https://www.gatsbyjs.com/docs/how-to/routing/mdx/




## Some issues that I had:

- Linking my pages. The tutorial has been changed, so there wasn't any good reference.
But the manual and my previous project gave me the solution(s)
https://github.com/gllrmzndm/EARNHARDT/blob/main/src/pages/blog/index.jsx