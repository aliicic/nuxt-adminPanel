<template>
  <div class="container">
    <h3 class="title is-3">users</h3>
    <div class="columns">
      <div class="column is-three-quarters">
        <BaseInput
          color="primary"
          icon="search"
          placeholder="search something"
        />
      </div>
      <div class="column is-one-fifth">
        <BaseButton color="primary" @click.prevent="handleAddUser"
          >add user</BaseButton
        >
      </div>
    </div>

    <div class="box">
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
          <tr v-for="(item, index) in users" :key="item.id">
            <th>{{ index + 1 }}</th>
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
            <td>
              <i class="fa-solid fa-trash-can" @click="handleDelete(index)"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="modal" id="modal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">add user</p>
          <button
            class="delete"
            aria-label="close"
            @click="showModal = false"
          ></button>
        </header>
        <section v-if="addUserStatus" class="modal-card-body">
          <BaseInput
            icon="user"
            placeholder="name"
            color="primary"
            v-model="user.name"
          />
          <BaseInput
            icon="envelope"
            placeholder="email"
            color="primary"
            v-model="user.email"
          />
        </section>
        <section v-if="deleteUserStatus" class="modal-card-body">
          <h5>are you sure to delete this user </h5>
        </section>
        <footer class="modal-card-foot">
          <button v-if="addUserStatus" class="button is-primary" @click="addUser">Add</button>
          <button v-if="deleteUserStatus" class="button is-primary" @click="deleteUser">yes</button>
          <button class="button" @click="showModal = false">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "~/components/elements-ui/BaseButton.vue";
import BaseInput from "~/components/elements-ui/BaseInput.vue";
export default {
  name: "users",
  components: {
    BaseButton,
    BaseInput,
  },

  head() {
    return {
      title: "users",
    };
  },
  data() {
    return {
      showModal: false,
      user: {
        name: "",
        email: "",
      },
      editedIndex: "",
      deleteUserStatus: false,
      addUserStatus: false,
    };
  },
  computed: {
    users() {
      return this.$store.state.users.users;
    },
  },

  methods: {
    addUser: function () {
      this.$store.dispatch("users/addUsers", this.user);
      this.showModal = false;
    },
    deleteUser: function () {
      this.$store.dispatch("users/deleteUsers", this.editedIndex);
      this.showModal = false;
    },
    handleDelete: function (index) {
      this.showModal = true;
      this.editedIndex = index
      this.deleteUserStatus = true;
      this.addUserStatus = false;
    },
    handleAddUser: function () {
      this.showModal = true;
      this.addUserStatus = true;
      this.deleteUserStatus = false;

    },
  },
  watch: {
    showModal: {
      handler() {
        let sidebar = document.getElementById("modal").classList;
        if (this.showModal) {
          sidebar.add("is-active");
        } else {
          sidebar.remove("is-active");
        }
      },
    },
  },

  async fetch() {
    await this.$store.dispatch("users/getUsers");
  },
};
</script>

<style lang="scss" scoped>
i {
  cursor: pointer;
}
</style>
