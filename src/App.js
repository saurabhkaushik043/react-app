import React, { Component } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

class App extends Component {
    constructor(props){
        super(props);
    }

    render() {
      return (
          <>
          <Header />
            {this.props.children}
          <Footer />
          </>
      );
    }
  }
  export default App;

