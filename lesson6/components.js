Vue.component('component-one', {
  template: `<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias animi delectus ducimus ex in laudantium, nam qui sunt temporibus veritatis vitae. Aliquam eaque et ipsam nemo odit similique voluptate!</div>`
});
Vue.component('component-two', {
  template: `<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci architecto at aut blanditiis culpa cum dignissimos doloribus eaque, esse hic incidunt laboriosam mollitia nihil, placeat quae qui quidem ut!</div></div>`
});
Vue.component('component-three', {
  template: `<div>Lorem ipsum dolor sit amet, ptate!</div>`
});



// const childElement = {
//   template: `<p>some text in child elem</p>`,
// };
//
// Vue.component('some-el', {
//   props: ['title', 'counter'],
//   components: {
//     childElement,
//   },
//   methods: {
//     some() {
//       console.log('from child');
//     }
//   },
//   template: `<div>
//                 <h2 @click="some">{{ title }}</h2>
//                 <h2 @click="$emit('parent')">{{ title }}</h2>
//                 <slot>
//                     <p>Default</p>
//                 </slot>
//                 <button @click="$emit('increase')">Increase</button>
//                 <p>{{ counter }}</p>
//                 <child-element />
//              </div>`,
//   data() {
//     return {
//     };
//   },
//   mounted() {
//     // console.log('child component', this);
//   }
// });
