import React from "react";
import { Helmet } from "react-helmet";

const PageName = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default PageName;
