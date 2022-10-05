function moneyBox(user) {
    let saveCoins = 0;

    return {
        saveMoney: function(coins) {
            saveCoins += coins;
            return saveCoins;
        },
        withdrawalMoney: function(coins){
            saveCoins -= coins;
            return saveCoins;
        },
        getMoney: function(){
            console.log(`${user} su dinero es: ${saveCoins} `);
        }
    }
}

const moneyCarlos = moneyBox('Carlos');
const moneyAnna = moneyBox('Ana');

moneyCarlos.saveMoney(5);
moneyCarlos.saveMoney(10);
moneyCarlos.saveMoney(15);
moneyCarlos.withdrawalMoney(15);
moneyCarlos.getMoney();

moneyAnna.saveMoney(5);
moneyAnna.saveMoney(16);
moneyAnna.withdrawalMoney(5);
moneyAnna.getMoney();