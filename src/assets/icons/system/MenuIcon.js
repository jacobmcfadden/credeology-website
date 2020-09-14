import * as React from "react";

function MenuIcon(props) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="currentColor"
      display="inline"
      height="2.5em"
      width="2.5em"

      {...props}
    >
      <path d="M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z" />
    </svg>
  );
}

export default MenuIcon;
