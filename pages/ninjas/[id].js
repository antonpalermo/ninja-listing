import Head from "next/head";
import Link from 'next/link';
import style from "../../styles/NinjaDetails.module.css";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const id = params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  const data = await res.json();

  return {
    props: { ninja: data },
  };
};

const NinjaDetails = ({ ninja }) => {
  return (
    <>
      <Head>
        <title>Ninja List - Ninja Details</title>
      </Head>
      <div>
        <h1 className={"title"}>Ninja Details</h1>
        <p className={"text"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          asperiores pariatur error sint? Facilis optio repellat praesentium
          quia amet perspiciatis dolores? Aut nobis recusandae sunt ut dolorem,
          architecto possimus incidunt?
        </p>
        <div className={style.card}>
          <div className={style.idBadge}>
            <p className={style.id}>{ninja.id}</p>
          </div>
          <div className={style.cardDetails}>
            <h1>{ninja.name}</h1>
            <p className={style.username}>{"@" + ninja.username}</p>
            <Link href={'/ninjas'}>
              <a className={style.returnBtn}>Return to Ninja List</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NinjaDetails;
