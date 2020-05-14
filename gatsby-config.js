module.exports = {
  siteMetadata: {
    title: `Sammy's Blog`,
    description: `Musings, Code, and Animation`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`fira sans\:400,700`, `source code pro\:400,400i`, `cardo`],
        display: "swap"
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`
      }
    }
  ]
};
