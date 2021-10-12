
import React from "react";
import "./App.css";
import ReactDOM from "react-dom";


const quotes = [
  {
    quote: "Your attitude determines your direction.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "Do what you have to do until you can do what you want to do.",
    author: "Oprah Winfrey"
  },
  {
    quote: "Being alone has a power that very few people can handle.",
    author: "Steven Aitchison"
  },
  {
    quote: "My goal is to build a life I don't need a vacation from.",
    author: "Rob Hill Sr"
  },
  { quote: "Always do what you are afraid to do.", author: "Unknown" },
  {
    quote: "Be somebody who makes everybody feel like a somebody.",
    author: "Unknown"
  },
  {
    quote: "Make it happen. Shock everyone.",
    author: "Unknown"
  },
  {
    quote: "Three months from now, you'll thank yourself.",
    author: "Unknown"
  },
  {
    quote: "Travel far enough to meet yourself.",
    author: "Unknown"
  },
  {
    quote: "Progress, not perfection.",
    author: "Unknown"
  },
  {
    quote: "Just keep swimming .",
    author: "Dory, Find Nemo"
  },
  {
    quote: "Remember why you started.",
    author: "Unknown"
  }
];

const colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

class MyReactElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "Your attitude determines your direction.",
      author: "Ralph Waldo Emerson",
      color: "#0889A6"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const randomNumber = Math.floor(Math.random() * 11) + 1;
    this.setState({
      quote: quotes[randomNumber].quote,
      author: quotes[randomNumber].author,
      color: colors[randomNumber]
    });
  }

  render() {
    return (
      <div
        id="main"
        style={{
          backgroundColor: this.state.color,
          transition: "background-color 1s"
        }}
      >
        <div id="quote-box">
          <div id="text-box">
            <i
              className="fa fa-quote-left"
              id="quote-left"
              style={{
                color: this.state.color,
                transition: "background-color 1s"
              }}
            >
              {" "}
            </i>
            <p
              id="text"
              style={{
                color: this.state.color,
                transition: "background-color 1s"
              }}
            >
              {this.state.quote}
            </p>
          </div>
          <p
            id="author"
            style={{
              color: this.state.color,
              transition: "background-color 1s"
            }}
          >
            -{this.state.author}
          </p>
          <div id="buttons">
            <div>
              <button
                id="button"
                onClick={this.handleClick}
                style={{
                  backgroundColor: this.state.color,
                  transition: "background-color 1s",
                  color: "white"
                }}
              >
                Next quote
              </button>
            </div>
            <div>
              <a
                id="tweet-quote"
                target="_blank"
                rel="noopener noreferrer"
                href={`https://twitter.com/intent/tweet/?text=${
                  this.state.quote
                } - ${this.state.author}`}
              >
                <button
                 

                  id="button"
                  style={{
                    backgroundColor: this.state.color,
                    transition: "background-color 1s"
                  }}
                >Twitter
                  <i
                    className="fab fa-twitter"
                    style={{
                      color: "#ffffff"
                    }}
                  />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<MyReactElement />, document.getElementById("root"));

  

export default MyReactElement;
