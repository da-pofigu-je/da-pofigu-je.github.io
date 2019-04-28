import React, { Component } from "react";
import "./App.css";
import Ingredients from "./AdminPanel/Ingredients";
import Recipes from "./AdminPanel/Recipes";
import { BrowserRouter as Router, NavLink, Route, Switch, Redirect } from "react-router-dom";

export default class App extends Component {
    render = () => {
        return (
            <Router>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-2">
                            <NavLink
                                className="m-2 btn btn-block btn-primary"
                                activeClassName="active"
                                to="/ingredients"
                            >
                                Ингредиенты
                            </NavLink>
                            <NavLink className="m-2 btn btn-block btn-primary" activeClassName="active" to="/recipes">
                                Рецепты
                            </NavLink>
                        </div>
                        <div className="col-10">
                            <Switch>
                                <Route path="/ingredients" component={Ingredients} />
                                <Route path="/recipes" component={Recipes} />
                                <Redirect to="/ingredients" />
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}
