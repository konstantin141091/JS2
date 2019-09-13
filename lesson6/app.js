const app = new Vue({
  el: '#app',
  data: {
    someString: 'Hello',
    counter: 0,
    tabs: ['one', 'two', 'three'],
    currentTab: 'one',
  },
  methods: {
    some() {
      console.log('from root');
    },
    increase() {
      this.counter++;
    },
  },
  computed: {
    currentComponent() {
      return `component-${this.currentTab}`;
    }
  },
  mounted() {
    console.log('root component', this);
  }
});
