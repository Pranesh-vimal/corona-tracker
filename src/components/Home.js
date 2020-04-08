import React, { Component } from "react";
import LastUpdated from "./LastUpdated";
import Total from "./Total";
import State from "./State";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { statewise } = this.props;
    return (
      <div data-aos="fade-up" className="container mx-auto md:px-16 px-4 mt-3">
        <h1 className="md:text-4xl text-center md:text-left">
          India Corona Live Tracker
        </h1>
        <p className="text-base text-green-500 text-center md:text-left">
          Last Updated At :
          {statewise.map((data, i) => {
            if (i === 0) {
              return <LastUpdated key={data.state} data={data} />;
            }
            return "";
          })}
        </p>
        <div className="grid grid-cols-1">
          <div className="mt-2">
            <p className="shadow-md flex text-lg p-2 bg-indigo-600 text-white rounded-md my-3 justify-center">
              India{" "}
            </p>
            {statewise.map((data, i) => {
              if (i === 0) {
                return <Total key={data.state} data={data} />;
              }
              return "";
            })}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {statewise.map((data, i) => {
            if (i !== 0) {
              return <State key={data.state} data={data} />;
            }
            return "";
          })}
        </div>
      </div>
    );
  }
}
