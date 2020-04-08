import React, { Component } from "react";
import axios from "axios";
import Faq from "./Faq";

export default class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      faq: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://api.covid19india.org/website_data.json")
      .then(async (res) => {
        this.setState({
          faq: res.data.faq,
        });
      })
      .catch((err) => {
        if (err) throw err;
      });
  }
  render() {
    const { faq } = this.state;
    return (
      <div className="container mx-auto md:px-16 px-4 mt-3">
        <p className="p-2 text-4xl">Faq :</p>
        {faq.map((data, i) => {
          return <Faq faq={data} key={i} />;
        })}
        <div className="my-3 p-2 rounded-md bg-red-300 text-center">
          All The Above Data Are Retrived From{" "}
          <a
            className="text-sm"
            href="https://www.covid19india.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            "https://www.covid19india.org/"
          </a>
        </div>
      </div>
    );
  }
}
