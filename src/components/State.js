import React, { Component } from "react";
import LastUpdated from "./LastUpdated";
import { NavLink } from "react-router-dom";

export default class State extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { data } = this.props;

    return (
      <NavLink to={`${data.state}`}>
        <div className="my-2">
          <p className="shadow-md flex text-lg p-2 bg-orange-500 text-white rounded-md my-3 justify-center">
            {data.state} :{" "}
          </p>
          <p className="my-1 text-green-600 text-center">
            <b>
              Last Updated At : <LastUpdated data={data} />
            </b>
          </p>
          <div className="grid grid-cols-2 gap-2">
            <div className="mx-1 p-2 shadow-md rounded-md text-center text-base md:flex-1">
              <span className="text-red-600 rounded-md flex border-red-600 border justify-center p-1 my-4 w-full">
                Confirmed
              </span>
              {data.deltaconfirmed > 0 ? (
                <span className="text-red-500 mx-1">
                  [ <i className="fas fa-arrow-up"></i> {data.deltaconfirmed} ]
                </span>
              ) : (
                <span className="text-red-500 mx-1">
                  [ <i className="fas fa-arrows-alt-v"></i> 0 ]
                </span>
              )}
              <br className="block md:hidden" />
              <span className="text-gray-600">{data.confirmed}</span>
            </div>
            <div className="mx-1 p-2 shadow-md rounded-md text-center text-base md:flex-1">
              <span className="text-green-600 rounded-md flex border-green-600 border justify-center p-1 my-4 w-full">
                Active
              </span>
              <br className="block md:hidden" />
              <span className="text-gray-600">{data.active}</span>
            </div>
            <div className="mx-1 p-2 shadow-md rounded-md text-center text-base md:flex-1">
              <span className="text-purple-600 rounded-md flex border-purple-600 border justify-center p-1 my-4 w-full">
                Recoverd
              </span>
              {data.deltarecovered > 0 ? (
                <span className="text-green-500 mx-1">
                  [ <i className="fas fa-arrow-up"></i> {data.deltarecovered} ]
                </span>
              ) : (
                <span className="text-green-500 mx-1">
                  [ <i className="fas fa-arrows-alt-v"></i> 0 ]
                </span>
              )}
              <br className="block md:hidden" />
              <span className="text-gray-600">{data.recovered}</span>
            </div>
            <div className="mx-1 p-2 shadow-md rounded-md text-center text-base md:flex-1">
              <span className="text-gray-600 rounded-md flex border-gray-600 border justify-center p-1 my-4 w-full">
                Deaths
              </span>
              {data.deltadeaths > 0 ? (
                <span className="text-gray-500 mx-1">
                  [ <i className="fas fa-arrow-up"></i> {data.deltadeaths} ]
                </span>
              ) : (
                <span className="text-gray-500 mx-1">
                  [ <i className="fas fa-arrows-alt-v"></i> 0 ]
                </span>
              )}
              <br className="block md:hidden" />
              <span className="text-gray-600">{data.deaths}</span>
            </div>
          </div>
        </div>
      </NavLink>
    );
  }
}
