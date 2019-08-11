import React from "react";
import { mount } from "enzyme";
import Toggle from "./";

describe("<Toggle />", () => {
  it("render", () => {
    const wrapper = mount(<Toggle label="Dark" />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it("should render label Dark", () => {
    const wrapper = mount(<Toggle label="Dark" />);
    expect(
      wrapper
        .find("div")
        .at(1)
        .text()
    ).toEqual("Dark");
  });

  it("click should toggle the icon", () => {
    const wrapper = mount(<Toggle label="Dark" />);
    expect(wrapper.find("path").props().fill).toEqual("#b5b5b5");
    wrapper.find("svg").simulate("click");
    expect(wrapper.find("path").props().fill).toEqual("#4caf50");
    wrapper.find("svg").simulate("click");
    expect(wrapper.find("path").props().fill).toEqual("#b5b5b5");
  });

  it("click should trigger onChange callback with boolean values", () => {
    const callback = jest.fn();
    const wrapper = mount(<Toggle label="Dark" onChange={callback} />);
    wrapper.find("svg").simulate("click");
    expect(callback).toHaveBeenLastCalledWith(true);
    wrapper.find("svg").simulate("click");
    expect(callback).toHaveBeenLastCalledWith(false);
  });
});
