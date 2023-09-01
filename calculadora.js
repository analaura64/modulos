//ana laura

var somar = require("./modulos/somar");
var media = require("./modulos/media");
var multiplicar = require("./modulos/multiplicar");
var divisao = require("./modulos/divisao");
const mensagem = require("./modulos/mensagem");
var nome = "ana";

console.log("A soma é:" + somar(20,90));
console.log("A média é:" + media(20,90));
console.log("A multiplicação é:" + multiplicar(20,90));
console.log("A divisão é:" + divisao(20,90));
console.log(mensagem(nome));