/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

  function randomize_domain() {
    //Declaración de partes del dominio
    let pronoun = ['the', 'our'];
    let adj = ['great', 'big'];
    let noun = ['jogger', 'racoon'];
    let domain = ['.com', '.net', '.us', '.io'];
    //Bucles for encadenados (funcionamiento, primero se recorrerá todas las terminaciones de dominio, luego cambiaría el nombre y repetiria todas las terminaciones y pasaría al adjetivo...)
      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++){
          for (let k = 0; k < 2; k++){
            for (let l = 0; l < 4; l++) {
              let url = pronoun.[i] + adj.[j] + noun.[k] + domain.[l];
              console.log (url);
            }
          }
        }
      }

  }

 randomize_domain();

};
