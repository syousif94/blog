module.exports = {
  siteMetadata: {
    title: `Sammy's Blog`,
    description: `Musings, Code, and Animation`
  },
  plugins: [
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
