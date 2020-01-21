<template lang="pug">
  Layout
    .cert-view
      section.section
        .container
          #certificateContainer.full-width
            canvas#backgroundCanvas(width="800" height="600")
            canvas#logoCanvas(width="800" height="600")
            canvas#textCanvas(width="800" height="600")
      
      section.section
        .container.center
          a.btn(@click="printCert()") Print

          
  
</template>

<style lang="scss">
#certificateContainer {
  height: 600px;
  border-radius: 50px;
  canvas {
    position: absolute;
  }
  overflow: hidden;
}
</style>

<script>
import Layout from '@/components/Layout.vue'

export default {
  name: 'cert-view',
  components: {
    Layout
  },
  data() {
    return {
      certificateContainer: '',
      backgroundCanvas: '',
      logoCanvas: '',
      textCanvas: '',
      width: 0,
      height: 0
    }
  },
  mounted() {
    this.createCanvas()
    this.drawBackground()
    this.drawLogo()
    this.drawText()
  },
  methods: {
    createCanvas() {
      this.certificateContainer = document.querySelector(
        '#certificateContainer'
      )

      // this.width = this.certificateContainer.offsetWidth
      // this.height = (this.certificateContainer.offsetWidth * 3) / 4

      this.width = 800
      this.height = 600

      this.certificateContainer.style.marginLeft =
        (this.certificateContainer.offsetWidth - this.width) / 2 + 'px'
      this.certificateContainer.setAttribute('width', this.width)
      this.certificateContainer.classList.remove('full-width')

      // this.backgroundCanvas = document.createElement('canvas')
      this.backgroundCanvas = document.getElementById('backgroundCanvas')
      // this.backgroundCanvas.setAttribute('width', this.width)
      // this.backgroundCanvas.setAttribute('height', this.height)
      // this.backgroundCanvas.setAttribute('id', 'backgroundCanvas')

      // this.logoCanvas = document.createElement('canvas')
      this.logoCanvas = document.getElementById('logoCanvas')
      // this.logoCanvas.setAttribute('width', this.width)
      // this.logoCanvas.setAttribute('height', this.height)
      // this.logoCanvas.setAttribute('id', 'logoCanvas')

      // this.textCanvas = document.createElement('canvas')
      this.textCanvas = document.getElementById('textCanvas')
      // this.textCanvas.setAttribute('width', this.width)
      // this.textCanvas.setAttribute('height', this.height)
      // this.textCanvas.setAttribute('id', 'textCanvas')

      // this.certificateContainer.appendChild(this.backgroundCanvas)
      // this.certificateContainer.appendChild(this.logoCanvas)
      // this.certificateContainer.appendChild(this.textCanvas)
    },

    drawBackground() {
      const ctx = this.backgroundCanvas.getContext('2d')
      const { width, height } = this
      const img = new Image() // Create new img element
      img.addEventListener(
        'load',
        function() {
          // execute drawImage statements here
          ctx.drawImage(img, 0, 0, width, height)
        },
        false
      )
      img.src = '/images/office.jpg' // Set source path
    },

    drawLogo() {
      const ctx = this.logoCanvas.getContext('2d')

      const img = new Image()
      img.addEventListener(
        'load',
        function() {
          ctx.drawImage(img, 0, 0)
        },
        false
      )
      img.src = '/images/logo.png'
    },
    drawText() {
      const ctx = this.textCanvas.getContext('2d')
      ctx.font = '48px serif'
      ctx.fillText('Hello world', 10, 50)
    },
    printCert() {
      const divContents = document.getElementById('certificateContainer')
        .innerHTML
      const a = window.open('', '', 'height=600, width=800')
      a.document.write('<html>')
      a.document.write('<body > <h1>Div contents are <br>')
      a.document.write(divContents)
      a.document.write('</body></html>')
      a.document.close()
      a.print()
    }
  }
}
</script>
