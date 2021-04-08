const cheker = (number, drawNumbers) => number === drawNumbers;

const lotery = (number, callback) => {
    let drawNumbers = Math.ceil(Math.random() * 5);
    console.log(drawNumbers);
    return callback(number, drawNumbers) ? 'Parabéns você ganhou' : 'Tente novamente';
};

console.log(lotery(5, cheker));
