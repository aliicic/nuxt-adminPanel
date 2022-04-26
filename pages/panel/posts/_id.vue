<template>
  <div>
    <h1 v-if="!post" class="box is-5">{{ posts.title }}</h1>
    <p v-if="!post" class="box">{{ posts.body }}</p>
    <h1 v-if="post" class="box is-5">{{ post.title }}</h1>
    <p v-if="post" class="box">{{ post.body }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.state.posts.posts;
    },
    post() {
      if (this.posts.length > 0) {
        return this.posts.find((el) => el.id === this.id);
      }
    },
  },
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  async fetch() {
    if (!this.post) {
      await this.$store.dispatch("posts/getPost", this.id);
    }
  },
};
</script>

<style></style>
