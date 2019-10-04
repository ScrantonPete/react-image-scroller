import React, { Component } from "react";
import "./App.css";
import Card from "./Card";
import data from "./data/data";
import logo from "./assets/logo.svg";

// class component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ads: data.ads,
      ad: data.ads[0]
    };
  }

  nextad = () => {
    const newIndex = this.state.ad.index + 1;
    this.setState({
      ad: data.ads[newIndex]
    });
  };

  prevad = () => {
    const newIndex = this.state.ad.index - 1;
    this.setState({
      ad: data.ads[newIndex]
    });
  };

  render() {
    const { ads, ad } = this.state;
    return (
      <div className="App">
        <button
          onClick={() => this.nextad()}
          disabled={ad.index === data.ads.length - 1}
        >
          Next
        </button>
        <button onClick={() => this.prevad()} disabled={ad.index === 0}>
          Prev
        </button>

        <div className="page">
          <p></p>{" "}
          <div className="col">
            <div className={`cards-slider active-slide-${ad.index}`}>
              <div
                className="cards-slider-wrapper"
                style={{
                  transform: `translateX(-${ad.index * (100 / ads.length)}%)`
                }}
              >
                {ads.map(ad => (
                  <Card key={ad._id} ad={ad} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
