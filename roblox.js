function jyj(){
fetch('dados.json')
.then(response =>response.json())
.then(jjk=>{
    document.getElementById('jjs').innerText
    'Nome: ' + jjk.nome + '|'+ jjk.idade +'|' + jjk.cidade;
})

}
