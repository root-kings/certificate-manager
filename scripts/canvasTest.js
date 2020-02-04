const fs = require('fs')
const { createCanvas, Image } = require('canvas')
var QRCode = require('qrcode')

const WIDTH = 1600
const HEIGHT = 1200

const canvas = createCanvas(WIDTH, HEIGHT, 'pdf')
const ctx = canvas.getContext('2d')

// Draw background

const img = fs.readFileSync('certificate-templates/certificate1.png')
const image = new Image()
image.src = img
ctx.drawImage(image, 0, 0, WIDTH, HEIGHT)

// Write name
ctx.font = 'italic 36px Impact'
ctx.fillText('Aditi Sulke', 230, 720)

// Write date
ctx.font = '28px Impact'
ctx.fillText('22nd June 2019', 232, 1070)

// Write event
ctx.font = 'bold 36px Impact'
ctx.fillText('Flutter Interact', 700, 885)

// Draw qr
QRCode.toDataURL(
  'https://dscghrce.herokuapp.com/certificate/5e06397a69019a0baaf9cdab',
  { width: 198 },
  function(err, url) {
    const qrimage = new Image()
    qrimage.onload = () =>
      ctx.drawImage(qrimage, WIDTH - 250, HEIGHT - 250, 198, 198)
    qrimage.src = url

    // console.log(qrimage)

    // Write file
    const out = fs.createWriteStream(__dirname + '/test.pdf')

    const stream = canvas.createPDFStream()
    stream.pipe(out)

    out.on('finish', () => console.log('The PDF file was created.'))
  }
)
