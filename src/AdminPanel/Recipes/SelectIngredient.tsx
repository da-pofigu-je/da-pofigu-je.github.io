import React, { Component } from "react";
import IngredientRepository from "../../models/ingredientRepository";
import Ingredient from "../../models/ingredient";

// ingredient[] -> ingredient

export interface IProps {
    ingredients: Ingredient[];
    onAdd: (ingredient: Ingredient | null) => any;
}

interface IState {
    currentIngredient: Ingredient | null;
}

export default class SelectIngredient extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            currentIngredient: props.ingredients[0]
        };
    }

    public render() {
        const options = this.props.ingredients.map(ingredient => (
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
                    <i className="fas fa-plus" />
                </button>
            </div>
        );
    }

    private handleAdd = () => {
        const { onAdd } = this.props;

        onAdd(this.state.currentIngredient);
    }

    private handleChange = (name: string) => {
        const found = this.props.ingredients.find(x => x.name == name) || null;
        this.setState({
            currentIngredient: found
        });
    }
}
