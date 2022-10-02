<p align="center">
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

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-minimal)



## Notes


GraphQL for Index.jsx @ articles

```
http://localhost:8000/___graphql?query=query%20MyQuery%20%7B%0A%20%20allMdx(sort%3A%20%7Bfields%3A%20frontmatter___date%2C%20order%3A%20DESC%7D)%20%7B%0A%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20frontmatter%20%7B%0A%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20date(formatString%3A%20%22DD-MM-YYYY%22)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20slug%0A%20%20%20%20%20%20excerpt%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&operationName=MyQuery&codeExporterIsOpen=true
```


GraphQL for mdx.slug.jsx

```
http://localhost:8000/___graphql?query=query%20MyQuery%20%7B%0A%20%20allMdx(sort%3A%20%7Bfields%3A%20frontmatter___date%2C%20order%3A%20DESC%7D)%20%7B%0A%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20frontmatter%20%7B%0A%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20date(formatString%3A%20%22DD-MM-YYYY%22)%0A%20%20%20%20%20%20%20%20hero_image%0A%20%20%20%20%20%20%20%20hero_image_alt%0A%20%20%20%20%20%20%20%20hero_image_credit_link%0A%20%20%20%20%20%20%20%20hero_image_credit_text%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20body%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&operationName=MyQuery&codeExporterIsOpen=true
```