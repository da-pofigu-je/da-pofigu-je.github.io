import React from "react";
import Ingredients from "./Ingredients";
import IngredientForm from "./IngredientForm";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";

// tslint:disable:typedef

Enzyme.configure({ adapter: new Adapter() });

it("Ingredients: add btn opens IngredientForm", () => {
    const ingredientsWrapper = shallow(<Ingredients />);

    // check that there is no form
    const form = ingredientsWrapper.find(IngredientForm);
    expect(form.length).toBe(0);

    const btn = ingredientsWrapper.find("button").first();
    btn.simulate("click");

    // check that there is a form
    const form2 = ingredientsWrapper.find(IngredientForm);
    expect(form2.length).toBe(1);
});
