import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow, mount } from "enzyme";

// tslint:disable:typedef

Enzyme.configure({ adapter: new Adapter() });

it("app: default navigation show ingredients", () => {
    const appWrapper = mount(<App />);
    const recipes = appWrapper.find(".recipes").length;
    const ingredients = appWrapper.find(".ingredients").length;
    expect(recipes).toBe(0);
    expect(ingredients).toBe(1);
});
