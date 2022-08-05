import React from "react";

export class SecondUserPanel extends React.Component {
  render() {
    return (
      <section className="second-user-panel">
        <p
          className={`second-user-name ${
            this.props.activeUser === "o" ? "" : "inactive"
          }`}
        >
          O
        </p>
        <div className="score-wrapper">
          <p>Score:</p>
          <p className="second-user-score">{this.props.score}</p>
        </div>
      </section>
    );
  }
}
