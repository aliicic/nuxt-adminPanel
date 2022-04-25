<template>
  <div>
    <div class="container banner">
      <div class="column is-one-fifth">
        <base-button color="primary "> View demo </base-button>
      </div>
      <div class="column is-one-fifth">
        <base-button color="primary " outlined> Ui-Kit </base-button>
      </div>
    </div>
    <UiKit />
  </div>
</template>

<script>
import BaseButton from "~/components/elements-ui/BaseButton.vue";
export default {
  components: { BaseButton },
  name: "IndexPage",
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
