import './App.css';
import Banner from './components/Banner';
import Experts from './components/Experts';
import Footer from './components/Footer';
import Header from "./components/Header";
import Newsletter from './components/Newsletter';
import Plans from './components/Plans';

function App() {

  const plans = [
    {id:1, name: "WEB DEVELOPMENT", price: "$150", desc1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", desc2: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."},
    {id:2, name: "DATA STRUCTURES AND ALGORITHM", price: "$200", desc1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", desc2: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."},
    {id:3, name: "MACHINE LEARNING", price: "$250", desc1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", desc2: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."},
  ]

  return (
    <>
      <Header />
      <Banner />
      <Experts />
      <Newsletter />
      <div className='flex space-x-5 p-20'>
        {plans.map((plan,id) => (
          <Plans key={id} plan={plan}/>
        ))}
      </div>
      <Footer />
    </>  
  );
}

export default App;
