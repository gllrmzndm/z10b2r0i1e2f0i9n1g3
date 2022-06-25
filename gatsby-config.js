module.exports = {
  siteMetadata: {
    title: `andereguillermozaandambe3`,
    siteUrl: `https://andereguillermozaandam.be`,
    siteDescription: `Guillermo Zaandam's portfolio and blog.`,
    siteLanguage: `en`,
    siteImage: "./nfsheatbannersoc.png",
    metaImage: "./nfsheatbannersoc.png",
    author: `@uhuh_guillermo`,
    twitterUsername: `@uhuh_guillermo`,
  },
  plugins: ["gatsby-plugin-postcss", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "G-YY7NKMXW1J"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    }]
};