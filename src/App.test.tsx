import React from "react";
import App from "./App";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { mount } from "enzyme";

/**
 * Тестировать переключение url либо, сложно, либо бессмысленно.
 * Поэтому здесь мы просто тестируем начальное состояние приложения.
 */

// tslint:disable:typedef

Enzyme.configure({ adapter: new Adapter() });

it("App: defualt navigation shows ingredients", () => {
    const appWrapper = mount(<App />);

    const recipes = appWrapper.find(".recipes").length;
    const ingredients = appWrapper.find(".ingredients").length;
    expect(recipes).toBe(0);
    expect(ingredients).toBe(1);

    // active class for btns
    const navBtns = appWrapper.find(".navigation a");
    const navIngredients = navBtns.at(0);
    const navRecipes = navBtns.at(1);
    expect(navIngredients.hasClass("active")).toBe(true);
    expect(navRecipes.hasClass("active")).toBe(false);
});
