<template>
  <div class="wrap">
    <header>
      <span @click="updateState({'active':index})" v-for="(item,index) in types" :key="index" :class="active===index?'active':''">{{item}}</span>
    </header>
    <div class="main">
      <signList class="main" :list='list'></signList>
    </div>
  </div>
</template>

<script>
import signList from '@/components/signList.vue'
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
  data(){
    return {
      types:['全部','未开始','已打卡','已放弃']
    }
  },
  computed:{
    ...mapState({
      active:state=>state.sign.active,
      list:state=>state.sign.list
    })
  },
  methods:{
    ...mapMutations({
      updateState:'sign/updateState'
    }),
    ...mapActions({
      getList:'sign/getList'
    })
  },
  components:{
    signList
  },
  onShow(){
    this.getList();
  }
}
</script>

<style lang='scss'>
  .wrap{
    width: 100%;
    height: 100%;
  }
  header{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    background: #fff;
    width: 100%;
    height: 88rpx;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 20rpx solid #eee;
    line-height: 88rpx;
    font-size: 33rpx;
    span{
      height: 100%;
      text-align: center;
      border-bottom:2rpx solid #fff;
      box-sizing: border-box;
    }
    span.active{
      color: palevioletred;
      border-bottom:2rpx solid palevioletred;
    }
  }
  .main{
    height: 2000rpx;
    margin-top: 110rpx;
     ul{
        width: 100%;
        li{
          width: 100%;
          border-bottom: 1px solid #eee;
          padding: 15rpx 20rpx;
          p{
            padding: 5rpx 0;
          }
        }
    }
  }
</style>
