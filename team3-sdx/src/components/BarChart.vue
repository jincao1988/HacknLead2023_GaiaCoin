<template id="barchart">
  <Bar :data="chartData" />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [ 'Company A', 'Company B', 'Company C', 'Company D', 'Company E', 'Company F', 'Company G'],
        mounted () {
          this.renderChart(this.chartData, {
            responsive: true,
            maintainAspectRatio: false,
            options: {
              onClick: (event, item) => {
                console.log(item);
              }
            }
          })
        },
        datasets: [
          {
            indexAxis: 'y',
            label: 'Number of Coins',
            backgroundColor: '#1c6aaf',
            data: [40, 20, 12, 23, 55, 66 , 21],
            fill:false
          }
        ]
      }
    }
  }
}
</script>
