let elementos = [];
let totalElementos = 0;

let imagens = [];
let totalImagens = 0;

let servicosTerceirizados = [];
let totalServicos = 0;

let softwares = [];
let totalSoftwares = 0;

let plugins = [];
let totalPlugins = 0;

document.getElementById('clienteConteudo').addEventListener('change', function () {
    const secaoElementos = document.getElementById('secaoElementos');
    if (this.value === 'nao') {
        secaoElementos.style.display = 'block';
    } else {
        secaoElementos.style.display = 'none';
        elementos = [];
        totalElementos = 0;
        atualizarListaElementos();
    }
});

document.getElementById('tratamentoImagens').addEventListener('change', function () {
    const secaoImagens = document.getElementById('secaoImagens');
    if (this.value === 'sim') {
        secaoImagens.style.display = 'block';
    } else {
        secaoImagens.style.display = 'none';
        imagens = [];
        totalImagens = 0;
        atualizarListaImagens();
    }
});

document.getElementById('terceirizacao').addEventListener('change', function () {
    const secaoTerceirizacao = document.getElementById('secaoTerceirizacao');
    if (this.value === 'sim') {
        secaoTerceirizacao.style.display = 'block';
    } else {
        secaoTerceirizacao.style.display = 'none';
        servicosTerceirizados = [];
        totalServicos = 0;
        atualizarListaServicos();
    }
});

document.getElementById('usoSoftwarePago').addEventListener('change', function () {
    const secaoSoftwarePago = document.getElementById('secaoSoftwarePago');
    if (this.value === 'sim') {
        secaoSoftwarePago.style.display = 'block';
    } else {
        secaoSoftwarePago.style.display = 'none';
        softwares = [];
        totalSoftwares = 0;
        atualizarListaSoftwares();
    }
});

document.getElementById('usoCMS').addEventListener('change', function () {
    const secaoPlugins = document.getElementById('secaoPlugins');
    if (this.value === 'sim') {
        secaoPlugins.style.display = 'block';
    } else {
        secaoPlugins.style.display = 'none';
        plugins = [];
        totalPlugins = 0;
        atualizarListaPlugins();
    }
});

document.getElementById('tipoSite').addEventListener('change', function () {
    const secaoQuantidadePaginas = document.getElementById('secaoQuantidadePaginas');
    if (this.value === 'nenhum') {
        secaoQuantidadePaginas.style.display = 'none';
    } else {
        secaoQuantidadePaginas.style.display = 'block';
    }
});

document.getElementById('adicionarElemento').addEventListener('click', function () {
    const nomeElemento = document.getElementById('nomeElemento').value;
    const precoElemento = parseFloat(document.getElementById('precoElemento').value);

    if (nomeElemento && precoElemento > 0) {
        elementos.push({ nome: nomeElemento, preco: precoElemento });
        totalElementos += precoElemento;
        atualizarListaElementos();
        document.getElementById('nomeElemento').value = '';
        document.getElementById('precoElemento').value = '';
    } else {
        alert('Por favor, insira um nome e um preço válido para o elemento.');
    }
});

document.getElementById('adicionarImagem').addEventListener('click', function () {
    const quantidadeImagens = parseInt(document.getElementById('quantidadeImagens').value);
    const precoImagem = parseFloat(document.getElementById('precoImagem').value);

    if (quantidadeImagens > 0 && precoImagem > 0) {
        imagens.push({ quantidade: quantidadeImagens, preco: precoImagem });
        totalImagens += quantidadeImagens * precoImagem;
        atualizarListaImagens();
        document.getElementById('quantidadeImagens').value = '';
        document.getElementById('precoImagem').value = '';
    } else {
        alert('Por favor, insira uma quantidade e um preço válido para a imagem.');
    }
});

document.getElementById('adicionarServico').addEventListener('click', function () {
    const nomeServico = document.getElementById('nomeServico').value;
    const precoServico = parseFloat(document.getElementById('precoServico').value);

    if (nomeServico && precoServico > 0) {
        servicosTerceirizados.push({ nome: nomeServico, preco: precoServico });
        totalServicos += precoServico;
        atualizarListaServicos();
        document.getElementById('nomeServico').value = '';
        document.getElementById('precoServico').value = '';
    } else {
        alert('Por favor, insira um nome e um preço válido para o serviço terceirizado.');
    }
});

document.getElementById('adicionarSoftware').addEventListener('click', function () {
    const nomeSoftware = document.getElementById('nomeSoftware').value;
    const precoSoftware = parseFloat(document.getElementById('precoSoftware').value);

    if (nomeSoftware && precoSoftware > 0) {
        softwares.push({ nome: nomeSoftware, preco: precoSoftware });
        totalSoftwares += precoSoftware;
        atualizarListaSoftwares();
        document.getElementById('nomeSoftware').value = '';
        document.getElementById('precoSoftware').value = '';
    } else {
        alert('Por favor, insira um nome e um preço válido para o software pago.');
    }
});

document.getElementById('adicionarPlugin').addEventListener('click', function () {
    const nomePlugin = document.getElementById('nomePlugin').value;
    const precoPlugin = parseFloat(document.getElementById('precoPlugin').value);

    if (nomePlugin && precoPlugin > 0) {
        plugins.push({ nome: nomePlugin, preco: precoPlugin });
        totalPlugins += precoPlugin;
        atualizarListaPlugins();
        document.getElementById('nomePlugin').value = '';
        document.getElementById('precoPlugin').value = '';
    } else {
        alert('Por favor, insira um nome e um preço válido para o plugin.');
    }
});

function atualizarListaElementos() {
    const listaElementos = document.getElementById('listaElementos');
    listaElementos.innerHTML = '';
    elementos.forEach((elemento, index) => {
        const item = document.createElement('li');
        item.textContent = `${elemento.nome} - R$ ${elemento.preco.toFixed(2)}`;
        listaElementos.appendChild(item);
    });
}

function atualizarListaImagens() {
    const listaImagens = document.getElementById('listaImagens');
    listaImagens.innerHTML = '';
    imagens.forEach((imagem, index) => {
        const item = document.createElement('li');
        item.textContent = `${imagem.quantidade} imagens - R$ ${imagem.preco.toFixed(2)} cada`;
        listaImagens.appendChild(item);
    });
}

function atualizarListaServicos() {
    const listaServicos = document.getElementById('listaServicos');
    listaServicos.innerHTML = '';
    servicosTerceirizados.forEach((servico, index) => {
        const item = document.createElement('li');
        item.textContent = `${servico.nome} - R$ ${servico.preco.toFixed(2)}`;
        listaServicos.appendChild(item);
    });
}

function atualizarListaSoftwares() {
    const listaSoftwares = document.getElementById('listaSoftwares');
    listaSoftwares.innerHTML = '';
    softwares.forEach((software, index) => {
        const item = document.createElement('li');
        item.textContent = `${software.nome} - R$ ${software.preco.toFixed(2)}`;
        listaSoftwares.appendChild(item);
    });
}

function atualizarListaPlugins() {
    const listaPlugins = document.getElementById('listaPlugins');
    listaPlugins.innerHTML = '';
    plugins.forEach((plugin, index) => {
        const item = document.createElement('li');
        item.textContent = `${plugin.nome} - R$ ${plugin.preco.toFixed(2)}`;
        listaPlugins.appendChild(item);
    });
}

document.getElementById('formularioTrabalho').addEventListener('submit', function (event) {
    event.preventDefault();

    const horasPorDia = parseFloat(document.getElementById('horasPorDia').value);
    const diasPorMes = parseFloat(document.getElementById('diasPorMes').value);
    const custoMensal = parseFloat(document.getElementById('custoMensal').value);
    const percentualAumento = parseFloat(document.getElementById('percentualAumento').value);
    const tempoProjeto = parseFloat(document.getElementById('tempoProjeto').value);
    const clienteConteudo = document.getElementById('clienteConteudo').value;
    const tratamentoImagens = document.getElementById('tratamentoImagens').value;
    const terceirizacao = document.getElementById('terceirizacao').value;
    const usoSoftwarePago = document.getElementById('usoSoftwarePago').value;
    const usoCMS = document.getElementById('usoCMS').value;
    const tipoSite = document.getElementById('tipoSite').value;
    const quantidadePaginas = parseFloat(document.getElementById('quantidadePaginas').value);

    let valorFinal = 0;

    if (horasPorDia > 0 && diasPorMes > 0 && custoMensal > 0 && percentualAumento >= 0 && tempoProjeto > 0) {
        const horasTrabalhadasNoMes = horasPorDia * diasPorMes;
        const valorPorHora = custoMensal / horasTrabalhadasNoMes;
        const valorPorHoraComAumento = valorPorHora * (1 + percentualAumento / 100);

        switch (tipoSite) {
            case 'nenhum':
                valorFinal = 0;
                break;
            case 'one-page':
                valorFinal = 1450;
                break;
            case 'institucional':
                valorFinal = 1500;
                break;
            case 'blog':
                valorFinal = 2000;
                break;
            case 'loja-virtual':
                valorFinal = 2500;
                break;
            case 'portais':
                valorFinal = 4000;
                break;
            default:
                valorFinal = 0;
        }

        valorFinal += (quantidadePaginas - 1) * 250;
        valorFinal += valorPorHoraComAumento * tempoProjeto;

        if (clienteConteudo === 'nao') {
            valorFinal += totalElementos;
        }

        if (tratamentoImagens === 'sim') {
            valorFinal += totalImagens;
        }

        if (terceirizacao === 'sim') {
            valorFinal += totalServicos;
        }

        if (usoSoftwarePago === 'sim') {
            valorFinal += totalSoftwares;
        }

        if (usoCMS === 'sim') {
            valorFinal += totalPlugins;
        }

        const desconto = parseFloat(document.getElementById('desconto').value);

        if (desconto > 0) {
            valorFinal -= valorFinal * (desconto / 100);
        }

        document.getElementById('resultado').innerText =
            `Para cobrir suas despesas mensais de R$ ${custoMensal}, você precisa ganhar R$ ${valorPorHora.toFixed(2)} por hora. 
            Com um aumento de ${percentualAumento}%, você precisaria ganhar R$ ${valorPorHoraComAumento.toFixed(2)} por hora.`;
        // Adicionar classes de Bootstrap para estilo de alerta de sucesso
        document.getElementById('resultado').classList.add('alert', 'alert-success');
        document.getElementById('resultado').style.display = 'block';

        document.getElementById('valorFinal').innerText =
            `O valor total estimado para o projeto é R$ ${valorFinal.toFixed(2)}.`;
        // Adicionar classes de Bootstrap para estilo de alerta de sucesso
        document.getElementById('valorFinal').classList.add('alert', 'alert-success');
        document.getElementById('valorFinal').style.display = 'block';
    } else {
        document.getElementById('resultado').innerText =
            'Por favor, insira valores válidos para horas trabalhadas, dias trabalhados, custo mensal, percentual de aumento e tempo estimado do projeto.';

        document.getElementById('valorFinal').innerText = '';
    }

    // Define a função para limpar todos os campos do formulário
    function limparFormulario() {
        document.getElementById('formularioTrabalho').reset();

        // Limpar seções adicionais
        elementos = [];
        totalElementos = 0;
        atualizarListaElementos();

        imagens = [];
        totalImagens = 0;
        atualizarListaImagens();

        servicosTerceirizados = [];
        totalServicos = 0;
        atualizarListaServicos();

        softwares = [];
        totalSoftwares = 0;
        atualizarListaSoftwares();

        plugins = [];
        totalPlugins = 0;
        atualizarListaPlugins();

        // Esconder seções que devem ser ocultadas
        document.getElementById('secaoElementos').style.display = 'none';
        document.getElementById('secaoImagens').style.display = 'none';
        document.getElementById('secaoTerceirizacao').style.display = 'none';
        document.getElementById('secaoSoftwarePago').style.display = 'none';
        document.getElementById('secaoPlugins').style.display = 'none';
        document.getElementById('secaoQuantidadePaginas').style.display = 'none';

        // Resetar resultados exibidos
        document.getElementById('resultado').innerText = '';
        document.getElementById('valorFinal').innerText = '';
        document.getElementById('resultado').style.display = 'none';
        document.getElementById('valorFinal').style.display = 'none';
    }

    // Adicionar evento de clique ao botão Reiniciar
    document.getElementById('reiniciar').addEventListener('click', function () {
        limparFormulario();
    });

});
