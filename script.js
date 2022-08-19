// function primeiraFuncao() {

//     return new Promise((resolve) => {
        
//         setTimeout(() => {
//             console.log("Esperou isso aqui!")
//             resolve()
//         }, 1000)
//     })
// }

// async function segundaFuncao(){
//     console.log("Iniciou")

//     await primeiraFuncao()

//     console.log("Terminou")
// }
// segundaFuncao()

function getUser(id){
    return fetch(`https://reqres.in/api/users?id=${id}`)
    .then((data) => data.json()) // Pega os dados em formato de objetos
    .catch((err) => console.log(err))
}
async function viewUsername(id){
    try {
        const user = await getUser(id)
        console.log(`O nome do usuário é: ${user.data.first_name}`)
    } catch (err) {
        console.log(`err${err}`)
    }
}
viewUsername(6)
//chamou a primeira função foi dado o await a requisição com o usuário vai aguardar até o console,log seja exibido
//trycatch trata o erro com async