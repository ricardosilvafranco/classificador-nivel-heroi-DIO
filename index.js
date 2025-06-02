// Lista de Heróis do Senhor dos Anéis

const herois = [
   {nome: "Aragorn", xp: 950},
   {nome: "Legolas", xp: 1500},
   {nome: "Gandalf", xp: 3000},
   {nome: "Frodo", xp: 7000},
   {nome: "Gimli", xp: 8500},
   {nome: "Boromir", xp: 9500},
   {nome: "Elrond", xp: 12000}
];

// Laço de repetição para classificar cada herói
for (let i = 0; i < herois.length; i++) {
    let heroi = herois[i];
    let nivel = "";

    // Estrutura de decisão para determinar o nível
    if (heroi.xp < 1000) {
        nivel = "Ferro";
    } else if (heroi.xp <= 2000) {
        nivel = "Bronze";
    } else if (heroi.xp <= 5000) {
        nivel = "Prata";
    } else if (heroi.xp <= 7000) {
        nivel = "Ouro";
    } else if (heroi.xp <= 8000) {
        nivel = "Platina Diamante";
    } else if (heroi.xp <= 9000) {
        nivel = "Ascendente";
    } else if (heroi.xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    // Exibição do resultado
    console.log(`Herói de nome ${heroi.nome} está no nível de ${nivel}`);
}
