import React, { Component } from "react";
import "./bulma.css";
import classNames from "classnames";
import { Bar } from "react-chartjs-2";

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = { currentPage: 1 };

    this.changePage = this.changePage.bind(this);
  }

  changePage(newPage) {
    this.setState({ currentPage: newPage });
  }

  render() {
    switch (this.state.currentPage) {
      case 1:
        return <NotificationsPage switch={this.changePage} />;
      //   case 2:
      //     return <PData switch={this.changePage} />;
      //   add login and sigup pages somewhere
    }
  }
}

class NotificationsPage extends Component {
  constructor(props) {
    super(props);

    this.constructNotification = this.constructNotification.bind(this);
  }

  sampleData = [
    -0.02777777777777768,
    0.5,
    0.16415770609166658,
    -2.194444444444443,
    -1.25,
    0.6111111111111112,
    -1.75,
    -1.0555555555555571
  ];

  constructNotification(netChanges) {
    var counter = 0;
    var arrayOfNotifications = [];
    for (var key in this.notificationLabels) {
      var keyWord = netChanges[counter] < 0 ? "decrease" : "increase";
      var change = Math.abs(netChanges[counter]);

      var notificationText = `You need to ${keyWord} ${
        this.notificationLabels[key][0]
      } by ${Math.round(change * 100) / 100} ${
        this.notificationLabels[key][1]
      }`;

      counter++;
      arrayOfNotifications.push(
        <Notification notificationText={notificationText} />
      );
    }

    return arrayOfNotifications;
  }

  notificationLabels = [
    ["Amount of Sleep", "hours"],
    ["Servings of Dairy", "servings"],
    ["Time Working Out", "hours"],
    ["Max Weight Lifted", "pounds"],
    ["Servings of Fruit", "servings"],
    ["Servings of Vegetables", "servings"],
    ["Water Intake", "cups"],
    ["Protein Intake", "grams"]
  ];

  render() {
    return (
      <div>
        <section className="container">
          <div className="level-item">
            <div className="dual_column">
              <div className="column">
                <div className="column is-narrow">
                  <article className="message">
                    <div className="message-header">
                      <p>Notifications</p>
                      <button className="delete" aria-label="delete" />
                    </div>
                    <div className="message-body">
                      {this.constructNotification(this.sampleData).map(
                        item => item
                      )}
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="columns is-mobile is-centered">
          <div className="column is-half is-narrow" />
        </div>
      </div>
    );
  }
}

class Notification extends Component {
  render() {
    return (
      <div className="board-item">
        <div className="notification">
          {this.props.notificationText}
          <button className="delete" />
        </div>
      </div>
    );
  }
}

export default MainPage;
