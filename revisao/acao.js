function formulario(){

    let nome = document.getElementById('name').value;
    let email = document.getElementById("email").value;
    let idade = parseInt(document.getElementById("idade").value);
    let senha = document.getElementById("senha").value;

    document.getElementById("valorNome").innerHTML = nome;
    document.getElementById("valorEmail").innerHTML = email;
    document.getElementById("valorIdade").innerHTML = idade;
    document.getElementById("valorSenha").innerHTML = senha;

    let elementos = document.getElementsByName("sexo");
    for(i = 0; i < elementos.length; i++){
        if(elementos[i].checked){
            document.getElementById("valorSexo").innerHTML = "Sexo selecionado é " + elementos[i].value;
        }
    }

    
    let checkBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let text = "";
    for(i=0; i<checkBoxes.length; i++){
        if(i == (checkBoxes.length-1)){
            text = `${text} ${checkBoxes[i].value}.`;
        }else{
            text = `${text} ${checkBoxes[i].value}, `;
        }   
    }
    document.getElementById("valorMusica").textContent = text;

    
}