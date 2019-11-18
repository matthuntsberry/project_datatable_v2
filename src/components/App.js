import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { Content } from "carbon-components-react/lib/components/UIShell";
import Loadable from "react-loadable";
import StateContextProvider from "../context/SideFilterContext";
import GlobalHeader from "./GlobalHeader";
import Sidebar from "./Sidebar";
import "../scss/main.scss";

function loading() {
  return <h3>Loading....</h3>;
}

const DetailsPageComponent = Loadable({
  loader: () => import("../content/DetailsPage"),
  loading
});

const App = () => {
  return (
    <div className="component__container--app">
      <GlobalHeader />
      <Sidebar />
      <StateContextProvider>
        <Content className="content">
          <Switch>
            <Route exact path="/" component={DetailsPageComponent} />
          </Switch>
        </Content>
      </StateContextProvider>
    </div>
  );
};

export default App;
