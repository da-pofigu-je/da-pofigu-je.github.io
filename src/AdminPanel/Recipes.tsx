import React, { Component } from "react";
import Recipe from "../models/recipe";
import RecipeList from "./RecipeList";

interface IState {
    recipes: Recipe[];
}

export default class Recipes extends Component<{}, IState> {

    constructor(props: {}) {
        super(props);

        this.state = {
            recipes: [{
                id:1,
                name:"name",
                description:"descr",
                ingredients: [
                    {
                        ingredient:{id:1, name:"test"},
                        amount:"10 гр"
                    },
                    {
                        ingredient:{id:1, name:"test"},
                        amount:"10 гр"
                    }
                ],

            }
            ],
        };
    }

    public render = () => {
        return (
            <section>
                <RecipeList
                    recipes={this.state.recipes}
                />
            </section>
        );
    }
}
