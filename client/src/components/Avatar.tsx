import React, { useState } from "react";

import { styles } from "./styles";

import SupportWindow from "./SupportWindow";

const Avatar = (props: any) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50" style={props.style}>
      {hovered && <SupportWindow />}
      <div
        //onMouseEnter={() => setHovered(true)}
        //onMouseLeave={() => setHovered(false)}
        onClick={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        style={{
          ...styles.chatWithMeButton,
          ...{ border: hovered ? "1px solid #666666" : "4px solid #BB0000" },
        }}
      />
    </div>
  );
};
export default Avatar;
