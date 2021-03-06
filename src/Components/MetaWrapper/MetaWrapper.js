import React from "react";

import { Helmet } from "react-helmet";

const MetaWrapper = ({ title, description, keyword }) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keyword" content={keyword} />
      </Helmet>
    </div>
  );
};

MetaWrapper.defaultProps = {
  title: "Welcome to ProShop",
  description: "We sell the best products for cheap",
  keyword: "electronics, buy electronics, cheap electronics",
};

export default MetaWrapper;
