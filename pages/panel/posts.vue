<template>
  <div class="container">
    <h3 class="title is-3">posts</h3>
    <table class="table">
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>id</th>
          <th>title</th>
        </tr>
      </tfoot>
      <tbody>
        <p v-if="$fetchState.pending">is loading</p>
        <p v-if="$fetchState.error">we have some errors</p>
        <tr v-for="item in posts" :key="item.id">
          <th>{{ item.id }}</th>
          <td>{{ item.title }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "posts",
  head() {
    return {
      title: "posts",
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts.posts;
    },
  },

  async fetch() {
    await this.$store.dispatch("posts/getPosts");
  },

  mounted() {
    this.$fetch;
  },
};
</script>

<style></style>
