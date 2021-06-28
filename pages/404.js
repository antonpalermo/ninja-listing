import Link from 'next/link';
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const UnavailableRoute = () => {

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000)
  })


  return (
    <>
    <Head>
      <title>Ninja List - Request Unavailable</title>
    </Head>
    <div className={'not-found'}>
      <h1 className={'title'}>Route not available!</h1>
      <p className={'text'}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ducimus
        iure, omnis alias, voluptate libero sit natus sunt sed, quis labore
        harum nisi mollitia atque illum architecto praesentium facere possimus.
      </p>
      <Link href={'/'}>
        <a>Go back home!</a>
      </Link>
    </div>
    </>
  );
};

export default UnavailableRoute;
