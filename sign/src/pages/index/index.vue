<template>
  <div @click="clickHandle" class="wrap">
    <!-- 首页地图模块 -->
    <map
      id="map"
      :longitude="location.longitude"
      :latitude="location.latitude"
      subkey="X7RBZ-MMOKR-UQEWJ-WSCXC-IVXVK-IFFLL"
      scale="14"
      show-location
      show-compass
      :markers="markers"
      @markertap="markertap"
      @regionchange="regionChange"
    ></map>
    <!-- 重新定位图标 -->
    <cover-view class="current" @tap="goCurrent">
      <cover-image class="img" src="/static/images/location.png" />
      <button class="add" @tap="goAdd">添加面试</button>
      <cover-view class="mine" @click="mine">
        <cover-image class="img" src="/static/images/wode.png" />
      </cover-view>
    </cover-view>
    <!-- <div>
      <button @click="btnClick('+')">+</button>
      <span>{{state}}</span>
      <button @click="btnClick('-')">-</button>
    </div> -->
  </div>
</template>

<script>
import card from '@/components/card'
import {getLocation, getAuth} from '@/utils/index.js'
import {mapState, mapMutations} from 'vuex'

export default {
  data () {
    return {
      // 用户当前位置
      location: {
        latitude: 40.03298,
        longitude: 116.29891
      },
      markers: [{
        iconPath: '/static/images/job.png',
        id: 0,
        latitude: 23.099994,
        longitude: 113.324520,
        width: 50,
        height: 50
      }]
    }
  },

  computed: {
    ...mapState({
      state: state=>state.index.count,
      state2: state=>state.index.count,
    })
  },

  components: {
    card
  },

  methods: {
    ...mapMutations({
      changeNum: 'index/changeCount'
    }),
    btnClick(type){
      this.changeNum(type);
    },
    regionChange(e){

    },
    // 点击标注物
    marketTap(e){

    },
    // 重新定位
    goCurrent(){
      getAuth('scope.userLocation', async ()=>{
        let location = await getLocation();
        wx.setStorageSync('location', location)
        this.location = location;
      })
    },
    //跳进我的页面
    mine(){
      wx.navigateTo({
        url:'/pages/my/main'
      })
    },
    goAdd(){
      wx.navigateTo({
        url:'/pages/sign/add/main'
      })
    }
  },

  created () {
    let location = wx.getStorageSync('location');
    this.location = location;

//     var p = new Promise(function(resolve, reject){
//     //做一些异步操作
//     setTimeout(function(){
//         console.log('执行完成');
//         resolve('随便什么数据');
//     }, 2000);
// });


  }
}
</script>

<style lang="scss" scoped>
.wrap{
  height: 100%;
}
map{
  // display: none;
  width: 100%;
  height: 100%;
}
.current{
  position: fixed;
  bottom: 110rpx;
  width: 80rpx;
  height: 80rpx;
  left: 20rpx;
}
.mine{
  width: 120rpx;
  height: 80rpx;
  position: fixed;
  bottom: 110rpx;
  right: 0;
  background: #fff;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  .img{
    width: 50rpx;
    height: 50rpx;
    margin-left: 35rpx;
    margin-top: 12rpx;
  }
}
.add{
  position: fixed;
  width: 90%;
  height: 80rpx;
  background: palevioletred;
  text-align: center;
  line-height: 80rpx;
  color: #fff;
  font-weight: 500;
  bottom: 12rpx;
  left: 5%;
  font-size: 40rpx;
}
</style>
