import React, { Component } from "react";
import { Route } from "react-router-dom";

import { Users } from "./containers/Users";
import { asyncComponent } from "./hoc/asyncComponent";
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { LinkButton } from './components/LinkButton/LinkButton';
import { Users } from './containers/Users';
import { asyncComponent } from './hoc/asyncComponent';

const AsyncPizza = asyncComponent(() => {
  return import("./containers/Pizza.js");
});

export class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <LinkButton to="/" title="Users" />
                    <LinkButton to="/pizza" title="Pizza" />
                </div>
                <div>
                    <Route path="/" exact component={Users} />
                    <Route path="/pizza" component={AsyncPizza} />
                </div>
            </div>
        )
    }
}
