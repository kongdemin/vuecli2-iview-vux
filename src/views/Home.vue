<template>
  <div class="home">
    <echarts :option="option" style="width:100%;height:420px;"></echarts>
  </div>
</template>

<script>
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'

export default {
  name: 'home',
  data () {
    return {
      option: {
        title : {
          text: ['资产', '负债'],
          x:'center'
        },
        tooltip : {
          show: false
          // trigger: 'item',
          // formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        color:['#ff8709', '#ff87ff'],
        toolbox: {
          show : true,
          feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true,
                type: ['pie', 'funnel']
            },
            restore : {show: true},
            saveAsImage : {show: true}
          }
        },
        calculable : true,
        series : [
          {
            name:'半径模式',
            type:'pie',
            radius : [20, 110],
            center : ['50%', '50%'],
            roseType : 'radius',
            label: {
              normal: {
                  show: true
              },
              emphasis: {
                  show: true
              }
            },
            lableLine: {
              normal: {
                  show: false
              },
              emphasis: {
                  show: true
              }
            },
            data:[
              {value:10, name:'1111 \n 222'},
              {value:5, name:'11111 \n 333'}
            ]
          }
        ]
      }
    }
  },
  methods: {

  }
}
</script>
<style>
    .home {
        width: 400px;
        margin: 0 auto;
    }
</style>
