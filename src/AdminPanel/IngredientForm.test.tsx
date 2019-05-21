import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { mount } from "enzyme";
import IngredientForm from "./IngredientForm";

// tslint:disable:typedef
Enzyme.configure({ adapter: new Adapter() });

it("ingredient form: can save not empty", () => {
    // assign
    const saveCb = jest.fn();
    const cancelCb = jest.fn();
    const ingredient = { id: 1, name: "ing" };

    const formWrapper = mount(<IngredientForm onCancel={cancelCb} onAddOrSave={saveCb} ingredient={ingredient} />);
    const input = formWrapper.find("input").first().instance() as any;
    const submit = formWrapper.find("button").first();

    // action
    input.value = "hello";
    submit.simulate("click");

    // assert
    expect(saveCb).toBeCalledTimes(1);
});

it("ingredient form: can not save empty", () => {
    // assign
    const saveCb = jest.fn();
    const cancelCb = jest.fn();
    const ingredient = { id: 1, name: "" };

    const formWrapper = mount(<IngredientForm onCancel={cancelCb} onAddOrSave={saveCb} ingredient={ingredient} />);
    const submit = formWrapper.find("button").first();

    // action
    submit.simulate("click");

    // assert
    expect(saveCb).toBeCalledTimes(0);
});

it("ingredient form: cancel calls cb", () => {
    // assign
    const saveCb = jest.fn();
    const cancelCb = jest.fn();
    const ingredient = { id: 1, name: "ing" };

    const formWrapper = mount(<IngredientForm onCancel={cancelCb} onAddOrSave={saveCb} ingredient={ingredient} />);
    const cancel = formWrapper.find("button").at(1);

    // action
    cancel.simulate("click");

    // assert
    expect(cancelCb).toBeCalledTimes(1);
});
