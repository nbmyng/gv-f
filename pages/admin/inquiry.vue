<template>
  <div>
    <h2>{{ Inquirydata[$route.params.id].title }}</h2>
    <div style="font-size: large">
      Q: {{ Inquirydata[$route.params.id].question }}
    </div>
    <div style="font-size: large">
      A: {{ Inquirydata[$route.params.id].answer }}
    </div>
  </div>
</template>

<script type="module">
import Inquirydata from '../../assets/data/Inquirydata'
export default {
  name: 'Inquiry',
  layout: 'Admin',
  data () {
    return {
      Inquirydata
    }
  }
}
</script>
