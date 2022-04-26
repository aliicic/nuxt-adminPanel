export default {
  async getUsers({ state, commit, dispatch }) {
    try {
      let user = await this.$axios.$get("/users");
      commit("UPDATE_USER", user);
    } catch (e) {
      console.log(e);
    }
  },
};
