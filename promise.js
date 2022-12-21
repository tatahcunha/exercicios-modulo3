"use strict";

let promiseCount = 0;

function testPromise() {
  const thisPromiseCount = ++promiseCount;
  const log = document.getElementById("log");
  // começar
  log.insertAdjacentHTML("beforeend", `${thisPromiseCount}) Iniciado<br>`);
  // Fazemos uma nova promise: prometemos uma contagem numérica dessa promise,
  // a partir de 1 (após esperar 3s)
  const p1 = new Promise((resolve, reject) => {
    // A função executora é chamada com a habilidade
    // para resolver ou rejeitar a promise
    log.insertAdjacentHTML(
      "beforeend",
      `${thisPromiseCount}) Construtor de promise<br>`
    );
    // Este é apenas um exemplo para criar assincronismo
    setTimeout(() => {
      // Nós cumprimos a promise
      resolve(thisPromiseCount);
    }, Math.random() * 2000 + 1000);
  });

  // Definimos o que fazer quando a promise é resolvida com a chamada then(),
  // e o que fazer quando a promise é rejeitada com a chamada catch()
  p1.then((val) => {
    // Registra o valor de atendimento
    log.insertAdjacentHTML("beforeend", `${val}) Promise cumprida<br>`);
  }).catch((reason) => {
    // Registra o motivo da rejeição
    console.log(`Manuseie a promise rejeitada (${reason}) aqui.`);
  });
  // fim
  log.insertAdjacentHTML("beforeend", `${thisPromiseCount}) Promise feita<br>`);
}

const btn = document.getElementById("make-promise");
btn.addEventListener("click", testPromise);
