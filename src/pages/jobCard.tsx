import React from "react";
import "./Home.css";

interface JobCardProps {
  title: string;
  description: string;
  contact: string;
}

const JobCard: React.FC<JobCardProps> = ({ title, description, contact }) => {
  const style = {
    whiteSpace: "pre-line",
  };
  const formattedContact = `https://api.whatsapp.com/send?phone=${contact.replace(
    /\D/g,
    ""
  )}`;

  return (
    <div className="job">
      <h1>{title}</h1>
      <p style={style}>{description}</p>
      <p>contato: {contact}</p>
      <p>
        <img className="vetor" src={"images/big-money-bag.svg"} alt="money" />
        Salário a combinar
      </p>
      <a href={formattedContact}>
        <button>Candidatar</button>
      </a>
    </div>
  );
};

export default JobCard;
