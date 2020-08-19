const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());
app.get("/:device/empty", (req, res)=>{
  if (!isDeviceID(req.params.device)){
    return res.status(400).send();
  }
  return res.status(204).send();
})
app.get("/:device/:data", (req, res)=>{
  if (!isDeviceID(req.params.device) || !isValidDownlinkData(req.params.data)){
    return res.status(400).send();
  }
  var response = {};
  response[req.params.device] = req.params.data;
  res.status(200).json(response)
});
app.get("*", (req, res) => {
  res.status(404).send();
});
app.post("*", (req,res)=>{
  res.status(501).send();
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function isDeviceID(deviceId){
  return /^([0-F]*)$/i.test(deviceId)
}
function isValidDownlinkData(data){
  return /^([0-F]{16})$/i.test(data)
}
