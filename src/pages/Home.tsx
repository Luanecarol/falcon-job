import React from "react";
import { Analytics } from "@vercel/analytics/react";
import JobCard from "./jobCard";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="container">
      <Analytics />
      <div className="container-logo">
        <img className="logo" src={"images/terraplanagem.png"} alt="logo" />
        <h1>Lista de Vagas</h1>
      </div>
      <div className="job-container">
        <JobCard
          title="Operador de pá carregadeira"
          description="A empresa Master locação de equipamentos contrata 
          operador de pá carregadeira com experiência,
          desejável CNH cat B Local: Goiânia-GO"
          contact="(62)9 9997 7176"
        />
        <JobCard
          title="Motorista de caminhão"
          description="A empresa Vale do Rio Novo contrata
           motorista de caminhão com experiência,
          desejável CNH cat D Local: terraplanagem de Ribas
           Do Rio Pardo a Camapuã MS RODOVIA MS 338.
          enviar currículo no contato abaixo"
          contact="(67) 9 8108 0035"
        />
        <JobCard
          title="Operador de rolo compactador"
          description="A empresa Vale do Rio Novo contrata
           Operador de rolo compactador com experiência,
           desejável CNH cat B Local: terraplanagem de Ribas
            Do Rio Pardo a Camapuã MS RODOVIA MS 338.
           enviar currículo no contato abaixo"
          contact="(67) 9 8108 0035"
        />
        <JobCard
          title="Operador de patrol de base"
          description="A empresa Vale do Rio Novo contrata
          Operador de patrol de base com experiência,
           desejável CNH cat C Local: terraplanagem de Ribas
            Do Rio Pardo a Camapuã MS RODOVIA MS 338.
            enviar currículo no contato abaixo"
          contact="(67) 9 8108 0035"
        />
        <JobCard
          title="Auxiliar Geral"
          description="A empresa Vale do Rio Novo contrata
           auxiliar geral Local: terraplanagem de Ribas
            Do Rio Pardo a Camapuã MS RODOVIA MS 338.
            enviar currículo no contato abaixo"
          contact="(67) 9 8108 0035"
        />
      </div>
    </div>
  );
};

export default Home;
