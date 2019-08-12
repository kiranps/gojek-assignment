import React from "react";
import { mount } from "enzyme";
import Gif from "./";

const data = {
  id: "jKaFXbKyZFja0",
  title: "excited winnie the pooh GIF",
  still: {
    url:
      "https://media1.giphy.com/media/jKaFXbKyZFja0/giphy-downsized_s.gif?cid=b6f7420cd6b3d27886d05eb01ff61e1e58b9883204d65ac0&rid=giphy-downsized_s.gif",
    width: "320",
    height: "271",
    size: "53157"
  },
  gif: {
    url:
      "https://media1.giphy.com/media/jKaFXbKyZFja0/giphy-preview.webp?cid=b6f7420cd6b3d27886d05eb01ff61e1e58b9883204d65ac0&rid=giphy-preview.webp",
    width: "136",
    height: "115",
    size: "49138"
  }
};

describe("<Gif />", () => {
  it("render", () => {
    const wrapper = mount(<Gif image={data} />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it("on click image should toggle still image to gif", () => {
    const wrapper = mount(<Gif image={data} />);
    const image1 = wrapper.find("img").at(1);
    expect(image1.props().src).toEqual(data.still.url);
    image1.simulate("click");
    const image2 = wrapper.find("img").at(1);
    expect(image2.props().src).toEqual(data.gif.url);
    image2.simulate("click");
    const image3 = wrapper.find("img").at(1);
    expect(image3.props().src).toEqual(data.still.url);
  });
});
