import React from "react";
import "./Features.css";

const Features = () => {
  const features = [
    {
      icon: "fa-solid fa-tag",
      title: "Showcase Your Cars",
      desc: "My favourite car is bugati.",
    },
    {
      icon: "fa-solid fa-gear",
      title: "My favourite Cars",
      desc: "My favourite car is mercedes.",
    },
    {
      icon: "fa-solid fa-check",
      title: "Unlimited Colors",
      desc: "My favourite car is Civic.",
    },
    {
      icon: "fa-solid fa-desktop",
      title: "My favourite Cars",
      desc: "my favourite card is bmw b.",
    },
    {
      icon: "fa-solid fa-file-lines",
      title: "My favourite Cars",
      desc: "Designed is very beautiful.",
    },
    {
      icon: "fa-solid fa-life-ring",
      title: "My favourite Cars",
      desc: "Designed is very beautiful.",
    },
  ];

  return (
    <section className="features">

      {features.map((item, index) => (
        <div className="feature-card" key={index}>

          <div className="lefti">
            <i className={item.icon}></i>
          </div>

          <div className="rightp">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>

        </div>
      ))}

    </section>
  );
};

export default Features;