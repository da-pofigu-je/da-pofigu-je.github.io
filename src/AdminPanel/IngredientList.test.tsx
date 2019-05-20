import React from "react";
import Adapter from "enzyme-adapter-react-16";
import IngredientList from "./IngredientList";
import Enzyme, { shallow } from "enzyme";

// tslint:disable:typedef
Enzyme.configure({ adapter: new Adapter() });

it("ingredients: widget icons calls callbacks", () => {
    const ingredients = [{ id: 1, name: "ing" }];
    const editCb = jest.fn();
    const deleteCb = jest.fn();
    const listWrapper = shallow(<IngredientList onDelete={deleteCb} onEdit={editCb} ingredients={ingredients} />);

    listWrapper
        .find("tr button")
        .first()
        .simulate("click");

    expect(editCb).toBeCalled();

    listWrapper
    .find("tr button")
    .at(1)
    .simulate("click");

    expect(deleteCb).toBeCalled();
});
