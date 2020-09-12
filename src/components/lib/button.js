import React from "react";
import styled from "@emotion/styled";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const Sbutton = styled.button`
  color: ${(props) => props.color || "white"};
  background-color: ${(props) => props.bg || "black"};
  width: ${(props) => (props.contain ? "100%" : "10rem")};
  padding: ${(props) => props.padding || "1rem"};
  margin: ${(props) => props.margin || "0.5rem"};
  border: none;
  border-radius: ${(props) => (props.pill ? "4rem" : props.br || "0")};
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  box-shadow: ${(props) =>
    props.raised ? "0 1px 2px rgba(0, 0, 0, 0.5)" : "0"};
  font-size: 1.05rem;
  &:hover {
    opacity: 0.9;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.4);
  }
`;

const Button = React.memo(
  ({
    contain,
    color,
    background,
    text,
    pill,
    bold,
    borderRadius,
    raised,
    clicked,
    href,
    ...rest
  }) => {
    const btn = href ? <Link to={href}>{text}</Link> : text;

    return (
      <Sbutton
        contain={contain}
        color={color}
        bg={background}
        onClick={clicked}
        pill={pill}
        raised={raised}
        bold={bold}
        br={borderRadius}
        {...rest}
      >
        {btn}
      </Sbutton>
    );
  }
);

Button.propTypes = {
  contain: PropTypes.bool,
  color: PropTypes.string,
  background: PropTypes.string,
  pill: PropTypes.bool,
  borderRadius: PropTypes.string,
  raised: PropTypes.string,
  bold: PropTypes.bool,
  clicked: PropTypes.func,
  text: PropTypes.string.isRequired,
  href: PropTypes.string
};

export { Button };
