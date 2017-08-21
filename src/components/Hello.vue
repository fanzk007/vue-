<style scoped>
</style>
<template>
  <div>1313</div>
</template>

<script>
import { deviceId } from './../tools/toolsMethod'
import { accessToken } from './../api/api'
export default {
  data () {
    return {
    }
  },
  mounted: function () {
    console.log(process.env)
    var obj = {
      device_id: deviceId(),
      token_type: 'mp',
      HTTP_API_VERSION: 4.1
    }
    accessToken(obj).then(data => {
      console.log(data)
    })
  }
}
</script>

