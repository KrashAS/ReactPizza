import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="1" y="265" rx="10" ry="10" width="280" height="23" />
    <circle cx="140" cy="125" r="125" />
    <rect x="2" y="427" rx="10" ry="10" width="95" height="30" />
    <rect x="126" y="417" rx="20" ry="20" width="150" height="45" />
    <rect x="0" y="310" rx="10" ry="10" width="280" height="88" />
  </ContentLoader>
);

export default Skeleton;
