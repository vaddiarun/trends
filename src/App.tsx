import { useState } from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import HeroServices from './components/HeroServices';
import PackageSection from './components/PackageSection';
import SocialLocation from './components/SocialLocation';
import Footer from './components/Footer';
import FloatingBookButton from './components/FloatingBookButton';
import BookingModal from './components/BookingModal';
import ServiceList from './components/ServiceList';
import { MEN_PACKAGES, WOMEN_PACKAGES, MEN_SINGLE_SERVICES, WOMEN_SINGLE_SERVICES } from './data/packages';

function App() {
  const [activeTab, setActiveTab] = useState<'men' | 'women'>('men');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleNavigate = (tab: 'men' | 'women') => {
    setActiveTab(tab);
    setTimeout(() => {
      const element = document.getElementById(tab);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const openBookingModal = (serviceName: string = '') => {
    setSelectedService(serviceName);
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
    setSelectedService('');
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-accent selection:text-black pt-safe">
      <Header />
      <HeroBanner onNavigate={handleNavigate} />
      <HeroServices />

      <main className="relative">
        {/* Tab Navigation */}
        <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex w-full md:w-auto md:inline-flex rounded-full bg-white/5 p-1.5 mx-auto md:mx-0 my-4 backdrop-blur-sm border border-white/10">
              <button
                onClick={() => setActiveTab('men')}
                className={`flex-1 md:w-48 py-2.5 rounded-full text-sm md:text-base font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === 'men'
                  ? 'bg-accent text-black shadow-[0_0_20px_rgba(250,204,21,0.3)]'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                Men's Grooming
              </button>
              <button
                onClick={() => setActiveTab('women')}
                className={`flex-1 md:w-48 py-2.5 rounded-full text-sm md:text-base font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === 'women'
                  ? 'bg-secondary text-white shadow-[0_0_20px_rgba(107,45,124,0.4)]'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                Women's Beauty
              </button>
            </div>
          </div>
        </div>

        <div className="animate-fade-in relative z-10">
          {activeTab === 'men' ? (
            <>
              <PackageSection
                title="Men's Groom Packages"
                packages={MEN_PACKAGES}
                theme="men"
                id="men"
                onBook={openBookingModal}
              />
              <ServiceList
                title="Single Services"
                services={MEN_SINGLE_SERVICES}
                theme="men"
                onBook={openBookingModal}
              />
            </>
          ) : (
            <>
              <PackageSection
                title="Women's Beauty Packages"
                packages={WOMEN_PACKAGES}
                theme="women"
                id="women"
                onBook={openBookingModal}
              />
              <ServiceList
                title="Single Services"
                services={WOMEN_SINGLE_SERVICES}
                theme="women"
                onBook={openBookingModal}
              />
            </>
          )}
        </div>

        <SocialLocation />
        <FloatingBookButton onClick={() => openBookingModal()} />
      </main>

      <Footer />

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={closeBookingModal}
        prefilledService={selectedService}
      />
    </div>
  );
}

export default App;
