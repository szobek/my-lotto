class Lotto{
    constructor(){
        this.numbers = [];
    }
    generateNumbers(){
        this.numbers = [];
        while(this.numbers.length < 5){
            let randomNumber = Math.floor(Math.random() * 90) + 1;
            if(!this.numbers.includes(randomNumber)){
                this.numbers.push(randomNumber);
            }
        }
        this.numbers.sort((a, b) => a - b);
    }
    getNumbers(){
        return this.numbers;
    }
    
}

const lotto = new Lotto();
lotto.generateNumbers();
console.log(lotto.getNumbers());