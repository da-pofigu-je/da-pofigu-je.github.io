import React, { Component } from "react";

export interface IProps {
    ingredientName: string;
    onDelete: () => any;
    onChange: (amount: number) => any;
}

export default class IngredientAmountRow extends Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);
    }

    public render() {
        const { ingredientName, onDelete } = this.props;
        return (
            <div className="form-inline">
                <div className="form-group mx-sm-3 mb-2">
                    <label>
                        {ingredientName}
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Количество"
                            onChange={e => this.handleChange(e.target.value)}
                        />
                    </label>
                </div>
                <button className="btn btn-danger mb-2" onClick={() => onDelete()}>
                    Удалить
                </button>
            </div>
        );
    }

    private handleChange = (val: string) => {
        const { onChange } = this.props;
        onChange(+val);
    }
}
