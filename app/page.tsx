"use client";
import Image from "next/image";

import { useState } from "react";
import "./globals.css";

const marcos = [
  {
    titulo: "Quando tudo começou",
    texto: "Aquele momento em que nossos caminhos se cruzaram e, sem perceber, algo especial começou a nascer.",
  },
  {
    titulo: "Nossas primeiras conversas",
    texto: "Conversas simples, risadas bobas e uma vontade cada vez maior de continuar falando com você.",
  },
  {
    titulo: "Os momentos leves",
    texto: "Estar com você trouxe uma leveza diferente para os meus dias.",
  },
  {
    titulo: "O carinho que foi crescendo",
    texto: "Com o tempo, sua presença foi ficando cada vez mais importante para mim.",
  },
  {
    titulo: "Até aqui",
    texto: "Ainda não temos um rótulo, mas tudo que vivemos até agora já significa muito para mim.",
  },
];

const frases = [
  "Foi muito bom te conhecer.",
  "Você chegou de um jeito leve e acabou ficando nos meus pensamentos.",
  "Gosto da forma como nossos momentos acontecem naturalmente.",
  "Mesmo sem pressa, viver isso com você tem sido especial.",
  "Sua presença tornou alguns dias bem melhores.",
];

export default function Home() {
  const [frase, setFrase] = useState("Clique para revelar uma surpresa 💗");

  function mostrarSurpresa() {
    const aleatoria = frases[Math.floor(Math.random() * frases.length)];
    setFrase(aleatoria);
  }

  return (
    <main className="container">
      <section className="hero">
        <div className="heart">💗</div>
        <h1>Desde que te conheci...</h1>
        <p>
          Meus dias ficaram mais leves, mais bonitos e com aquela vontade boa de
          viver mais momentos ao seu lado.
        </p>
      </section>

      <section className="card">
        <h2>Nossa história até aqui</h2>

        <div className="timeline">
          {marcos.map((marco, index) => (
            <div className="timelineItem" key={index}>
              <span>{index + 1}</span>
              <div>
                <h3>{marco.titulo}</h3>
                <p>{marco.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Coisas que eu queria te dizer</h2>

        <div className="messages">
          {frases.map((item, index) => (
            <p key={index}>“{item}”</p>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Nossos registros</h2>

        <p className="muted">
          Alguns momentos que marcaram nossa história até aqui 💗
        </p>

        <div className="photoGrid">

          <div className="photoCard">
            <div className="imageWrapper">
              <Image
                src="/jogo.jpg"
                alt="Nosso momento"
                height={220}
                width={220}
                className="romanticImage"
              />
            </div>

            <p className="photoDescription">
              "Nosso primeiro momento especial juntos 🖤❤️"
            </p>
          </div>

          <div className="photoCard">
            <div className="imageWrapper">
              <Image
                src="/flor.jpg"
                alt="Nosso momento"
                height={220}
                width={220}
                className="romanticImage"
              />
            </div>

            <p className="photoDescription">
              “Ver seu sorriso naquele momento fez eu perceber como pequenos gestos podem se transformar em lembranças especiais. Essas flores foram só uma forma simples de demonstrar o carinho que sinto por você 🌸💗”
            </p>
          </div>

          <div className="photoCard">
            <div className="imageWrapper">
              <Image
                src="/almoco.jpg"
                alt="Nosso momento"
                height={220}
                width={220}
                className="romanticImage"
              />
            </div>

            <p className="photoDescription">
              “Talvez tenha sido só um almoço, mas dividir aquele momento com você tornou tudo mais especial. Entre conversas, risadas e sua companhia, percebi como os momentos simples ao seu lado conseguem ser os melhores 💗”
            </p>
          </div>

          <div className="photoCard">
            <div className="imageWrapper">
              <Image
                src="/cha.jpg"
                alt="Nosso momento"
                height={220}
                width={220}
                className="romanticImage"
              />
            </div>

            <p className="photoDescription">
              “Estar ao seu lado naquele momento só me fez perceber ainda mais o quanto eu gosto de cuidar de você. Ver você melhorando, mesmo aos poucos, já foi suficiente para deixar meu coração mais tranquilo 💗”
            </p>
          </div>

        </div>
      </section>

      <section className="surprise">
        <h2>Uma surpresa para você</h2>
        <p>{frase}</p>
        <button onClick={mostrarSurpresa}>Abrir surpresa</button>
      </section>

      <section className="card">
        <h2>O que eu sinto</h2>
        <p>
          Ainda não somos namorados, mas o que estamos vivendo tem sido muito
          especial para mim. Gosto da sua companhia, do jeito que tudo acontece
          entre a gente e da sensação boa que fica depois de cada momento.
        </p>
      </section>

      <section className="final">
        <h2>Posso continuar vivendo momentos incríveis ao seu lado?</h2>
        <p>Sem pressa, sem cobrança. Só com vontade de continuar.</p>
        <button>Sim 💗</button>
      </section>
    </main>
  );
}