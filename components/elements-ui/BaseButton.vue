<template>
  <button
    class="button is-fullwidth"
    :class="{ [`is-${color}`]: color, ['is-outlined']: outlined }"
    @click="$emit('click', $event)"
  >
    <span class="icon is-small" v-if="icon">
      <i :class="`fas fa-${icon}`"></i>
    </span>
    <span>
    <slot>click</slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "BaseButton",

  props: {
    color: {
      type: String,
      required: false,
    },
    outlined: {
      type: Boolean,
      required: false,
    },
    icon: {
      type: String,
      required: false,
    },
  },
};
</script>
