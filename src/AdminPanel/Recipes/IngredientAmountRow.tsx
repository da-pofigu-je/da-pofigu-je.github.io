import React, { Component } from "react";
import IngredientAmount from "../../models/ingredientAmount";

export interface IProps {
    ingredientAmount: IngredientAmount;
    onDelete: () => any;
    onChange: (amount: number) => any;
}

export default class IngredientAmountRow extends Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);
    }

    public render() {
        const { ingredientAmount, onDelete } = this.props;
        return (
            <div className="form-inline">
                <div className="form-group mx-sm-3 mb-2">
                    <label>
                        {ingredientAmount.ingredient!.name}
                        <input
                            defaultValue={ingredientAmount.amount + ""}
                            type="number"
                            className="form-control"
                            placeholder="Количество"
                            onChange={e => this.handleChange(e.target.value)}
                        />
                    </label>
                </div>
                <button onClick={() => onDelete()} type="button">
                    <i className="fas fa-trash-alt" />
                </button>
            </div>
        );
    }

    private handleChange = (val: string) => {
        const { onChange } = this.props;
        onChange(+val);
    }
}
