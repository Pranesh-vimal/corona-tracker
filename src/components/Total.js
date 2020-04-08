import React, { Component } from "react";

export default class Total extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { data } = this.props;
    return (
      <div className="grid grid-cols-2 gap-2 md:flex">
        <div className="mx-1 p-2 shadow-md rounded-md text-center text-base md:flex-1">
          <span className="text-white rounded-md text-2xl flex bg-red-600 justify-center p-1 my-4 w-full">
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
          <span className="text-white rounded-md text-2xl flex bg-green-400 justify-center p-1 my-4 w-full">
            Active
          </span>
          <br className="block md:hidden" />
          <span className="text-gray-600">{data.active}</span>
        </div>
        <div className="mx-1 p-2 shadow-md rounded-md text-center text-base md:flex-1">
          <span className="text-white rounded-md text-2xl flex bg-purple-400 justify-center p-1 my-4 w-full">
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
          <span className="text-white rounded-md text-2xl flex bg-gray-500 justify-center p-1 my-4 w-full">
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
    );
  }
}
