import React, { Component } from "react";

export default class LastUpdated extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { data } = this.props;
    return <span className="text-sm px-1">{data.lastupdatedtime}</span>;
  }
}
