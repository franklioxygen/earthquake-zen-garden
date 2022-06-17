import { render } from "@testing-library/react";
import React from "react";
import Home from '../src/Home';

it("Home renders without crashing", () => {
    render<Home>(<Home />);
});