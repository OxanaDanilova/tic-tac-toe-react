import React from "react";

export class FirstUserPanel extends React.Component {
  render() {
    return (
      <section className="first-user-panel">
        <p
          className={`first-user-name ${
            this.props.activeUser === "x" ? "" : "inactive"
          }`}
        >
          X
        </p>
        <div className="score-wrapper">
          <p>Score: </p>
          <p className="first-user-score">{this.props.score}</p>
        </div>
      </section>
    );
  }
}
