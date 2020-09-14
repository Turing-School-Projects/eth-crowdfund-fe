// import { shallowMount, createLocalVue } from '@vue/test-utils'
import { shallowMount } from '@vue/test-utils'
// import VueRouter from 'vue-router';
import App from '@/App.vue';

// const localVue = createLocalVue()
// localVue.use(VueRouter)
// const router = new VueRouter()

// shallowMount(App, {
//   localVue,
//   router
// })

describe('App.vue', () => {
  it('renders a header with Etho-Boost', () => {
    const wrapper = shallowMount(App)
    const header = wrapper.find('h1')

    expect(header.text()).toContain('Etho-Boost')
  });

  it('renders 5 router links in the App', () => {
    const wrapper = shallowMount(App)
    const links = wrapper.findAll('router-link')
    expect(links.length).toBe(5)
  });

  it('renders a router link to About page', () => {
    const wrapper = shallowMount(App)
    const links = wrapper.findAll('router-link')
    expect(links[links.length - 1].text()).toBe("About")
  });
});
