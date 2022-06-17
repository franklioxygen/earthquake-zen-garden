import { render } from "@testing-library/react";
import React from "react";
import Profile from '../src/Profile';

it("Profile renders without crashing", () => {
    render<Profile>(<Profile />);
});