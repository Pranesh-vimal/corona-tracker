import React, { Component } from "react";
import Moment from "react-moment";

export default class LastUpdated extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { data } = this.props;
    const date = Date.parse(data.lastupdatedtime);

    return (
      <span className="text-sm px-1">
        <Moment format="MM/DD/YYYY hh:mm a">
          {date}
        </Moment>
      </span>
    );
  }
}
