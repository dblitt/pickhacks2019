import React, { Component } from "react";
import "./bulma.css";
import classNames from "classnames";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="section">
        <div className="notification">
          <div className="level">
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Workout Category</p>
                <p className="title">Weight Training</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Goal LBM</p>
                <p className="title">165</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Week</p>
                <p className="title">Week 4</p>
              </div>
            </div>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <ActionPanel
              actionText="Daily Check-In"
              redirectLocation="/checkin"
              color="is-success"
            />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <ActionPanel actionText="Setup" redirectLocation="/setup" />
          </div>
          <div className="column">
            <ActionPanel actionText="Nutrition" redirectLocation="/nutrition" />
          </div>
        </div>
      </div>
    );
  }
}

class ActionPanel extends Component {
  constructor(props) {
    super(props);

    this.redirectOnClick = this.redirectOnClick.bind(this);
  }

  redirectOnClick() {
    window.location.assign(this.props.redirectLocation);
  }

  render() {
    return (
      <div
        className={classNames(
          "notification",
          "has-text-centered",
          this.props.color
        )}
        onClick={this.redirectOnClick}
      >
        <h2 className="subtitle">{this.props.actionText}</h2>
      </div>
    );
  }
}

export default Dashboard;
