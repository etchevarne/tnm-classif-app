const sobrevidaPorEstagio = {
    "papilifero": {
        "Estágio I": { taxa: "quase 100%", comentario: "O prognóstico é excelente. O tratamento geralmente envolve uma tireoidectomia seguida de terapia com iodo radioativo, se necessário." },
        "Estágio II": { taxa: "quase 100%", comentario: "O prognóstico continua sendo muito bom. Os tratamentos envolvem a remoção da glândula tireoide, seguida de terapia com iodo radioativo e monitoramento regular." },
        "Estágio III": { taxa: "93%", comentario: "O prognóstico ainda é bom, mas a doença pode ser mais difícil de tratar. Pode ser necessário um tratamento mais intensivo, incluindo uma combinação de cirurgia, terapia com iodo radioativo e terapia hormonal." },
        "Estágio IV": { taxa: "51%", comentario: "O prognóstico é menos favorável no Estágio IV. Neste estágio, o câncer pode ter se espalhado para outros órgãos. O tratamento pode incluir cirurgia, radioterapia e quimioterapia." }
    },
    "folicular": {
        "Estágio I": { taxa: "quase 100%", comentario: "O prognóstico é excelente. A maioria dos pacientes responde bem à cirurgia e à terapia subsequente com iodo radioativo." },
        "Estágio II": { taxa: "quase 100%", comentario: "O prognóstico é muito bom. A cirurgia é o tratamento mais comum, seguido de terapia com iodo radioativo." },
        "Estágio III": { taxa: "93%", comentario: "O prognóstico é bom, embora o tratamento possa ser mais complexo, envolvendo uma combinação de cirurgia, terapia com iodo radioativo e terapia hormonal." },
        "Estágio IV": { taxa: "51%", comentario: "O prognóstico é menos favorável no Estágio IV. O tratamento pode envolver uma combinação de cirurgia, terapia com iodo radioativo, terapia hormonal e, em alguns casos, quimioterapia." }
    },
    "medular": {
        "Estágio I": { taxa: "97%", comentario: "O prognóstico é excelente no Estágio I do tumor medular de tireoide. A maioria dos pacientes tem uma taxa de sobrevida de aproximadamente 97%. O tratamento primário geralmente envolve cirurgia para remover o tumor da tireoide." },
        "Estágio II": { taxa: "88%", comentario: "No Estágio II do tumor medular de tireoide, a taxa de sobrevida é em torno de 88%. O tratamento envolve cirurgia para remover o tumor e, às vezes, terapia direcionada adicional, dependendo do caso individual." },
        "Estágio III": { taxa: "71%", comentario: "O prognóstico no Estágio III do tumor medular de tireoide é moderado, com uma taxa de sobrevida de aproximadamente 71%. O tratamento geralmente inclui cirurgia para remover o tumor, terapia direcionada e, em alguns casos, radioterapia." },
        "Estágio IV": { taxa: "34%", comentario: "No Estágio IV do tumor medular de tireoide, a taxa de sobrevida é inferior, cerca de 34%. Nesse estágio avançado, o câncer se espalhou para órgãos distantes. O tratamento pode envolver cirurgia, terapia direcionada, radioterapia e, às vezes, quimioterapia." }     
    },
    "anaplasico": {
        "Estágio IV": { taxa: "14%", comentario: "O prognóstico para o câncer anaplásico da tireoide é geralmente pobre, pois este tipo de câncer é agressivo e resistente ao tratamento. O tratamento pode incluir uma combinação de cirurgia, radioterapia e quimioterapia." }
    }

};
/**
 * The function calculates the stage of thyroid cancer based on various factors such as age, tumor
 * size, lymph node involvement, and metastasis.
 * @param idade - age (string)
 * @param tiPo - The type of thyroid cancer (papillary, follicular, anaplastic, or medullary).
 * @param t - t represents the size and extent of the primary tumor in the thyroid gland. It is one of
 * the factors used to determine the stage of thyroid cancer.
 * @param n - The parameter "n" is likely referring to the presence or absence of regional lymph node
 * metastasis in the context of thyroid cancer staging.
 * @param m - The presence or absence of distant metastasis (spread of cancer to other parts of the
 * body) in a patient with thyroid cancer. It is one of the factors used to determine the stage of the
 * cancer.
 * @returns a string representing the stage of thyroid cancer based on the input parameters. The
 * possible values for the returned string are "Estágio I", "Estágio II", "Estágio III", "Estágio IVA",
 * "Estágio IVB", "Estágio IVC", or "Estágio IV".
 */
function calcularEstagio(idade, tiPo, t, n, m) {
    var estagio = "";

    // Câncer de tireoide diferenciado (papilifero ou folicular)
    if (tiPo === "papilifero" || tiPo === "folicular") {
        if (idade === "menorque55") {
            if (m === "m0") {
                estagio = "Estágio I";
            } else if (m === "m1") {
                estagio = "Estágio II";
            }
        } else if (idade === "maiorque55") {
            if ((["t1", "t1a", "t1b", "t2"].includes(t) && n === "n0" && m === "m0") ||
                (["t3", "t3a", "t3b"].includes(t) && n === "n0" && m === "m0")) {
                estagio = "Estágio I";
            } else if ((["t1", "t1a", "t1b", "t2","t3", "t3a", "t3b"].includes(t) && ["n1", "n1a", "n1b"].includes(n) && m === "m0")) {
                estagio = "Estágio II";
            } else if (["t4a", "t4b"].includes(t) && ["n0", "n1", "n1a", "n1b"].includes(n) && m === "m0") {
                estagio = "Estágio III";
            } else if (m === "m1") {
                estagio = "Estágio IV";
            }
        }
    }
   
    // Câncer de tireoide anaplásico (indiferenciado)
    else if (tiPo === "anaplasico") {
        estagio = "Estágio IV";  // Todos os cânceres anaplásicos da tireoide são estágio IV
    }

    // Câncer de tireoide medular
    else if (tiPo === "medular") {
        if (t.startsWith("t1") && n === "n0" && m === "m0") {
            estagio = "Estágio I";
        } else if (t === "t2" && n === "n0" && m === "m0") {
            estagio = "Estágio II";
        } else if (["t1", "t1a","t1b", "t2"].includes(t) && n === "n1" && m === "m0") {
            estagio = "Estágio III";
        } else if ((t.startsWith("t3") && ["n0", "n1"].includes(n) && m === "m0") ||
                   (["t1", "t1a","t1b", "t2", "t3","t3a","t3b"].includes(t) && n === "n0" && m === "m1")) {
            estagio = "Estágio IVA";
        } else if ((t === "t4" && n === "n0" && m === "m0") ||
                   (["t1","t1a","t1b", "t2", "t3"].includes(t) && n === "n1" && m === "m1") ||
                   (t.startsWith("t3") && ["n1", "n1a","n1b"].includes(n) && m === "m1")) {
            estagio = "Estágio IVB";
        } else if (t.startsWith("t4") && ["n0", "n1", "n1a","n1b"].includes(n) && m === "m1") {
            estagio = "Estágio IVC";
        }
    }

    return estagio;
}


function exibirEstagio(estagio) {
    document.getElementById("resultado-estagio").textContent = 'Estágio do Tumor: ' + estagio;
    console.log(estagio);
}


function gerarResumoEstadiamento() {
    const tiPo = document.getElementById('tiPo').value;
    const t = document.getElementById('t').value;
    const n = document.getElementById('n').value;
    const m = document.getElementById('m').value;

    const tValue = t.substr(1);
    const nValue = n.substr(1);
    const mValue = m.substr(1);

    console.log(`Idade: ${idade}, Tipo de Câncer: ${tiPo}, T: ${tValue}, N: ${nValue}, M: ${mValue}`);

    const tiPoCapitalizado = tiPo.charAt(0).toUpperCase() + tiPo.slice(1);

    const resumo = `T${tValue}, N${nValue}, M${mValue},Tumor ${tiPoCapitalizado}.`;
    document.getElementById('resumo-opcoes').innerText = resumo;
    console.log(resumo);
}

function exibirSobrevida(tiPo, estagio) {
    // transformar os estágios IVA, IVB e IVC em Estágio IV
    if (estagio === "Estágio IVA" || estagio === "Estágio IVB" || estagio === "Estágio IVC") {
        estagio = "Estágio IV";
    }
    if (sobrevidaPorEstagio.hasOwnProperty(tiPo) && sobrevidaPorEstagio[tiPo].hasOwnProperty(estagio)) {
        var taxa = sobrevidaPorEstagio[tiPo][estagio].taxa;
        var comentario = sobrevidaPorEstagio[tiPo][estagio].comentario;
        var taxabold = taxa.bold();
    
        // Exibe a taxa de sobrevida e o comentário no elemento com o id "comentario-prognostico"
        document.getElementById("comentario-prognostico").innerHTML = "Taxa de sobrevida em 5 anos: " + taxabold + ". " + comentario;
    } else {
        document.getElementById("comentario-prognostico").innerHTML = "Informações sobre a sobrevida não disponíveis para o estágio e tipo de câncer selecionados.";
    }
}

function exibirFonte() {
    document.getElementById('fonte').textContent = 
    "Fonte: American Cancer Society (https://www.cancer.org/cancer/types/thyroid-cancer.html) \n Fonte2: TNM Maligant Tumors Classification - 8th edition - UICC";
}

function copiarResultado() {
    // Captura o conteúdo de todas as divs
    var resultadoEstagio = document.getElementById("resultado-estagio").textContent;
    var resumoOpcoes = document.getElementById("resumo-opcoes").textContent;
    var comentarioPrognostico = document.getElementById("comentario-prognostico").textContent;
    var taxaSobrevida = document.getElementById("taxa-sobrevida").textContent;
    var fonte = document.getElementById("fonte").textContent;

    // Junta todo o conteúdo em um único string, com quebras de linha entre cada parte
    var resumo = resultadoEstagio + "\n\n" + resumoOpcoes + "\n\n" + comentarioPrognostico + "\n\n" + taxaSobrevida + "\n\n" + fonte;

    // Usando a nova API da área de transferência para copiar o resumo
    navigator.clipboard.writeText(resumo).then(function() {
        /* sucesso - opcional */
        alert("Resumo do estadiamento copiado com sucesso!");
    }, function() {
        /* falha - opcional */
        alert("Erro ao copiar o resumo. Tente novamente.");
    });
}

// Adiciona o evento de clique ao botão
document.getElementById("copy-btn").addEventListener("click", copiarResultado);


document.getElementById("calcular-estagio-tireoide").addEventListener("click", function() {
    var idade = document.getElementById("idade").value;
    var tiPo = document.getElementById("tiPo").value;
    var t = document.getElementById("t").value;
    var n = document.getElementById("n").value;
    var m = document.getElementById("m").value;

    console.log("idade: " + idade);
    console.log("tiPo: " + tiPo);
    console.log("t: " + t);
    console.log("n: " + n);
    console.log("m: " + m);
    console.log("idade antes de calcularEstagio: " + idade);
    console.log("t antes de calcularEstagio: " + t);
    console.log("n antes de calcularEstagio: " + n);
    console.log("m antes de calcularEstagio: " + m);

    var estagio = calcularEstagio(idade, tiPo, t, n, m);
    exibirEstagio(estagio);
    // Gerar resumo
    gerarResumoEstadiamento();
    // Exibir sobrevida
    exibirSobrevida(tiPo, estagio);
    // Exibir fonte
    exibirFonte();
});

// Fim do evento click