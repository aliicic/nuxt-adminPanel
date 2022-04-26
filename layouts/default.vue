<template>
  <div class="columns">
    <div class="column is-one-fifth side-bar" id="side">
      <i class="fa-solid fa-xmark nav-btn" @click="showMenu = !showMenu"></i>
      <h2 class="title is-2">welcome</h2>
      <ul class="menu-item">
        <li>
          <NuxtLink :to="{name:'panel-general'}">
            <i class="fa-solid fa-gauge"></i>
            General</NuxtLink
          >
        </li>
        <li>
          <NuxtLink :to="{name : 'panel-posts'}">
            <i class="fa-solid fa-paste"></i>
            Post</NuxtLink>
        </li>
        <li>
          <NuxtLink :to="{name : 'panel-users'}">
            <i class="fa-solid fa-user-group"></i>
            Users</NuxtLink
          >
        </li>
      </ul>
    </div>
    <!-- <div class="column is-one-fifth">

    </div> -->
    <div class="column is-four-fifths content">
      <i
        class="fa-solid fa-bars nav-btn-open"
        @click="showMenu = !showMenu"
      ></i>
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    showMenu: true,
  }),

  methods: {
    open() {
      sidebar.style.opacity = 0.5;
    },
  },

  watch: {
    showMenu: {
      handler() {
        let sidebar = document.getElementById("side").classList;
        if (this.showMenu) {
          sidebar.add("site-menubar-open");
        } else {
          sidebar.remove("site-menubar-open");

        }
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.side-bar {
  padding: 40px;
  padding-top: 20px;
  position: fixed;
  background: #f1f1f1;
  height: 100vh;
  top: 0px;
  max-height: calc(100% - 0px);
  transform: translateX(0%);
  transition: 0.4s transform;
  // width: 256px;
  z-index: 10;
  .title {
    font-size: 20px;
  }
  .nav-btn {
    @media (max-width: 992px) {
      display: block;
    }
    text-align: right;
    display: none;
    padding-right: 10px;
  }
  @media (max-width: 992px) {
    transform: translateX(-100%);
    padding-right: 10px;
  }

  .menu-item {
    li {
      padding: 10px;
      transition: 0.4s all;
      border-radius: 10px;
      cursor: pointer;

      &:hover {
        background: #4340da;
        color: white;
      }
      a {
        color: unset;
        display: block;

      }

    }
  }
}
.site-menubar-hide {
  transform: translateX(-100%);
}
.site-menubar-open {
  transform: translateX(0%) !important;
}
.content {
  padding: 40px;
  margin-left:auto;

  .nav-btn-open {
    display: none;
    @media (max-width: 992px) {
      display: block;
      top: -17px;
      left: 31px;
      position: relative;
    }
  }
}
</style>
