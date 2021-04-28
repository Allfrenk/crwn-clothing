import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selector";

import MenuItem from "../menu-item/menu-item.component.jsx";
import { DirectoryMenu } from "./directory.style";

///////////////////////////////////////////////////////////////////////

const Directory = ({ sections }) => {
  return (
    <DirectoryMenu>
      {sections.map(({ title, imageUrl, id, size, linkUrl }) => (
        // {id, ...otherSectionProps} spread operator
        // <MenuItem key={id} {...otherSectionProps} />
        <MenuItem
          key={id}
          title={title}
          imageUrl={imageUrl}
          size={size}
          linkUrl={linkUrl}
        />
      ))}
    </DirectoryMenu>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
