# Steem Funds Collector
This script will allow you to transfer your STEEM and SBD <br> 
quickly from your accounts to 1 targeted account.  <br> 
The fund's collector will be useful for those with multiple accounts. <br> 
Within a few seconds, your fund's will be transferred and supports <br> 
up to 10 accounts! You are however able to add more accounts on <br> 
the list if you may wish to.
<hr>

### Contact the developer: 
| Platform | Value | Username | Chance of Reply |
|---|---|---|---|
| Steemit | https://steemit.com/@devske/ | Devske | On Blogs Only |
| Discord | https://discord.gg/AdCZUFA | @Grandmother#5057 | Best Option |
| Email | devske@outlook.com | ---- | Good Option |

<hr>

## How to start the script ?
When you have installed the dependencies via the **install.bat**, <br>
and when you have set all parameters in the **app.js**, <br>
you can simply double click and activate the **start.bat** <br>
and enjoy the magic happening!

<hr>

## How to install
* First, you need to make sure to install **NodeJS**. <br>
This version was made and tested with **v10.15.3** <br>
https://nodejs.org/dist/v10.15.3/

* After you installed node you need to extract <br>
the *.rar* file Github will provide you. 

* Click on the **install.bat** file. <br>
This will install the node dependencies.
<hr>

## How to set up the script?
1. Open the **app.js** with a code editor of choice. 
2. Set the **webSocket** to an RPC Node of choice.
3. Set the **target** to the account receiving the funds.
4. Set the SBD and STEEM parameter. 

#### Below the available options

| Options | Value | Type | Description |
| --- | --- | --- | --- |
| **webSocket**| https://rpc.steemviz.com | string | Set your RPC Node Connection |
| **target** | Account Name | string | Account to receive funds | 
| **SBD** | true | boolean | Transfer any amount available |
| **SBD** | false | boolean | Transfer no funds
| **STEEM** | true | boolean | Transfer any amount available |
| **STEEM** | false | boolean | Transfer no funds

<hr>

### How to insert your accounts?
The moment you first open the script, you will find <br>
all account arrays empty.  You have to enter each account <br>
that you would like to transfer from. <br>

#### The array needs to fill in as followed:  
| Array | Account Name | Private Active Key |
|---|---|---|
| **acc1** | devske |   5JmgLKAJFBdlJHFbHFBWRT31245LldfhBfkdfbjklsdfBsNJKFNDDF |
| **acc2** | rebel |    5JmgCkjshfAFJFDBsjfaFSKJDBF34653SADFJDFBFksjndfFjkBFkj |
| **acc3** | somedude | 5JmgfujAFDHbOFHJBVa8745rKLJSbfdAfLKJFBLkJflKJBbLKFjbdk |

#### The end result should look like this:
![Array Result](https://i.ibb.co/sshWJhv/Screenshot-8.png)

##### If you are using more accounts you also fill in the other arrays.

<hr>

## How to delete account arrays?
It could just be that you have less than 10 accounts. <br>
You can leave the arrays empty, but may you get errors, <br>
or you would like to remove the access account entries, <br>
you can do the following:

* Open **app.js** with a code editor of choice. <br>
* Delete every account array you are not using.<br>
![Account Array](https://imgbbb.com/images/2019/04/02/Screenshot_5.png) <br><br>

* Delete also the sum up of the array at the bottom of the **app.js** <br>
![Array Sum Up](https://imgbbb.com/images/2019/04/02/Screenshot_5d3e433106fa772b9.png)<br><br>

* Once you have done this, the end result should <br>
look the same as the following picture. <br>
![Account Array Result](https://imgbbb.com/images/2019/04/02/Screenshot_54b3044e5504ce4b6.png)

<hr>

## How to add extra account arrays:
Maybe Steemit is a sort of drugs for you, <br>
and you want to go hardcore? This is entirely possible. <br>
You simply have to add more arrays to the script and you're set. 

* Open **app.js** with your code editor of choice. 
* Add in the extra account arrays. <br>
![Adding Account Arrays](https://imgbbb.com/images/2019/04/02/Screenshot_6.png) <br><br>

* Make also sure to add the extra entries here ! <br>
![Dont forget this](https://imgbbb.com/images/2019/04/02/Screenshot_5920e25e0b2d7feef.png) <br><br>

* Once done the end result should look like this: <br>
![Adding Accounts Result](https://imgbbb.com/images/2019/04/02/Screenshot_7.png)

<hr>

## Donate a X amount of % to the developer:
You can support the developer with a percentage <br>
of the funds you are about to transfer.  <br>
You have the following options. Donations are <br>
calculated per transferring account.

| Options | Value | Type | Description |
|---|---|---|---|
| **Donate** | true  / false | boolean | Activate / Disable Donations |
| **d_sbd** | true / false | boolean | Send SBD Donation |
| **d_steem** | true / false | boolean | Send STEEM Donation |
| **d_amount** | 0.1% / 100% | Percentage | Set amount to Donate | 

<hr>

## Before using this script !
This script is for personal use only. <br>
If you want to redistribute this script <br>
need to have written permission from the <br>
copyright holder. See the License file for <br>
more information.

<hr>


