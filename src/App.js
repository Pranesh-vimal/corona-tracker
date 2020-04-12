import React, { Component } from "react";
import axios from "axios";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import StateData from "./components/StateData";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cases_time_series: [],
      statewise: [],
      tested: [],
      display: false,
    };
  }

  componentDidMount() {
    AOS.init({
      duration: 3000,
    });

    axios
      .get("https://api.covid19india.org/data.json")
      .then(async (res) => {
        this.setState({
          cases_time_series: res.data.cases_time_series,
          statewise: res.data.statewise,
          tested: res.data.tested,
          display: true,
        });
      })
      .catch((err) => {
        if (err) throw err;
      });
  }

  render() {
    const { cases_time_series, statewise, tested, display } = this.state;
    return (
      <div className="select-none h-screen flex flex-col justify-between">
        {display && <Header />}
        {display && (
          <Switch>
            <Route exact path="/">
              <Home
                cases_time_series={cases_time_series}
                statewise={statewise}
                tested={tested}
              />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/:state" component={StateData} statewise={statewise} />
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        )}
        {display && <Footer />}
      </div>
    );
  }
}
