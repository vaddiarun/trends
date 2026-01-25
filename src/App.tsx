
import { useState } from 'react';
import Header from './components/Header';
import HeroServices from './components/HeroServices';
import PackageSection from './components/PackageSection';
import SocialLocation from './components/SocialLocation';
import Footer from './components/Footer';
import { MEN_PACKAGES, WOMEN_PACKAGES } from './data/packages';

function App() {
  const [activeTab, setActiveTab] = useState<'men' | 'women'>('men');

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-accent selection:text-black pt-safe">
      <Header />
      <HeroServices />

      <main>
        {/* Tab Navigation */}
        <div className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800 shadow-md">
          <div className="container mx-auto px-4">
            <div className="flex w-full md:w-auto md:inline-flex rounded-xl bg-gray-900 p-1.5 mx-auto md:mx-0 my-4">
              <button
                onClick={() => setActiveTab('men')}
                className={`flex-1 md:w-48 py-3 rounded-lg text-sm md:text-base font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === 'men'
                  ? 'bg-accent text-black shadow-lg shadow-yellow-500/20'
                  : 'text-gray-400 hover:text-white'
                  }`}
              >
                Men's Grooming
              </button>
              <button
                onClick={() => setActiveTab('women')}
                className={`flex-1 md:w-48 py-3 rounded-lg text-sm md:text-base font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === 'women'
                  ? 'bg-secondary text-white shadow-lg shadow-purple-500/30'
                  : 'text-gray-400 hover:text-white'
                  }`}
              >
                Women's Beauty
              </button>
            </div>
          </div>
        </div>

        <div className="animate-fade-in">
          {activeTab === 'men' ? (
            <PackageSection
              title="Men's Groom Packages"
              packages={MEN_PACKAGES}
              theme="men"
              id="men"
            />
          ) : (
            <PackageSection
              title="Women's Beauty Packages"
              packages={WOMEN_PACKAGES}
              theme="women"
              id="women"
            />
          )}
        </div>

        <SocialLocation />
      </main>

      <Footer />
    </div>
  );
}

export default App;
