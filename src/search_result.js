import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { reselect_artist_data } from "./redux/selector/selector";
import "antd/dist/antd.css";
import { Card } from "antd";
import styled from "styled-components";
import { empty_artist_data } from "./redux/actions/action";
import { Redirect } from "react-router-dom";
import Nav from "./components/Navbar/Nav";

let temp = [];
const { Meta } = Card;

const Title = styled.h1`
  margin-top: 2em;
`;

const Link1 = styled.a`
  font-size: 1.2em;
`;

const Container = styled.div`
  margin-top: 1em;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
`;

const GridItem = styled.div`
  margin-top: 1em;
`;

const Detail = styled.div`
  display:flex;
  justify-content:right;
  margin-top:1em;
`;

const Detail159 = styled.div`
  display:flex;
  justify-content:space-between;
`;

class Searchresult extends Component {
  constructor(props) {
    super()
    this.state = {
      a: "",
      searchRegExp: /100x100bb.jpg$/gm,
      replaceWith: "1000x1000bb.jpg",
      // if image is loading slow just decress this pixel, for example(500x500bb.jpg) it will load low quality images
    };
  }

  componentDidMount() {
    if (this.props.artist_data.length === 0) {
      this.props.history.push("/search");
    }
  }

  handlesearch = (e) => {
    e.preventDefault();
    this.props.empty_artist_data();
  };

  millisToMinutesAndSeconds=(millis)=>{
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  timestampToDate=(timestamp)=>{
    let date = new Date(timestamp).getDate()
    let month = new Date(timestamp).getMonth()+1
    let year = new Date(timestamp).getFullYear()
    let releaseDate = `${date}/${month}/${year}`
    return releaseDate
  }

  handleplay = (e) => {
    e.preventDefault();
    let current = e.target;
    temp.push(current);
    for (let i = 0; i < temp.length; i++) {
      if (temp[i] === current) {
        continue;
      } else {
        temp[i].pause();
      }
    }
    temp = temp.filter((element) => element === current);
  };

  render() {
    let data = this.props.artist_data.map((element) => (
      <GridItem key={element.trackId}>
        <Card
          style={{
            width: 300,
            zIndex: "auto",
            boxShadow: "0px 0px 6px 6px rgb(0,0,0,0.1)",
            marginTop: "2em",
          }}
          cover={
            <img
              style={{ height: "20em" }}
              alt={element.collectionCensoredName}
              src={element.artworkUrl100.replace(
                this.state.searchRegExp,
                this.state.replaceWith
              )}
            />
          }
        >
          <Meta
            title={element.artistName}
            description={element.collectionCensoredName}
          />
          <Detail>
            <span><b>Track Name: </b>{element.trackName}</span>
          </Detail>
          <Detail>
            <span>
              <b>Album Price: </b>
              {element.collectionPrice} {element.currency}
            </span>
            </Detail>
            <Detail>
            <span>
              <b>Track Price: </b>
              {element.trackPrice} {element.currency}
            </span>
          </Detail>
          <Detail>
        <span><b>Release Data: </b>{this.timestampToDate(element.releaseDate)}</span>
            </Detail>
           <Detail>
           <span><b>Track Time: </b>{this.millisToMinutesAndSeconds(element.trackTimeMillis)}</span>
             </Detail> 
          <audio
            controls
            onPlay={this.handleplay}
            style={{
              width: "20em",
              marginTop: "1em",
              position: "relative",
              right: "1.1em",
              outline: "none",
            }}
          >  
            <source src={element.previewUrl} type="audio/mp4" />
            Your browser does not support the audio element.
          </audio>
          <Detail159><span><b>Preview</b></span><a href={element.trackViewUrl} target='_blank' rel="noopener noreferrer">Click To Buy...</a></Detail159>
        </Card>
      </GridItem>
    ));

    return (
      <Fragment>
        <Nav />
        {this.props.artist_data.length !== 0 ? (
          <Redirect to="/result" />
        ) : (
          <Redirect to="search" />
        )}
        <center>
          <Title>{this.props.temp}</Title>
          <Link1 onClick={this.handlesearch}>
            {this.props.strings.search_again}
          </Link1>
        </center>
        {/* search result output */}
        <center>
          <Container>
            <GridContainer>{data}</GridContainer>
          </Container>
        </center>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    artist_data: reselect_artist_data(state),
    strings: state.strings,
    temp: state.temp,
  };
};

export default connect(mapStateToProps, { empty_artist_data })(Searchresult);
