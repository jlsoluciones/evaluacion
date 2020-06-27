function TipoMotor(tipomotor){
    switch(tipomotor){
        case 0:
            alert("No hay un valor definido para el tipo de bomba");
            break;
        case 1:
            alert("La bomba es una bomba de agua"); 
            break;   
        case 2:
            alert("La bomba es una bomba de gasolina");
            break;
        case 3:
            alert("La bomba es una bomba de hormigon");
            break;
        case 4:
            alert("La bomba es una bomba de pasta alimenticia");
            break;
        default:
            alert("No existe un valor válido para este tipo de bomba");
            break;        
    }
    var dato=parseInt(prompt("Digite el número de motor"));
    TipoMotor(dato);
}