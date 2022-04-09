function entrar(){
    let usuario = document.querySelector('#usuario')

    let senha = document.querySelector('#senha')

    let msgError = document.querySelector('#msgError')
    let listauser = []

    let uservalid = {
        user: '',
        password: '',
    }

    listauser = JSON.parse(localStorage.getItem('listauser'))

    listauser.forEach((item) => {
        if( usuario.value == item.user && senha.value == item.password){
            uservalid = {
                user: item.user,
                password: item.password
            }
        }
    })

    if(usuario.value == uservalid.user && senha.value == uservalid.password){
        alert('Logando')

    } else {
        usuario.setAttribute('style', 'color:red')
        senha.setAttribute('style', 'color:red')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Usuário ou senha incorreto'
        usuario.focus()
    }
}

