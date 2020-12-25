import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Shop extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
  }

  componentDidMount = () => {
    fetch("https://fortnite-api.theapinetwork.com/store/get")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const items = data.data.slice(0, 10);
        this.setState({ items: items });
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };
  render() {
    return (
      <div>
        <h1>Shopping Page</h1>
        {this.state.items.map((item) => {
          return (
            <p key={item.itemId}>
              <Link to={`/shop/${item.itemId}`}>{item.item.name} </Link>
            </p>
          );
        })}
      </div>
    );
  }
}
