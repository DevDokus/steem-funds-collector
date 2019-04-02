// Steemit Fund Collector by steemit.com/@devske
// --------------------------------------------- \\
// Dont change anything in here if you do not 
// know what you are doing! Or you will break it
// --------------------------------------------- \\

module.exports = {
    
    check: () => {
     return require('./check.js');
    },
    
    sbd_c: ()=> {
        return require('./collector/sbd.js');
    },
    
    steem_c: ()=> {
        return require('./collector/steem.js');
    },
    
    both_c: ()=> {
        return require('./collector/both.js');
    },
    
    donate: ()=> {
        return require('./collector/donate.js');
    }
    
};