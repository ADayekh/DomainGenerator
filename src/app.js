/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [".com", ".net", ".us", ".io"];

  function randomize_domain(first, second, third, fourth) {
    //Declaración de partes del dominio
    let url;
    let tableBody = document.getElementById("tbody");
    //Bucles for encadenados (funcionamiento, primero se recorrerá todas las terminaciones de dominio, luego cambiaría el nombre y repetiria todas las terminaciones y pasaría al adjetivo...)
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        for (let k = 0; k < 2; k++) {
          for (let l = 0; l < 4; l++) {
            url = `<td>${(first.[i] + second.[j] + third.[k] + fourth.[l])}</td>`;
            tableBody.innerHTML += `<tr>${url}</tr>`;
            console.log(url);
          }
        }
      }
    }
  }
  randomize_domain(pronoun, adj, noun, domain);
};
