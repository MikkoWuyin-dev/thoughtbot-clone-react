import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import CloseKnitCaseStudy from './components/CloseKnitCaseStudy.jsx';
import Services from './components/Services.jsx';
import Clients from './components/Clients.jsx';
import HealthcareReport from './components/HealthcareReport.jsx';
import ClientSuccess from './components/ClientSuccess.jsx';
import TestimonialAndPurpose from './components/TestimonialAndPurpose.jsx';
import Resources, { HireUsCta } from './components/Resources.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="tbds-app-frame">
      <Header />
      <main className="tbds-app-frame__body application-main-content" id="main">
        <Hero />
        <CloseKnitCaseStudy />
        <Services />
        <Clients />
        <HealthcareReport />
        <ClientSuccess />
        <TestimonialAndPurpose />
        <Resources />
        <HireUsCta />
      </main>
      <Footer />
    </div>
  );
}
