
'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface Song {
  id: string;
  title: string;
  description: string;
  audioUrl: string;
  uploadDate: string;
}

export default function SongsPage() {
  const [songs, setSongs] = useState<Song[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSongs, setFilteredSongs] = useState<Song[]>([]);
  const [currentPlaying, setCurrentPlaying] = useState<string | null>(null);
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement }>({});

  useEffect(() => {
    const savedSongs = localStorage.getItem('spiritualSongs');
    if (savedSongs) {
      const parsedSongs = JSON.parse(savedSongs);
      setSongs(parsedSongs);
      setFilteredSongs(parsedSongs);
    } else {
      const defaultSongs: Song[] = [
        {
          id: '1',
          title: 'Om Namah Shivaya',
          description: 'A powerful devotional chant dedicated to Lord Shiva, invoking divine blessings and inner purification through sacred mantras.',
          audioUrl: '#',
          uploadDate: '2024-01-15'
        },
        {
          id: '2',
          title: 'Bhajan of Divine Love',
          description: 'A heart-touching devotional song expressing the soul\'s longing for divine union and the eternal love between devotee and the Divine.',
          audioUrl: '#',
          uploadDate: '2024-01-12'
        },
        {
          id: '3',
          title: 'Guru Stotram',
          description: 'Sacred verses in praise of the spiritual master, acknowledging the guru\'s role in guiding souls from darkness to light.',
          audioUrl: '#',
          uploadDate: '2024-01-10'
        },
        {
          id: '4',
          title: 'Meditation Mantra',
          description: 'Peaceful chanting designed to deepen meditation practice and bring the mind to a state of divine contemplation.',
          audioUrl: '#',
          uploadDate: '2024-01-08'
        },
        {
          id: '5',
          title: 'Krishna Bhajan',
          description: 'Melodious devotional song celebrating Lord Krishna\'s divine play and the joy of surrendering to divine will.',
          audioUrl: '#',
          uploadDate: '2024-01-05'
        },
        {
          id: '6',
          title: 'Evening Aarti',
          description: 'Traditional evening prayer song offering gratitude to the Divine and seeking blessings for spiritual progress.',
          audioUrl: '#',
          uploadDate: '2024-01-03'
        }
      ];
      setSongs(defaultSongs);
      setFilteredSongs(defaultSongs);
      localStorage.setItem('spiritualSongs', JSON.stringify(defaultSongs));
    }
  }, []);

  useEffect(() => {
    const filtered = songs.filter(song =>
      song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSongs(filtered);
  }, [searchTerm, songs]);

  const handlePlay = (songId: string, audioUrl: string) => {
    if (audioUrl === '#') {
      alert('This is a demo song. In the full version, clicking would play the actual audio file.');
      return;
    }

    if (currentPlaying && currentPlaying !== songId && audioRefs.current[currentPlaying]) {
      audioRefs.current[currentPlaying].pause();
    }

    const audio = audioRefs.current[songId];
    if (audio) {
      if (currentPlaying === songId) {
        audio.pause();
        setCurrentPlaying(null);
      } else {
        audio.play();
        setCurrentPlaying(songId);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-orange-800 mb-6" style={{ fontFamily: 'var(--font-pacifico)' }}>
              Devotional Songs
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Immerse yourself in the divine melodies and sacred chants composed by Maharshi Shuddhananda Bharathi. 
              These devotional songs uplift the spirit and connect the heart with the Divine.
            </p>
          </div>

          <div className="mb-12">
            <div className="max-w-2xl mx-auto relative">
              <input
                type="text"
                placeholder="Search songs by title or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 pl-12 text-lg rounded-full border-2 border-orange-200 focus:border-orange-400 focus:outline-none shadow-md"
              />
              <i className="ri-search-line absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-400 text-xl w-6 h-6 flex items-center justify-center"></i>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredSongs.map((song) => (
              <div key={song.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-32 bg-gradient-to-r from-orange-100 to-amber-100 flex items-center justify-center">
                  <i className="ri-music-2-line text-4xl text-orange-600 w-10 h-10 flex items-center justify-center"></i>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-orange-800 mb-3">{song.title}</h3>
                  <p className="text-gray-600 mb-4">{song.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>
                      <i className="ri-calendar-line mr-1 w-4 h-4 flex items-center justify-center inline-flex"></i>
                      {new Date(song.uploadDate).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => handlePlay(song.id, song.audioUrl)}
                      className="flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
                    >
                      <i className={`${currentPlaying === song.id ? 'ri-pause-line' : 'ri-play-line'} w-4 h-4 flex items-center justify-center`}></i>
                      <span>{currentPlaying === song.id ? 'Pause' : 'Play'}</span>
                    </button>
                    
                    <div className="text-sm text-gray-500">
                      <i className="ri-headphone-line mr-1 w-4 h-4 flex items-center justify-center inline-flex"></i>
                      Devotional
                    </div>
                  </div>
                  
                  {song.audioUrl !== '#' && (
                    <audio
                      ref={(el) => {
                        if (el) audioRefs.current[song.id] = el;
                      }}
                      onEnded={() => setCurrentPlaying(null)}
                      className="w-full mt-4"
                      controls
                    >
                      <source src={song.audioUrl} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredSongs.length === 0 && (
            <div className="text-center py-16">
              <i className="ri-search-line text-6xl text-gray-300 mb-4 w-16 h-16 flex items-center justify-center mx-auto"></i>
              <h3 className="text-2xl font-semibold text-gray-500 mb-2">No songs found</h3>
              <p className="text-gray-400">Try adjusting your search terms</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}