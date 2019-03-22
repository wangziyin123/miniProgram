import { getSignList } from "@/api/index";
const moment = require('moment')

const state = {
    active: 0, //表示当前面试类型
    list: [], //面试列表
    page: 1, //当前页码
    pageSize: 10 //每页数据
}

const mutations = {
    updateState(state, payload) {
        // console.log(state, payload)
        for (let key in payload) {
            state[key] = payload[key];
        }
    }
}

const actions = {
    getList({ commit, state }, payload) {
        console.log('payload...', payload);
        return new Promise(async(resolve, reject) => {
            let params = {};
            if (state.active) {
                params.status = state.active - 2;
            }
            let result = await getSignList(params);
            result.data.data.forEach(item => {
                item.address = JSON.parse(item.address);
                item.start_time = formatTime(item.start_time);
            })
            commit('updateState', { list: result.data.data })
                // console.log('result...', result.data)
        })
    }
}

function formatAddress(address) {
    address = JSON.parse(address);
    return address.address
}

function formatTime(start_time) {
    return moment(start_time * 1000).format('YYYY-MM-DD HH:mm')
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}