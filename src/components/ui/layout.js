import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";
import React from "react";
import PropTypes from "prop-types";
import { theme } from "../../styles/theme";

const ChildrenWrapper = styled.div`
  background-color: ${(props) => props.theme.colors?.gray || "black"};
  color: ${(props) => (props.themed ? props.textColor : "black")};
`;

function Layout(props) {
  return (
    <ThemeProvider theme={theme}>
      <ChildrenWrapper>{props.children}</ChildrenWrapper>
    </ThemeProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export { Layout };
