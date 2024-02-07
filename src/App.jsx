import React from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyle";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  /* background-color: orangered; */
  padding: 20px;
`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">The Wild Oasis</Heading>
            <div>
              <Heading as="h2">Check in an out</Heading>
              <Button>Check in</Button>
              <Button variation="secondary" size="small">Check out</Button>
            </div>
          </Row>
          <Row>
            <form>
              <Heading as="h3">Form</Heading>
              <Input type="number" placeholder="Number of guests"></Input>
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}
