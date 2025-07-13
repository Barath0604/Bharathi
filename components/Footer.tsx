
export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-orange-800 to-amber-800 text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'var(--font-pacifico)' }}>
              Maharshi Shuddhananda Bharathi
            </h3>
            <p className="text-orange-100">
              Dedicated to preserving and sharing the spiritual wisdom and teachings of the great sage.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/" className="block text-orange-100 hover:text-white cursor-pointer">Home</a>
              <a href="/books" className="block text-orange-100 hover:text-white cursor-pointer">Books</a>
              <a href="/songs" className="block text-orange-100 hover:text-white cursor-pointer">Songs</a>
              <a href="/photos" className="block text-orange-100 hover:text-white cursor-pointer">Gallery</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-orange-100">
              <p>For spiritual guidance and inquiries</p>
              <p>Email: info@shuddhanandabharathi.org</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-orange-700 mt-8 pt-6 text-center text-orange-100">
          <p>&copy; 2024 Maharshi Shuddhananda Bharathi Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}