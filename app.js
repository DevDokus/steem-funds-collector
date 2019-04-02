// Steemit Fund Collector by steemit.com/@devske
// --------------------------------------------- \\
const log = require('chalk');
var _ = require('./assets/require.js');

/*
For install and use guidance / help, 
visit the Github Page!
https://github.com/mr-piffles/steem-funds-collector/blob/master/README.md
*/

// --------------------------------------------- \\
var webSocket = 'https://rpc.steemviz.com';
var target = 'devske';
var SBD = true; 
var STEEM = true;
var memo = '';

var donate = true;
var d_sbd = true;
var d_steem = true;
var d_amount = '1%';

var acc1 = ['', ''];
var acc2 = ['', ''];
var acc3 = ['', ''];
var acc4 = ['', ''];
var acc5 = ['', ''];
var acc6 = ['', ''];
var acc7 = ['', ''];
var acc8 = ['', ''];
var acc9 = ['', ''];
var acc10 = ['', ''];
var acc11 = ['', ''];
var acc12 = ['', ''];
var acc13 = ['', ''];

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// DONT CHANGE ANYTHING BELOW THIS LINE !
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

var accounts = [
  acc1, acc2, acc3, acc4, acc5,
  acc6, acc7, acc8, acc9, acc10,
  acc11, acc12, acc13
];

var user = accounts.slice();
return _.check().values(webSocket, user, target, SBD, STEEM, memo, donate, d_sbd, d_steem, d_amount);