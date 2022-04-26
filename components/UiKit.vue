<!-- Please remove this file from your project -->
<template>
  <div class="box container">
    <h6 class="title is-4">Buttons</h6>
    <div class="columns">
      <div class="column">
        <BaseButton color="primary">click me</BaseButton>
      </div>
      <div class="column">
        <BaseButton color="primary" outlined>click me</BaseButton>
      </div>
      <div class="column">
        <BaseButton color="white">click me</BaseButton>
      </div>
      <div class="column">
        <BaseButton color="warning" outlined>click me</BaseButton>
      </div>
      <div class="column">
        <BaseButton disabled>click me</BaseButton>
      </div>
      <div class="column">
        <BaseButton color="primary">click me</BaseButton>
      </div>
    </div>

    <h6 class="title is-4">inputs</h6>
    <div class="columns">
      <div class="column">
        <BaseInput color="primary" icon="search" placeholder="hello" />
      </div>
      <div class="column">
        <BaseInput placeholder="search" />
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "./elements-ui/BaseButton.vue";
import BaseInput from "./elements-ui/BaseInput.vue";
export default {
  name: "NuxtTutorial",
  components: {
    BaseButton,
    BaseInput,
  },
};
</script>
