import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";

export default ({ data }) => {
  const { frontmatter, body } = data.mdx;
  return (
    <div className="main">
      <h1>{frontmatter.title}</h1>
      <div className="meta">{frontmatter.date}</div>
      <MDXRenderer>{body}</MDXRenderer>
    </div>
  );
};

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
      }
    }
  }
`;
