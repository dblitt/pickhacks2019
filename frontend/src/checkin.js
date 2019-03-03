import React, { Component } from "react";
import "./bulma.css";
import classNames from "classnames";
import "./App.css";
import $ from "jquery";
import "fullcalendar";
import "./fullcalendar.css";
import Form from "./form.js";

class CheckIn extends Component {
  constructor(props) {
    super(props);

    this.state = { isActive: false, isHidden: true };

    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDayClick(date, event, view) {
    console.log(this);
    this.setState({ isActive: !this.state.isActive });
    $(event.target).append(
      "<span class='tag is-info'>Check-In Recorded</span>"
    );
    //make tag more detailed
  }

  handleClose() {
    this.setState({ isActive: !this.state.isActive });
  }

  handleSubmit() {
    this.setState({ isHidden: !this.state.isHidden });
    this.handleClose();
  }

  render() {
    return (
      <div>
        <div className="hero is-light">
          <div className="hero-body">
            <div className="container">
              {!this.state.isHidden && <Notification />}
              <div className="box">
                <div id="calendar" />
              </div>
            </div>
          </div>
        </div>
        <DayClickModal
          isActive={this.state.isActive}
          closeFunction={this.handleClose}
          submitFunction={this.handleSubmit}
        />
      </div>
    );
  }

  componentDidMount() {
    $("#calendar").fullCalendar({
      dayClick: this.handleDayClick
    });
  }
}

class DayClickModal extends Component {
  constructor(props) {
    super(props);

    this.state = { modalTitle: "Daily Check-In" };

    this.changeToMonthly = this.changeToMonthly.bind(this);
  }

  formElements = [
    ["Amount of Sleep (hours)", "sleepHours"],
    ["Servings of Dairy", "dairyServing"],
    ["Time Working Out (hours)", "workoutHour"],
    ["Max Weight Lifted (pounds)", "weightliftPound"],
    ["Servings of Fruit", "fruitServing"],
    ["Servings of Vegetable", "veggieServing"],
    ["Water Intake (cups)", "waterCup"],
    ["Protein Intake (grams)", "proteinGram"],
    ["Lean Body Mass Ratio (NonFat Mass / Total Mass)", "lbm"]
  ];

  changeToMonthly() {
    this.setState({ modalTitle: "Monthly Check-In" });
  }

  render() {
    return (
      <div>
        <div
          className={classNames(
            "modal",
            this.props.isActive ? "is-active" : ""
          )}
        >
          <div className="modal-background" />
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">{this.state.modalTitle}</p>
              <button
                className="delete"
                aria-label="close"
                onClick={this.props.closeFunction}
              />
            </header>
            <section className="modal-card-body">
              <Form
                handleSubmit={this.props.submitFunction}
                formElements={this.formElements}
              />
            </section>
            <footer className="modal-card-foot">
              <button className="button" onClick={this.changeToMonthly}>
                Switch to Monthly
              </button>
              <button className="button" onClick={this.props.closeFunction}>
                Cancel
              </button>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

function Notification() {
  return (
    <div
      className="notification is-success"
      onClick={() => window.location.assign("/notifications")}
    >
      A health suggestions report will soon be available for you. Check the
      notifications page.
    </div>
  );
}

export default CheckIn;
