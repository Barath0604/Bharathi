
'use client';

import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface Book {
  id: string;
  title: string;
  description: string;
  fileUrl: string;
  uploadDate: string;
}

interface Song {
  id: string;
  title: string;
  description: string;
  audioUrl: string;
  uploadDate: string;
}

interface Photo {
  id: string;
  imageUrl: string;
  caption: string;
  uploadDate: string;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('books');
  const [books, setBooks] = useState<Book[]>([]);
  const [songs, setSongs] = useState<Song[]>([]);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [editingItem, setEditingItem] = useState<any>(null);

  const [newBook, setNewBook] = useState({ title: '', description: '', file: null as File | null });
  const [newSong, setNewSong] = useState({ title: '', description: '', audio: null as File | null });
  const [newPhoto, setNewPhoto] = useState({ image: null as File | null, caption: '' });

  useEffect(() => {
    const savedBooks = localStorage.getItem('spiritualBooks');
    if (savedBooks) setBooks(JSON.parse(savedBooks));

    const savedSongs = localStorage.getItem('spiritualSongs');
    if (savedSongs) setSongs(JSON.parse(savedSongs));

    const savedPhotos = localStorage.getItem('spiritualPhotos');
    if (savedPhotos) setPhotos(JSON.parse(savedPhotos));
  }, []);

  const handleLogin = () => {
    if (password === 'Bharathi2025') {
      setIsAuthenticated(true);
      setPassword('');
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  const generateId = () => {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
  };

  const handleAddBook = () => {
    if (!newBook.title || !newBook.description) {
      alert('Please fill in all required fields.');
      return;
    }

    const book: Book = {
      id: generateId(),
      title: newBook.title,
      description: newBook.description,
      fileUrl: newBook.file ? URL.createObjectURL(newBook.file) : '#',
      uploadDate: new Date().toISOString().split('T')[0]
    };

    const updatedBooks = [...books, book];
    setBooks(updatedBooks);
    localStorage.setItem('spiritualBooks', JSON.stringify(updatedBooks));
    setNewBook({ title: '', description: '', file: null });
  };

  const handleAddSong = () => {
    if (!newSong.title || !newSong.description) {
      alert('Please fill in all required fields.');
      return;
    }

    const song: Song = {
      id: generateId(),
      title: newSong.title,
      description: newSong.description,
      audioUrl: newSong.audio ? URL.createObjectURL(newSong.audio) : '#',
      uploadDate: new Date().toISOString().split('T')[0]
    };

    const updatedSongs = [...songs, song];
    setSongs(updatedSongs);
    localStorage.setItem('spiritualSongs', JSON.stringify(updatedSongs));
    setNewSong({ title: '', description: '', audio: null });
  };

  const handleAddPhoto = () => {
    if (!newPhoto.image) {
      alert('Please select an image.');
      return;
    }

    const photo: Photo = {
      id: generateId(),
      imageUrl: URL.createObjectURL(newPhoto.image),
      caption: newPhoto.caption || 'Untitled photo',
      uploadDate: new Date().toISOString().split('T')[0]
    };

    const updatedPhotos = [...photos, photo];
    setPhotos(updatedPhotos);
    localStorage.setItem('spiritualPhotos', JSON.stringify(updatedPhotos));
    setNewPhoto({ image: null, caption: '' });
  };

  const handleDelete = (type: string, id: string) => {
    if (!confirm('Are you sure you want to delete this item?')) return;

    if (type === 'book') {
      const updatedBooks = books.filter(book => book.id !== id);
      setBooks(updatedBooks);
      localStorage.setItem('spiritualBooks', JSON.stringify(updatedBooks));
    } else if (type === 'song') {
      const updatedSongs = songs.filter(song => song.id !== id);
      setSongs(updatedSongs);
      localStorage.setItem('spiritualSongs', JSON.stringify(updatedSongs));
    } else if (type === 'photo') {
      const updatedPhotos = photos.filter(photo => photo.id !== id);
      setPhotos(updatedPhotos);
      localStorage.setItem('spiritualPhotos', JSON.stringify(updatedPhotos));
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
        <Header />
        
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="text-center mb-8">
                <i className="ri-lock-line text-4xl text-orange-600 mb-4 w-10 h-10 flex items-center justify-center mx-auto"></i>
                <h1 className="text-3xl font-bold text-orange-800 mb-2">Admin Access</h1>
                <p className="text-gray-600">Enter password to access admin panel</p>
              </div>
              
              <div className="space-y-4">
                <input
                  type="password"
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-orange-200 rounded-lg focus:border-orange-400 focus:outline-none"
                  onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                />
                <button
                  onClick={handleLogin}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-orange-800 mb-4" style={{ fontFamily: 'var(--font-pacifico)' }}>
              Admin Panel
            </h1>
            <p className="text-xl text-gray-700">Manage books, songs, and photos</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex border-b">
              <button
                onClick={() => setActiveTab('books')}
                className={`flex-1 px-6 py-4 font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === 'books' 
                    ? 'bg-orange-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Books ({books.length})
              </button>
              <button
                onClick={() => setActiveTab('songs')}
                className={`flex-1 px-6 py-4 font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === 'songs' 
                    ? 'bg-orange-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Songs ({songs.length})
              </button>
              <button
                onClick={() => setActiveTab('photos')}
                className={`flex-1 px-6 py-4 font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === 'photos' 
                    ? 'bg-orange-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Photos ({photos.length})
              </button>
            </div>

            <div className="p-6">
              {activeTab === 'books' && (
                <div>
                  <div className="mb-8 p-6 bg-orange-50 rounded-lg">
                    <h3 className="text-xl font-semibold text-orange-800 mb-4">Add New Book</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <input
                        type="text"
                        placeholder="Book title"
                        value={newBook.title}
                        onChange={(e) => setNewBook({...newBook, title: e.target.value})}
                        className="px-4 py-2 border-2 border-orange-200 rounded-lg focus:border-orange-400 focus:outline-none"
                      />
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => setNewBook({...newBook, file: e.target.files?.[0] || null})}
                        className="px-4 py-2 border-2 border-orange-200 rounded-lg focus:border-orange-400 focus:outline-none"
                      />
                    </div>
                    <textarea
                      placeholder="Book description"
                      value={newBook.description}
                      onChange={(e) => setNewBook({...newBook, description: e.target.value})}
                      rows={3}
                      className="w-full px-4 py-2 border-2 border-orange-200 rounded-lg focus:border-orange-400 focus:outline-none mb-4"
                    ></textarea>
                    <button
                      onClick={handleAddBook}
                      className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
                    >
                      Add Book
                    </button>
                  </div>

                  <div className="space-y-4">
                    {books.map((book) => (
                      <div key={book.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800">{book.title}</h4>
                          <p className="text-gray-600 text-sm">{book.description}</p>
                          <p className="text-gray-400 text-xs">{book.uploadDate}</p>
                        </div>
                        <button
                          onClick={() => handleDelete('book', book.id)}
                          className="text-red-600 hover:text-red-800 p-2 cursor-pointer"
                        >
                          <i className="ri-delete-bin-line text-xl w-5 h-5 flex items-center justify-center"></i>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'songs' && (
                <div>
                  <div className="mb-8 p-6 bg-orange-50 rounded-lg">
                    <h3 className="text-xl font-semibold text-orange-800 mb-4">Add New Song</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <input
                        type="text"
                        placeholder="Song title"
                        value={newSong.title}
                        onChange={(e) => setNewSong({...newSong, title: e.target.value})}
                        className="px-4 py-2 border-2 border-orange-200 rounded-lg focus:border-orange-400 focus:outline-none"
                      />
                      <input
                        type="file"
                        accept=".mp3,.wav,.m4a"
                        onChange={(e) => setNewSong({...newSong, audio: e.target.files?.[0] || null})}
                        className="px-4 py-2 border-2 border-orange-200 rounded-lg focus:border-orange-400 focus:outline-none"
                      />
                    </div>
                    <textarea
                      placeholder="Song description"
                      value={newSong.description}
                      onChange={(e) => setNewSong({...newSong, description: e.target.value})}
                      rows={3}
                      className="w-full px-4 py-2 border-2 border-orange-200 rounded-lg focus:border-orange-400 focus:outline-none mb-4"
                    ></textarea>
                    <button
                      onClick={handleAddSong}
                      className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
                    >
                      Add Song
                    </button>
                  </div>

                  <div className="space-y-4">
                    {songs.map((song) => (
                      <div key={song.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800">{song.title}</h4>
                          <p className="text-gray-600 text-sm">{song.description}</p>
                          <p className="text-gray-400 text-xs">{song.uploadDate}</p>
                        </div>
                        <button
                          onClick={() => handleDelete('song', song.id)}
                          className="text-red-600 hover:text-red-800 p-2 cursor-pointer"
                        >
                          <i className="ri-delete-bin-line text-xl w-5 h-5 flex items-center justify-center"></i>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'photos' && (
                <div>
                  <div className="mb-8 p-6 bg-orange-50 rounded-lg">
                    <h3 className="text-xl font-semibold text-orange-800 mb-4">Add New Photo</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <input
                        type="file"
                        accept=".jpg,.jpeg,.png,.gif"
                        onChange={(e) => setNewPhoto({...newPhoto, image: e.target.files?.[0] || null})}
                        className="px-4 py-2 border-2 border-orange-200 rounded-lg focus:border-orange-400 focus:outline-none"
                      />
                      <input
                        type="text"
                        placeholder="Photo caption (optional)"
                        value={newPhoto.caption}
                        onChange={(e) => setNewPhoto({...newPhoto, caption: e.target.value})}
                        className="px-4 py-2 border-2 border-orange-200 rounded-lg focus:border-orange-400 focus:outline-none"
                      />
                    </div>
                    <button
                      onClick={handleAddPhoto}
                      className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
                    >
                      Add Photo
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {photos.map((photo) => (
                      <div key={photo.id} className="relative group">
                        <img 
                          src={photo.imageUrl} 
                          alt={photo.caption}
                          className="w-full h-48 object-cover object-top rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                          <button
                            onClick={() => handleDelete('photo', photo.id)}
                            className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg cursor-pointer"
                          >
                            <i className="ri-delete-bin-line text-xl w-5 h-5 flex items-center justify-center"></i>
                          </button>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">{photo.caption}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}