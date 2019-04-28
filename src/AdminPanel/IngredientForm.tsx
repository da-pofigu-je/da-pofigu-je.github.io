import React, { Component } from "react";
import Ingredient from "../models/ingredient";

export interface IProps {
    ingredient: Ingredient;
    onCancel: () => any;
    onAddOrSave: (ingredient: Ingredient) => any;
}

export default class IngredientForm extends Component<IProps, {}> {
    private nameRef = React.createRef<HTMLInputElement>();

    constructor(props: IProps) {
        super(props);
    }

    public render = () => {
        const { ingredient, onCancel } = this.props;

        return (
            <form className="ingredient-form border border-secondary mb-5">
                <div className="form-group p-1">
                    <label htmlFor="ingredientName">Название</label>
                    <input
                        defaultValue={ingredient.name}
                        type="text"
                        className="form-control"
                        id="ingredientName"
                        placeholder="Название ингредиента"
                        ref={this.nameRef}
                        required={true}
                    />
                    <button type="button" className="btn btn-primary" onClick={this.handleAddOrSave}>
                        {ingredient.id ? "Сохранить" : "Добавить"}
                    </button>
                    <button type="button" className="btn btn-danger ml-4" onClick={onCancel}>
                        Cancel
                    </button>
                </div>
            </form>
        );
    }

    private handleAddOrSave = () => {
        if (!this.nameRef.current || !this.nameRef.current.value) {
            return;
        }

        const { onAddOrSave } = this.props;
        const ingredient: Ingredient = new Ingredient();
        ingredient.name = this.nameRef.current.value;
        onAddOrSave(ingredient);
    }
}
