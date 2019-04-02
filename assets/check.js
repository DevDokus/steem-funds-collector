// Steemit Fund Collector by steemit.com/@devske
// --------------------------------------------- \\
// Dont change anything in here if you do not 
// know what you are doing! Or you will break it
// --------------------------------------------- \\

var _ = require('./require.js');
var __ = require('chalk');

// --------------------------------------------- \\

module.exports = {

    values: (webSocket, user, target, SBD, STEEM, memo, donate, d_sbd, d_steem, d_amount) => {

        if (SBD == false) console.log(__.red(`SBD COLLECTION DISABLED`));
        if (STEEM == false) console.log(__.red(`STEEM COLLECTION DISABLED`));
        var steem = parseFloat(STEEM).toFixed(3);
        var sbd = parseFloat(SBD).toFixed(3);

        if (STEEM == false && SBD == false) return;
        if (STEEM == true && SBD == true) return _.both_c().start(webSocket, user, target, SBD, STEEM, memo, donate, d_sbd, d_steem, d_amount);
        if (STEEM == true && SBD == false) return _.steem_c().start(webSocket, user, target, STEEM, memo, donate, d_sbd, d_steem, d_amount);
        if (STEEM == false && SBD == true) return _.sbd_c().start(webSocket, user, target, SBD, memo, donate, d_sbd, d_steem, d_amount);
        if (isNaN(steem) == true && isNaN(sbd) == true) return _.both_c().start(webSocket, user, target, SBD, STEEM, memo, donate, d_sbd, d_steem, d_amount);
        if (isNaN(steem) == true && isNaN(sbd) == false) return _.sbd_c().start(webSocket, user, target, SBD, memo, donate, d_sbd, d_steem, d_amount);
        if (isNaN(steem) == false && isNaN(sbd) == true) return _.steem_c().start(webSocket, user, target, STEEM, memo, donate, d_sbd, d_steem, d_amount);
    }
};
