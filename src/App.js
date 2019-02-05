import React, { Component } from 'react';

import './App.scss';
import {Header} from "./Header";
import {FormPage} from "./FormPage";


class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <FormPage/>
        </main>
      </>
    );
  }
}

export default App;
