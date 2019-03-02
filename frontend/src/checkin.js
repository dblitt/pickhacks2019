import React, { Component } from "react";
import "./bulma.css";
import classNames from "classnames";
import EventCalendar from "react-event-calendar";

class CheckIn extends Component {
  handleDayClick(target, day) {
    console.log(day);
  }

  render() {
    return (
      <div className="section">
        <div className="container">
          <EventCalendar
            month={3}
            year={2019}
            onDayClick={this.handleDayClick}
          />
        </div>
      </div>
    );
  }
}

export default CheckIn;
