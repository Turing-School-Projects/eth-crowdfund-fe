import { shallowMount, mount } from "@vue/test-utils";
import About from "@/views/About.vue";
import HowTo from "@/components/About/howTo.vue";
import Why from "@/components/About/why.vue";
import Technologies from "@/components/About/Technologies.vue";
import Contributors from "@/components/About/Contributors.vue";

describe("about page content", () => {
  it("should display four info tabs", () => {
    const wrapper = shallowMount(About);
    const tabs = wrapper.findAll(".tab");
    expect(tabs[0].text()).toEqual("How to?");
    expect(tabs[1].text()).toEqual("Why Blockchain?");
    expect(tabs[2].text()).toEqual("Technologies");
    expect(tabs[3].text()).toEqual("Contributors");
  });

  it("should default to display a how to page", () => {
    const wrapper = mount(About, {
      data() {
        return {
          view: "how-to"
        };
      }
    });

    const content = wrapper.findComponent(HowTo);
    const header = content.find("h2");
    const subHeader = content.findAll("h3");

    expect(header.text()).toEqual("How to use Etho-Boost");
    expect(subHeader.length).toEqual(4);
  });

  it("should also show info on the blockchain", () => {
    const wrapper = mount(About, {
      data() {
        return {
          view: "why"
        };
      }
    });

    const content = wrapper.findComponent(Why);
    const header = content.find("h2");

    expect(header.text()).toEqual("Why use EthoBoost?");
  });

  it("should show technology info", () => {
    const wrapper = mount(About, {
      data() {
        return {
          view: "technologies"
        };
      }
    });

    const tabview = wrapper.findComponent(Technologies);
    const technologiesHeader = tabview.findAll("h3");

    expect(technologiesHeader[0].text()).toEqual("Back-End Technologies");
    expect(technologiesHeader[1].text()).toEqual("Front-End Technologies");
  });

  it("should show contributors names as links", () => {
    const wrapper = mount(About, {
      data() {
        return {
          view: "contributors"
        };
      }
    });

    const contributors = wrapper.findComponent(Contributors);
    const teams = contributors.findAll("h3");
    const teamNames = teams.map((team) => team.text());
    const members = contributors.findAll("a");

    expect(teamNames).toEqual(["Front End Team", "Back End Team"]);
    expect(members).toHaveLength(6);
  });
});
