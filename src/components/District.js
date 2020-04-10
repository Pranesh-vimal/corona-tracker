import React, { Component } from "react";

export default class District extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { data } = this.props;
    return (
      <div className="flex my-2 shadow-lg p-2 rounded-md">
        <p className="flex-1 mx-1 p-2 rounded-md border-orange-400 border  text-center">
          {data.district}
        </p>
        <p className="flex-1 mx-1 p-2 rounded-md border-orange-400 border text-red-500 text-center">
          {data.delta.confirmed > 0 ? (
            <span className="text-red-500 mx-1">
              [ <i className="fas fa-arrow-up"></i> {data.delta.confirmed} ]
            </span>
          ) : (
            <span className="text-red-500 mx-1">
              [ <i className="fas fa-arrows-alt-v"></i> 0 ]
            </span>
          )}
          <span className="text-gray-600">{data.confirmed}</span>
        </p>
      </div>
    );
  }
}
