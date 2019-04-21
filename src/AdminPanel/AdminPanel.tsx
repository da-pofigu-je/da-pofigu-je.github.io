import React, { Component } from "react";
import IngredientList from "./IngredientList";
import IngredientForm from "./IngredientForm";
import Ingredient from "../models/ingredient";

export default class AdminPanel extends Component {
    private list: Ingredient[] = [];

    constructor(props: {}) {
        super(props);
        this.list.push({ name: "Apple", id: 1 });
    }

    public render = () => {
        return (
            <div className="container">
                <IngredientList ingredients={this.list} />
                <IngredientForm ingredient={this.list[0]} />
            </div>
        );
    }
}
