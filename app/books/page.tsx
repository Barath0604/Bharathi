
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

export default function BooksPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);

  useEffect(() => {
    const savedBooks = localStorage.getItem('spiritualBooks');
    if (savedBooks) {
      const parsedBooks = JSON.parse(savedBooks);
      setBooks(parsedBooks);
      setFilteredBooks(parsedBooks);
    } else {
      const defaultBooks: Book[] = [
        {
          id: '1',
          title: 'Divine Wisdom of Shuddhananda',
          description: 'A comprehensive collection of spiritual teachings and profound insights into the nature of divine consciousness. This book explores the fundamental principles of self-realization and the path to enlightenment.',
          fileUrl: '#',
          uploadDate: '2024-01-15'
        },
        {
          id: '2',
          title: 'Songs of the Soul',
          description: 'Beautiful devotional poetry and spiritual verses that touch the heart and elevate the consciousness. Each poem is a gateway to divine communion and inner peace.',
          fileUrl: '#',
          uploadDate: '2024-01-10'
        },
        {
          id: '3',
          title: 'The Path of Love',
          description: 'An exploration of bhakti yoga and the devotional path to God-realization. Learn how love and devotion can transform the human heart and lead to divine union.',
          fileUrl: '#',
          uploadDate: '2024-01-05'
        },
        {
          id: '4',
          title: 'Meditation and Self-Inquiry',
          description: 'Practical guidance on meditation techniques and the ancient practice of self-inquiry. Discover the methods that lead to inner stillness and spiritual awakening.',
          fileUrl: '#',
          uploadDate: '2024-01-01'
        },
        {
          id: '5',
          title: 'Vedantic Teachings',
          description: 'Profound explanations of Vedantic philosophy and the non-dual nature of reality. A deep dive into the ancient wisdom that reveals the unity of all existence.',
          fileUrl: '#',
          uploadDate: '2023-12-25'
        },
        {
          id: '6',
          title: 'Letters to Devotees',
          description: 'Personal correspondence filled with spiritual guidance, encouragement, and divine wisdom. These letters offer intimate insights into the master\'s compassionate teachings.',
          fileUrl: '#',
          uploadDate: '2023-12-20'
        }
      ];
      setBooks(defaultBooks);
      setFilteredBooks(defaultBooks);
      localStorage.setItem('spiritualBooks', JSON.stringify(defaultBooks));
    }
  }, []);

  useEffect(() => {
    const filtered = books.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(filtered);
  }, [searchTerm, books]);

  const handleDownload = (book: Book) => {
    if (book.fileUrl === '#') {
      alert('This is a demo book. In the full version, clicking would download the actual file.');
      return;
    }
    window.open(book.fileUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-orange-800 mb-6" style={{ fontFamily: 'var(--font-pacifico)' }}>
              Sacred Books
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Explore the profound writings and spiritual wisdom of Maharshi Shuddhananda Bharathi. 
              Each book is a treasure trove of divine knowledge and practical guidance for the spiritual seeker.
            </p>
          </div>

          <div className="mb-12">
            <div className="max-w-2xl mx-auto relative">
              <input
                type="text"
                placeholder="Search books by title or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 pl-12 text-lg rounded-full border-2 border-orange-200 focus:border-orange-400 focus:outline-none shadow-md"
              />
              <i className="ri-search-line absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-400 text-xl w-6 h-6 flex items-center justify-center"></i>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBooks.map((book) => (
              <div key={book.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center">
                  <i className="ri-book-open-line text-6xl text-orange-600 w-16 h-16 flex items-center justify-center"></i>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-orange-800 mb-3">{book.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{book.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>
                      <i className="ri-calendar-line mr-1 w-4 h-4 flex items-center justify-center inline-flex"></i>
                      {new Date(book.uploadDate).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <button
                    onClick={() => handleDownload(book)}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <i className="ri-download-line mr-2 w-4 h-4 flex items-center justify-center inline-flex"></i>
                    Download Book
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredBooks.length === 0 && (
            <div className="text-center py-16">
              <i className="ri-search-line text-6xl text-gray-300 mb-4 w-16 h-16 flex items-center justify-center mx-auto"></i>
              <h3 className="text-2xl font-semibold text-gray-500 mb-2">No books found</h3>
              <p className="text-gray-400">Try adjusting your search terms</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}