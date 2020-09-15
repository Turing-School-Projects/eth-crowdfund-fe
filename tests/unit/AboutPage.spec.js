import { shallowMount, mount } from "@vue/test-utils";
import { render, fireEvent } from "@testing-library/vue";
import About from "@/views/About.vue";
import HowTo from "@/components/About/howTo.vue";

describe("truth", () => {
  it("should display four info tabs", () => {
    const wrapper = shallowMount(About);
    const tabs = wrapper.findAll(".tab");
    expect(tabs[0].text()).toEqual("How to?");
    expect(tabs[1].text()).toEqual("Why Blockchain?");
    expect(tabs[2].text()).toEqual("Technologies");
    expect(tabs[3].text()).toEqual("Contributors");
  });

  it("should default to display a how to page", () => {
    const wrapper = mount(About);

    const content = wrapper.findComponent(HowTo);
    const header = content.find("h2");
    const subHeader = content.findAll("h3");

    expect(header.text()).toEqual("How to use Etho-Boost");
    expect(subHeader.length).toEqual(4);
    wrapper.destroy();
  });

  it.skip("should also show info on the blockchain", () => {});
});
