<template>
  <div class="field">
    <p class="control" :class="{ 'has-icons-left': icon }">
      <input
        class="input"
        :class="{ [`is-${color}`]: color }"
        type="text"
        :placeholder="placeholder"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      />
      <span class="icon is-small is-left" v-if="icon">
        <i :class="`fas fa-${icon}`"></i>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "BaseInput",

  props: {
    color: {
      type: String,
      required: false,
    },
    icon: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
    value: {
      type: String,
    },
  },
};
</script>

<style></style>
