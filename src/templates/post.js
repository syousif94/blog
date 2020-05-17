import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

export default ({ data }) => {
  const { frontmatter, body } = data.mdx;
  return (
    <div className="main">
      <Helmet>
        <title>{frontmatter.title}</title>
      </Helmet>
      <header>
        <Link to="/">
          <div className="home-link">Home Page</div>
        </Link>
        <h2>{frontmatter.title}</h2>
        <div className="meta">{frontmatter.date}</div>
      </header>

      <article>
        <MDXRenderer>{body}</MDXRenderer>
      </article>
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
