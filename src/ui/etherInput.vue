<template>
  <div class='eth-input'>
    <input id='eth-value'
      type='number' step='0.0001' min='0'
           :value="value" @change="$emit('update:value', $event.target.value)"
      />
    <p class='coin'>ETH</p>
    <p class='text'><i>That's roughly ${{ value * exchangeRate }}</i></p>
  </div>
</template>

<script>
export default {
  name: 'EtherInput',
  props: ["value"],
  created() {
    this.$store.dispatch('fetchExchangeRate')
  },
  computed: {
    exchangeRate() {
      return this.$store.state.exchangeRate
    }
  }
}
</script>

<style scoped lang='scss'>

.eth-input {
  display: grid;
  margin-bottom: 8px;
  grid-template-areas:
        "value coin"
        "text .";

  #eth-value {
    grid-area: value;
    padding: 0px;
    margin: 0px;
    width: 47vw;
  }

  .coin {
    align-self: center;
    grid-area: coin;
    margin: 0px;
    padding: 0px;
  }

  .text {
    grid-area: text;
    margin: 0px;
    padding: 0px;
  }
}
</style>
