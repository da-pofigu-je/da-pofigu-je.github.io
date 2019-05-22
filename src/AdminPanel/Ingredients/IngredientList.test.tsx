import React from "react";
import Adapter from "enzyme-adapter-react-16";
import IngredientList from "./IngredientList";
import Enzyme, { shallow } from "enzyme";

// tslint:disable:typedef
Enzyme.configure({ adapter: new Adapter() });

window.confirm = jest.fn(() => true);

function setNotConfirmed() {
    window.confirm = jest.fn(() => false);
}

it("ingredient list: edit widget calls callback", () => {
    const ingredients = [{ id: 1, name: "ing" }];
    const editCb = jest.fn();
    const deleteCb = jest.fn();
    const listWrapper = shallow(<IngredientList onDelete={deleteCb} onEdit={editCb} ingredients={ingredients} />);

    listWrapper
        .find("tr button")
        .first()
        .simulate("click");

    expect(editCb).toBeCalled();
});

it("ingredient list: delete widget calls callback", () => {
    const ingredients = [{ id: 1, name: "ing" }];
    const editCb = jest.fn();
    const deleteCb = jest.fn();
    const listWrapper = shallow(<IngredientList onDelete={deleteCb} onEdit={editCb} ingredients={ingredients} />);

    listWrapper
        .find("tr button")
        .at(1)
        .simulate("click");

    expect(deleteCb).toBeCalled();
});

it("ingredient list: delete widget doesn't call callback", () => {
    const ingredients = [{ id: 1, name: "ing" }];
    const editCb = jest.fn();
    const deleteCb = jest.fn();
    const listWrapper = shallow(<IngredientList onDelete={deleteCb} onEdit={editCb} ingredients={ingredients} />);

    setNotConfirmed();

    listWrapper
        .find("tr button")
        .at(1)
        .simulate("click");

    expect(deleteCb).toBeCalledTimes(0);
});
