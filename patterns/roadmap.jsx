import React from "react";
import styles from "../styles/Home.module.css";

const roadmaps = [
  {
    name: "current stage",
    description:
      "Felis, penatibus senectus cum erat laoreet in proin sed cursus. Sed imperdiet turpis vel.",
  },
  {
    name: "3 months",
    description:
      "Felis, penatibus senectus cum erat laoreet in proin sed cursus. Sed imperdiet turpis vel.",
  },
  {
    name: "6 months",
    description:
      "Felis, penatibus senectus cum erat laoreet in proin sed cursus. Sed imperdiet turpis vel.",
  },
  {
    name: "9 months",
    description:
      "Felis, penatibus senectus cum erat laoreet in proin sed cursus. Sed imperdiet turpis vel.",
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
