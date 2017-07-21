<template>
 <div>
  <div class="my-1 row">
    <div class="col-6">
      <b-form-fieldset horizontal label="Rows per page" :label-cols="6">
        <b-form-select :options="[{text:5,value:5},{text:10,value:10},{text:15,value:15}]" v-model="perPage">
        </b-form-select>
      </b-form-fieldset>
    </div>
    <div class="col-6">
      <b-form-fieldset horizontal label="Filter" :label-cols="3">
        <b-form-input v-model="filter" placeholder="Type to Search"></b-form-input>
      </b-form-fieldset>
    </div>
  </div>

  <div class="justify-content-center my-1">
    <b-pagination size="md" :total-rows="items.length" :per-page="perPage" v-model="currentPage" />
  </div>

  <!-- Main table element -->
  <b-table  
           :items="items"
           :fields="fields"
           :current-page="currentPage"
           :per-page="perPage"
           :filter="filter"
  >
    <template slot="employee" scope="item">
      {{item.value}} 
    </template>
    <template slot="manager" scope="item">
      {{item.value}} 
    </template>
    <template slot="mEmail" scope="item">
      {{item.value}} 
    </template>
    <template slot="status" scope="item">
      {{item.value?'agreed':'not agreed'}}
    </template>
    <template slot="actions" scope="item">
      <b-btn size="sm" @click="send(item.item)">Send a Email</b-btn>
      <b-btn size="sm" @click="changeS(item.item)">Change Status</b-btn>
    </template>
  </b-table>
<b-btn size="sm" @click="searchAll(items)">Search All</b-btn>

 </div> 
</template>

<script>
export default {
  data() {
    
    return{
    items: [
    ],
    fields: {
      employee: {
        label: 'Employee Name',
        sortable: true
      },
      manager: {
        label: 'Manager Name',
        sortable: true
      },
      status: {
        label: 'Status'
      },
       mEmail: {
        label: 'Manager Email',
        sortable:true
      },
      actions: {
        label: 'Operation'
      }
    },
    currentPage: 1,
    perPage: 5,
    filter: ''
  }
  },
  methods: {
    details(item) {
      alert(JSON.stringify(item));
    },
    
    searchAll(items) {
      this.$http.post('/api/user/searchAll', {
        
      },{}).then((response) => {
        console.log("searchAll res send");
        this.items=response.body;
        console.log(items);
        //console.log(this.items2);
      })
    },
    changeS(item) {
      var status = item.status;
      var employee=item.employee;
      if(status){status=0;item.status=0}else{status=1;item.status=1;}
      this.$http.post('/api/user/setStatus', {
        employee:employee,
        status:status
      },{}).then((response) => {
        console.log(response);
        
      })
    },
    send(item){
      var addr = item.mEmail;
      var manager=item.manager;
      var employee=item.employee;
      this.$http.post('/api/user/send', {
         addr: addr,
        manager:manager,
        employee:employee
       
      },{}).then((response) => {
        console.log(response);
      })
    }
  }
   
}

</script>