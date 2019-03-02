import React, { Component } from "react";
import "./bulma.css";
import classNames from "classnames";
import { Route, Link } from "react-router-dom";

function SetupProcess({ match }) {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="box">
            <h1 className="subtitle">Setup Your Profile</h1>
          </div>
          <div className="box">
            <SetupPage />
          </div>
        </div>
      </section>
    </div>
  );
}

class SetupPage extends Component {
  constructor(props) {
    super(props);

    this.state = { currentPage: 1 };

    this.switchPage = this.switchPage.bind(this);
  }

  switchPage(pageNumber) {
    this.setState({ currentPage: pageNumber });
  }

  render() {
    switch (this.state.currentPage) {
      case 1:
        return <BeginPage switch={this.switchPage} />;
      case 2:
        return <BodyInfoPage switch={this.switchPage} />;
      case 3:
        return <DemographicsPage switch={this.switchPage} />;
    }
  }
}

class BeginPage extends Component {
  render() {
    return (
      <div className={classNames("section", "has-text-centered")}>
        <button
          className={classNames("button", "is-primary")}
          onClick={() => this.props.switch(2)}
        >
          Begin
        </button>
      </div>
    );
  }
}

class BodyInfoPage extends Component {
  render() {
    return "hello";
  }
}

class DemographicsPage extends Component {}

export default SetupProcess;
