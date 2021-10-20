import React from "react";
import Link from "next/link";
import { useWeb3React } from "@web3-react/core";

import styles from "../styles/patterns/hero.module.css";

import Metamask from "../utils/connector";

const Hero = () => {
  const { activate, account, active } = useWeb3React();

  const renderSocialMediaLinks = (
    <div className={styles.flex}>
      <a href="/">
        <img
          src="/icons/github.svg"
          alt="github"
          target="_blank"
          rel="noopener noreferrer"
        />
      </a>
      <a href="/" target="_blank" rel="noopener noreferrer">
        <img src="/icons/twitter.svg" alt="twiiter" />
      </a>
      <a
        href="https://discord.gg/Npfz78G5"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/icons/discord.svg" alt="discord" />
      </a>
    </div>
  );

  return (
    <>
      <div className={styles.hero}>
        <div className={styles.header}>
          <Link href="/">
            <img
              src="/logo.svg"
              alt="logo"
              width={60}
              height={40}
              style={{ cursor: "pointer" }}
            />
          </Link>
          <button
            className={styles.connect}
            onClick={active ? null : () => activate(Metamask)}
          >
            <span>
              {account
                ? `${account?.slice(0, 6)}...${account?.slice(
                    account?.length - 6
                  )}`
                : "connect wallet"}
            </span>
            <img src="/icons/wallet.svg" alt="wallet" />
          </button>
        </div>
        <div className={styles.content}>
          <p className="text_pri_32">Whale Marker NFT</p>
          <p className="text_sec_16" style={{ margin: "1em 0 1.5em" }}>
            Felis, penatibus senectus cum erat laoreet in proin sed cursus. Sed
            imperdiet turpis vel dignissim mauris lectus. A fames etiam egestas
            metus. Vitae elit.
          </p>
          <p className="text_sec_16">
            Each Whale adoption is priced at 0.05 F + Gas
          </p>
          <button className={styles.primaryBtn}>Ambassdor to claim</button>
          {renderSocialMediaLinks}
        </div>
      </div>
    </>
  );
};

export default Hero;
