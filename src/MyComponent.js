import React from "react";

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSupply: 0
    };
  }

  async componentDidMount() {
    const totalSupply = await this.props.drizzle.contracts.JojoToken.methods
      .totalSupply()
      .call();

    this.setState({
      totalSupply: totalSupply
    });
  }

  render() {
    return (
      <div>
        {"Total supply "}
        {this.state.totalSupply}
      </div>
    );
  }
}
