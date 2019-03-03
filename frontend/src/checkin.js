import React, { Component } from "react";
import "./bulma.css";
import classNames from "classnames";
import "./App.css";
import $ from "jquery";
import "fullcalendar";
import "./fullcalendar.css";
import Form from "./form.js";
import axios from "axios";

class CheckIn extends Component {
  constructor(props) {
    super(props);

    this.state = { isActive: false, isHidden: true, formData: {} };

    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
    axios
      .post(
        "https://ml.smarternotharder.tech/predict_net_changes",
        this.state.formData
      )
      .then(res => {
        console.log(res.data);
      });
    this.setState({ isHidden: !this.state.isHidden });
    this.handleClose();
  }

  handleChange(event) {
    var target = event.target;
    var update = {
      [target.name]: target.value
    };

    var formData = Object.assign(this.state.formData, update);

    this.setState(Object.assign(this.state, formData));
    console.log(this.state);
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
          changeFunction={this.handleChange}
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
    ["Lean Body Mass Ratio (NonFat Mass / Total Mass)", "target_lbm"]
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
                handleChange={this.props.changeFunction}
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
