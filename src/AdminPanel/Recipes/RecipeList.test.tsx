import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import RecipeList from "./RecipeList";

// tslint:disable:typedef
Enzyme.configure({ adapter: new Adapter() });

window.confirm = jest.fn(() => true);

function setNotConfirmed() {
    window.confirm = jest.fn(() => false);
}

it("RecipeList: edit widget calls callback", () => {
    const recipes = [
        {
            id: 1,
            name: "name",
            description: "descr",
            ingredients: [
                {
                    ingredient: { id: 1, name: "test" },
                    amount: 10
                },
                {
                    ingredient: { id: 1, name: "test" },
                    amount: 10
                }
            ]
        }
    ];
    const editCb = jest.fn();
    const deleteCb = jest.fn();
    const listWrapper = shallow(<RecipeList onDelete={deleteCb} onEdit={editCb} recipes={recipes} />);

    listWrapper
        .find("tr button")
        .first()
        .simulate("click");

    expect(editCb).toBeCalled();
});

it("RecipeList: delete widget calls callback", () => {
    const recipes = [
        {
            id: 1,
            name: "name",
            description: "descr",
            ingredients: [
                {
                    ingredient: { id: 1, name: "test" },
                    amount: 10
                },
                {
                    ingredient: { id: 1, name: "test" },
                    amount: 10
                }
            ]
        }
    ];
    const editCb = jest.fn();
    const deleteCb = jest.fn();
    const listWrapper = shallow(<RecipeList onDelete={deleteCb} onEdit={editCb} recipes={recipes} />);

    listWrapper
        .find("tr button")
        .at(1)
        .simulate("click");

    expect(deleteCb).toBeCalled();
});

it("RecipeList: delete widget doesn't call callback", () => {
    const recipes = [
        {
            id: 1,
            name: "name",
            description: "descr",
            ingredients: [
                {
                    ingredient: { id: 1, name: "test" },
                    amount: 10
                },
                {
                    ingredient: { id: 1, name: "test" },
                    amount: 10
                }
            ]
        }
    ];
    const editCb = jest.fn();
    const deleteCb = jest.fn();
    const listWrapper = shallow(<RecipeList onDelete={deleteCb} onEdit={editCb} recipes={recipes} />);

    setNotConfirmed();

    listWrapper
        .find("tr button")
        .at(1)
        .simulate("click");

    expect(deleteCb).toBeCalledTimes(0);
});
