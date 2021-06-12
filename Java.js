let header = document.querySelector('header');
let h1 = document.createElement('h1');
header.appendChild(h1);
h1.innerHTML = "Integração Html + Java Script";

let main = document.querySelector('main');
let div1 = document.createElement('div');
main.appendChild(div1);

let primeiroh2 = document.createElement('h2');
div1.appendChild(primeiroh2);
primeiroh2.innerHTML = "Borboleta";
let primeiroP = document.createElement('p');
div1.appendChild(primeiroP);
primeiroP.innerHTML = "Borboletas são artrópodes pertencentes à Classe Insecta. Assim, apresentam corpo dividido em cabeça, tórax e abdome; um par de antenas, três pares de patas, e também asas, estas encontradas somente nesta classe, embora nem todos os seus representantes as possuam. <br> As borboletas são grandes polinizadoras de plantas e colaboram com os ciclos de nutrientes presentes no ambiente, dois processos que são fundamentais para a vida na Terra. Além disso, as borboletas servem de alimento para diversos animais.";

let div2 = document.createElement('div');
main.appendChild(div2);

let segundoh2 = document.createElement('h2')
div2.appendChild(segundoh2);
segundoh2.innerHTML = "Abelha"
let segundoP = document.createElement('p');
div2.appendChild(segundoP);
segundoP.innerHTML = "As abelhas são insetos, apresentando assim corpo dividido em cabeça, tórax e abdome. O corpo delas é revestido por exoesqueleto, o qual possui algumas regiões cobertas por pelos. Essa estrutura evita a perda de água e também protege contra predadores. <br> Além do mel e da polinização, as abelhas produzem cera de abelha, geléia real e própolis."
