<template>
  <div class="button">
    <router-link to="/dashboard">
      <b-button>{{msg}}</b-button>
    </router-link>
  </div>
</template>

<style lang="less">
.button {
  margin: 50px 0px 50px 0px;
}
</style>

<script>
export default {
  name: "Button",
  props: {
    msg: String,
    link: String
  }
};
</script>
