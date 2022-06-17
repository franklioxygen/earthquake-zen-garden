import { render } from "@testing-library/react";
import React from "react";
import Detail from '../src/Detail';

it("Detail renders without crashing", () => {
    render<Detail>(<Detail />);
});