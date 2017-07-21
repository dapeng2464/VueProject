<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!--form>
      <input type="text" name="username" v-model="userName"> <br>
      <input type="text" name="age" v-model="age"> <br>
      <a href="javascript:;" @click="addUser">addUser</a>
      <a href="javascript:;" @click="searchAll">searchAll</a>
      
    </form-->
    <div>
    <myTable></myTable>
    </div>

    <hr>
    <h2>my project</h2>
    
  </div>
</template>

<script>
import myTable from'./Table'


export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome ',
      userName: '',
      age: '',
      ageGet:'',
      nameCheck:'',
      
    }
  },
  components:{
    myTable
  },
  methods: {
    addUser() {
      var name = this.userName;
      var age = this.age;
      this.$http.post('/api/user/addUser', {
        username: name,
        age: age
      },{}).then((response) => {
        console.log(response);
      })
    },
    searchAll() {
      var name = this.userName;
      var age = this.age;
      this.$http.post('/api/user/searchAll', {
         username: name,
        age: age
      },{}).then((response) => {
        console.log("searchAll res send");
        console.log(response);
      })
    },
    
    send(){
      var name = this.userName;
      var age = this.age;
      this.$http.post('/api/user/send', {
         username: name,
        age: age
       
      },{}).then((response) => {
        console.log(response);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
