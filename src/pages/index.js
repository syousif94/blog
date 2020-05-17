import React from "react";
import { graphql } from "gatsby";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import BlogLink from "../components/BlogLink";
import { Helmet } from "react-helmet";

export default ({ data }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div className="main">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <header>
        <h2>{title}</h2>
        <div className="meta">{description}</div>
      </header>

      <div className="posts">
        {data.allMdx.nodes.map(props => (
          <BlogLink {...props} key={props.id} />
        ))}
      </div>
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
        excerpt(pruneLength: 130)
        frontmatter {
          title
          date(formatString: "MMMM Do YYYY")
          tags
          thumbnail {
            childImageSharp {
              fixed(width: 800, height: 520) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
`;
