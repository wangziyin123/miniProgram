<template>
    <ul>
        <li @click="goDetail(item.id)" v-for="(item,index) in list" :key="index">
            <p>{{item.company}}</p>
            <p>{{item.address.address}}</p>
            <p>{{item.start_time}}</p>
        </li>
    </ul>
</template>

<script>

const moment=require('moment');

export default {
    props:{
        list:{
            type:Array,
            default:[]
        }
    },
    methods:{
        goDetail(id){
            wx.navigateTo({
                url:'/pages/sign/detail/main'
            })
        }
    },
}
</script>

<style lang='scss'>
   
</style>
