/*
Program by Sethu Senthil

Website: sethusenthil.com
Github: @sethusenthil
TikTok: @sethusenthil
Instagram: @sethui9

*/

/*config*/
const
 userName = 'sethusenthil',  //your tiktok username
 checkInterval = 1000, //miliseconds
 onFollowerChange = (currentCount) => {  //function to run when increase
    console.log('current count: ' + currentCount)
 },
 logging = true;  //log outputs
/*config*/

const fetch = require('node-fetch')

const log = (log) =>{
  if(logging)
    console.log(log)
}

let prevCount = 0;

setInterval(function(){

    fetch("https://www.tiktok.com/@" + userName, {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "en-US,en;q=0.9",
    "cache-control": "max-age=0",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13C75 Safari/601.1"
  },
  "referrerPolicy": "no-referrer-when-downgrade",
  "body": null,
  "method": "GET",
  "mode": "cors"
}).then(response => response.text())
.then(data => {
   let currentCount = data.split(` Likes. `)[2].split(' Fans.')[0]

   currentCount = parseFloat(currentCount)
   log(currentCount)

   if(currentCount != prevCount){
       log('Detected Follower Change')
       onFollowerChange(currentCount)
       prevCount = currentCount
   }

});

  }, checkInterval);