function calcularEstagio(idade, tiPo, t, n, m) {
  var estagio = "";
  var tiposT1T2T3 = ["t1a", "t1b", "t2", "t3a", "t3b"];
  var tiposN0Nx = ["n0", "nx"];
  var tiposN1aN1b = ["n1","n1a", "n1b"];

  // Câncer de tireoide diferenciado
  if (tiPo === "papilifero" || tiPo === "folicular") {
      if (idade === "menorque55") {
          if (tiposT1T2T3.includes(t) && tiposN0Nx.includes(n) && m === "m0") {
              estagio = "Estágio I";
          } else if (['t1'].includes(t) && tiposN0Nx.includes(n) && m === "m0") {
              estagio = "Estágio I";    
          } else if (m === "m1") {
              estagio = "Estágio II";
          }
      } else if (idade === "maiorque55") {
          if (tiposT1T2T3.includes(t) && n === "n0" && m === "m0") {
              estagio = "Estágio I";
          } else if (["t1"].includes(t) && tiposN0Nx.includes(n) && m === "m0") {
              estagio = "Estágio I";
          } else if (tiposT1T2T3.includes(t) && n === "n1" && m === "m0") {
              estagio = "Estágio II";
          } else if (t.startsWith("t4") && tiposN1aN1b.includes(n) && m === "m1") {
              estagio = "Estágio III";
          } else if (t.startsWith("t4a") && tiposN1aN1b.includes(n) && m === "m1") {
              estagio = "Estágio IV";
          }
      }
  }

  // Câncer de tireoide anaplásico (indiferenciado)
  else if (tiPo === "anaplasico") {
      if (m === "m1") {
          estagio = "Estágio IVC";
      } else if (tiposT1T2T3.includes(t) && tiposN0Nx.includes(n) && m === "m0") {
          estagio = "Estágio IV";
      } else if ((tiposT1T2T3.includes(t) && n === "n1" && m === "m0") || t.startsWith("t3") || t.startsWith("t4")) {
          estagio = "Estágio IVB";
      }
  }

  // Câncer de tireoide medular
  else if (tiPo === "medular") {
      if (t.startsWith("t1") && n === "n0" && m === "m0") {
          estagio = "Estágio I";
      } else if (tiposT1T2T3.includes(t) && n === "n0" && m === "m0") {
          estagio = "Estágio II";
      } else if (tiposT1T2T3.includes(t) && n === "n1" && m === "m0") {
          estagio = "Estágio II";    
      } else if (tiposT1T2T3.includes(t) && n === "n1a" && m === "m0") {
          estagio = "Estágio III";
      } else if (tiposT1T2T3.includes(t) && n === "n1b" && m === "m0") {
          estagio = "Estágio III";    
      } else if (t.startsWith("t4") && n === "n0" && m === "m0") {
          estagio = "Estágio IVA";
      } else if (t.startsWith("t4b") && tiposN1aN1b.includes(n) && m === "m0") {
          estagio = "Estágio IVB";
      } else if (m === "m1") {
          estagio = "Estágio IVC";
      }
  }
  return estagio;
}

//Instituto Nacional de Câncer dos EUA

const opcoesSublocalizacao = {
    "cavidade-oral": [
      "Selecione a sublocalização",
      "Lábio inferior",
      "Lábio superior",
      "Mucosa bucal",
      "Gengiva",
      "Palato duro",
      "Língua",
      "Assoalho bucal",
      "Glândulas salivares menores",
    ],
    faringe: [
      "Selecione a sublocalização",
      "Nasofaringe",
      "Orofaringe",
      "Hipofaringe",
    ],
    laringe: ["Selecione a sublocalização", "Supraglote", "Glote", "Subglote"],
    pele: ["Selecione a sublocalização", "Couro cabeludo", "Face", "Pescoço"],
    "glandulas-salivares": [
      "Selecione a sublocalização",
      "Parótida",
      "Submandibular",
      "Sublingual",
      "Menores",
    ],
  };