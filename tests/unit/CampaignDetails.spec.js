// import { shallowMount, createLocalVue } from '@vue/test-utils'
import { shallowMount } from '@vue/test-utils'
// import VueRouter from 'vue-router';
import CampaignDetails from '@/components/CampaignDetails.vue';

// const localVue = createLocalVue()
// localVue.use(VueRouter)
// const router = new VueRouter()

// shallowMount(App, {
//   localVue,
//   router
// })

describe('CampaignDetails.vue', () => {
  it('renders a header with Etho-Boost', () => {
    const wrapper = shallowMount(CampaignDetails, {
      propsData: {
        address: '012345'
      }
    })
    const labels = wrapper.findAll('label')

    expect(labels[0].text()).toContain('Campaign Title')
  });
});
