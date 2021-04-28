import React from "react";
import { withRouter } from "react-router-dom";

import {
  BackgroundImageContainer,
  ContentContainer,
  MenuItemContainer,
  SubtitleContainer,
  TitleContainer,
} from "./menu-item.style";

///////////////////////////////////////////////////////////////////

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <MenuItemContainer
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImageContainer
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <ContentContainer>
        <TitleContainer>{title.toUpperCase()}</TitleContainer>
        <SubtitleContainer className="subtitle">SHOP NOW</SubtitleContainer>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
