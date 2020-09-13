<template>
  <button>{{ text }}</button>
</template>

<script>
export default {
  name: 'basicButton',
  props: ['text']
}
</script>

<style scoped lang='scss'>
@import '../_variables.scss';

button {
  box-shadow: 2px 2px 8px $gray;
  font-size: 21px;
  margin: 1.3rem 0 0.3rem 0;
}

</style>
