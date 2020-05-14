import React from "react";
import { graphql } from "gatsby";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import BlogLink from "../components/BlogLink";

export default ({ data }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div className="main">
      <h1>{title}</h1>
      <div className="meta">{description}</div>
      {data.allMdx.nodes.map(props => (
        <BlogLink {...props} key={props.id} />
      ))}
    </div>
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
