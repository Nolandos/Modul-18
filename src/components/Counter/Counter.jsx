import React from 'react';

class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {counter: 0};
    }

    /*
    componentWillMount() {
      console.log('To wywoła się przed renderowaniem');
    }

    componentDidMount() {
      console.log('Tu wywoła się akutalizacja początkowego stanu, np z wywołania AJAX');
    }

    componentWillReceiveProps(nextProps) {
      console.log('Tutaj sprawdzamy czy nastąpiło odświeżanie poprzez zmianę this.props');
    }
 
    componentWillUpdate(nextProps, nextState) {
      console.log('To wywoła się przed re-renderowaniem');
    }

    ...

    */

    increment = () => this.setState({counter: this.state.counter+ 1});

    decrement = () => this.setState({counter: this.state.counter- 1});
  
    render() {
      return (
        <div>
          <h1>Licznik: {this.state.counter}</h1>
          <button onClick={this.increment}> + </button>
          <button onClick={this.decrement}> - </button>
        </div>
      );
    }
  }

  export default Counter;