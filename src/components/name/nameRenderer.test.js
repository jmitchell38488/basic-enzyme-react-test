import { NameRenderer } from "./nameRenderer";
import React from "react";
import { shallow } from "enzyme";

describe("Component: NameRenderer", () => {

  let component = null;

  beforeEach(() => {
    component = shallow(<NameRenderer />);
  })

  afterEach(() => {
    component = null;
  });

  it("should not render name", () => {
    expect(component.find("#output").text()).toBe("Hello, ");
  });

  it("should render name from prop", () => {
    component.setProps({ name: "Charles" });
    expect(component.find("#output").text()).toBe("Hello, Charles");
  });
});