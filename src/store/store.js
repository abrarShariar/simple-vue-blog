import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        counter: 0
    },
    getters: {
        tripleCounter: state => {
            return state.counter * 3
        },
        counter: state => {
            return state.counter
        }
    },
    mutations: {
        increment: (state, num) => {
            state.counter += num;
        }
    },
    actions: {
        asyncIncrement ({ commit }, { duration, num }) {
            setTimeout(() => {
                commit('increment', num)
            }, duration)
        }
    }
});