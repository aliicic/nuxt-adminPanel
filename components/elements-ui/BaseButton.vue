<template>
<button class="button is-fullwidth"
:class ="{[`is-${color}`] : color ,
['is-outlined'] : outlined,

}"
>
<slot>click</slot>
</button>
</template>

<script>
export default {
  name : 'BaseButton',

  props:{
    color : {
      type: String,
      required: false,
    },
    outlined : {
      type: Boolean,
      required: false,
    },

    // disabled : {
    //   type: Boolean,
    //   required: false,
    // }

  }
}
</script>

<style lang="scss" scope>

// @import "bulma/sass/utilities/_all.sass";
// @import "bulma/sass/elements/button.sass";

// .is-primary{

//   background: #0832DE!important;

// }


</style>
