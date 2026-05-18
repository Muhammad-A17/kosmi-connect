import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'; // New
import Services from './components/Services';
import InquiryForm from './components/InquiryForm';
import Footer from './components/Footer';
import CoreIndustries from './components/CoreIndustries';
import ContextBasedFilteration from './components/ContextBasedFilteration.jsx';
import DigitalGrowth from './components/DigitalGrowthSection.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero>
        <InquiryForm />
      </Hero>
      <About />
      <ContextBasedFilteration />
      <CoreIndustries />
      <Services />
      <DigitalGrowth />
      <Footer />
    </div>
  );
}

export default App;