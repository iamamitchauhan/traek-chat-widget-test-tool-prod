import React, { Component } from "react";
import PhotoContextProvider from "./context/PhotoContext";
import { HashRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Item from "./components/Item";
import Search from "./components/Search";
import NotFound from "./components/NotFound";
import FeedBack from "./components/Feedback";
import Home from "./components/Home";
import RRWeb from "./components/RRWeb";


class App extends Component {
  // Prevent page reload, clear input, set URL and push history on submit
  handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };

  render() {
    return (
      <PhotoContextProvider>
        <HashRouter basename="/SnapScout">
          <div className="container">
            <Switch>
              <Route
                exact
                path="/"
                render={() => <>
                  <Header
                    handleSubmit={this.handleSubmit}
                  />
                  <Home />
                </>}
              />


              <Route
                path="/mountain"
                render={(props) =>
                  <>
                    <Header
                      handleSubmit={this.handleSubmit}
                      history={props.history}
                    />

                    <Item searchTerm="mountain" /></>
                }
              />
              <Route path="/animal" render={(props) => <>
                <Header
                  handleSubmit={this.handleSubmit}
                  history={props.history}
                />
                <Item searchTerm="animal" />
              </>}
              />
              <Route path="/bird"
                render={(props) => <>
                  <Header
                    handleSubmit={this.handleSubmit}
                    history={props.history}
                  />
                  <Item searchTerm="bird" />
                </>}
              />
              <Route path="/computer"
                render={(props) => <>
                  <Header
                    handleSubmit={this.handleSubmit}
                    history={props.history}
                  />
                  <Item searchTerm="computer" />
                </>}
              />
              <Route
                path="/search/:searchInput"
                render={props => (
                  <Search searchTerm={props.match.params.searchInput} />
                )}
              />
              <Route path="/feedback" render={() => <FeedBack />} />
              <Route path="/rrweb" render={() => <RRWeb />} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </HashRouter>
      </PhotoContextProvider>
    );
  }
}

export default App;
