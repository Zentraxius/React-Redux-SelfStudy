import React, { Component } from "react";
import logo from "./logo.svg";
import Posts from "./components/Posts";
import PostForm from "./components/Postform";
import "./App.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import store from './components/store';
// npm install redux react-redux redux-thunk

// const store = createStore(() => [], {}, applyMiddleware());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <PostForm />
            <hr />
            <Posts />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
