import React from "react";

export class SecondUserPanel extends React.Component {
  render() {
    return (
      <section className="second-user-panel">
        <p className="second-user-name">User 2</p>
        <div className="score-wrapper">
          <p>Score: </p>
          <p className="second-user-score">0</p>
        </div>
      </section>
    );
  }
}
