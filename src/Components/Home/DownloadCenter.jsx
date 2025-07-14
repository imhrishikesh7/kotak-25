import { useState } from 'react';
import {
  FiDownload,
  FiFileText,
  FiShield,
  FiBarChart2,
  FiUsers,
  FiHome,
  FiSearch
} from 'react-icons/fi';

// Mock components for demonstration
const Reveal = ({ children, animation }) => <div>{children}</div>;

const DownloadCenter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const documents = [
    {
      id: 1,
      title: "Independent Auditor's Report on Consolidated Financial Statements",
      category: "financial",
      pages: 127,
      icon: <FiShield className="w-4 h-4" />
    },
    {
      id: 2,
      title: "Consolidated Financial Statements",
      category: "financial",
      pages: 140,
      icon: <FiBarChart2 className="w-4 h-4" />
    },
    {
      id: 3,
      title: "Financial Information of Subsidiaries and Basel III (Pillar 3) Disclosures",
      category: "financial",
      pages: 201,
      icon: <FiHome className="w-4 h-4" />
    },
    {
      id: 4,
      title: "Independent Auditor's Report on Standalone Financial Statements",
      category: "financial",
      pages: 203,
      icon: <FiShield className="w-4 h-4" />
    },
    {
      id: 5,
      title: "Standalone Financial Statements",
      category: "financial",
      pages: 210,
      icon: <FiBarChart2 className="w-4 h-4" />
    },
    {
      id: 6,
      title: "Directors' Report and Annexures",
      category: "statutory",
      pages: 296,
      icon: <FiUsers className="w-4 h-4" />
    },
    {
      id: 7,
      title: "Report on Corporate Governance",
      category: "statutory",
      pages: 349,
      icon: <FiHome className="w-4 h-4" />
    },
    {
      id: 8,
      title: "Management's Discussion and Analysis",
      category: "statutory",
      pages: 402,
      icon: <FiBarChart2 className="w-4 h-4" />
    },
    {
      id: 9,
      title: "Business Responsibility and Sustainability Report (BRSR)",
      category: "statutory",
      pages: 456,
      icon: <FiFileText className="w-4 h-4" />
    },
    {
      id: 10,
      title: "ESG Data Tables",
      category: "annexures",
      pages: 507,
      icon: <FiBarChart2 className="w-4 h-4" />
    },
    {
      id: 11,
      title: "GRI Content Index",
      category: "annexures",
      pages: 512,
      icon: <FiFileText className="w-4 h-4" />
    },
    {
      id: 12,
      title: "Assurance Statements",
      category: "annexures",
      pages: 514,
      icon: <FiShield className="w-4 h-4" />
    }
  ];

  const categories = [
    { id: 'all', name: 'All', count: documents.length },
    { id: 'financial', name: 'Financial', count: documents.filter(d => d.category === 'financial').length },
    { id: 'statutory', name: 'Statutory', count: documents.filter(d => d.category === 'statutory').length },
    { id: 'annexures', name: 'Annexures', count: documents.filter(d => d.category === 'annexures').length }
  ];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDownload = (document) => {
    console.log(`Downloading: ${document.title}`);
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'financial': return 'text-blue-600 bg-blue-50';
      case 'statutory': return 'text-green-600 bg-green-50';
      case 'annexures': return 'text-purple-600 bg-purple-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="marginal bg-gray-100 !my-12 rounded-3xl mx-auto !p-4">
      <div className='w-fit mx-auto mt-12 mb-6 text-center'>
        <Reveal animation="slide-up">
          <h3 className="text-2xl mb-3 font-bold text-red-600 pb-2 border-b border-gray-400">Download Center</h3>
        </Reveal>
        <Reveal animation="slide-up">
          <h1 className="text-3xl md:text-5xl pb-2 font-light text-transparent bg-gradient-to-r from-red-600 to-blue-900 bg-clip-text">Access financial statements and reports</h1>
        </Reveal>
      </div>

      {/* Search and Filter */}
      <div className="mb-6 flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search documents..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-3 py-2 cursor-pointer rounded-lg text-sm font-medium transition-colors ${selectedCategory === category.id
                ? 'bg-blue-900 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* Documents List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDocuments.map(document => (
          <div
            key={document.id}
            className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3 flex-1 min-w-0">
                <div className={`p-2 rounded-lg ${getCategoryColor(document.category)}`}>
                  {document.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-gray-900 line-clamp-2 sm:line-clamp-1">
                    {document.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className={`inline-block px-2 py-1 rounded-md text-xs font-medium ${getCategoryColor(document.category)}`}>
                      {document.category.charAt(0).toUpperCase() + document.category.slice(1)}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <FiFileText className="w-3 h-3" />
                      {document.pages} pages
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleDownload(document)}
                className="bg-blue-900 text-white px-3 py-1.5 rounded-md text-xs font-medium hover:bg-blue-700 transition-colors flex items-center gap-1 whitespace-nowrap flex-shrink-0"
              >
                <FiDownload className="w-4 h-4" />
                Download
              </button>
            </div>
          </div>
        ))}
      </div>


      {/* No Results */}
      {filteredDocuments.length === 0 && (
        <div className="text-center py-8">
          <FiFileText className="w-8 h-8 text-gray-400 mx-auto mb-2" />
          <h3 className="text-sm font-medium text-gray-900 mb-1">No documents found</h3>
          <p className="text-xs text-gray-600">Try adjusting your search terms or filters</p>
        </div>
      )}
    </div>
  );
};

export default DownloadCenter;