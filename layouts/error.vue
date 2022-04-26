<template>
  <div>
    <p>we have some errors</p>

    <p style="color:red">the error message is {{ error.message }}</p>
    <p style="color:blue">the error status code is {{ error.statusCode }}</p>
  </div>
</template>

<script>
export default {
  layout: "errorLayout",

  data : ()=> ({

   error : ''

  }),

  props :['error']
};
</script>

<style></style>
