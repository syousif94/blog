import { MDXProvider } from "@mdx-js/react";
import React from "react";
import CodeBlock from "./CodeBlock";

const components = {
  pre: props => {
    const className = props.children.props.className || "";
    const matches = className.match(/language-(?<lang>.*)/);
    const code = props.children.props.children.trim();
    const language =
      matches && matches.groups && matches.groups.lang
        ? matches.groups.lang
        : "";
    return <CodeBlock code={code} language={language} />;
  }
};

export default ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);
