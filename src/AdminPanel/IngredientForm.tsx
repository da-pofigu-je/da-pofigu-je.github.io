import React, { Component } from "react";
import Ingredient from "../models/ingredient";

export interface IProps {
    ingredient: Ingredient;
}

export default class IngredientForm extends Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);
    }

    public render = () => {
        return <div>I am form {this.props.ingredient.name}</div>;
    }
}
