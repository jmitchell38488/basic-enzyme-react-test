import { act } from "react-dom/test-utils";
import { Name } from "./name";
import React from "react";
import ReactDOM from "react-dom";

describe("Component: Name", () => {

  describe("The native React way", () => {
    let container;

    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
    });

    afterEach(() => {
      document.body.removeChild(container);
      container = null;
    });

    it("should render component", () => {
      act(() => {
        ReactDOM.render(<Name />, container);
      });

      const outString = container.querySelector("#output");
      expect(outString.textContent).toBe("Hello, ");
    });

    it("should update component when user types in name", () => {
      act(() => {
        ReactDOM.render(<Name />, container);
      });

      const outString = container.querySelector("#output");
      const inputEle = container.querySelector("#name");

      act(() => {
        var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
        nativeInputValueSetter.call(inputEle, 'Foo');

        var ev2 = new Event('input', { bubbles: true });
        inputEle.dispatchEvent(ev2);
      });
      
      expect(outString.textContent).toBe("Hello, Foo");
    })
  })

});