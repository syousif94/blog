import { Link } from "gatsby";
import React from "react";

export default ({ excerpt, frontmatter, fields }) => {
  return (
    <div className="blog-link">
      <Link to={fields.slug}>
        <h3>{frontmatter.title}</h3>
        <div className="meta">{frontmatter.date}</div>
        <ThumbnailImg thumbnail={frontmatter.thumbnail} />
        <p>{excerpt}</p>
      </Link>
    </div>
  );
};

const ThumbnailImg = ({ thumbnail }) => {
  if (!thumbnail) {
    return null;
  }

  const data = thumbnail.childImageSharp.fixed;

  const ratio = `${(data.height / data.width) * 100}%`;

  return (
    <div
      style={{
        position: "relative",
        borderRadius: 3,
        margin: "1.2rem 0 0",
        overflow: "hidden"
      }}
    >
      <div style={{ width: "100%", paddingBottom: ratio }} />
      <img
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%"
        }}
        srcSet={data.srcSet}
        src={data.src}
      />
    </div>
  );
};
