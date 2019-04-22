import React, { Component } from "react";
import IngredientList from "./IngredientList";
import IngredientForm from "./IngredientForm";
import Ingredient from "../models/ingredient";

interface IState {
    ingredients: Ingredient[];
}

export default class AdminPanel extends Component<{}, IState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            ingredients: [
                { name: "Яблоко", id: 1 },
                { name: "Апельсин", id: 2 },
                { name: "Чеснок", id: 3 },
                { name: "Молоко", id: 4 }
            ]
        };
    }

    public render = () => {
        return (
            <div className="container">
                <IngredientForm ingredient={this.state.ingredients[0]} />
                <IngredientList ingredients={this.state.ingredients} onDelete={this.handleDelete} onEdit={() => {}} />
            </div>
        );
    }

    private handleDelete = (ingredient: Ingredient) => {
        this.setState({
            ingredients: [...this.state.ingredients].filter(x => x !== ingredient)
        });
    }
}
