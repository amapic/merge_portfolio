import dynamic from 'next/dynamic';

const Home = dynamic(() => import('../component_landingpage/component_landingpage'), {
    ssr: false,
  });


  export default Home
