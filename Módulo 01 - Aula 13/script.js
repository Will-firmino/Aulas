//console.log("Bom dia turma linda!!!")


// Exemplo: Uma pizzaria com um cardápio de pizzas.
/**var saborPizza = "marguerita";
dia == "quinta";

if (saborPizza == "marguerita") {

    console.log("Começando a fazer pizza marguerita ");

} else if (saborPizza == "quatro queijos") {

    console.log("Começando a fazer pizza quatro queijos ");

}  else {
    console.log("sabor de pizza informado não disponível!");
} **/


// Exemplo de E: Se tivermos um sabor específico ( marguerita ) com promoção com bebida grátis as quintas.
/** var saborPizza = "marguerita";
dia = "quinta";

if (saborPizza == "marguerita" && dia == "quinta") {

    console.log("Começando a fazer pizza marguerita ");
    console.log("[PROMO] - Cliente ganhou bebida grátis!");

} **/


//Exemplo de OU. Dois dias da semana o frete é gratuito.
/**var dia = "terca";

if ( dia == "terca" || dia == "quarta") {
    console.log("[PROMO] - Cliente ganhou frete grátis!");
}**/


//Exemplo de negação.
/**var aberto = true;

if (!aberto) {
    console.log("Pizzaria fechada! ")
} **/


// Exemplo de combinação de operadores. Usando o && e o ||. Escolhendo a pizza marguerita na quarta ou sábado você leva duas.
/** var saborPizza = "massa";
dia = "dia"

if (saborPizza == "marguerita" && (dia == "quarta" || dia == "sabado")) {
    console.log("[PROMO] - Pizza em dobro!");
    console.log("[PROMO] - Começando a far DUAS pizzas margueritas");
} 
**/


// Interação com o usuário
/**  var saborPizza = prompt ("Qual é o sabor da pizza que você quer? ")
dia = prompt ("Que dia é hoje? ")

if (saborPizza == "marguerita" && (dia == "quarta" || dia == "sabado")) {
    console.log("[PROMO] - Pizza em dobro!");
    console.log("[PROMO] - Começando a far DUAS pizzas margueritas");
}
*/ 


//Exemplo usando função.
//parametros
/**function criarTextoPreco(item, preco) {
    return "O item " + item + " custa R$" + preco;
}

//argumentos
console.log(criarTextoPreco("Tomate", 0.98));
**/


//Exemplo do liquidificador;
/**function liquidificar(item1, item2, item3) {
    if (item1 == "banana" && item2 == "leite" && item3 == "achocolatado") {
        return "Vitamina de banana"
    } else {
        return "Liquidifiquei tudo"
    }
}

console.log(liquidificar("banana", "leite", "achocolatado"));

**/

//Crie uma função chamada verificarPermissoes para verificar se a pessoa já 
//pode tirar sua habilitação para dirigir e se já pode votar.
/**function verificarPermissoes(idade) {

    if (idade >=16 && idade <=17) {
        return "Você pode votar mas não pode dirigir"
    }else if (idade >=18){
        return "Você pode votar e dirigir"
    }
}

console.log(verificarPermissoes(18));

**/

//Uma função chamada previsaoRodagem para verificar o quanto será possível rodar sem abastecer;






























