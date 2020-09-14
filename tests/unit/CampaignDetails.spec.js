// import { shallowMount, createLocalVue } from '@vue/test-utils'
import { shallowMount } from "@vue/test-utils";
// import VueRouter from 'vue-router';
import CampaignDetails from "@/components/CampaignDetails.vue";

// const localVue = createLocalVue()
// localVue.use(VueRouter)
// const router = new VueRouter()

// shallowMount(App, {
//   localVue,
//   router
// })

describe("CampaignDetails.vue", () => {
  it.skip("renders a label with Campaign Title", () => {
    const wrapper = shallowMount(CampaignDetails, {
      propsData: {
        address: "012345"
      },
      computed: {
        // trying to override vuex call. test saying state does not exist
        campaign() {
          return 1;
        }
      }
    });
    const labels = wrapper.findAll("label");

    expect(labels[0].text()).toContain("Campaign Title");
  });
});
