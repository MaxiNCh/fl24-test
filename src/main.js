import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSlidersH, faSearch, faCaretDown, faCaretUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';

library.add(faSlidersH);
library.add(faSearch);
library.add(faCaretDown);
library.add(faCaretUp);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
