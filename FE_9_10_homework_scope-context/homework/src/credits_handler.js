function userCard (number) {
    let balance = 100,
        transactionLimit = 100,
        historyLogs = [],
        key = number,
        tax = 0.005;
  
    return {

        getCardOptions: function () {
            return {balance, transactionLimit, historyLogs, key};
        },

        putCredits: function (sum) {
            balance += sum;
            historyLogs.push({
                operationType: 'Received credits',
                credits: sum,
                operationTime: new Date().toLocaleString('en-GB')
            });
        },

        takeCredits: function (sum) {
            if (transactionLimit + balance > sum) {
                balance -= sum;
                historyLogs.push({
                operationType: 'Withdrawal of credits',
                credits: sum,
                operationTime: new Date().toLocaleString('en-GB')
            });
            } else {
                console.log('Not enough credits on Your account');
            }
        },

        setTransactionLimit: function (sum) {
            transactionLimit = sum;
            historyLogs.push({
                operationType: 'Transaction limit change',
                credits: sum,
                operationTime: new Date().toLocaleString('en-GB')
            }); 
        },

        transferCredits: function (sum, recipientCard) {
            let taxedSum = sum + sum * tax;
            if (transactionLimit + balance > taxedSum) {
                this.takeCredits(taxedSum);
                recipientCard.putCredits(sum);
            } else {
                console.log('Not enough credits on Your account');
            }
        }
    }
}

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
        this.maxCards = 3;
    }
    addCard () {
        if (this.cards.length < this.maxCards) {
            this.cards.push(userCard(this.cards.length + 1));
        } else {
            console.log('You already have 3 cards');
        }
    }
    getCardByKey (key) {
        return this.cards[key - 1];
    }
}
