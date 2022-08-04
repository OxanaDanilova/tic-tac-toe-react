import React from "react";
import { FirstUserPanel } from "./FirstUser";
import { SecondUserPanel } from "./SecondUser";
import "./UserPanel.css";

export class UserPanel extends React.Component {
  render() {
    return (
      <section className="user-panel">
        <FirstUserPanel
          score={this.props.userFirstScore}
          activeUser={this.props.activeUser}
        />
        <SecondUserPanel
          score={this.props.userSecondScore}
          activeUser={this.props.activeUser}
        />
      </section>
    );
  }
}
