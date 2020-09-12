import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Layout } from "../components/ui/layout";
import { Button } from "../components/lib/button";
import { theme } from "../styles/theme";
import bgImage from "../assets/images/event.svg";

const Container = styled.div`
  display: grid;
  width: 100vw;
  place-items: center;
  height: ${(props) => props.height || "100vh"};
  padding: 10rem 7rem 10rem;
  background: ${(props) => `url(${props.bgImage}) center no-repeat`};
  background-size: 30rem;
  background-position: 85% 40%;
`;

const Text = styled.p`
  text-align: left;
  width: ${(props) => (props.full ? "100%" : "30%")};
  height: ${(props) => (props.full ? "100%" : "40%")};
  color: ${(props) => (props.color ? props.color : "black")};
`;

const Small = styled.small`
  font-size: 1rem;
`;

const Bold = styled.div`
  font-weight: bolder;
  font-size: 4rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  justify-content: flex-start;
`;

function LandingPage(props) {
  return (
    <Layout>
      <Container bgImage={bgImage}>
        <Text full>
          <Small>World's best event management app</Small>
          <Bold>
            Create
            <br /> Organize your events!
            <br /> In an efficient way 🌲
          </Bold>
          <ButtonWrapper padding="2rem 0">
            <Button
              text="Register ->"
              background={theme?.colors?.secondary}
              color="white"
              href="/register"
              borderRadius="0.4rem"
            />
            <Button
              borderRadius="0.4rem"
              background={theme?.colors?.primary}
              color="white"
              href="/login"
              text="Login"
            />
          </ButtonWrapper>
        </Text>
      </Container>
    </Layout>
  );
}

export { LandingPage };
