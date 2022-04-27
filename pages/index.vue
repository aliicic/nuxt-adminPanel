<template>
  <div>
    <div class="container banner">
      <div class="column is-one-fifth">
        <nuxt-link class="button is-primary" to="panel/general" style="color:white">View demo</nuxt-link>
      </div>
      <div class="column is-one-fifth">
        <a href="#down" class="button is-primary is-outlined" color="primary " outlined>   
        Ui-Kit
        </a>
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
a{
  disabled:block;
  width:200px;
}
</style>
