import HeroSection from 'components/HeroSection';
import Maresdi from 'pages/Maresdis';
import Boxes from 'pages/Boxes';
import Header from 'components/header/header';

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Maresdi />
      <Boxes />
    </div>

  );

}

export default Home;