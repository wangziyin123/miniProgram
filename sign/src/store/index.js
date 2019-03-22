import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

// 挂载modules
import index from './modules/index'
import interview from './modules/interview'
import sign from './modules/sign'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        sign,
        index,
        interview
    },
    state: {
        info: {} //用户的信息
    },
    mutations: {
        updateSate(state, payload) {
            console.log('state...', state, payload)
        }
    },
    plugins: [createLogger()]
})