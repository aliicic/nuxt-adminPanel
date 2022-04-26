
export default {
  UPDATE_USER: (state, user) => {
    state.users = user;
  },
  DELETE_USER: (state, payload) => {
    state.users.splice(payload, 1);
  },
  ADD_USER: (state, payload) => {
    state.users.push(payload);
  },
};

