
'use client';

import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface Photo {
  id: string;
  imageUrl: string;
  caption: string;
  uploadDate: string;
}

export default function PhotosPage() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  useEffect(() => {
    const savedPhotos = localStorage.getItem('spiritualPhotos');
    if (savedPhotos) {
      const parsedPhotos = JSON.parse(savedPhotos);
      setPhotos(parsedPhotos);
    } else {
      const defaultPhotos: Photo[] = [
        {
          id: '1',
          imageUrl: 'https://readdy.ai/api/search-image?query=Peaceful%20elderly%20Indian%20spiritual%20master%20in%20meditation%20pose%2C%20serene%20expression%2C%20traditional%20white%20robes%2C%20sacred%20temple%20background%2C%20divine%20golden%20lighting%2C%20spiritual%20aura%2C%20devotional%20atmosphere&width=400&height=500&seq=photo1&orientation=portrait',
          caption: 'Maharshi in deep meditation at the sacred temple',
          uploadDate: '2024-01-15'
        },
        {
          id: '2',
          imageUrl: 'https://readdy.ai/api/search-image?query=Spiritual%20guru%20teaching%20disciples%20under%20banyan%20tree%2C%20peaceful%20ashram%20setting%2C%20devotees%20sitting%20attentively%2C%20traditional%20Indian%20spiritual%20scene%2C%20warm%20golden%20hour%20light&width=600&height=400&seq=photo2&orientation=landscape',
          caption: 'Teaching devoted disciples the path of enlightenment',
          uploadDate: '2024-01-12'
        },
        {
          id: '3',
          imageUrl: 'https://readdy.ai/api/search-image?query=Sacred%20spiritual%20books%20and%20manuscripts%20on%20wooden%20table%2C%20ancient%20Sanskrit%20texts%2C%20traditional%20writing%20materials%2C%20peaceful%20study%20room%20with%20soft%20lighting%2C%20spiritual%20knowledge%20preservation&width=400&height=500&seq=photo3&orientation=portrait',
          caption: 'Sacred manuscripts and spiritual writings',
          uploadDate: '2024-01-10'
        },
        {
          id: '4',
          imageUrl: 'https://readdy.ai/api/search-image?query=Beautiful%20Hindu%20temple%20during%20sunset%2C%20golden%20light%20streaming%20through%20pillars%2C%20peaceful%20devotional%20atmosphere%2C%20traditional%20architecture%2C%20divine%20sacred%20space&width=600&height=400&seq=photo4&orientation=landscape',
          caption: 'The sacred temple where Maharshi spent his later years',
          uploadDate: '2024-01-08'
        },
        {
          id: '5',
          imageUrl: 'https://readdy.ai/api/search-image?query=Group%20of%20devoted%20spiritual%20seekers%20in%20prayer%2C%20peaceful%20meditation%20hall%2C%20traditional%20Indian%20spiritual%20gathering%2C%20serene%20faces%20in%20contemplation%2C%20divine%20atmosphere&width=500&height=400&seq=photo5&orientation=landscape',
          caption: 'Devotees gathered for evening prayers and satsang',
          uploadDate: '2024-01-05'
        },
        {
          id: '6',
          imageUrl: 'https://readdy.ai/api/search-image?query=Sacred%20lotus%20flowers%20floating%20in%20temple%20pond%2C%20peaceful%20water%20garden%2C%20spiritual%20symbolism%2C%20soft%20morning%20light%2C%20divine%20natural%20beauty%2C%20meditation%20setting&width=400&height=500&seq=photo6&orientation=portrait',
          caption: 'Sacred lotus pond symbolizing spiritual purity',
          uploadDate: '2024-01-03'
        },
        {
          id: '7',
          imageUrl: 'https://readdy.ai/api/search-image?query=Traditional%20oil%20lamps%20and%20incense%20burning%20in%20temple%2C%20divine%20worship%20setting%2C%20peaceful%20devotional%20atmosphere%2C%20warm%20golden%20glow%2C%20sacred%20ritual%20items&width=500&height=400&seq=photo7&orientation=landscape',
          caption: 'Evening aarti with sacred lamps and incense',
          uploadDate: '2024-01-01'
        },
        {
          id: '8',
          imageUrl: 'https://readdy.ai/api/search-image?query=Peaceful%20meditation%20garden%20with%20flowering%20trees%2C%20serene%20ashram%20grounds%2C%20spiritual%20retreat%20setting%2C%20natural%20beauty%2C%20contemplative%20atmosphere%2C%20divine%20tranquility&width=400&height=500&seq=photo8&orientation=portrait',
          caption: 'The peaceful meditation garden at the ashram',
          uploadDate: '2023-12-28'
        }
      ];
      setPhotos(defaultPhotos);
      localStorage.setItem('spiritualPhotos', JSON.stringify(defaultPhotos));
    }
  }, []);

  const openModal = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-orange-800 mb-6" style={{ fontFamily: 'var(--font-pacifico)' }}>
              Sacred Gallery
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Witness the divine presence through these sacred photographs capturing moments of spiritual 
              bliss, teaching, and devotion in the life of Maharshi Shuddhananda Bharathi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {photos.map((photo) => (
              <div 
                key={photo.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => openModal(photo)}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={photo.imageUrl}
                    alt={photo.caption}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-4">
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2">{photo.caption}</p>
                  <div className="text-xs text-gray-400">
                    <i className="ri-calendar-line mr-1 w-3 h-3 flex items-center justify-center inline-flex"></i>
                    {new Date(photo.uploadDate).toLocaleDateString()}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {photos.length === 0 && (
            <div className="text-center py-16">
              <i className="ri-image-line text-6xl text-gray-300 mb-4 w-16 h-16 flex items-center justify-center mx-auto"></i>
              <h3 className="text-2xl font-semibold text-gray-500 mb-2">No photos available</h3>
              <p className="text-gray-400">Photos will appear here once uploaded by the admin</p>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img 
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.caption}
                className="w-full h-auto max-h-[70vh] object-contain object-center"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors cursor-pointer"
              >
                <i className="ri-close-line text-xl w-6 h-6 flex items-center justify-center"></i>
              </button>
            </div>
            
            <div className="p-6">
              <p className="text-lg text-gray-700 mb-2">{selectedPhoto.caption}</p>
              <p className="text-sm text-gray-500">
                <i className="ri-calendar-line mr-1 w-4 h-4 flex items-center justify-center inline-flex"></i>
                {new Date(selectedPhoto.uploadDate).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}