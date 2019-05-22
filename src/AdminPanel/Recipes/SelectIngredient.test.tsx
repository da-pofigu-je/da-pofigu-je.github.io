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
    expect(wrapper.find("option").first().text()).toEqual(name);
});
