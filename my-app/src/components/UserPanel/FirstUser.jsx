import React from "react";

export class FirstUserPanel extends React.Component {
  render() {
    return (
      <section className="first-user-panel">
        <p className="first-user-name">User 1</p>
        <div className="score-wrapper">
          <p>Score: </p>
          <p className="first-user-score">0</p>
        </div>
      </section>
    );
  }
}
