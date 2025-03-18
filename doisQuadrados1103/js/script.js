function botao(){
    const divAzul = document.createElement('button'); 
    divAzul.classList.add('azul');
    document.body.appendChild(divAzul);

    const divRoxo = document.createElement('button');
    divRoxo.classList.add('roxo');
    divAzul.appendChild(divRoxo);
}