import React, { Component } from "react";
import "./App.css";

import { DrizzleContext } from "@drizzle/react-plugin";

class App extends Component {
  render() {
    return (
      <DrizzleContext.Consumer>
        {drizzleContext => {
          const { drizzle, drizzleState, initialized } = drizzleContext;
          if (!initialized) {
            return "Loading...";
          }

          return "Oh Hai";
        }}
      </DrizzleContext.Consumer>
    );
  }
}

export default App;
