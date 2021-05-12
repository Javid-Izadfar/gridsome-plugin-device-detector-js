# Device Detector for Gridsome

Gridsome wrapper for [vue-device-detector-js](https://github.com/Xceldeveloper/vue-device-detector-js)

## Installation
```
yarn add gridsome-plugin-device-detector-js
```
or

```
npm i gridsome-plugin-device-detector-js
```

## Usage
Add the plugin to `plugins` array at `gridsome.config.js`:
```
module.exports = {
    plugins: [
        //... - other plugins
        {
            use: 'gridsome-plugin-device-detector-js',
        }
    ]
}
```