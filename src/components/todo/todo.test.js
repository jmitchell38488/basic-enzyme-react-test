import { mount } from "enzyme";
import React from "react";
import { act } from 'react-dom/test-utils';
import { Todo } from "./todo";

describe("Component: Todo", () => {

  let component = null;
  let data = {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  };

  beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve({
      status: 200,
      data,
      json: () => data
    }));
  })

  afterEach(() => {
    component = null;
  });

  it("should render element 'todo'", async () => {
    await act(async () => {
      component = await mount(<Todo />);
    });
    expect(component.exists("#todo")).toBe(true);
  });

  it("should show todo once async resolves", async () => {
    await act(async () => {
      component = await mount(<Todo />);
      component.update();
    });
    expect(component.find("#todo").text()).toBe("1: delectus aut autem");
  })

  it("should call fetch", async () => {
    await act(async () => {
      component = await mount(<Todo />);
      component.update();
    });

    expect(global.fetch).toHaveBeenLastCalledWith("https://jsonplaceholder.typicode.com/todos/1");
  })

});