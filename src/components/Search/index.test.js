import React from "react";
import { mount } from "enzyme";
import Search from "./";

describe("<Search />", () => {
  it("render", () => {
    const wrapper = mount(<Search />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it("text separated by space should create tags", () => {
    const wrapper = mount(<Search />);
    const input = wrapper.find("input");
    input.instance().value = "hello ";
    input.simulate("change");
    input.instance().value = "world ";
    input.simulate("change");
    const keywords = wrapper.find(".keyword");
    expect(keywords).toHaveLength(2);
    expect(keywords.find(".label").map(x => x.text())).toEqual([
      "hello",
      "world"
    ]);
  });

  it("click on submit should create tag", () => {
    const wrapper = mount(<Search />);
    const input = wrapper.find("input");
    input.instance().value = "hello";
    input.simulate("change");
    const button = wrapper.find("button");
    button.simulate("click");
    const keyword = wrapper.find(".keyword");
    expect(keyword.text()).toEqual("hello");
  });

  it("submit should trigger onChange callback with keyword", () => {
    const callback = jest.fn();
    const wrapper = mount(<Search onChange={callback} />);
    const input = wrapper.find("input");
    input.instance().value = "hello ";
    input.simulate("change");
    input.instance().value = "world ";
    input.simulate("change");
    input.instance().value = "gif";
    input.simulate("change");
    const button = wrapper.find("button");
    button.simulate("click");
    expect(callback).toHaveBeenLastCalledWith(["hello", "world", "gif"]);
  });
});
