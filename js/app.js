class Lotto{
    numbers
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
        this.createBalls()
    }
    getNumbers(){
        return this.numbers;
    }
    

    createBalls(){
        const wrapper=document.querySelector("#wrapper")
        const row = document.createElement("div");
        row.classList.add("ball-row");
        wrapper.appendChild(row);
        for(let ball of this.numbers){
            const ballElement = document.createElement("div");
            ballElement.classList.add("ball");
            const text = document.createElement("span");
            text.textContent = ball;
            ballElement.appendChild(text);
            row.appendChild(ballElement);
        }

        
    }
}

const lotto = new Lotto();
lotto.generateNumbers();