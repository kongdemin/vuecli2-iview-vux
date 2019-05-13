<template>
  <div class="hello">
    <div class="choose-city">
        <div class="select-group">
            <input readonly v-model="receiveprovince" placeholder="省" @click="provinceMenu = !provinceMenu" @blur="provinceMenu = false" />
            <span></span>
        </div>
        <ul class="provinceMenu" v-show="provinceMenu">
            <li :class="province == index ? 'selected': ''" @mousedown="chooseProvince(index)"  v-for="(item, index) in cityDate" :key="index" >{{item.name}}</li>
        </ul>
        <div class="select-group">
            <input readonly v-model="receivecity" placeholder="市" @click="changeCityStatus" @blur="cityMenu = false" />
            <span></span>
        </div>
        <ul class="city" :class="province == -1? 'noborder':''" v-if="cityStatus" v-show="cityMenu">
            <li :class="city == index ? 'selected': ''" @mousedown="chooseCity(index)"  v-for="(item, index) in province >-1 && cityDate[province].city" :key="index" >{{item.name}}</li>
        </ul>
        <div class="select-group">
            <input readonly v-model="receivecounty" placeholder="区/县" @click="changeCountyStatus" @blur="countyMenu = false" />
            <span></span>
        </div>
        <ul class="county" :class="city == -1? 'noborder':''" v-if="countyStatus" v-show="countyMenu">
            <li :class="county == index ? 'selected': ''" @mousedown="chooseCounty(index)"  v-for="(item, index) in province >-1 && city > -1 && cityDate[province].city[city].area" :key="index" >{{item}}</li>
        </ul>
    </div>
  </div>
</template>

<script>
import { cityList } from '../assets/city.js'
export default {
    name: 'HelloWorld',
    data () {
        return {
            cityDate: cityList,
            receiveprovince: '',
            receivecity: '',
            receivecounty: '',
            province: -1,
            city: -1,
            county: -1,
             provinceMenu: false, // 控制展开省
             cityMenu: false, // 控制展开市
            countyMenu: false, // 控制展开区县
            cityStatus: true, // 切换状态控制刷新
            countyStatus: true // 切换状态控制刷新
        }
    },
    methods: {
        changeCityStatus() { // 切换选择城市状态
            this.cityStatus = true
            this.cityMenu = !this.cityMenu
        },
        changeCountyStatus() { // 切换选择县区状态
            this.countyMenu = !this.countyMenu
            this.countyStatus = true
        },
        chooseProvince(index) { // 选择省
            if (this.province !== index) {
                this.province = index
                this.city = -1
                this.county = -1
                this.cityStatus = false
                this.countyStatus = false
                this.receivecity = ''
                this.receivecounty = ''
                this.receiveprovince = this.cityDate[this.province].name
                this.$emit('getprovince', this.cityDate[this.province].name)
                this.$emit('getcity', '')
                this.$emit('getcounty', '')
            }
        },
        chooseCity(index) { // 选择市
            if (this.city !== index) {
                this.city = index
                this.county = -1
                this.countyStatus = false
                this.receivecounty = ''
                this.receivecity = this.cityDate[this.province].city[this.city].name
                this.$emit('getcity', this.cityDate[this.province].city[this.city].name)
                this.$emit('getcounty', '')
            }
        },
        chooseCounty(index) { // 选择区
            this.county = index
            this.receivecounty = this.cityDate[this.province].city[this.city].area[this.county]
            this.$emit('getcounty', this.cityDate[this.province].city[this.city].area[this.county])
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.choose-city {
    position: relative;
    display: flex;
    align-items: center;
    .select-group {
        position: relative;
        width: 75px;
        height: 28px;
        margin-right: 10px;
        cursor: pointer;
        input {
            width: 75px;
            height: 28px;
            border: 1px solid #c8c8c8;
            box-sizing: border-box;
            padding: 0 17px 0 8px;
            cursor: pointer;
            font-size: 12px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        span {
            width: 0;
            height: 0;
            border-top: 4px solid #999;
            border-left: 4px solid transparent;
            border-right: 4px solid transparent;
            position: absolute;
            right: 8px;
            top: 13px;
            pointer-events: none;
        }
    }
    .select-group:last-of-type {
        margin-right: 0;
    }
    ul {
        min-width: 73px;
        max-width: 120px;
        max-height: 120px;
        position: absolute;
        left: 0;
        top: 28px;
        z-index: 99;
        border: 1px solid #c8c8c8;
        overflow-y: scroll;
        li {
            height: 30px;
            padding: 0 8px;
            line-height: 30px;
            font-size: 12px;
            background-color: #fff;
            margin: 0;
            cursor: pointer;
        }
        .selected {
            background-color: #f5f8fb;
        }
    }
    .noborder {
        border: none;
    }
    .city {
        left: 85px;
    }
    .county {
        left: 170px;
    }
    ul::-webkit-scrollbar {
        width: 3px;
        background-color: #fff;
    }
    ul::-webkit-scrollbar-thumb {
        border-radius: 5px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #f5f5f5;
    }
}
</style>
