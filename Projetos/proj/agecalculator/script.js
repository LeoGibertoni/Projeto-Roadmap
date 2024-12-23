function verificar() {
    var dataAtual = new Date(); // Data atual
    var anoAtual = dataAtual.getFullYear(); // Ano atual
    var mesAtual = dataAtual.getMonth(); // Mês atual (0-11)
    var diaAtual = dataAtual.getDate(); // Dia do mês atual

    var fano = document.getElementById('txtano'); // Campo de entrada
    var res = document.getElementById('resultado'); // Área de resultado

    if (!fano.value) {
        // Verifica se o campo está vazio
        window.alert('Por favor, selecione uma data válida!');
        res.innerHTML = '';
        return;
    }

    var dataNascimento = new Date(fano.value); // Cria um objeto Date com o valor do input
    var anoNascimento = dataNascimento.getFullYear(); // Ano de nascimento
    var mesNascimento = dataNascimento.getMonth(); // Mês de nascimento (0-11)
    var diaNascimento = dataNascimento.getDate(); // Dia do mês de nascimento

    if (anoNascimento > anoAtual || (anoNascimento === anoAtual && mesNascimento > mesAtual)) {
        // Verifica se a data de nascimento é futura
        window.alert('Por favor, insira uma data válida!');
        res.innerHTML = '';
        return;
    }

    // Calcula a idade em anos
    var idadeAnos = anoAtual - anoNascimento;

    // Ajusta os anos se o mês atual for menor que o mês de nascimento
    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idadeAnos--;
    }

    // Calcula a idade em meses
    var idadeMeses = mesAtual - mesNascimento;
    if (mesAtual < mesNascimento) {
        idadeMeses += 12; // Ajusta para meses negativos
    }

    res.innerHTML = `Detectamos uma idade de <strong>${idadeAnos} anos</strong> e <strong>${idadeMeses} meses</strong>.`;
}
