import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import IngredientAmountRow from "./IngredientAmountRow";

// tslint:disable:typedef
Enzyme.configure({ adapter: new Adapter() });

it("IngredientAmountRow: delete widget calls callback", () => {
    // assert
    const deleteCb = jest.fn();
    const changeCb = jest.fn();
    const ingredientAmount = {
        amount: 1,
        ingredient: { id: 1, name: "name" }
    };
    const wrapper = shallow(
        <IngredientAmountRow onDelete={deleteCb} onChange={changeCb} ingredientAmount={ingredientAmount} />
    );
    const deleteWidget = wrapper.find("button").first();

    // action
    deleteWidget.simulate("click");

    // assert
    expect(deleteCb).toBeCalledTimes(1);
});

it("IngredientAmountRow: amount input change calls callback", () => {
    // assert
    const deleteCb = jest.fn();
    const changeCb = jest.fn();
    const ingredientAmount = {
        amount: 1,
        ingredient: { id: 1, name: "name" }
    };
    const wrapper = shallow(
        <IngredientAmountRow onDelete={deleteCb} onChange={changeCb} ingredientAmount={ingredientAmount} />
    );
    const input = wrapper.find("input").first();

    // action
    input.simulate("change", { target: { value: "96" } });

    // assert
    expect(changeCb).toBeCalledTimes(1);
});
