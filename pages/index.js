import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List - Home</title>
        <meta name="keywords" content="Ninja List" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
          illum, maxime reiciendis fuga dignissimos libero nostrum nam sunt, cum
          ab nisi porro minima fugit explicabo cumque. Saepe accusamus quibusdam
          pariatur.
        </p>

        <Link href={"/ninjas"}>
          <a className={styles.btn}>See All Ninjas</a>
        </Link>
      </div>
    </>
  );
}
