const media = () => {
    let cont = 1
    let totN = 0
    while (cont<=4) {
        let Notas = parseFloat(prompt(`Digite a nota tirada na ${cont}ª prova`))
        totN += Notas
        cont++
    }


}

media()

/*const lanch = () => {
    let cod = parseInt(prompt("Digite o código do lanche"))
    let qtd = parseInt(prompt("Digite a quantidade que deseja"))
    let price = 0

    if (cod === 1){
        price = 4
        price *= qtd
        return alert(`Total: R$ ${price.toFixed(2)}`)
    }else if (cod === 2){
        price = 4.50
        price *= qtd
        return alert(`Total: R$ ${price.toFixed(2)}`)
    }else if (cod === 3){
        price = 5
        price *= qtd
        return alert(`Total: R$ ${price.toFixed(2)}`)
    }else if (cod === 4){
        price = 2
        price *= qtd
        return alert(`Total: R$ ${price.toFixed(2)}`)
    }else if (cod === 5){
        price = 1.50
        price *= qtd
        return alert(`Total: R$ ${price.toFixed(2)}`)
    }else {
        alert("Código invalido!")
    }
}

lanch()



const Inter = () => {
    let number = parseInt(prompt("Digite o numero para saber seu intervalo:"))


    if (number > 0 && number <= 25) {
        return alert("Intervalo (0,25]")
    } else if (number > 25 && number <= 50) {
        return alert("Intervalo (25,50]")
    } else if (number > 50 && number <= 75) {
        return alert("Intervalo (50,75]")
    } else if (number > 75 && number <= 100) {
        return alert("Intervalo (75,100]")
    }
    return alert("Fora de intervalo")

}

Inter()



const CalcSimple = () => {
   // let prod1 = parseInt(prompt("Digite o código do produto"))
    let qtdProd1 = parseInt(prompt("Digite a quantidade do produto do produto"))
    let prcProd1 = parseFloat(prompt("Digite o preço do produto"))

    //let prod2 = parseInt(prompt("Digite o código do 2° produto"))
    let qtdProd2 = parseInt(prompt("Digite a quantidade do produto do 2° produto"))
    let prcProd2 = parseFloat(prompt("Digite o preço do 2° produto"))

    let Total = parseFloat((qtdProd1 * prcProd1) + (qtdProd2 * prcProd2))

    return alert(`VALOR A PAGAR: R$ ${Total.toFixed(2)}`)
}

CalcSimple()


//Calculadora geométrica


function triangulo(base, altura){
    let area = (base * altura) /2
    return area
}

function retangulo(base, altura){
    let area = (base * altura)
    return area
}

function quadrado (lado){
    base =  lado * lado
    return base
}

function trapezio(bMaior, bMenor, Altura){
    let area = (bMaior + bMenor) * Altura /2
    return area 
}

function circulo (raio){
    const pi = 3.14
    let area = pi * (raio * raio)
    return area 
}

let x
let y
let z
do {
    opc = prompt("Selecione o calculo desejado:\n\n1 - Área do triângulo\n2 - Área do retângulo"+
    "\n3 - Área quadrado\n4 - Área trapézio\n5 - Área círculo\n6 - Sair")
    x=0
    y=0
    z=0
    if (opc ==1){
         x = prompt("Digite a base do triângulo:")
         y = prompt("Digite a altura do triângulo")
         alert ("Área do triângulo = " + triangulo(x,y))
    }else if (opc == 2){
         x = prompt("Digite a base do retângulo:")
         y = prompt("Digite a altura do retângulo")
         alert ("Área do retângulo = " + retangulo(x,y))
    }else if (opc == 3){
        x = prompt("Digite o lado do Quadrado para obter o valor da sua base:")
        alert ("Área do quadrado = " + quadrado(x))
    }else if (opc == 4){
        x =  parseFloat(prompt("Digite a base maior do trapézio:"))
        y =  parseFloat(prompt("Digite a base menor do trapézio:"))
        z =  parseFloat(prompt("Digite a altura do trapézio:"))
        alert ("Área do trapézio = " + trapezio(x,y,z))
    }else if (opc == 5){
        x =  prompt("Digite o raio do círculo:")
        alert ("Área do círculo = " + circulo(x))
    }
} while (opc != 6);






//Exercicio Imóveis orientação a Objeto 

let opc
let imoveis = []
let cont = 0

do {
    opc = prompt("Bem vindo ao menu de cadastro de imóveis\nQuantidade de imóveis cadastrados: " + cont +
    "\nOpções do menu \n1 - Salvar imóvel\n2 - Mostrar imóveis Salvos\n3 - Sair")
    if(opc == 1 ){
        const imovel = {}

            imovel.NomeProp = prompt("Digite o nome do proprietario: ")
            imovel.QtdQuartos = prompt("Digite  a quantidade de quartos: ")
            imovel.QtdBanheiros = prompt("Digite  a quantidade de Banheiros:")
            imovel.PGaragem = prompt("O imóvel possui garagem ? (S/N)")
        
            const confirmacao = confirm(
                "Salvar este imóvel :\n" +
                "Nome Proprietário: " + imovel.NomeProp + 
                "\nQuartos: " + imovel.QtdQuartos +
                "\nBanheiro: " + imovel.QtdBanheiros +
                "\nPossui garagem ? " + imovel.PGaragem
            )

            if(confirmacao){
                imoveis.push(imovel)
                alert("Imóvel salvo com sucesso !")
            }else {
                alert ("Voltando ao menu")
            }
    }else if (opc == 2 ){
        for(cont=0  ; cont < imoveis.length ; cont++)
        {
            alert(
                "\nImóvel: " + (cont +1) +
                "\nProprietário: " + imoveis[cont].NomeProp +
                "\nQuantidade de quartos: " + imoveis[cont].QtdQuartos +
                "\nQuantidade de banheiros: " + imoveis[cont].QtdBanheiros +
                "\nPossui Garagem ? " + imoveis[cont].PGaragem
            )
        }
    }
    
} while (opc != 3);






//Exercicio Fila de espera Array

let arr = ["Matheus","Marcos","Vinicius"];
let consulta
let nome
let adc

do{

        opc = prompt("Menu de atendimento\n\nLista de pacientes:\n"+ arr +"\n\nEscolha a opção que deseja\n1 - Novo Paciente\n2 - Consultar Paciente\n3 - Sair")
        if (opc  == 1){
            adc = prompt("Digite o nome do paciente a ser adicionado")
            arr.push(adc)
            alert ("Paciente " + adc + " Adicionado(a) com sucesso !")
        }else if (opc == 2){
            arr.shift(0)
            nome = prompt("Digite o nome do paciente  a ser consultado:")
            consulta = arr.includes(nome)
            if (consulta === true){
                alert("Paciente " + nome + " Consultado(a) com sucesso !")
            }else {
                alert("Não temos registros do Nome consultado !")
            }
            
        }

}while(opc != 3 );






//Array Js

//Para adicionar elementos ao ultimo indice "push"
//Para adicionar elementos ao primeiro indice "unshift"
//Para remover elementos ao ultimo indice "pop"
//Para remover elementos ao começo indice "shift"
//Para pesquisar por elementos "Includes" e "indexof"
//Para recortar elementos "slice"
//Para substituir elementos "splice"
//utilizar length para percorrer todo o vetor

//Exemplo

let array = ["vinicius","juninho"]
let adicionarUltimo
console.log(array)
adicionarUltimo = arr.push("Luciane")
console.log(array)









//Exercicio Tabuada For
let numero
do {
    numero = parseInt(prompt("Digite o numero de 1 a 20 para consultar a tabuada"))
    if (numero>20 || numero <1){
        prompt("Numero invalido !\nTente novamente !")
    }
} while (numero>20 || numero <1);

let tot = 0  

for (cont=1;cont<=20;cont++){
    tot = cont * numero
    console.log(cont + " X " + numero + " = " + tot)
}






//Exercicio do while 2
let qtd = 0
let rmv = 0
let  confirm


qtd = parseFloat(prompt("Digite a quantidade de dinheiro em sua conta: ")) 
do {
    opc  = prompt("Menu de Controle\nSaldo Disponivel R$ "+ qtd +"\n\nEscolha a opção que deseja: \n\nopção 1 Depositar dinheiro \nOpção 2 Sacar dinheiro\nOpção 3 Finalizar programa")
    if (opc == 1){
        adc = parseFloat(prompt("Digite a quantidade de dinheiro a ser depositado: "))
        qtd  += adc
    }else if (opc == 2 ){
        rmv = parseFloat(prompt("Digite a quantidade de dinheiro a ser retirado: "))
        qtd  -= rmv
    }else if (opc == 3 ){
        confirm = prompt ("Tem certeza que deseja finalizar o programa ? (s/n)")
    }else {
      prompt("Opção invalida !\nTente novamente")  
    }

} while (confirm  != "s");

alert ("Saldo dísponivel na conta R$ " + qtd)


//Exercicio do while 1
let opcoes

do {
    opcoes =  prompt("Opção 1 = Continuar\nOpção 2 = Retornar\nOpção 3 = Menu\nOpção 4 = Encerrar")
    alert("Opção escolhida: " +opcoes)
}while (opcoes != 4)
alert("Programa Encerrado !")
 





//Exercicio While
const name = prompt("Digite o nome do turista: ")
let visitou = prompt(nome +" Ja visitou alguma cidade ? (s/n)")
let cidade 
let cidades = []

while(visitou === "s"  )
{
    cidade = prompt("Qual a cidade que você ja viajou ?")
    cidades[cont] = cidade
    cont ++
    visitou = prompt(nome +" Ja visitou alguma cidade ? (s/n)")
}
prompt("O turista " + nome + " Viajou em "+ cont +" Cidades algumas delas foram: \n"+ cidades)





//Exercicio 3 Swich
let medida = prompt ("Digite o valor  que deseja em metros:")
let opcc = prompt("Digite a opção que deseja realizar a converção:\n(mm)\n(cm)\n(dm)\n(dam)\n(hm)\n(km)")

switch(opcc){
    case "mm":
        medida *= 1000
        alert(medida)
        break
    case "cm":
        medida *= 100
        alert(medida)
        break
    case "dm":
        medida *= 10
        alert(medida)
        break
    case "dam":
        medida /= 10
        alert(medida)
        break
    case "hm":
        medida /= 100
        alert(medida)
        break
    case "km":
        medida /= 1000
        alert(medida)
        break
    default:
        alert("finalizado")
}






//Exercicios 2 Calculo de dano

nome = prompt("Nome Person: ")
let ataque = prompt ("Ataque")
let nome2 = prompt("Nome Person2: ")
let vida = prompt("Vida")
let defesa = prompt ("Defesa")
let escudo = prompt("escudo")
let dano = 0 

if (ataque > defesa && escudo == 0){
    dano =   ataque - defesa 
}else if (ataque > defesa && escudo == 1){
    dano = ( ataque - defesa  ) /2
}else if (ataque <= defesa){
    dano = 0
}
vida-=dano
    alert("A vida restante do personagem foi: " + vida +"\nO total de dano calsado foi de: "+ dano)






//Exercicio 2 Teste de velocidade

let nomeV1 = prompt("Insira o nome do primeiro carro:")
let velV1 = prompt ("Insira a velocidade do primeiro carro::")
let nomeV2 = prompt("Insira o nome do segundo carro")
let velV2 = prompt ("Insira a velocidade do segundo carro:")

if (velV1 > velV2){
    alert ("O primeiro veiculo é mais rapido")
}else if (velV2> velV1){
    alert ("O segundo veiculo é mais rapido")
}else {
    alert ("Os veiculos tem a mesma velocidade")
}






//Exercicios 1

nome = "Vinicius"
let sobrenome = "Henrique"
let estudo = "TI"
let anoNasc = 2003
let idade = 2023
idade -= anoNasc

alert("Nome Completo do recruta: " + nome  +" "+ sobrenome +"\nseu campo de estudo é: " + estudo + " e tem " + idade + " anos")

let ent1 = window.prompt('Digite o primeiro número')
let ent2 = window.prompt('Digite o segundo número')
let num1 = parseInt(ent1)
let num2 = parseInt(ent2)
let soma =  num1 + num2 
let sub = num1 - num2
let mult = num1 * num2
let div = num1 / num2
let res = num1 % num2

alert("Soma = "+soma +"\nsub = "+sub +"\nmultiplicação = "+ mult + "\ndivisão = "+ div + "\nResto da divisão ="+ res)*/
