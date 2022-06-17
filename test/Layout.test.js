import { render } from "@testing-library/react";
import React from "react";
import Layout from '../src/Layout';

it("Layout renders without crashing", () => {
    render<Layout>(<Layout />);
});