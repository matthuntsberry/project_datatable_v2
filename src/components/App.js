import React from "react";
import { Route, Switch } from "react-router-dom";
import { Content } from "carbon-components-react/lib/components/UIShell";
import Loadable from "react-loadable";
import GlobalHeader from "./GlobalHeader";
import Sidebar from "./Sidebar";
import "../scss/main.scss";

function loading() {
  return <h3>Loading....</h3>;
}

const LandingPageComponent = Loadable({
  loader: () => import("../content/LandingPage"),
  loading
});

const ScrollPageComponent = Loadable({
  loader: () => import("../content/ScrollPage"),
  loading
});

const StickyPageComponent = Loadable({
  loader: () => import("../content/StickyPage"),
  loading
});

const ActionPageComponent = Loadable({
  loader: () => import("../content/ActionPage"),
  loading
});

function App() {
  return (
    <div className="app__container">
      <GlobalHeader />
      <Sidebar />
      <Content className="content">
        <Switch>
          <Route exact path="/" component={LandingPageComponent} />
          <Route path="/scroll" component={ScrollPageComponent} />
          <Route path="/sticky" component={StickyPageComponent} />
          <Route path="/action" component={ActionPageComponent} />
        </Switch>
      </Content>
    </div>
  );
}

export default App;
