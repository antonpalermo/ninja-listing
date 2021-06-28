import Link from "next/link";
import Head from 'next/head';

import styles from "../../styles/Ninjas.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      ninjas: data,
    },
  };
};

const Ninjas = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title>Ninja List - Ninjas</title>
      </Head>
      <div>
        <h1 className={"title"}>Ninjas!</h1>
        <p className={"text"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
          ipsa, doloremque, ex est voluptatibus repudiandae ad sit iure unde
          fugiat laudantium a accusamus numquam laboriosam omnis? Iusto rem
          nulla facilis?
        </p>

        {ninjas.map((ninja) => (
          // eslint-disable-next-line @next/next/link-passhref
          <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
            <div className={styles.card}>
              <p className={styles.id}>{ninja.id}</p>
              <div>
                <h1 className={styles.name}>{ninja.name}</h1>
                <p>{ninja.email}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Ninjas;
