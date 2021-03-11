import React, { Component } from "react";

export default class ItemDetail extends Component {
  constructor() {
    super();
    this.state = {
      item: {},
    };
  }
  componentDidMount = () => {
    fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${this.props.match.params.id}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ item: data.data.item });
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };
  render() {
    return (
      <div>
        {!Object.keys(this.state.item).length ? (
          <p>Loading</p>
        ) : (
          <div>
            <h1>item detail</h1>
            <p>Item Name: {this.state.item.name}</p>
            <p>Description: {this.state.item.description}</p>
            {/* <p>imag: {this.state.item.images}</p> */}
          </div>
        )}
      </div>
    );
  }
}
