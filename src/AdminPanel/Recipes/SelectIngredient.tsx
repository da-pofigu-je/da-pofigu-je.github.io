import React, { Component } from "react";
import IngredientRepository from "../../models/ingredientRepository";
import Ingredient from "../../models/ingredient";

// ingredient[] -> ingredient

export interface IProps {
    onAdd: (ingredient: Ingredient | null) => any;
}

interface IState {
    ingredients: Ingredient[];
    currentIngredient: Ingredient | null;
}

export default class SelectIngredient extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        const ingredients = IngredientRepository.getAll();

        this.state = {
            ingredients,
            currentIngredient: ingredients[0]
        };
    }

    public render() {
        const options = IngredientRepository.getAll().map(ingredient => (
            <option value={ingredient.name} key={ingredient.name}>
                {ingredient.name}
            </option>
        ));

        return (
            <div className="form-group">
                <label>
                    Добавить игрендиент
                    <select className="form-control" onChange={e => this.handleChange(e.target.value)}>
                        {options}
                    </select>
                </label>
                <button className="btn btn-success" onClick={() => this.handleAdd()}>
                    Добавить
                </button>
            </div>
        );
    }

    private handleAdd = () => {
        const { onAdd } = this.props;

        onAdd(this.state.currentIngredient);
    }

    private handleChange = (name: string) => {
        const found = this.state.ingredients.find(x => x.name == name) || null;
        this.setState({
            currentIngredient: found
        });
    }
}
