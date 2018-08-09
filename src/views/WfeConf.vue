<template>
  <div>
    <banner></banner>
    <conf-info
      :config = config.confInfo>
    </conf-info>
    <teacher
      :config = config.teacher.config
      :lists = config.teacher.lists>
      </teacher>
    <time-line
      :config = config.timeLine.config
      :lists = config.timeLine.lists>
    </time-line>
  </div>
</template>


<script>

import config from '../configTxt'
import Banner from '@/components/Banner'
import ConfInfo from '@/components/ConfInfo'
import Teacher from '@/components/Teacher'
import TimeLine from '@/components/TimeLine'
// import ActivityShow from '@/components/ActivityShow'
// import PlaceInfo from '@/components/PlaceInfo'
// import LinkUs from '@/components/LinkUs'
export default {
  name: 'WfeConf',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      config: config
    }
  },
  components: {
    Banner,
    ConfInfo,
    Teacher,
    TimeLine,
  },
}
</script>

<style scoped>

</style>
