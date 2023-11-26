function formulario(){
    let tableUser = document.querySelector("table");
    let row = tableUser.insertRow();
    let cel0 = row.insertCell(0);
    let cel1 = row.insertCell(1);
    let cel2 = row.insertCell(2);
    let cel3 = row.insertCell(3);
    let cel4 = row.insertCell(4);

    cel0.innerHTML = document.getElementById('identificador').value;
    cel1.innerHTML = document.getElementById('nome').value;
    cel2.innerHTML = document.getElementById('idade').value;

    let elementos = document.getElementsByName("sexo");
    for(i = 0; i < elementos.length; i++){
        if(elementos[i].checked){
            cel3.innerHTML =  elementos[i].value;
        }
    }

    let checkBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let text = "";
    for(i=0; i<checkBoxes.length; i++){
        if(i == (checkBoxes.length-1)){
            text = `${text} ${checkBoxes[i].value}.`;
        }else{
            text = `${text} ${checkBoxes[i].value},`;
        }   
    }
    cel4.textContent = text;

}