// Steemit Fund Collector by steemit.com/@devske
// --------------------------------------------- \\
// Dont change anything in here if you do not 
// know what you are doing! Or you will break it
// --------------------------------------------- \\
var _ = require('../require.js');
var x = require('../../extra.json');
var __ = require('chalk');
var steem = require('steem');

// --------------------------------------------- \\

var x = module.exports = {

    start: (webSocket, users, target, value, memo, donate, d_sbd, d_steem, d_amount) => {

        steem.api.setOptions({
            url: webSocket
        });

        const INTERVAL = 2000;
        users.forEach((item, index) => {
            setTimeout(() => {
                var user = item[0];
                var wif = item[1];

                if (user == '' || wif == '') return console.log(__.blue(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n[Attention]: No account credentials specified\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`));
                steem.api.getAccounts([user], function (err, result) {
                    var balance = parseFloat(result[0].sbd_balance).toFixed(3);
                    var name = result[0].name;
                    if (value == true) var xValue = parseFloat(result[0].sbd_balance).toFixed(3);
                    if (value != true) var xValue = parseFloat(value).toFixed(3);
                    if (value != true && xValue > balance) return console.log(__.yellow(`NO FUND TRANSFERED: [ ${name} ] -- Not enough SBD`));
                    if (xValue == 0.000) return console.log(__.yellow(`NO FUND TRANSFERED: [ ${name} ] -- No SBD to transfer`));
                    if (donate == true) {
                        var amount = xValue / 100 * d_amount.split('%').join()[0];
                        if (amount <= 0.001 && amount > 0) var amount = 0.001;
                        var xValue = parseFloat(xValue - amount).toFixed(3);
                        _.donate().sbd(webSocket, wif, name, amount);
                    }
                    
                    steem.broadcast.transfer(
                        wif,
                        user.toLowerCase(),
                        target,
                        xValue + ' SBD',
                        memo,
                        function (err, res) {
                            if (err && x.showErrors == true) return console.log(err);
                            if (err && x.showErrors == false) return console.log(__.red(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\nERROR: ${user} is probably out of resource credits \nor your steempower is to low. Powerup more Steempower \nor turn on [ showErrors ] in extra.json to see \nmore details \n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`))
                            console.log(__.green(`FUND SEND FROM [ ${user} ] to [ ${target} ] -- [ ${xValue} SBD ]`));
                        }
                    )
                });
            }, INTERVAL * index);
        });
    }
};
