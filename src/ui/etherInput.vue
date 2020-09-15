<template>
  <div class='eth-input'>
    <input id='eth-value'
      type='number' step='0.0001' min='0'
           :value="value" @change="$emit('update:value', $event.target.value)"
      />
    <p class='coin' id='coin'>ETH</p>
    <p class='text'>
      <i>That's roughly ${{ (value * exchangeRate).toFixed(2) }}</i>
    </p>
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
  grid-template-columns: 13rem 3rem 13rem;
  grid-template-areas:
        "value coin text";

  #eth-value {
    grid-area: value;
    padding: 0px;
    margin: auto;
    width: 90%;
  }

  .coin {
    grid-area: coin;
    padding: 0px;
    text-align: center;
    margin: auto;
  }

  .text {
    grid-area: text;
    justify-self: start;
    margin-right: 2rem;
    padding: 0px;
    margin-top: 0;
  }
}
</style>
