<template>
  <div class="hi">
  <p>Hi {{manager}}, {{ msg }} {{employee}} ?</p>
    
    <b-btn size="sm" @click="confirm(employee)">confirm</b-btn>
    
    
    
  </div> 
</template>

<script>
export default {
  name: 'hi',
  data () {
    return {
      msg: 'Do you want confirm ',
      employee:this.$route.query.eName,
      manager:this.$route.query.mName
    }
  },
  methods:{
    confirm(employee) {
      var name = this.employee;
      var status = 1;
      this.$http.post('/api/user/setStatus', {
        employee:name,
        status:status
      },{}).then((response) => {
        console.log(response);
        
      })
    },
  }
}
</script>