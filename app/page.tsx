
'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(251, 146, 60, 0.1), rgba(217, 119, 6, 0.2)), url('https://readdy.ai/api/search-image?query=Peaceful%20spiritual%20guru%20meditating%20in%20serene%20temple%20setting%20with%20soft%20golden%20light%2C%20traditional%20Indian%20spiritual%20atmosphere%2C%20saffron%20robes%2C%20divine%20peaceful%20expression%2C%20temple%20bells%20and%20incense%2C%20warm%20golden%20hour%20lighting%20creating%20divine%20aura%2C%20minimalist%20background%20with%20subtle%20lotus%20patterns&width=1920&height=1080&seq=hero1&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto shadow-xl">
            <h1 className="text-5xl md:text-7xl font-bold text-orange-800 mb-6" style={{ fontFamily: 'var(--font-pacifico)' }}>
              Maharshi Shuddhananda Bharathi
            </h1>
            <p className="text-2xl md:text-3xl text-orange-700 mb-8 font-medium">
              Divine Sage • Spiritual Master • Enlightened Soul
            </p>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Welcome to the sacred space dedicated to the life, teachings, and divine wisdom of Maharshi Shuddhananda Bharathi, 
              a luminous spiritual master who illuminated countless souls on their journey to self-realization.
            </p>
          </div>
        </div>
      </section>

      {/* About Him Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-orange-800" style={{ fontFamily: 'var(--font-pacifico)' }}>
              About The Divine Master
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Maharshi Shuddhananda Bharathi was a revered spiritual master, poet, and philosopher who dedicated his life 
                  to the pursuit of divine truth and the upliftment of humanity. Born with an innate spiritual consciousness, 
                  he embodied the ancient wisdom of the Vedas and Upanishads.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  His teachings transcended religious boundaries, focusing on the universal principles of love, compassion, 
                  and self-realization. Through his profound writings, melodious devotional songs, and direct spiritual guidance, 
                  he touched millions of hearts worldwide.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Known for his simple lifestyle and profound wisdom, Maharshi emphasized the importance of inner purification, 
                  devotion to the Divine, and service to humanity as the path to spiritual liberation.
                </p>
              </div>
              
              <div className="relative">
                <img 
                  src="https://readdy.ai/api/search-image?query=Wise%20elderly%20Indian%20spiritual%20master%20with%20serene%20expression%2C%20white%20beard%2C%20peaceful%20eyes%20radiating%20divine%20wisdom%2C%20traditional%20spiritual%20attire%2C%20soft%20lighting%20creating%20sacred%20atmosphere%2C%20portrait%20style%20with%20warm%20golden%20background%2C%20devotional%20peaceful%20ambiance&width=600&height=800&seq=about1&orientation=portrait"
                  alt="Maharshi Shuddhananda Bharathi"
                  className="w-full h-96 object-cover object-top rounded-lg shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* His History Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-orange-800" style={{ fontFamily: 'var(--font-pacifico)' }}>
              His Sacred Journey
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <i className="ri-seedling-line text-2xl text-orange-600 w-8 h-8 flex items-center justify-center"></i>
                </div>
                <h3 className="text-2xl font-semibold text-orange-800 mb-4 text-center">Early Life</h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  Born into a devout family, Maharshi showed extraordinary spiritual inclinations from childhood. 
                  His early years were marked by intense devotion and an insatiable quest for divine knowledge.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <i className="ri-book-open-line text-2xl text-orange-600 w-8 h-8 flex items-center justify-center"></i>
                </div>
                <h3 className="text-2xl font-semibold text-orange-800 mb-4 text-center">Scholarly Pursuits</h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  A prolific writer and scholar, he authored numerous spiritual texts, poetry, and philosophical works. 
                  His writings reflect deep understanding of both traditional wisdom and contemporary spiritual needs.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <i className="ri-heart-3-line text-2xl text-orange-600 w-8 h-8 flex items-center justify-center"></i>
                </div>
                <h3 className="text-2xl font-semibold text-orange-800 mb-4 text-center">Divine Service</h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  Throughout his life, Maharshi dedicated himself to serving humanity, establishing spiritual centers, 
                  and guiding countless seekers on their path to enlightenment and divine realization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* His Teachings Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-orange-800" style={{ fontFamily: 'var(--font-pacifico)' }}>
              Divine Teachings
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold text-orange-800 mb-4">Self-Realization</h3>
                  <p className="text-gray-700 leading-relaxed">
                    "Know thyself" was the cornerstone of Maharshi's teachings. He emphasized that true happiness 
                    and liberation come from understanding one's divine nature and realizing the eternal Self within.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold text-orange-800 mb-4">Universal Love</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Maharshi taught that love is the ultimate path to divinity. He advocated seeing the divine 
                    in all beings and treating every soul with compassion, kindness, and reverence.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold text-orange-800 mb-4">Devotional Practice</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Through prayer, meditation, and devotional singing, Maharshi showed how spiritual practices 
                    purify the heart and mind, leading to direct experience of the Divine presence.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://readdy.ai/api/search-image?query=Serene%20meditation%20scene%20with%20spiritual%20master%20teaching%20disciples%20under%20sacred%20banyan%20tree%2C%20peaceful%20ashram%20setting%2C%20golden%20hour%20lighting%2C%20traditional%20Indian%20spiritual%20environment%2C%20devotees%20listening%20attentively%2C%20divine%20peaceful%20atmosphere%2C%20warm%20colors&width=600&height=800&seq=teachings1&orientation=portrait"
                  alt="Spiritual Teaching"
                  className="w-full h-full object-cover object-top rounded-lg shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8" style={{ fontFamily: 'var(--font-pacifico)' }}>
            Explore His Divine Legacy
          </h2>
          <p className="text-xl text-orange-100 mb-12 max-w-3xl mx-auto">
            Discover the profound wisdom through his books, immerse yourself in devotional songs, 
            and witness the divine presence through sacred photographs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <a href="/books" className="bg-white text-orange-600 px-8 py-6 rounded-lg font-semibold text-lg hover:bg-orange-50 transition-colors shadow-lg cursor-pointer whitespace-nowrap">
              <i className="ri-book-line text-2xl mb-2 w-6 h-6 flex items-center justify-center mx-auto"></i>
              Sacred Books
            </a>
            <a href="/songs" className="bg-white text-orange-600 px-8 py-6 rounded-lg font-semibold text-lg hover:bg-orange-50 transition-colors shadow-lg cursor-pointer whitespace-nowrap">
              <i className="ri-music-line text-2xl mb-2 w-6 h-6 flex items-center justify-center mx-auto"></i>
              Devotional Songs
            </a>
            <a href="/photos" className="bg-white text-orange-600 px-8 py-6 rounded-lg font-semibold text-lg hover:bg-orange-50 transition-colors shadow-lg cursor-pointer whitespace-nowrap">
              <i className="ri-image-line text-2xl mb-2 w-6 h-6 flex items-center justify-center mx-auto"></i>
              Sacred Gallery
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}