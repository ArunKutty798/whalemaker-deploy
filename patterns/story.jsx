import React from "react";
import styles from "../styles/patterns/story.module.css";

const Story = () => {
  const renderWhatIsWhaleMarket = (
    <div className={styles.market}>
      <div>
        <p className="text_pri_32">What is The Whale Maker</p>
        <p className="text_sec_16" style={{ margin: "1em 0 1.5em" }}>
          The Whale Maker is a collection of 10,000 Whales that each serve a
          pass (Whale Pass) to the exclusive Whale Maker Community. The Whale
          Maker is a 100% private mint. There will be NO PUBLIC SALE. To gain
          access you must become an OG Whale before we mint. Holders will get
          first access to partner mints, presales, whitelists, and events.
          Collect and stake 10 Whales to become a Whale Shark and get access to
          our Alpha Chat and WhaleMakerDAO.
        </p>
        <p className="text_sec_16">
          The collection of Whale Marker is stored as ERC-721 tokens on the
          Ethereum blockchain.
        </p>
      </div>
      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <div>
            <p className="text_pri_32 mb-10">6+</p>
            <p className="text_sec_16">Nations</p>
            <img src="/icons/globePassthrough.svg" alt="globe" />
          </div>
        </div>
        <div className={styles.card}>
          <p className="text_pri_32 mb-10">101+</p>
          <p className="text_sec_16">Traits</p>
          <img src="/icons/swordPassthrough.svg" alt="sword" />
        </div>
        <div className={styles.card}>
          <p className="text_pri_32 mb-10">10k</p>
          <p className="text_sec_16">Whales</p>
          <img src="/icons/logoPassthrough.svg" alt="logo" />
        </div>
      </div>
    </div>
  );

  const renderTheStory = (
    <div className={styles.story_block}>
      <div className={styles.block_grid}>
        <div>
          <img src="/images/story1.png" alt="whale" />
        </div>
        <div>
          <img src="/images/story2.png" alt="whale" />
        </div>
        <div>
          <img src="/images/story3.png" alt="whale" />
        </div>
        <div>
          <img src="/images/story4.png" alt="whale" />
        </div>
      </div>
      <div>
        <p className="text_pri_32">The Story Behind The Whale Maker</p>
        <p className="text_sec_16" style={{ margin: "1.5em 0" }}>
          What started as a simple Discord Community has grown into one of the
          most sought after clubs “The OG Whales”.
        </p>
        <p className="text_sec_16" style={{ margin: "1.5em 0" }}>
          The group seeks out and votes on verifying other NFT Projects. Once
          verified they provide the full support of their community, promotion
          army, press team, and marketing teams.
        </p>
        <p className="text_sec_16">
          When the whales move.. They make waves. Less than 5% of projects that
          apply for verification receive it. This is the #1 Community to find
          and gain access to the best NFT Projects on the Market.
        </p>
      </div>
    </div>
  );

  return (
    <div className={styles.story}>
      {renderWhatIsWhaleMarket}
      <div className={styles.flexGap} style={{ marginTop: "-4em" }}>
        <img src="/icons/turtle.svg" alt="fish" className={styles.fish2} />
        <img src="/icons/redFish.svg" alt="fish" className={styles.fish3} />
        <img src="/icons/whiteFish.svg" alt="fish" className={styles.fish1} />
      </div>
      {renderTheStory}
      <div className={styles.flexGap}>
        <img src="/icons/redFish.svg" alt="fish" className={styles.fish1} />
        <img src="/icons/whiteFish.svg" alt="fish" className={styles.fish2} />
        <img src="/icons/turtle.svg" alt="fish" className={styles.fish3} />
      </div>
    </div>
  );
};

export default Story;
