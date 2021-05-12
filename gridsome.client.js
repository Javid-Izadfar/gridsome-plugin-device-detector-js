export default function (Vue, options) {
  if(process.isClient) {
    const { default: device } = require('vue-device-detector-js')

    Vue.use(device, options)
  }
}