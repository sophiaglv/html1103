function verde(){
    if(document.body.classList.contains("vermelho")){
        document.body.classList.replace("vermelho", "verde");
    }
    else if(document.body.classList.contains("roxo")){
        document.body.classList.replace("roxo", "verde");
    }
    else if(document.body.classList.contains("neutro")){
        document.body.classList.replace("neutro","verde");
    }
}

function vermelho(){
    if(document.body.classList.contains("verde")){
        document.body.classList.replace("verde", "vermelho");
    }
    else if(document.body.classList.contains("roxo")){
        document.body.classList.replace("roxo", "vermelho");
    }
    else if(document.body.classList.contains("neutro")){
        document.body.classList.replace("neutro","vermelho");
    }
}

function roxo(){
    if(document.body.classList.contains("verde")){
        document.body.classList.replace("verde", "roxo");
    }
    else if(document.body.classList.contains("vermelho")){
        document.body.classList.replace("vermelho", "roxo");
    }
    else if(document.body.classList.contains("neutro")){
        document.body.classList.replace("neutro","roxo");
    }
}