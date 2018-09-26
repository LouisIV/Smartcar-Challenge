import React from "react";
import Enzyme from "enzyme";
import ExplorerComponent from "../components/ExplorerComponent";
import Adapter from "enzyme-adapter-react-16";
import { example1 } from "../configs";

Enzyme.configure({ adapter: new Adapter() });

describe("ExplorerComponent", () => {
  // Since prop-types will throw an error about missing fields
  console.log("Warnings about missing url, method, and body are normal.");
  let props;
  let mountedExplorerComponent;
  const explorerComponent = () => {
    if (!mountedExplorerComponent) {
      mountedExplorerComponent = Enzyme.mount(<ExplorerComponent {...props} />);
    }
    return mountedExplorerComponent;
  };

  beforeEach(() => {
    props = {
      url: undefined,
      method: undefined,
      body: undefined
    };
    mountedExplorerComponent = undefined;
  });

  // Make sure the component renders a div
  it("always renders a div", () => {
    const divs = explorerComponent().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  // Make sure there is always a submit button
  it("always renders a button", () => {
    const buttons = explorerComponent().find("button");
    expect(buttons.length).toBeGreaterThan(0);
  });

  it("doesn't render a body unless passed 'body'", () => {
    /* The body is the only part to use labels so we can check
     * if it rendered by looking at the number of labels */
    const labels = explorerComponent().find("label");
    expect(labels.length).toBeLessThanOrEqual(0);
  });

  describe("when `body` is passed", () => {
    beforeEach(() => {
      props.body = example1.body;
    });
    it("renders a body", () => {
      /* The body is the only part to use labels so we can check
       * if it rendered by looking at the number of labels */
      const labels = explorerComponent().find("label");
      expect(labels.length).toBeGreaterThan(0);
    });
  });
});
