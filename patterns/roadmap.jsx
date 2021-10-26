import React from "react";
import styles from "../styles/Home.module.css";

const roadmaps = [
  {
    name: "First wave",
    description: [
      "10,000 Whale Passes will be minted",
      "Private sale ONLY",
      "You must meet OG Whale Status > see server <link>",
      "Launch of WhaleMakerDAO",
    ],
  },
  {
    name: "Second wave",
    description: [
      "Swap 10 Whale Passes for 1 Whale Shark NFT",
      "Top industry artists is minting only 1000 Whale Sharks",
      "Launch of Whale Shark Alpha Chat",
    ],
  },
  {
    name: "Third wave",
    description: [
      "Launch of the Aquarium",
      "Stake your Whale Pass to earn 1 $KRILL per day",
      "Stake your Whale Shark to earn 10 $KRILL per day",
    ],
  },
  {
    name: "Fourth wave",
    description: [
      "Launch of the Whale Store",
      "Use your $KRILL to buy",
      "Premint on partner projects",
      "Presale on partner projects",
      "Whitelist on partner projects",
    ],
  },
  {
    name: "Fifth wave",
    description: ["Coming Soon"],
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
            {/* <p className="text_sec_14">{data.description}</p> */}
            {data.description.map((info, index) => {
              return (
                <p key={index} className="text_sec_14">
                  {info}
                </p>
              );
            })}
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
