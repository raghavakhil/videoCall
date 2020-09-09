const express = require('express');
const videoRouter = express.Router();
const AgoraRTC = require('agora-rtc-sdk')

/* GET home page. */
videoRouter.get('/', (req, res)  => {
  res.sendFile('index.html',{ root: __dirname })
});

module.exports = videoRouter;