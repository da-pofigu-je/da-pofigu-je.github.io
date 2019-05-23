import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { mount } from "enzyme";
import RecipeForm from "./RecipeForm";

// tslint:disable:typedef
Enzyme.configure({ adapter: new Adapter() });

it("RecipeForm: can save not empty", () => {
    // assign
    const saveCb = jest.fn();
    const cancelCb = jest.fn();
    const recipe = {
        id: 1,
        name: "name",
        description: "descr",
        ingredients: [
            {
                ingredient: { id: 1, name: "test1" },
                amount: 10
            },
            {
                ingredient: { id: 2, name: "test2" },
                amount: 11
            }
        ]
    };

    const formWrapper = mount(<RecipeForm onCancel={cancelCb} onAddOrSave={saveCb} recipe={recipe} />);
    const input = formWrapper
        .find("input")
        .first()
        .instance() as any;
    const textarea = formWrapper
        .find("textarea")
        .first()
        .instance() as any;
    const submit = formWrapper.find(".add-recipe-btn").first();

    // action
    input.value = "hello";
    textarea.value = "world";
    submit.simulate("click");

    // assert
    expect(saveCb).toBeCalledTimes(1);
});

it("RecipeForm: can not save empty", () => {
    // assign
    const saveCb = jest.fn();
    const cancelCb = jest.fn();
    const recipe = {
        id: 1,
        name: "",
        description: "",
        ingredients: [
            {
                ingredient: { id: 1, name: "test1" },
                amount: 10
            },
            {
                ingredient: { id: 2, name: "test2" },
                amount: 11
            }
        ]
    };

    const formWrapper = mount(<RecipeForm onCancel={cancelCb} onAddOrSave={saveCb} recipe={recipe} />);
    const submit = formWrapper.find(".add-recipe-btn").first();

    // action
    submit.simulate("click");

    // assert
    expect(saveCb).toBeCalledTimes(0);
});

it("RecipeForm: cancel calls cb", () => {
    // assign
    const saveCb = jest.fn();
    const cancelCb = jest.fn();
    const recipe = {
        id: 1,
        name: "",
        description: "",
        ingredients: [
            {
                ingredient: { id: 1, name: "test1" },
                amount: 10
            },
            {
                ingredient: { id: 2, name: "test2" },
                amount: 11
            }
        ]
    };
   
    const formWrapper = mount(<RecipeForm onCancel={cancelCb} onAddOrSave={saveCb} recipe={recipe} />);
    const cancel = formWrapper.find("button").last();

    // action
    cancel.simulate("click");

    // assert
    expect(cancelCb).toBeCalledTimes(1);
});