// Steemit Fund Collector by steemit.com/@devske
// --------------------------------------------- \\
// Dont change anything in here if you do not 
// know what you are doing! Or you will break it
// --------------------------------------------- \\
var _ = require('../require.js');
var x = require('../../extra.json');
var __ = require('chalk');
var s = require('steem');

// --------------------------------------------- \\

module.exports = {

    start: (webSocket, users, target, SBD, STEEM, memo, donate, d_sbd, d_steem, d_amount) => {

        s.api.setOptions({
            url: webSocket
        });

        if (d_amount == '') return console.log(__.red(`[ERROR]: Donation amount has no value and donation is set to true!`));

        const INTERVAL = 3000;
        users.forEach((item, index) => {
            setTimeout(() => {
                var user = item[0];
                var wif = item[1];

                if (user == '' || wif == '') return console.log(__.blue(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n[Attention]: No account credentials specified\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`));

                s.api.getAccounts([user], function (err, result) {

                    var bal_steem = parseFloat(result[0].balance).toFixed(3);
                    var bal_sbd = parseFloat(result[0].sbd_balance).toFixed(3);
                    var name = result[0].name;
                    if (STEEM == true) var xSteem = bal_steem;
                    if (SBD == true) var xSBD = bal_sbd;
                    if (STEEM != true && STEEM > 0.001) var xSteem = parseFloat(STEEM).toFixed(3);
                    if (SBD != true && SBD > 0.001) var xSBD = parseFloat(SBD).toFixed(3);
                    if (STEEM != true && xSteem > bal_steem) return console.log(__.yellow(`NO FUND TRANSFERED: [ ${name} ] -- Not enough STEEM`));
                    if (xSteem == 0.000) console.log(__.yellow(`NO FUND TRANSFERED: [ ${name} ] -- No STEEM to transfer`));
                    if (SBD != true && xSBD > bal_sbd) return console.log(__.yellow(`NO FUND TRANSFERED: [ ${name} ] -- Not enough SBD`));
                    if (xSBD == 0.000) console.log(__.yellow(`NO FUND TRANSFERED: [ ${name} ] -- No SBD to transfer`));
                    if (donate == true) {
                        var amount_steem = parseFloat(bal_steem / 100 * d_amount.split('%').join()[0]).toFixed(3);
                        var amount_sbd = parseFloat(bal_sbd / 100 * d_amount.split('%').join()[0]).toFixed(3);

                        if (amount_steem <= 0.001 && amount_steem > 0) var amount_steem = 0.001;
                        if (amount_sbd <= 0.001 && amount_sbd > 0) var amount_sbd = 0.001;

                        var xSteem = parseFloat(xSteem - amount_steem).toFixed(3);
                        var xSBD = parseFloat(xSBD - amount_sbd).toFixed(3);
                        _.donate().both(webSocket, wif, name, amount_sbd, amount_steem);
                    }

                    if (xSteem != 0.000) transfer_steem();
                    if (xSBD != 0.000) transfer_sbd();
                    function transfer_steem() {
                        s.broadcast.transfer(
                            wif,
                            user.toLowerCase(),
                            target,
                            xSteem + ' STEEM',
                            memo,
                            function (err, res) {
                                if (err && x.showErrors == true) return console.log(err);
                                if (err && x.showErrors == false) return console.log(__.red(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\nERROR: ${user} is probably out of resource credits \nor your steempower is to low. Powerup more Steempower \nor turn on [ showErrors ] in extra.json to see \nmore details \n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`))
                                console.log(__.green(`FUND SEND FROM [ ${user} ] to [ ${target} ] -- [ ${xSteem} STEEM ]`));
                            }
                        )
                    }

                    function transfer_sbd() {
                        s.broadcast.transfer(
                            wif,
                            user.toLowerCase(),
                            target,
                            xSBD + ' SBD',
                            memo,
                            function (err, res) {
                                if (err && x.showErrors == true) return console.log(err);
                                if (err && x.showErrors == false) return console.log(__.red(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\nERROR: ${user} is probably out of resource credits \nor your steempower is to low. Powerup more Steempower \nor turn on [ showErrors ] in extra.json to see \nmore details \n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`))
                                console.log(__.green(`FUND SEND FROM [ ${user} ] to [ ${target} ] -- [ ${xSBD} SBD ]`));
                            }
                        )
                    }
                });
            }, INTERVAL * index);
        });
    }
};
