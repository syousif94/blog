import React from "react";
import { graphql } from "gatsby";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

export default ({ data }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      {data.allMdx.nodes.map(({ excerpt, frontmatter }) => (
        <>
          <h1>{frontmatter.title}</h1>
          <p>{frontmatter.date}</p>
          <p>{excerpt}</p>
        </>
      ))}
    </>
  );
};

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "MMMM Do YYYY")
        }
        fields {
          slug
        }
      }
    }
  }
`;
