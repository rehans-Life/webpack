import React from "react";
import "./Typography.scss";

const Typography = ({ type, text }) => {
  const RenderTypography = () => {
    switch (type) {
      case "title":
        return <span className="title">{text}</span>;
      case "paragraph":
        return <span className="paragraph">{text}</span>;
      default:
        return <span>{text}</span>;
    }
  };

  return <RenderTypography />;
};

export default Typography;
