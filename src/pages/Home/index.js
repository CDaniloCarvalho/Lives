import React from 'react';
import Menu from '../../components/Menu'
import lista from '../../data/lista.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';


function Home() {
  return (
    <div className="Home">
      <Menu />

      <BannerMain
        url={lista.categorias[0].videos[0].url}
      />

      <Carousel
        ignoreFirstVideo
        category={lista.categorias[0]}
      />

      <Carousel
        category={lista.categorias[1]}
      />

      <Carousel
        category={lista.categorias[2]}
      />      

      <Carousel
        category={lista.categorias[3]}
      />      

      <Carousel
        category={lista.categorias[4]}
      />      

      <Carousel
        category={lista.categorias[5]}
      />      

      <Footer />
    </div>
  );
}

export default Home;
