import React from "react";
import { FirstUserPanel } from "./firstUser";
import { SecondUserPanel } from "./secondUser";
import "./UserPanel.css";

export class UserPanel extends React.Component {
  render() {
    return (
      <section>
        <FirstUserPanel />
        <SecondUserPanel />
      </section>
    );
  }
}
