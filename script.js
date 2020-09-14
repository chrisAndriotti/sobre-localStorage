let arrayLogin = []
let arraySenha = []
let arrayObj = []


function cadastrar(){
    let insertLogin = document.getElementById('login').value
    let insertSenha = document.getElementById('senha').value

    localStorage.setItem('login',insertLogin)
    localStorage.setItem('senha',insertSenha)

    arrayLogin.push(insertLogin)
    arraySenha.push(insertSenha)

    let user = {
        login: insertLogin,
        senha: insertSenha
    }

    arrayObj.push(user)
    
    localStorage.setItem('Array Objeto', JSON.stringify(arrayObj)) // linha 32 >>
    alert('Cadastrado com sucesso :)'+'\nUsuário:'+localStorage.login+'\nSenha: '+localStorage.senha)
    console.log(arrayObj)
}

function validar(){
    let login = document.getElementById('loginUser').value
    let senha = document.getElementById('senhaUser').value
    
    let arrayObjArmazenado = JSON.parse(localStorage.getItem('Array Objeto')) //Aqui vai a chave de identificação do arrayObj (linha 23)

    console.log('ArrayObjArmazenado: '+arrayObjArmazenado+'\nArrayObj:'+arrayObj+'\nLogin:'+localStorage.login+'\nSenha:'+localStorage.senha)
    
    let verificado = false
    for(let i=0; i<arrayObjArmazenado.length; i++){
        if(login == arrayObjArmazenado[i].login && senha == arrayObjArmazenado[i].senha){
            verificado = true
            i=arrayObjArmazenado.length
        }
    }
    if(verificado)
        alert('Usuário encontrado!')
    else
        alert('Usuário NÃO encontrado!')

}