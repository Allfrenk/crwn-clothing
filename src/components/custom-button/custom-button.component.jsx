import React from "react";

import { CustomButtonContainer } from "./custom-button.style";

//

const CustonButton = ({ children, ...props }) => {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
};

export default CustonButton;
