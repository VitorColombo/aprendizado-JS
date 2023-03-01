var contatos = [
    {
        "nome": "Akira",
        "sobrenome": "Laine",
        "numero": "126378",
        "likes": ["pizza", "coding", "brownie"]
    },
    {
        "nome": "Harry",
        "sobrenome": "Potter",
        "numero": "9877654",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "nome": "Cris",
        "sobrenome": "Vos",
        "numero": "655655555",
        "likes": ["java", "gaming", "pipoca"]
    },
    {
        "nome": "Sherlock",
        "sobrenome": "Holmes",
        "numero": "11111111",
        "likes": ["casos", "violino", "suspense"]
    }
];

function buscaPerfil(nome, propriedade){
    for (var i = 0; i < contatos.length; i++){
        if(contatos[i].nome === nome){
            return contatos[i][propriedade] || "Nao existe essa propriedade";
        }
    }
    return "Nao ha ninguem com esse nome!!!";
}

var dadosPeloNome = buscaPerfil("Akira", "numero");
console.log(dadosPeloNome);
