<template>
  <b-container class="p-0">
    <h1>home</h1>
    <b-card  no-body class="card-statistics">
      <b-card-header>
        <b-card-title>الإحصائيات</b-card-title>
      </b-card-header>
      <b-card-body class="statistics-body">
        <b-row>
          <b-col xl="3" sm="6">
            <b-media no-body>
              <b-media-aside class="mr-2">
                <b-avatar size="48" variant="light-primary">
                </b-avatar>
              </b-media-aside>
              <b-media-body class="my-auto">
                <h4 class="font-weight-bolder mb-0">
                  67
                </h4>
                <b-card-text class="font-small-3 mb-0">
                  عدد المواد
                </b-card-text>
              </b-media-body>
            </b-media>
          </b-col>
          <b-col xl="3" sm="6">
            <b-media no-body>
              <b-media-aside class="mr-2">
                <b-avatar size="48" variant="light-primary">
                </b-avatar>
              </b-media-aside>
              <b-media-body class="my-auto">
                <h4 class="font-weight-bolder mb-0">
                 89
                </h4>
                <b-card-text class="font-small-3 mb-0">
                  عدد الوحدات
                </b-card-text>
              </b-media-body>
            </b-media>
          </b-col>
          <b-col xl="3" sm="6">
            <b-media no-body>
              <b-media-aside class="mr-2">
                <b-avatar size="48" variant="light-primary">
                </b-avatar>
              </b-media-aside>
              <b-media-body class="my-auto">
                <h4 class="font-weight-bolder mb-0">
               90 
                </h4>
                <b-card-text class="font-small-3 mb-0">
                  عدد الدروس
                </b-card-text>
              </b-media-body>
            </b-media>
          </b-col>
          <b-col xl="3" sm="6">
            <b-media no-body>
              <b-media-aside class="mr-2">
                <b-avatar size="48" variant="light-primary">
                </b-avatar>
              </b-media-aside>
              <b-media-body class="my-auto">
                <h4 class="font-weight-bolder mb-0">
                 89
                </h4>
                <b-card-text class="font-small-3 mb-0">
                  عدد الفيديوهات
                </b-card-text>
              </b-media-body>
            </b-media>
          </b-col>
        </b-row>
      </b-card-body>
    </b-card>
    <b-card
    
    class="card-tiny-line-stats"
    body-class="pb-50"
  >
    <h6>الأسئلة والإجابات</h6>
    <h2 class="font-weight-bolder mb-1">
       34 / 45
    </h2>
    <!-- chart -->
    <vue-apex-charts
      height="70"
      :options="statisticsProfit.chartOptions"
      :series="[{ name : 'نسبة الإجابة' , data : 45 }]"
    />
  </b-card>
  </b-container>
</template>

<script>
import {
  BCard,
  BCardHeader,
  BCardTitle,
  BCardText,
  BCardBody,
  BRow,
  BCol,
  BAvatar,
  BMedia,
  BMediaAside,
  BMediaBody,
} from "bootstrap-vue";

import VueApexCharts from "vue-apexcharts";
import Ripple from "vue-ripple-directive";
export default {
  directives: {
    Ripple,
  },
  components: {
    BRow,
    VueApexCharts,
    BCol,
    BCard,
    BCardHeader,
    BCardTitle,
    BCardText,
    BCardBody,
    BMedia,
    BAvatar,
    BMediaAside,
    BMediaBody,
  },

  data() {
    return {
     statisticsProfit: {
        chartOptions: {
          chart: {

            type: 'line',
            toolbar: {
              show: false,
            },
            zoom: {
              enabled: false,
            },
          },
          grid: {
            
            strokeDashArray: 5,
            xaxis: {
              lines: {
                show: true,
              },
            },
            yaxis: {
              lines: {
                show: false,
              },
            },
            padding: {
              top: -30,
              bottom: -10,
            },
          },
          stroke: {
            width: 3,
          },
          markers: {
            size: 2,
            strokeWidth: 2,
            strokeOpacity: 1,
            strokeDashArray: 0,
            fillOpacity: 1,
            discrete: [
              {
                seriesIndex: 0,
                dataPointIndex: 5,
                fillColor: '#ffffff',
                size: 5,
              },
            ],
            shape: 'circle',
            radius: 2,
            hover: {
              size: 3,
            },
          },
          xaxis: {
            labels: {
              show: true,
              style: {
                fontSize: '0px',
              },
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
          },
          yaxis: {
            show: false,
          },
          tooltip: {
            x: {
              show: false,
            },
          },
        },
      },
    };
  },
};
</script>
