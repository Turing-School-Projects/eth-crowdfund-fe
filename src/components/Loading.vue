<template>

  <div class="hello">
    <h1>{{mainMessage}}</h1>
    <div class="main-image">
      <img :src="mainImageSrc">
    </div>
    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
  </div>
</template>

<script>

export default {
  name: 'Loading',
  data() {
    return {
      mainImageSrc: 'https://i.imgur.com/cZftGOD.png?1',
      images: [],
      mainMessage: 'Waiting for Metamask Connection',
      messages: [],
      firstInterval: null,
      secondInterval: null
    }
  },
  created() {
    const self = this
    this.images = [
      {
        id: '1',
        image: 'https://i.imgur.com/cZftGOD.png?1',
        message: 'Waiting for Metamask Connection'
      },
      {
        id: '2',
        image: 'https://i.imgur.com/6I1jB54.png?3',
        message: 'Getting Blockchain Address'
      },
      {
        id: '3',
        image: 'https://i.imgur.com/vy0OuXC.png',
        message: 'Adding Information to Blockchain'
      },
      {
        id: '4',
        image: 'https://i.imgur.com/6I1jB54.png?3',
        message: 'Almost finished ...'
      },
      {
        id: '5',
        // eslint-disable-next-line max-len
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png',
        message: 'Almost finished ...'
      },
      {
        id: '8',
        // eslint-disable-next-line max-len
        image: 'https://i.imgur.com/kwjotxY.png?2',
        message: 'Almost finished ...'
      }
    ]
    this.messages = [
      {
        id: '1',
        message: 'Waiting for Metamask Connection'
      },
      {
        id: '1',
        message: 'Waiting for Metamask Connection'
      },
      {
        id: '2',
        message: 'Connecting Ethereum Blockchain'
      },
      {
        id: '3',
        message: 'Creating New Information'
      },
      {
        id: '3',
        message: 'Adding New Information to Blockchain'
      },
      {
        id: '4',
        message: 'Almost finished ...'
      }
    ]
    let i = 0
    let j = 0
    this.firstInterval = setInterval(
      /* eslint-disable-next-line */
      function() { 
        if (j > 2) {
          self.mainImageSrc = self.images[(i % 2) + 4].image;
        } else {
          self.mainImageSrc = self.images[i % 4].image;
        }
        i += 1
      }, 1000
    );
    this.secondInterval = setInterval(
      /* eslint-disable-next-line */
      function() { 
        self.mainMessage = self.messages[j].message;
        if (j < 4) {
          j += 1
        }
      }, 5000
    );
  },
  unmounted() {
    clearInterval(this.firstInterval)
    clearInterval(this.secondInterval)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

img {
  width: 20vh;
  height: 20vw;
}
.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}

.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}

.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}

.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}

.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
