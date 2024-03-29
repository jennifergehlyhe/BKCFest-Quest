import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: false,
    };
  }
  isStart = () => {
    this.setState(prevState => {
      return {
        start: !prevState.start,
      };
    });
    window.scroll(0, 0);
  };
  render() {
    return (
      <header className={!this.state.start ? 'header intro' : 'header fade-in'}>
        <div>
          <img
            src="./assets/coffee-cup.svg"
            alt="Logo"
            className={
              !this.state.start ? 'header--logo__large fade-in' : 'header--logo'
            }
          />
          {!this.state.start ? (
            <React.Fragment>
              <h1>The BKCFest QUEST</h1>
              <p>
                The Quest will Test your Knowledge of Comics in Return for a Prize!
              </p>
              <button onClick={this.isStart}>Start</button>
            </React.Fragment>
          ) : (
            ''
          )}
        </div>
      </header>
    );
  }
}

export default Header;
