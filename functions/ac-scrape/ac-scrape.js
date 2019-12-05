const request = require('request-promise');
const cheerio = require('cheerio')

exports.handler = async (event, context) => {
  console.log('Hello ac-scrape')
  console.log('POST Request to login on the form');
  let loginRequest = await request({
    uri: 'http://assetconnects.com/',
    method: 'POST',
    headers: {
      'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
      'Accept-Encoding':'gzip, deflate',
      'Accept-Language':'en-US,en;q=0.9',
      'Cache-Control':'max-age=0',
      'Connection':'keep-alive',
      'Content-Length':'121',
      'Content-Type':'application/x-www-form-urlencoded',
      'Cookie':'has_js=1; Drupal.toolbar.collapsed=0',
      'Host':'assetconnects.com',
      'Origin':'http://assetconnects.com',
      'Referer':'http://assetconnects.com/',
      'Upgrade-Insecure-Requests':'1',
      'User-Agent':'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Mobile Safari/537.36'
    },
    form: {
      'username': 'luke',
      'password': 'm0cyRPq2#n5d'
    },
    resolveWithFullResponse: true
  })
  debugger;
};
