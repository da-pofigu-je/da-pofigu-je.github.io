import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import SelectIngredient from "./SelectIngredient";
import Ingredient from "../../models/ingredient";

// tslint:disable:typedef
Enzyme.configure({ adapter: new Adapter() });

it("SelectIngredient: displays correct options", () => {
    // assign
    const addCb = jest.fn();
    const name = "ing";
    const ingredietns: Ingredient[] = [{ name, id: 0 }];
    const wrapper = shallow(<SelectIngredient onAdd={addCb} ingredients={ingredietns} />);

    // assert
    expect(wrapper.find("option").length).toBe(1);
    expect(
        wrapper
            .find("option")
            .first()
            .text()
    ).toEqual(name);
});

it("SelectIngredient: can pass selection to callback", () => {
    // assign
    const addCb = jest.fn();
    const name = "ing";
    const ingredietns: Ingredient[] = [{ name: "zzz", id: 1 }, { name, id: 2 }];
    const wrapper = shallow(<SelectIngredient onAdd={addCb} ingredients={ingredietns} />);

    // action
    wrapper
        .find("select")
        .first()
        .simulate("change", { target: { value: name } });
    wrapper
        .find("button")
        .first()
        .simulate("click");

    // assert
    expect(addCb).toBeCalledTimes(1);
    expect(addCb).toBeCalledWith(ingredietns[1]);
});
