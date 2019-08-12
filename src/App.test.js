import React from "react";
import App from "./App";
import { act } from "react-dom/test-utils";
import { mount } from "enzyme";

jest.mock("services/gify.js");

// this is just a little hack to silence a warning that we'll get until we
// upgrade to 16.9: https://github.com/facebook/react/pull/14853
const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (/Warning.*not wrapped in act/.test(args[0])) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});

describe("<App/>", () => {
  it("render withou crashing", () => {
    const wrapper = mount(<App />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it("render", done => {
    const wrapper = mount(<App />);
    const search = wrapper.find("Search");
    const input = search.find("input");
    input.instance().value = "hello ";
    input.simulate("change");
    setTimeout(() => {
      wrapper.update();
      try {
        expect(wrapper.find("Gif")).toHaveLength(3);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
    expect(wrapper.exists()).toBeTruthy();
  });
});
