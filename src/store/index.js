/**
 * The context object parameter of actions that provide several items for working with the state
 * among those items state, getters, commit, dispatch
 * we can diconstruct to keep the items we need for example {state, commit}
 * commit :  to commit muttation
 * dispatch : to kick of action
 * We can add root state here. In that case we have to know that state is namespaced by default.
 *    instead getters is global so if 2 getters in different module have the same name
 *    then they will be confusion. So if we want to access root state from a module, we should
 *    give rootstate as a parameters for the getters of that module. Otherwise we have to
 *    name spaced the module
 */

import Vue from 'vue';
import Vuex from 'vuex';
import robotsModule from './modules/robots';
import usersModule from './modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    robots: robotsModule,
    users: usersModule,
  },
});
