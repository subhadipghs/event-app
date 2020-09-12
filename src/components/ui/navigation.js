/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

const Navigation = (props) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-weight: bold;
        font-size: 2rem;
        height: 3rem;
        width: 100%;
        padding-top: 0.5rem;
      `}
    >
      &lt;&gt; Event
    </div>
  );
};

export { Navigation };
