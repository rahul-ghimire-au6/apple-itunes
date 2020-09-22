import React, { Component, Fragment } from "react";
import "antd/dist/antd.css";
import { Input, Select } from "antd";
import { connect } from "react-redux";
import { fetch_artist } from "./redux/actions/action";
import { reselect_artist_data } from "./redux/selector/selector";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import Nav from "./components/Navbar/Nav";
const { Option } = Select;

const Title = styled.h1`
  padding-top: 8em;
`;
const Option159 = styled.div`
  float: right;
  margin-top: 1em;
  margin-right: 1em;
`;

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      language: "en",
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.props.fetch_artist(e.target.value);
  };

  handleOption = (e) => {
    if (e === "italian") {
      this.props.strings.setLanguage("it");
      this.setState({ language: "it" });
    } else if (e === "hindi") {
      this.props.strings.setLanguage("hi");
      this.setState({ language: "hi" });
    } else if (e === "marathi") {
      this.props.strings.setLanguage("mr");
      this.setState({ language: "mr" });
    } else {
      this.props.strings.setLanguage("en");
      this.setState({ language: "en" });
    }
  };

  render() {
    return (
      <Fragment>
        <Nav />
        <center>
          <Option159>
            <h2>Change Language?</h2>
            <Select
              defaultValue="English"
              style={{ width: 120 }}
              onChange={this.handleOption}
            >
              <Option key="1" value="english">
                English
              </Option>
              <Option key="2" value="italian">
                Italian
              </Option>
              <Option key="3" value="hindi">
                Hindi
              </Option>
              <Option key="4" value="marathi">
                Marathi
              </Option>
            </Select>
          </Option159>
          <Title>{this.props.strings.greetings}</Title>
          <br />
          <Input
            placeholder={this.props.strings.enter_artist_name}
            onChange={this.handleChange}
            style={{ width: "15em" }}
          />
        </center>
        {this.props.artist_data.length !== 0 ? (
          <Redirect to="/result" />
        ) : (        
          <Redirect to="/search" />         
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    artist_data: reselect_artist_data(state),
    strings: state.strings,
  };
};

export default connect(mapStateToProps, { fetch_artist })(App);
