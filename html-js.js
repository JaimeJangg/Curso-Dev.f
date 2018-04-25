let h1 = document.createElement("h1");
     let texto_h1 = document.createTextNode('eh que onda, soy un H1 con JS');
     h1.appendChild(texto_h1);

     let elbody = document.getElementById('elBody');
     elbody.appendChild(h1);

     let cinta_blacna = [
    {
        'nombre' : 'Omar',
        'edad': 24 
    },
    {
        'nombre': 'Francisco',
        'edad': 39
    },
    {
        'nombre' : 'carlos',
        'edad' : 24
    }

]
for(i=0; i<cinta_blacna.length; i++){
    let h1=$('<h1>'+'este wei se llama'+cinta_blacna[i].nombre+'y tiene'+cinta_blacna[i].edad+'años'+'</h1>');
    $('#elbody').append(h1);
}