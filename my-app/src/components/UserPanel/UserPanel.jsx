import React from "react";
import { FirstUserPanel } from "./FirstUser";
import { SecondUserPanel } from "./SecondUser";
import "./UserPanel.css";

export class UserPanel extends React.Component {
  render() {
    return (
      <section className="user-panel">
        <FirstUserPanel />
        <SecondUserPanel />
      </section>
    );
  }
}
