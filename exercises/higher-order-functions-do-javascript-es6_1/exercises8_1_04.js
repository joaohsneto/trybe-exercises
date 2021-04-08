const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'N.A', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const repeat = (respostaCorreta, respostaEstudante, acao) => {
  let cont = 0;
  for (let index = 0; index < respostaCorreta.length; index += 1) {
    const Resultado = acao(respostaCorreta[index], respostaEstudante[index]);
    cont += Resultado;
  }
  return `Resultado final: ${cont} corretas`;
};

console.log(repeat(RIGHT_ANSWERS, STUDENT_ANSWERS, (respCorreta, respEstudante) => {
  if (respCorreta === respEstudante) {
    return 1;
  } if (respEstudante === 'N.A') {
    return 0;
  }
    return -0.5;
}));