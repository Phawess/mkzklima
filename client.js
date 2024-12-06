import React, { useState } from 'react';
import { 
  Home, 
  ShoppingCart, 
  Phone, 
  Mail, 
  MapPin,
  Send 
} from 'lucide-react';

// Product Data
const products = [
  {
    id: 1,
    name: "Salon Kliması",
    price: 5999,
    image: "/api/placeholder/300/200"
  },
  {
    id: 2, 
    name: "Salon Kliması Pro",
    price: 7999,
    image: "/api/placeholder/300/200"
  },
  {
    id: 3,
    name: "Salon Kliması Ultra",
    price: 9999,
    image: "/api/placeholder/300/200"
  }
];

const MKZKlimaWebsite = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Burada gerçek bir email gönderme işlemi yapılacak
    alert('Mesajınız gönderildi: ' + JSON.stringify(contactForm));
    // Reset form
    setContactForm({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      {/* Header */}
      <header className="bg-red-100 p-4 flex justify-between items-center shadow-sm">
        <div className="text-2xl font-bold text-red-700">MKZ Klima</div>
        <nav className="flex space-x-4">
          <a href="#home" className="hover:text-red-700 flex items-center">
            <Home className="mr-2" /> Ana Sayfa
          </a>
          <a href="#products" className="hover:text-red-700 flex items-center">
            <ShoppingCart className="mr-2" /> Ürünler
          </a>
          <a href="#contact" className="hover:text-red-700 flex items-center">
            <Phone className="mr-2" /> İletişim
          </a>
        </nav>
      </header>

      {/* Product List */}
      <section id="products" className="container mx-auto p-6 grid grid-cols-3 gap-6">
        {products.map(product => (
          <div 
            key={product.id} 
            className="bg-white shadow-lg rounded-lg p-4 text-center cursor-pointer hover:shadow-xl transition-all"
            onClick={() => setSelectedProduct(product)}
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="mx-auto mb-4 rounded-lg"
            />
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-red-600 font-bold">{product.price} TL</p>
          </div>
        ))}
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-2 right-2 text-red-600 hover:text-red-800"
            >
              ✕
            </button>
            <img 
              src={selectedProduct.image} 
              alt={selectedProduct.name} 
              className="w-full mb-4 rounded-lg"
            />
            <h2 className="text-xl font-bold mb-2">{selectedProduct.name}</h2>
            <p className="text-gray-600 mb-4">
              Yüksek verimli, sessiz çalışan modern klima çözümü. Evinize konfor ve serin hava getirin.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-red-600 font-bold text-lg">
                {selectedProduct.price} TL
              </span>
              <a 
                href="tel:+905555555555" 
                className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors"
              >
                Sipariş İçin Ara
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section with Form */}
      <section id="contact" className="bg-red-50 p-6">
        <div className="container mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4 text-red-600">İletişim Bilgileri</h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-center justify-center md:justify-start">
                <Phone className="mr-2 text-red-600" />
                <span>0555 555 55 55</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Mail className="mr-2 text-red-600" />
                <span>info@mkzklima.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <MapPin className="mr-2 text-red-600" />
                <span>İstanbul, Türkiye</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleFormSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-red-600">Bize Ulaşın</h3>
            <div className="space-y-4">
              <input 
                type="text" 
                name="name"
                value={contactForm.name}
                onChange={handleFormChange}
                placeholder="Ad Soyad" 
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-300"
                required 
              />
              <input 
                type="email" 
                name="email"
                value={contactForm.email}
                onChange={handleFormChange}
                placeholder="Email" 
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-300"
                required 
              />
              <input 
                type="tel" 
                name="phone"
                value={contactForm.phone}
                onChange={handleFormChange}
                placeholder="Telefon Numarası" 
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-300"
                required 
              />
              <textarea 
                name="message"
                value={contactForm.message}
                onChange={handleFormChange}
                placeholder="Mesajınız" 
                className="w-full p-2 border rounded h-32 focus:outline-none focus:ring-2 focus:ring-red-300"
                required
              ></textarea>
              <button 
                type="submit" 
                className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700 transition-colors flex items-center justify-center"
              >
                <Send className="mr-2" /> Mesaj Gönder
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-600 text-white p-4 text-center">
        © 2024 MKZ Klima - Tüm Hakları Saklıdır
      </footer>
    </div>
  );
};

export default MKZKlimaWebsite;