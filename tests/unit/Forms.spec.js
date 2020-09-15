import { shallowMount } from "@vue/test-utils";
import NewCampaignForm from "@/components/NewCampaignForm.vue";

describe.skip("new campaign form", () => {
  it("should have the right inputs", () => {
    const wrapper = shallowMount(NewCampaignForm);

    const inputLabels = wrapper.findAll("label");
    const labels = inputLabels.map((inputLabel) => inputLabel.text());
    const expectedResults = [
      "Booster Title",
      "Enter Image Url",
      "Minimum Ether Contribution",
      "Describe your Booster"
    ];
    expect(labels).toEqual(expectedResults);
  });
});
