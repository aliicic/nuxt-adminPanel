<template>
  <div class="container">
    <h3 class="title is-3">users</h3>
    <table class="table is-hoverable">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
        </tr>
      </tfoot>
      <tbody>
        <p v-if="$fetchState.pending">is loading</p>
        <p v-if="$fetchState.error">we have some errors</p>
        <tr v-for="(item , index) in users" :key="item.id">
          <th>{{ index+1 }}</th>
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {

   name: 'users',

     head(){
    return{
      title : 'users'
    }
  },
    computed: {
    users() {
      return this.$store.state.users.users;
    },
  },

  async fetch() {
    await this.$store.dispatch("users/getUsers");
  },

  mounted() {
    this.$fetch;
  },

}
</script>

<style>

</style>
