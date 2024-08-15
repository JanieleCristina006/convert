// Cotação de moedas do dia
const USD = 4.87
const EUR = 5.82
const GBP = 6.08

// Obtendo os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount");
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")


// Manipulando o input amount para receber só números
    amount.addEventListener("input",()=>{
        const hasCharacteresRegex = /\D+/g // só pega números
        amount.value = amount.value.replace(hasCharacteresRegex,"") // trocando por ''
    })

// Capturando o evento de submit (enviar) do formulário, amount -> valor do input
    form.onsubmit = (event)=>{
    event.preventDefault()
    switch(currency.value){
        case "USD" :
            convertCurrency(amount.value,USD,"US$")
        break;

        case "EUR" :
            convertCurrency(amount.value,EUR,"€")
        break;

        case "GBP" :
            convertCurrency(amount.value,GBP,"£")
    }
    }

// Função para converter a moeda
    function convertCurrency(amount,price,symbol){
        try{
            // Exibindo a cotação da moeda selecionada
            description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
            
            // Calcula o total.
            let total = amount * price

            // Verifica se o resultado não é um número
            if(isNaN(total)){
                return alert("Por favor digite corretamente um número para converter!")
            }
            // Formatar o valor total.
            total = formatCurrencyBRL(total).replace("R$","")

            // Exibir o resultado total
            result.textContent = `${total} Reais`

            // Aplica a classe que exibe o footer para mostrar o resultado.
            footer.classList.add("show-result")
        }
        catch(error){
            // Remove a classe do footer removendo ele.
            footer.classList.remove("show-result")
        }
    }

    // Formata a moeda em Real Brasileiro
    function formatCurrencyBRL(value){
        return
        // Converte para número para usar o toLocaleString para formatar no padrão BRL
         Number(value).toLocaleString("pt-BR",{
            style: "currency",
            currency: "BRL"
        })
    }
