import { Name } from "./name";
import React from "react";
import { shallow } from "enzyme";
import { NameRenderer } from "./nameRenderer";

describe("Component: Name", () => {

  let component = null;

  beforeEach(() => {
    component = shallow(<Name />);
  })

  afterEach(() => {
    component = null;
  });

  it("should render component", () => {
    expect(component.exists("form")).toBe(true);
  });

  it("should display name when user types into input field", () => {
    component.find("input#name").simulate("change", { target: { value: "Charles" } });
    expect(component.find(NameRenderer).props()).toStrictEqual({name: "Charles"});
  });

});