import React, { Component } from "react";
import Ingredient from "../models/ingredient";

export interface IProps {
    ingredients: Ingredient[];
}

export default class IngredientList extends Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);
    }

    public render = () => {
        return <div>I am list {this.props.ingredients.length}</div>;
    }
}
