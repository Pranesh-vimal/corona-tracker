import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/icon.png";

export default class Header extends Component {
  render() {
    return (
      <div className="flex w-full p-2 text-white font-extrabold headerbg mx-auto md:px-20">
        <NavLink to="/">
          <img className="h-10" src={Logo} alt="Corona Tracker" />
        </NavLink>
        <NavLink to="/">
          <p className="p-2 text-center px-4">Home</p>
        </NavLink>
        <NavLink to="/about">
          <p className="p-2 text-center px-2">About</p>
        </NavLink>
      </div>
    );
  }
}
