<template>
  <div>
    <div class="container banner">
      <div class="column is-one-fifth">
        <base-button class="blue-color" color="primary ">
        <nuxt-link to="panel/general" style="color:white">View demo</nuxt-link>
        </base-button>
      </div>
      <div class="column is-one-fifth">
        <base-button color="primary " outlined>
        <a href="#down">
        Ui-Kit
        </a>
        </base-button>
      </div>
    </div>
    <UiKit id="down"/>
  </div>
</template>

<script>
import BaseButton from "~/components/elements-ui/BaseButton.vue";
export default {
  components: { BaseButton },
  name: "IndexPage",
  layout:'intro'
};
</script>
<style>
.banner {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;

}

</style>
