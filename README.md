# Sigfox quick downlink

Basic nodejs app, serving downlink-formatted response for Sigfox devices.

## Usage

`GET /:deviceID/:expectedData` to get a JSON response matching your request. Will fail with a 400 if input doesn't match expectations : device ID is an hex value, and expectedData should be a 8-bytes hex string

`GET /:deviceID/empty` to get a `HTTP 204` response, which the Sigfox cloud will ignore

## Try

Demo instance is available at https://sigfox-quick-downlink.herokuapp.com

You can try the following :
* ✅ - HTTP 200 (application/json) -  `curl -X GET https://sigfox-quick-downlink.herokuapp.com/1234/0123456789ABCDEF`
* ✅ - HTTP 204 - `curl -X GET https://sigfox-quick-downlink.herokuapp.com/1234/empty`
* 🛑 - HTTP 400 - `curl -X GET https://sigfox-quick-downlink.herokuapp.com/1234/01234`
