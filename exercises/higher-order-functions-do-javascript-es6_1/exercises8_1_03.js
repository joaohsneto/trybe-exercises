const gabarito = 'flamengo';
const usuario = 'FLAMENGO';

const validador = (respostaCorreta) => (respostaUsuario) => respostaCorreta === respostaUsuario.toLowerCase();
console.log(validador(gabarito)(usuario));