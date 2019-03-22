import Fly from 'flyio/dist/npm/wx'
export let fly = new Fly;

//设置超时
fly.config.timeout = 10000;
//设置请求基地址
fly.config.baseURL = "http://123.206.55.50:7001/"

let cookies = {}
    // const HOST = 'https://127.0.0.1'

fly.interceptors.request.use((request) => {
    let openid = wx.getStorageSync('phone');
    if (openid) {
        request.headers['phone'] = openid;
    }

    return request;

})

export default fly