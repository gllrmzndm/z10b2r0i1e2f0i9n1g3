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
  plugins: ["gatsby-plugin-postcss",
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        "trackingId": "G-YY7NKMXW1J"
      }
    },

    "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
  ],
};