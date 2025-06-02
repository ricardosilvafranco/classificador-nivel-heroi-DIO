# 🛡️ Classificador de Nível de Herói - DIO

Este projeto foi desenvolvido como parte de um desafio da [DIO (Digital Innovation One)](https://www.dio.me), com o objetivo de praticar os conceitos básicos de programação em JavaScript, como variáveis, operadores, laços e estruturas de decisão.

A proposta é criar uma **lista de heróis** com base no universo de "O Senhor dos Anéis" e classificá-los em níveis de acordo com sua experiência (XP).

---

## 📚 Tecnologias Utilizadas

- JavaScript (ES6+)
- Node.js (para executar o código localmente)
- Git (para Fazer o versionamento)
- Github (para Fazer a Hospedagem)

---

## 🎯 Objetivo do Desafio

Criar um algoritmo que classifique um herói com base em sua quantidade de experiência (XP), de acordo com os seguintes critérios:

| Faixa de XP        | Nível            |
|--------------------|------------------|
| 0 - 1.000          | Ferro            |
| 1.001 - 2.000      | Bronze           |
| 2.001 - 5.000      | Prata            |
| 5.001 - 7.000      | Ouro             |
| 7.001 - 8.000      | Platina Diamante |
| 8.001 - 9.000      | Ascendente       |
| 9.001 - 10.000     | Imortal          |
| 10.001 ou mais     | Radiante         |

---

## 💡 Como funciona

Cada herói tem um nome e uma quantidade de XP. O programa percorre a lista de heróis, verifica a XP de cada um e imprime uma mensagem com seu nome e nível correspondente.

---

## 📄 Exemplo de Saída

```bash
Herói de nome Aragorn está no nível de Ferro
Herói de nome Legolas está no nível de Bronze
Herói de nome Gandalf está no nível de Prata
Herói de nome Frodo está no nível de Ouro
Herói de nome Gimli está no nível de Ascendente
Herói de nome Boromir está no nível de Imortal
Herói de nome Elrond está no nível de Radiante
