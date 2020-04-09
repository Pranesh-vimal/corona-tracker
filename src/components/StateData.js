import React, { Component } from "react";
import axios from "axios";
import Total from "./Total";
import LastUpdated from "./LastUpdated";
import District from "./District";

export default class StateData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      total: [],
    };
  }

  componentDidMount() {
    const { state } = this.props.match.params;
    axios
      .get("https://api.covid19india.org/v2/state_district_wise.json")
      .then((res) => {
        res.data.map((data) => {
          if (data.state === state) {
            this.setState({
              data: data.districtData,
            });
          }
          return "";
        });
      })
      .catch((err) => {
        if (err) throw err;
      });

    axios
      .get("https://api.covid19india.org/data.json")
      .then((res) => {
        res.data.statewise.map((data) => {
          if (data.state === state) {
            this.setState({
              total: data,
            });
          }
          return "";
        });
      })
      .catch((err) => {
        if (err) throw err;
      });
  }
  render() {
    const { state } = this.props.match.params;
    const { data, total } = this.state;
    return (
      <div data-aos="fade-up" className="container mx-auto md:px-16 px-4 mt-1">
        <div className="grid grid-cols-1">
          <div className="mt-1 ">
            <p className="shadow-md flex text-lg p-2 bg-indigo-600 text-white rounded-md my-3 justify-center">
              {state}
            </p>
            <p className="text-base text-green-500 text-center">
              Last Updated At : <LastUpdated data={total} />
            </p>
            <Total className="my-2" data={total} />
          </div>
        </div>
        <p className="shadow-md flex text-lg p-2 bg-yellow-600 text-white rounded-md my-3 justify-center">
          District Wise
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {data.map((data) => {
            return <District data={data} />;
          })}
        </div>
      </div>
    );
  }
}
