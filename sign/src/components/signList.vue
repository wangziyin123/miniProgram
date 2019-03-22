<template>
    <ul>
        <li v-for="(item,index) in list" :key="index">
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
        formatAddress(address){
            address=JSON.parse(address);
            console.log('address...',address.address)
            return address.address
        },
        formatTime(start_time){
            console.log('start_time',start_time,moment(start_time*1000).format('YYYY-MM-DD HH:mm'))
            return moment(start_time*1000).format('YYYY-MM-DD HH:mm')
        }
    }
}
</script>

<style lang='scss'>
   
</style>
