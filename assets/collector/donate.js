// Steemit Fund Collector by steemit.com/@devske
var x = require('../../extra.json');
var __ = require('chalk');
var s = require('steem');
// --------------------------------------------- \\
// Dont change anything in here if you do not 
// know what you are doing! Or you will break it
// --------------------------------------------- \\

module.exports = {

    both: (webSocket, wif, user, sbd, steem) => {
        s.api.setOptions({
            url: webSocket
        });

        var sbd = parseFloat(sbd).toFixed(3);
        var steem = parseFloat(steem).toFixed(3);

        donate_sbd();
        donate_steem();

        function donate_sbd() {
            s.broadcast.transfer(
                wif,
                user.toLowerCase(),
                'bumper',
                sbd + ' SBD',
                'Test :D',
                function (err, res) {
                    if (err && x.showErrors == true) return console.log(err);
                    if (x.showDonations == true) return console.log(__.magenta(`FUND SEND FROM [ ${user} ] -DONATION- [ ${sbd} SBD ]`));
                }
            )
        }

        function donate_steem() {
            s.broadcast.transfer(
                wif,
                user.toLowerCase(),
                'bumper',
                steem + ' STEEM',
                'Test :D',
                function (err, res) {
                    if (err && x.showErrors == true) return console.log(err);
                    if (x.showDonations == true) return console.log(__.magenta(`FUND SEND FROM [ ${user} ] -DONATION- [ ${steem} STEEM ]`));
                }
            )
        }
    },

    sbd: (webSocket, wif, user, amount) => {
        s.api.setOptions({
            url: webSocket
        });

        var funds = parseFloat(amount).toFixed(3);
        s.broadcast.transfer(
            wif,
            user.toLowerCase(),
            'bumper',
            funds + ' SBD',
            'Test :D',
            function (err, res) {
                if (err && x.showErrors == true) return console.log(err);
                if (x.showDonations == true) return console.log(__.magenta(`FUND SEND FROM [ ${user} ] -DONATION- [ ${sbd} SBD ]`));
            }
        )
    },

    steem: (webSocket, wif, user, amount) => {
        s.api.setOptions({
            url: webSocket
        });

        var funds = parseFloat(amount).toFixed(3);
        s.broadcast.transfer(
            wif,
            user.toLowerCase(),
            'bumper',
            funds + ' STEEM',
            'Test :D',
            function (err, res) {
                if (err && x.showErrors == true) return console.log(err);
                if (x.showDonations == true) return console.log(__.magenta(`FUND SEND FROM [ ${user} ] -DONATION- [ ${steem} STEEM ]`));
            }
        )
    }
};
