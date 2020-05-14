import { Link } from "gatsby";
import React from "react";

export default ({ excerpt, frontmatter, fields }) => {
  return (
    <div className="blog-link">
      <Link to={fields.slug}>
        <h1>{frontmatter.title}</h1>
        <div className="meta">{frontmatter.date}</div>
        <p>{excerpt}</p>
      </Link>
    </div>
  );
};
