import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import Recipes from "./Recipes";
import RecipeForm from "./RecipeForm";

// tslint:disable:typedef

Enzyme.configure({ adapter: new Adapter() });

it("ingredients: add btn opens ingredient form", () => {
    const recipesWrapper = shallow(<Recipes />);

    // check that there is no form
    const form = recipesWrapper.find(RecipeForm);
    expect(form.length).toBe(0);

    const btn = recipesWrapper.find("button").first();
    btn.simulate("click");

    // check that there is a form
    const form2 = recipesWrapper.find(RecipeForm);
    expect(form2.length).toBe(1);
});
