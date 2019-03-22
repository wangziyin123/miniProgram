<template>
    <div>
        <div class="head">
            <p class="title"></p>
            <p class="txt">{{state}}</p>
        </div>
        <div>
            <ul class="ulist">
                <li @click="goSignList">
                    <span>
                        <cover-image src="/static/images/interview.png"></cover-image>
                    </span>
                    <span>我的面试</span>
                    <span>〉</span>
                </li>
            </ul>
        </div>



        <div class="box" v-if="flag">
            <div class="dialog">
                <!-- <img src="static/images/title.png" alt=""> -->
                <p>确定要获取权限吗？</p>
                <div class="btn">
                    <button @click="cancel">取消</button>
                    <!-- <button open-type="getPhoneNumber" @click="getPhone">获取</button> -->
                    <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">获取</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
    data:{
        flag:false
    },
    computed: {
    ...mapState({
      state: state=>state.index.phone
    })
  },
  methods:{
       ...mapMutations({
      ChangePhone: 'index/ChangePhone'
    }),
    getPhone(){
        // console.log(1)
        // this.ChangePhone(13831092859);
        // this.flag=false

    },
    cancel(){
        wx.navigateTo({
        url:'../index/main'
      })
    },
    getPhoneNumber(e){
        console.log(e)
        this.flag=false
    },
    goSignList(){
        wx.navigateTo({
        url:'/pages/sign/list/main'
      })
    }
  },
  created(){
      if(this.state){
          this.flag=false;
      }else{
          this.flag=true;
      }
  }
}
</script>

<style lang='scss'>
    .head{
        width: 100%;
        height: 400rpx;
        background:#F4F6F9;
        display: flex;
        flex-direction: column;
    }
    .box{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #eee;
    }
    .ulist{
        width: 100%;
        margin-top: 30rpx;
        li{
            width: 100%;
            height: 90rpx;
            line-height: 90rpx;
            font-size: 34rpx;
            padding: 15rpx 0;
            display:flex;
            position: relative;
            // background: #F4F6F9;
            // border-bottom: 1px solid #ccc;
            color: #666;
            span:nth-child(1){
                padding: 0 40rpx;
            }
            span:nth-child(3){
                font-size: 34rpx;
                position: absolute;
                right: 35rpx;
                top: 19rpx;
            }
            cover-image{
                width: 40rpx;
                height: 40rpx;
                margin-top: 25rpx;
            }
        }
    }
    .dialog{
        position: absolute;
        top: 15%;
        left: 50rpx;
        width: 655rpx;
        height: 500rpx;
        background: #fff;
        border-radius: 15rpx;
        position: relative;
        p{
            text-align: center;
            padding-top: 150rpx;
        }
        .btn{
            display:flex;
            width: 100%;
            position: absolute;
            bottom: 40rpx;
            button{
            width: 300rpx;
            height: 100rpx;
            color: #fff;
            font-size: 34rpx;
            text-align: center;
            line-height: 100rpx;
            }
            button:nth-child(1){
                background: skyblue;
            }
            button:nth-child(2){
                background: red;
            }
        }
        
    }

    .title{
        width: 150rpx;
        height: 150rpx;
        background: pink;
        margin-left:40%;
        margin-top: 80rpx;
        border-radius: 50%;
    }
    .txt{
        width: 100%;
        padding: 35rpx 0;
        text-align: center;
    }
</style>

