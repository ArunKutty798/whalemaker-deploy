import React from "react";
import styles from "../styles/patterns/story.module.css";

const Story = () => {
  const renderWhatIsWhaleMarket = (
    <div className={styles.market}>
      <div>
        <p className="text_pri_32">What is Whale Marker NFT Pools?</p>
        <p className="text_sec_16" style={{ margin: "1em 0 1.5em" }}>
          Whale Marker is a collection of 10,000 unique Whale NFTs on the
          Ethereum blockchain. Each whale is a holder's avatar and ticket to
          enter the blockchain game, Whale Marker. Moreover, holders can
          participate in exclusive content airdrops and earn tokens.
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
        <p className="text_pri_32">The Story Behind</p>
        <p className="text_sec_16" style={{ margin: "1.5em 0" }}>
          In 2140, the infectious disease crashed the stability of the
          environment; it was slowly rendering Earth uninhabitable. Scientists
          had to discover another "Earth" to avoid the extinction of all life on
          Earth. Years later, a team of 10 people arrived at a planet where
          there was endless sand. They called it Harena. Unfortunately,
          scientists determined Harena was not suitable for human colonization.
          Without enough fuel, they couldn't travel back to Earth. So the
          surviving 10 decided to transport their consciousness into the only
          creatures that could survive in the condition - meerkats.
        </p>
        <p className="text_sec_16">
          500 years later, the meerkats having inherited the will of humankind,
          evolved into the most superior intelligent creature in this universe.
          A civilization was built on Harena and the other five neighboring
          planets. They called themselves - Galaxy Kats.
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
