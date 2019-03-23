import { getSignList, getSignDetail } from "@/api/index";
const moment = require('moment')

const state = {
    active: 0, //表示当前面试类型
    list: [], //面试列表
    page: 1, //当前页码
    pageSize: 10, //每页数据
    hasMore: true, //是否有更多数据
    info: {}
}

const mutations = {
    updateState(state, payload) {
        // console.log(state, payload)
        if (payload.list) {
            if (payload.list.length === state.pageSize * state.page) {
                state.hasMore = true;
            } else {
                state.hasMore = false
            }
        }
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
    },
    //获取面试详情
    getDetail({ commit }, payload) {
        return new Promise(async(resolve, reject) => {
            let data = await getSignDetail(payload);
            console.log('datassssss', data)
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