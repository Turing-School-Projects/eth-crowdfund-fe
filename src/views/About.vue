<template>
  <div class="about">
    <section class='tabs'>
      <div @click="view = 'how-to'" v-bind:class="{ active: view === 'how-to' }">How
        to?</div>
      <div @click="view = 'why'" v-bind:class="{ active: view === 'why' }">Why
        use EthoBoost?</div>
      <div @click="view = 'technologies'" v-bind:class="{ active: view === 'technologies'
        }">Technologies</div>
      <div @click="view = 'contributors'" v-bind:class="{ active: view ===
        'contributors' }">Contributors</div>
    </section>
    <section class="tab-view">
    <section v-if="view === 'how-to'" v-bind:class="{ active: userView }">
      <HowTo />
    </section>
    <section v-if="view === 'why'">
      <h2>Why use Ethereum?</h2>
      <p>EthoBoost identifies several major problems with the crowdfunding industry
        and aims to fix them.
      </p>
      <p>
        <b>Trust:</b> Potential donors are less likely to contribute to funds run
        by unknown brands because once the funds are recieved, they have no say in
        how the money is spent and have no reason to trust that the fund manager will spend the funds
        . EthoBoost give donors the power to review and approve
        requests to withdraw the funds before the manager can complete each withdrawal.
        Fund managers set the minimum value that a donor must contribute in order
        to have approval rights for that fund. When a contributor donates a value
        higher than that threshold they become an approver of that campaign. Any time
        a fund manager wants to withdraw money they do so by creating a request to
        withdraw. In order for that request to go through and the funds to be distributed
        the request has to be approved by over 50% of approver for the campaign.
      </p>
      <p>
        <b>Borderless:</b>Our current financial system makes it extremely difficult
        to send and receive money across borders resulting in high fees to wire money
        internationally. Many crowdfunding platforms are restricted to their home country
        and others charge an extra fee for international transactions. EthoBoost is
        built on the Ethereum blockchain which means you don't need a bank accunt
        from any specific country to transact on EthoBoost.
      </p>
      <p>
        <b>Transactions(Fees and time):</b>  Crowdfunding platforms generally charge
        a transaction fee of around 5%. These transactions take at least 3-5 business
        days to complete. Transactions on EthoBoost, facilitated by the Ethereum blockchain,
        cost less than 1 cent and complete in 30 seconds or less.
      </p>
      <p>
        <b>Decentralized:</b> The Ethereum blockchain powers our payment system
        which means all of the financial transactions happen peer to peer. We don't
        need your bank account information and we don't have direct access to any of
        the funds stored in the campaigns on our platform. If anything were to happen
        to our application, the funds would continue to exist on the blockchain.
      </p>
      <p>
        <b>Transparency???:</b>
      </p>
      <p>
        <b>Anonymous???:</b>
      </p>
      <p>
        <b>Permanent???:</b>
      </p>
    </section>
    <section v-if="view === 'technologies'" class='about-content'>
      <h2>Turing School of Software & Design Capstone Project</h2>
      <p>The final project at Turing school is a full-stack venture to create an app
        around an idea pitched by one of the students. Our goal was to develop a
        crowdfunding dApp that made use of blockchain technology.
      </p><p>
        We had two weeks to
        wireframe a front-end to interact with the blockchain and a back-end to supplement
        it. We decided to use <b>Python</b> (+ ...other technologies) for our database and
        <b>Vue</b> (+ ...other technologies) for our front-end. To interact with the blockchain,
        the truffle framework/environment was used.<b>*None of these technologies were
        explicitly taught at Turing*</b>
      </p>
      <h3>Why use blockchain?</h3>
      <h3>Working wiht the blockchain</h3>
      <h3>Back-End Technologies</h3>
      <h3>Front-End Technologies</h3>
    </section>
    <section v-if="view === 'contributors'">
      <Contributors class='sidebar'/>
    </section>
    </section>
    </div>
</template>

<script>
import Contributors from "@/components/About/Contributors.vue"
import HowTo from "@/components/About/howTo.vue"

export default {
  name: 'About',
  components: {
    Contributors,
    HowTo
  },
  data() {
    return {
      view: 'how-to'
    }
  }
}
</script>

<style lang='scss'>
@import "../_variables.scss";

.about {
  margin: auto;
  margin-top: 3rem;
  display: flex;
  flex-flow: column;
  width: 90vw;
}

.tabs > div {
  position: relative;
  display: inline-block;
  padding: .4em 1em 0;
  margin-bottom: .3em;
}

.tabs > div::before {
  content: '';
  position: absolute;
  top: 0; right: -13px; bottom: 0; left: -13px;
  z-index: -1;
  background: #ccc;
  background-image: linear-gradient(
                      hsla(0,0%,100%,.6),
                      hsla(0,0%,100%,0));
  border: 1px solid rgba(0,0,0,.4);
  border-bottom: none;
  border-radius: 0 .15em white inset;
  transform: scaleY(1.3) perspective(.5em) rotateX(5deg);
  transform-origin: bottom;
  height: 2rem;
}

  .tab-view {
    border: 3px solid black;
  }
</style>
