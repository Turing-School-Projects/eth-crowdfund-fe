import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import About from "@/views/About.vue";

// const localVue = createLocalVue();
// localVue.use(VueRouter);
// const router = new VueRouter();

describe("truth", () => {
  it("should hold true", () => {
    const wrapper = shallowMount(About);
    const tabs = wrapper.findAll(".tab");
    expect(tabs[0].text()).toEqual("How to?");
    expect(tabs[1].text()).toEqual("Why Blockchain?");
    expect(tabs[2].text()).toEqual("Technologies");
    expect(tabs[3].text()).toEqual("Contributors");
  });
});
