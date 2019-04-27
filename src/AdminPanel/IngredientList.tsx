import React, { Component } from "react";
import Ingredient from "../models/ingredient";
import "./IngredientList.css";

export interface IProps {
    ingredients: Ingredient[];
    onDelete: (ingredient: Ingredient) => any;
    onEdit: (ingredient: Ingredient) => any;
}

export default class IngredientList extends Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);
    }

    public render = () => {
        const { ingredients } = this.props;

        return (
            <table className="table-hover table-bordered w-100">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Название</th>
                        <th />
                    </tr>
                </thead>
                <tbody>{ingredients.map((x, i) => this.renderRow(x, i))}</tbody>
            </table>
        );
    }

    private renderRow = (ingredient: Ingredient, index: number) => {
        const { onEdit } = this.props;

        return (
            <tr key={index}>
                <td>{ingredient.id}</td>
                <td>{ingredient.name}</td>
                <td>
                    <button id="btnEdit" onClick={() => onEdit(ingredient)}>
                        <i className="fas fa-edit" />
                    </button>
                    <button id="btnDelete" onClick={() => this.handleDelete(ingredient)}>
                        <i className="fas fa-trash-alt" />
                    </button>
                </td>
            </tr>
        );
    }

    private handleDelete = (ingredient: Ingredient) => {
        const ok: boolean = confirm("вы уверены?");
        if (!ok) {
            return;
        }

        this.props.onDelete(ingredient);
    }
}
