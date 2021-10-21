import React from "react";
import styles from "../styles/Home.module.css";

const roadmaps = [
  {
    name: "current stage",
    description:
      "From First Whale: 20% of all Sales will go to Whale Treasury for purchasing Whales from OS.",
  },
  {
    name: "3 months",
    description:
      "20% Sold - Launch Staking: Drop your whale in our ocean to earn $KRILL which can be used in the Whale Maker Store",
  },
  {
    name: "6 months",
    description:
      "50% Sold - Launch The Whale Maker Store: This is where you can use your $KRILL to buy pre-mint, presale, and whitelist spots from our partner projects.",
  },
  {
    name: "9 months",
    description:
      "100% Sold - Launch The Whale Shark Alpha Chat and WhaleMakerDAO: A community led DAO that will seek out and devour the best projects in the market. As there is no public sale we will do a release once we have sold out.",
  },
];

const Roadmap = () => {
  const renderRoadmaps = (
    <div className={styles.roadmapCardWrapper}>
      {roadmaps.map((data, index) => {
        return (
          <div key={index} className={styles.roadmapCard}>
            <p className="text_pri_14">{data.name}</p>
            <div className={styles.pointer}>
              <p></p>
            </div>
            <p className="text_sec_14">{data.description}</p>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className={styles.roadmap}>
      <center className="text_pri_32">Roadmap</center>
      {renderRoadmaps}
    </div>
  );
};

export default Roadmap;
