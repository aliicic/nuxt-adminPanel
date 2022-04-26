export default {
  async getPosts({ state, commit, dispatch }) {
    try {
      let post = await this.$axios.$get("/posts");
      commit("UPDATE_POSTS", post);
    } catch (e) {
      console.log(e);
    }
  },
};
