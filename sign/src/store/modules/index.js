const state = {
    count: '',
    phone: ''
};

const getters = {

};

// 同步改变
const mutations = {
    ChangePhone(state, payload) {
        console.log('state...', state, payload);
        state.phone = payload;
    }
};

// 异步改变
const actions = {

};

export default {
    // 命名空间
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}