import React from "react";

import Directory from "../../components/directory/directory.component.jsx";

import "./homepage.styles.scss";
import { HomepageContainer } from "./homepage.style";

const HomePage = () => {
  return (
    <HomepageContainer>
      <Directory />
    </HomepageContainer>
  );
};

export default HomePage;
