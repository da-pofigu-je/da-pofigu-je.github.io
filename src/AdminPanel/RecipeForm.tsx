import React, { Component } from "react";
import Recipe from "../models/recipe";

export interface IProps {
    recipe: Recipe;
    onCancel: () => any;
    onAddOrSave: (recipe: Recipe) => any;
}

export default class RecipeForm extends Component<IProps, {}> {
    private nameRef = React.createRef<HTMLInputElement>();

    constructor(props: IProps) {
        super(props);
    }

    public render = () => {
        const { onCancel, recipe } = this.props;

        return (
            <form>
                <label htmlFor="ingredientName">Название</label>
                <input
                    defaultValue={recipe.name}
                    type="text"
                    className="form-control"
                    id="ingredientName"
                    placeholder="Название рецепта"
                    ref={this.nameRef}
                    required={true}
                />
                <button type="button" className="btn btn-primary" onClick={this.handleAddOrSave}>
                    {recipe.id ? "Сохранить" : "Добавить"}
                </button>
                <button type="button" className="btn btn-danger ml-4" onClick={onCancel}>
                    Cancel
                </button>
            </form>
        );
    }

    private handleAddOrSave = () => {
        if (!this.nameRef.current || !this.nameRef.current.value) {
            return;
        }

        const { onAddOrSave } = this.props;
        const recipe: Recipe = new Recipe();
        recipe.name = this.nameRef.current.value;
        onAddOrSave(recipe);
    }
}
