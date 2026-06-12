"use client";

import { useState } from "react";
import Image from "next/image";
import "./globals.css";

const marcos = [
  {
    titulo: "Quando tudo começou",
    texto: "Aquele momento em que nossos caminhos se cruzaram e algo especial começou a nascer.",
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
];

const frases = [
  "Vamos aproveitar essa noite juntos? 💗",
];

export default function Home() {
  const [entrou, setEntrou] = useState(false);
  const [frase, setFrase] = useState("Clique para revelar o convite 💗");
  const [cartaAberta, setCartaAberta] = useState(false);

  function mostrarSurpresa() {
    const aleatoria = frases[Math.floor(Math.random() * frases.length)];
    setFrase(aleatoria);
  }

  const dataInicio = new Date("2024-01-01");
  const hoje = new Date();
const dias = Math.floor(
  (hoje.getTime() - dataInicio.getTime()) / (1000 * 60 * 60 * 24)
);
  if (!entrou) {
  return (
    <main className="intro">
      <div className="floatingHearts">
        <span>💗</span>
        <span>💕</span>
        <span>💖</span>
        <span>🌸</span>
      </div>

      <p className="forName">Para Julia Mara 💗</p>

      <h1>Tenho algo especial para te mostrar...</h1>

      <p>
        Porque desde que te conheci, alguns momentos ficaram mais bonitos.
      </p>

      <button onClick={() => setEntrou(true)}>
        Entrar 💗
      </button>
    </main>
  );
}

  return (
    <main className="container">
      <div className="floatingHearts">
        <span>💗</span><span>💕</span><span>💖</span><span>🌸</span>
      </div>

      <section className="hero">
        <div className="heart">💗</div>
        <h1>Desde que te conheci...</h1>
        <p>
          Meus dias ficaram mais leves, mais bonitos e com aquela vontade boa de
          viver mais momentos ao seu lado.
        </p>
      </section>

      <section className="card counterCard">
        <h2>Já faz um tempo...</h2>
        <p>
          Desde que tudo começou, já se passaram aproximadamente:
        </p>
        <strong>{dias} dias</strong>
        <p className="muted">
          E cada momento até aqui teve um significado especial.
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
        <h2>Coisas que gosto em você</h2>

        <div className="qualities">
          <p>Seu sorriso</p>
          <p>Seu jeito</p>
          <p>Nossas conversas</p>
          <p>A paz que você transmite</p>
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
              Um daqueles momentos simples que ficaram guardados de um jeito especial.
            </p>
          </div>

          <div className="photoCard">
            <div className="imageWrapper">
              <Image
                src="/flor.jpg"
                alt="Flores no aniversário"
                height={220}
                width={220}
                className="romanticImage"
              />
            </div>

            <p className="photoDescription">
              Ver seu sorriso naquele momento fez eu perceber como pequenos gestos
              podem se transformar em lembranças especiais 🌸💗
            </p>
          </div>

          <div className="photoCard">
            <div className="imageWrapper">
              <Image
                src="/almoco.jpg"
                alt="Almoço juntos"
                height={220}
                width={220}
                className="romanticImage"
              />
            </div>

            <p className="photoDescription">
              Talvez tenha sido só um almoço, mas dividir aquele momento com você
              tornou tudo mais especial 💗
            </p>
          </div>

          <div className="photoCard">
            <div className="imageWrapper">
              <Image
                src="/cha.jpg"
                alt="Momento de cuidado"
                height={220}
                width={220}
                className="romanticImage"
              />
            </div>

            <p className="photoDescription">
              Estar ao seu lado naquele momento só me fez perceber ainda mais o
              quanto eu gosto de cuidar de você 💗
            </p>
          </div>
        </div>
      </section>

      <section className="card letterCard">
        <h2>Uma carta para você</h2>

        <button onClick={() => setCartaAberta(!cartaAberta)}>
          {cartaAberta ? "Fechar carta 💌" : "Abrir carta 💌"}
        </button>

        {cartaAberta && (
          <p className="letterText">
            Seria mentira dizer que o que vivemos
            não é especial. Gosto da sua companhia, do seu jeito, dos nossos
            momentos e da forma como tudo acontece naturalmente. Conhecer você
            foi uma das coisas mais bonitas que aconteceu comigo nos últimos
            tempos.
          </p>
        )}
      </section>

      <section className="surprise">
        <h2>Um convite para você</h2>
        <p>{frase}</p>
        <button onClick={mostrarSurpresa}>Abrir Convite</button>
      </section>

      <section className="final">
        <h2>Quer continuar criando memórias comigo?</h2>

        <div className="finalButtons">
          <button>Com certeza 💗</button>
          <button>Óbvio 🥹</button>
        </div>
      </section>
    </main>
  );
}