var _ = require('lodash')
var peeps = [{
  "id": 1,
  "first_name": "Carolyn",
  "last_name": "Elliott",
  "email": "celliott0@elpais.com",
  "gender": "Female",
  "ip_address": "128.136.209.247"
}, {
  "id": 2,
  "first_name": "Roy",
  "last_name": "Kim",
  "email": "rkim1@altervista.org",
  "gender": "Male",
  "ip_address": "83.29.106.111"
}, {
  "id": 3,
  "first_name": "Andrew",
  "last_name": "Morrison",
  "email": "amorrison2@huffingtonpost.com",
  "gender": "Male",
  "ip_address": "28.67.57.85"
}, {
  "id": 4,
  "first_name": "Beverly",
  "last_name": "Elliott",
  "email": "belliott3@tripod.com",
  "gender": "Female",
  "ip_address": "214.223.114.209"
}, {
  "id": 5,
  "first_name": "Amanda",
  "last_name": "Hicks",
  "email": "ahicks4@google.com.au",
  "gender": "Female",
  "ip_address": "196.171.252.183"
}, {
  "id": 6,
  "first_name": "Raymond",
  "last_name": "Berry",
  "email": "rberry5@rakuten.co.jp",
  "gender": "Male",
  "ip_address": "13.105.10.121"
}, {
  "id": 7,
  "first_name": "Jonathan",
  "last_name": "Jenkins",
  "email": "jjenkins6@123-reg.co.uk",
  "gender": "Male",
  "ip_address": "117.43.61.224"
}, {
  "id": 8,
  "first_name": "Wayne",
  "last_name": "Bennett",
  "email": "wbennett7@earthlink.net",
  "gender": "Male",
  "ip_address": "235.17.119.211"
}, {
  "id": 9,
  "first_name": "Craig",
  "last_name": "Carroll",
  "email": "ccarroll8@japanpost.jp",
  "gender": "Male",
  "ip_address": "6.210.41.217"
}, {
  "id": 10,
  "first_name": "Phillip",
  "last_name": "Anderson",
  "email": "panderson9@163.com",
  "gender": "Male",
  "ip_address": "213.171.25.157"
}]

var females = _.filter(peeps, {gender: "Female"}).length

// alert('female count: '+ females)
console.log('******module1*******');
