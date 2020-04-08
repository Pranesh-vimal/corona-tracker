import React, { Component } from "react";

export default class extends Component {
  render() {
    const { faq } = this.props;
    return (
      <div className="mt-2 p-2">
        <p className="bg-gray-300 p-2 rounded-md">{faq.question}</p>
        <p className="bg-green-300 p-2 mt-1 rounded-md">{faq.answer}</p>
      </div>
    );
  }
}
