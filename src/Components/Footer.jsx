const Footer = () => {
  return (
    <footer className="bg-[#013367] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          
          {/* Company Logo */}
          <div className="flex items-center">
            <a href="https://www.kotak.com/en/home.html" target="_blank" className="text-xl font-bold w-32">
                    <img src="./home/Kotak-White-Version.webp" alt="Logo" />
                </a>
          </div>
          
          {/* Copyright Statement */}
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()}  Kotak Mahindra Bank Limited. All rights reserved.
          </div>
          
          {/* Developer Logo */}
          <div className="flex items-center text-sm text-gray-400">
            <span className="mr-2">Built by</span>
            <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center mr-1">
              <img src="./k&a logo.webp" alt="" />
            </div>
            
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;