import React, { Component } from "react";
import "./bulma.css";
import classNames from "classnames";
import { Bar } from "react-chartjs-2";
import axios from "axios";

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

    this.state = { dataLoaded: false };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    var notificationLabels = [
      ["Amount of Sleep", "hours"],
      ["Servings of Dairy", "servings"],
      ["Time Working Out", "hours"],
      ["Max Weight Lifted", "pounds"],
      ["Servings of Fruit", "servings"],
      ["Servings of Vegetables", "servings"],
      ["Water Intake", "cups"],
      ["Protein Intake", "grams"]
    ];

    var self = this;

    axios
      .get("https://ml.smarternotharder.tech/get_net_changes")
      .then(function(json) {
        var netChanges = json.data;
        console.log(netChanges);
        var counter = 0;
        var arrayOfNotifications = [];
        for (var key in notificationLabels) {
          var keyWord = netChanges[counter] < 0 ? "decrease" : "increase";
          var change = Math.abs(netChanges[counter]);

          var notificationText = `You need to ${keyWord} ${
            notificationLabels[key][0]
          } by ${Math.round(change * 100) / 100} ${notificationLabels[key][1]}`;

          arrayOfNotifications.push(
            <Notification notificationText={notificationText} key={counter} />
          );

          counter++;
        }

        self.setState({
          dataLoaded: true,
          arrayOfNotifications: arrayOfNotifications
        });
      });
  }

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
                      {this.state.dataLoaded &&
                        this.state.arrayOfNotifications.map(item => item)}
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
        <div className="notification">{this.props.notificationText}</div>
      </div>
    );
  }
}

export default MainPage;
