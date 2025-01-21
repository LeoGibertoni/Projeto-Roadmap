let selectedUnit1 = '';  // Unidade de origem
let selectedUnit2 = '';  // Unidade de destino

// Alterna a visibilidade do dropdown
function toggleDropdown(optionNumber) {
    const dropdown = document.getElementById(`dropdown${optionNumber}`);
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
}

function selectUnit(unit, optionNumber) {
    // Atualiza a unidade selecionada para a opção 1 ou 2
    if (optionNumber === 1) {
        selectedUnit1 = unit;
        document.querySelector('.escolha1').innerText = unit;  // Altera o texto do botão da unidade 1
        document.getElementById('dropdown1').style.display = 'none';  // Fecha o dropdown após seleção
    } else if (optionNumber === 2) {
        selectedUnit2 = unit;
        document.querySelector('.escolha2').innerText = unit;  // Altera o texto do botão da unidade 2
        document.getElementById('dropdown2').style.display = 'none';  // Fecha o dropdown após seleção
    }
}

// Função para converter a temperatura
function convertTemperature() {
    const temperature = parseFloat(document.getElementById('numericTextarea').value);
    console.log('Temperatura inserida:', temperature);

    if (isNaN(temperature)) {
        alert('Por favor, insira um número válido.');
        return;
    }

    if (!selectedUnit1 || !selectedUnit2) {
        alert('Por favor, selecione as unidades para ambas as opções!');
        return;
    }

    let result;

    // Converte de acordo com as unidades selecionadas
    if (selectedUnit1 === 'Fahrenheit') {
        if (selectedUnit2 === 'Celsius') {
            result = (temperature - 32) * 5/9;
        } else if (selectedUnit2 === 'Kelvin') {
            result = (temperature + 459.67) * 5/9;
        } else {
            result = temperature;  // Já está em Fahrenheit
        }
    } else if (selectedUnit1 === 'Celsius') {
        if (selectedUnit2 === 'Fahrenheit') {
            result = (temperature * 9/5) + 32;
        } else if (selectedUnit2 === 'Kelvin') {
            result = temperature + 273.15;
        } else {
            result = temperature;  // Já está em Celsius
        }
    } else if (selectedUnit1 === 'Kelvin') {
        if (selectedUnit2 === 'Fahrenheit') {
            result = (temperature - 273.15) * 9/5 + 32;
        } else if (selectedUnit2 === 'Celsius') {
            result = temperature - 273.15;
        } else {
            result = temperature;  // Já está em Kelvin
        }
    }

    if (result === undefined) {
        alert('Erro na conversão, por favor, verifique as unidades selecionadas.');
        return;
    }

    const resultText = `
        <p>${temperature} ${selectedUnit1.charAt(0).toUpperCase() + selectedUnit1.slice(1)} é ${result.toFixed(2)} ${selectedUnit2.charAt(0).toUpperCase() + selectedUnit2.slice(1)}</p>
    `;

    document.getElementById('conversionResult').innerHTML = resultText;
}

function validateInput(event) {
    const input = event.target.value;
    const regex = /^-?\d*\.?\d*$/;

    if (!regex.test(input)) {
        event.target.value = input.slice(0, -1);
    }
}
