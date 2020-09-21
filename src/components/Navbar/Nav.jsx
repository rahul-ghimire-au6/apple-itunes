import React, { Fragment } from "react";
import "antd/dist/antd.css";
import styled from "styled-components";
import "./Nav.css";



const Container159 = styled.div`
  margin-left: 2em;
  margin-right: 6em;
`;

const Nav1 = styled.div`
  background-color: black;
  border: 1px black solid;
  height: 3em;
  position:sticky;
  top: 0;
  z-index:1;
`;

export default function Nav() {
  return (
    <Fragment>
      <Nav1 data-testid='nav'>
        <Container159>
          <nav>
            <div><i id="logo" className="fa fa-apple" aria-hidden="true"></i></div>
            <div>Mac</div>
            <div>iPad</div>
            <div>iPhone</div>
            <div>Watch</div>
            <div>TV</div>
            <div>Music</div>
            <div>Support</div>
            <div>Where to Buy</div>
            <div><i className="fa fa-search" aria-hidden="true"></i></div>
          </nav>
        </Container159>
      </Nav1>
    </Fragment>
  );
}
