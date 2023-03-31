//substituindo palavras
let txt = "estão chegando as provas"
console.log(txt.replace("provas","avaliações"))
//apresentando

let num = 123.5231
document.write(num.toFixed(3));
document.write("<br><br>")
let num2 = 123.456
document.write(num2.toPrecision(3));

//alert("ola mundo")

//caixa de confirmação
document.write("<br><br>")
//let teste=confirm("você é um aluno?")
//document.write("o resultado é ", teste)

//caixa de prompt
//let texto= prompt("digite seu nome")
//document.write("o nome dele é ", texto)


/*
if(20 < 10){
    document.write("o valor 20 é maior que 10")
}else{
    document.write("o valor 20 não é maior que 10")
}

//if else declarando variavel
let valor =10
if(valor<7){
    document.write("o Valor é maior que 7")
    
}else{
    document.write("o valor é menor que 7")
}16


let idade = 8

if(idade<=10){
    document.write("kids")
}else if(idade<=14){
    document.write("matine")
}else if(idade<=18){
    document.write("noturno")
}else if(idade<=20){
    document.write("madrugada")
}else if(idade<50){
    document.write("sedentario")
}



let valor =
if(valor > 10 && valor < 20){
    document.write("este valor é valido")
}
*/
let valor1= 25
if(valor1 < 20 || valor1>20){
    document.write("o valor é verdadeiro")
}else{
    document.write("o valor é falso")
}