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
      link: "./documents/Kotak AR 2024-25-Independent Auditor's Report on Consolidated Financial Statements.pdf",
      category: "financial-statements",
      pages: 127,
      icon: <FiShield className="w-4 h-4" />
    },
    {
      id: 2,
      title: "Consolidated Financial Statements",
      link: "./documents/Kotak AR 2024-25-Consolidated Financial Statements.pdf",
      category: "financial-statements",
      pages: 140,
      icon: <FiBarChart2 className="w-4 h-4" />
    },
    {
      id: 3,
      title: "Financial Information of Subsidiaries and Basel III (Pillar 3) Disclosures",
      category: "financial-statements",
      link: "./documents/Kotak AR 2024-25-Financial Information of Subsidiaries.pdf",
      pages: 201,
      icon: <FiHome className="w-4 h-4" />
    },
    {
      id: 4,
      title: "Independent Auditor's Report on Standalone Financial Statements",
      category: "financial-statements",
      link: "./documents/Kotak AR 2024-25-Independent Auditor's Report on Standalone Financial Statements.pdf",
      pages: 203,
      icon: <FiShield className="w-4 h-4" />
    },
    {
      id: 5,
      title: "Standalone Financial Statements",
      category: "financial-statements",
      link: "./documents/Kotak AR 2024-25-Standalone Financial Statements.pdf",
      pages: 210,
      icon: <FiBarChart2 className="w-4 h-4" />
    },
    {
      id: 6,
      title: "Directors' Report and Annexures",
      category: "statutory-reports",
      link: "./documents/Kotak AR 2024-25-Director's Report.pdf",
      pages: 296,
      icon: <FiUsers className="w-4 h-4" />
    },
    {
      id: 7,
      title: "Report on Corporate Governance",
      category: "statutory-reports",
      link: "./documents/Kotak AR 2024-25-Report on Corporate Governance.pdf",
      pages: 349,
      icon: <FiHome className="w-4 h-4" />
    },
    {
      id: 8,
      title: "Management's Discussion and Analysis",
      category: "statutory-reports",
      link: "./documents/Kotak AR 2024-25-Management's Discussion and Analysis.pdf",
      pages: 402,
      icon: <FiBarChart2 className="w-4 h-4" />
    },
    {
      id: 9,
      title: "Business Responsibility and Sustainability Report (BRSR)",
      category: "statutory-reports",
      link: ".public/documents/Kotak AR 2024-BRSR.pdf",
      pages: 456,
      icon: <FiFileText className="w-4 h-4" />
    },
    {
      id: 10,
      title: "ESG Data Tables",
      category: "annexures",
      link: "./documents/Kotak AR 2024-25-ESG Data Tables.pdf",
      pages: 507,
      icon: <FiBarChart2 className="w-4 h-4" />
    },
    {
      id: 11,
      title: "GRI Content Index",
      category: "annexures",
      link: "./documents/Kotak AR 2024-25-GRI Content Index.pdf",
      pages: 512,
      icon: <FiFileText className="w-4 h-4" />
    },
    {
      id: 12,
      title: "Assurance Statements",
      category: "annexures",
      link: "./documents/Kotak AR 2024-25-Assurance Statements.pdf",
    },
    {
      id: 13,
      title: "Kotak Mahindra Prime Limited",
      category: "Subsidiaries",
      link: "https://www.kotak.com/content/dam/Kotak/investor-relation/Financial-Result/Annual-Reports/FY-2025/subsidiaries/Kotak-Mahindra-Prime-Limited_FY2024-25.pdf",
    },
    {
      id: 14,
      title: "Kotak Mahindra Investments Limited",
      category: "Subsidiaries",
      link: "https://www.kotak.com/content/dam/Kotak/investor-relation/Financial-Result/Annual-Reports/FY-2025/subsidiaries/Kotak-Mahindra-Investments-Limited_FY2024-25.pdf",
    },
    {
      id: 15,
      title: "Kotak Infrastructure Debt Fund Limited",
      category: "Subsidiaries",
      link: "https://www.kotak.com/content/dam/Kotak/investor-relation/Financial-Result/Annual-Reports/FY-2025/subsidiaries/Kotak-Infrastructure-Debt-Fund-Limited_FY2024-25.pdf",
    },
    {
      id: 16,
      title: "Kotak Securities Limited",
      category: "Subsidiaries",
      link: "https://www.kotak.com/content/dam/Kotak/investor-relation/Financial-Result/Annual-Reports/FY-2025/subsidiaries/Kotak-Securities-Limited_FY2024-25.pdf",
    },
    {
      id: 17,
      title: "Kotak Mahindra Capital Company Limited",
      category: "Subsidiaries",
      link: "https://www.kotak.com/content/dam/Kotak/investor-relation/Financial-Result/Annual-Reports/FY-2025/subsidiaries/Kotak-Mahindra-Capital-Company-Limited_FY2024-25.pdf",
    },
    {
      id: 18,
      title: "Kotak Mahindra Life Insurance Company Limited",
      category: "Subsidiaries",
      link: "https://www.kotak.com/content/dam/Kotak/investor-relation/Financial-Result/Annual-Reports/FY-2025/subsidiaries/Kotak-Mahindra-Life-Insurance-Company-Limited_FY2024-25.pdf",
    },
    {
      id: 19,
      title: "Kotak Mahindra Asset Management Company Limited",
      category: "Subsidiaries",
      link: "https://www.kotak.com/content/dam/Kotak/investor-relation/Financial-Result/Annual-Reports/FY-2025/subsidiaries/Kotak-Mahindra-Asset-Management-Company-Limited_FY2024-25.pdf",
    },
    {
      id: 20,
      title: "Kotak Mahindra Trustee Company Limited",
      category: "Subsidiaries",
      link: "https://www.kotak.com/content/dam/Kotak/investor-relation/Financial-Result/Annual-Reports/FY-2025/subsidiaries/Kotak-Mahindra-Trustee-Company-Limited_FY2024-25.pdf",
    },
    {
      id: 21,
      title: "Kotak Alternate Asset Managers Limited",
      category: "Subsidiaries",
      link: "https://www.kotak.com/content/dam/Kotak/investor-relation/Financial-Result/Annual-Reports/FY-2025/subsidiaries/Kotak-Alternate-Asset-Managers-Limited_FY2024-25.pdf",
    },
    {
      id: 22,
      title: "Kotak Mahindra Trusteeship Services Limited",
      category: "Subsidiaries",
      link: "https://www.kotak.com/content/dam/Kotak/investor-relation/Financial-Result/Annual-Reports/FY-2025/subsidiaries/Kotak-Mahindra-Trusteeship-Services-Limited_FY2024-25.pdf",
    },
    {
      id: 23,
      title: "Kotak Mahindra (International) Limited",
      category: "Subsidiaries",
      link: "https://www.kotak.com/content/dam/Kotak/investor-relation/Financial-Result/Annual-Reports/FY-2025/subsidiaries/Kotak-Mahindra-International-Limited_FY2024-25.pdf",
    },
    {
      id: 24,
      title: "Kotak Mahindra (UK) Limited",
      category: "Subsidiaries",
      link: "https://www.kotak.com/content/dam/Kotak/investor-relation/Financial-Result/Annual-Reports/FY-2025/subsidiaries/Kotak-Mahindra-UK-Limited_FY2024-25.pdf",
    },
    {
      id: 25,
      title: "Kotak Mahindra, Inc.",
      category: "Subsidiaries",
      link: "https://www.kotak.com/content/dam/Kotak/investor-relation/Financial-Result/Annual-Reports/FY-2025/subsidiaries/Kotak-Mahindra-Inc_FY2024-25.pdf",
    },
    {
      id: 26,
      title: "Kotak Mahindra Asset Management (Singapore) Pte. Limited",
      category: "Subsidiaries",
      link: "https://www.kotak.com/content/dam/Kotak/investor-relation/Financial-Result/Annual-Reports/FY-2025/subsidiaries/Kotak-Mahindra-Asset-Management-Singapore-Pte-Limited_FY2024-25.pdf",
    },
    {
      id: 27,
      title: "Kotak Mahindra Financial Services Limited",
      category: "Subsidiaries",
      link: "https://www.kotak.com/content/dam/Kotak/investor-relation/Financial-Result/Annual-Reports/FY-2025/subsidiaries/Kotak-Mahindra-Financial-Services-Limited_FY2024-25.pdf",
    },
    {
      id: 28,
      title: "Kotak Mahindra Pension Fund Limited",
      category: "Subsidiaries",
      link: "https://www.kotak.com/content/dam/Kotak/investor-relation/Financial-Result/Annual-Reports/FY-2025/subsidiaries/Kotak-Mahindra-Pension-Fund-Limited_FY2024-25.pdf",
    },
    {
      id: 29,
      title: "BSS Microfinance Limited",
      category: "Subsidiaries",
      link: "https://www.kotak.com/content/dam/Kotak/investor-relation/Financial-Result/Annual-Reports/FY-2025/subsidiaries/BSS-Microfinance-Limited_FY2024-25.pdf",
    },
    {
      id: 30,
      title: "Sonata Finance Private Limited",
      category: "Subsidiaries",
      link: "https://www.kotak.com/content/dam/Kotak/investor-relation/Financial-Result/Annual-Reports/FY-2025/subsidiaries/Sonata-Finance-Private-Limited_FY2024-25.pdf",
    },
    {
      id: 31,
      title: "IVY Product Intermediaries Limited",
      category: "Subsidiaries",
      link: "https://www.kotak.com/content/dam/Kotak/investor-relation/Financial-Result/Annual-Reports/FY-2025/subsidiaries/IVY-Product-Intermediaries-Limited_FY2024-25.pdf",
    },
    {
      id: 32,
      title: "Kotak Karma Foundation",
      category: "Subsidiaries",
      link: "https://www.kotak.com/content/dam/Kotak/investor-relation/Financial-Result/Annual-Reports/FY-2025/subsidiaries/Kotak-Karma-Foundation_FY2024-25.pdf",
    },
    {
      id: 33,
      title: "Consolidated and Standalone",
      category: "financial-highlights",
      link: "./documents/Kotak Karma Foundation.pdf",
    },
  ];

  const categories = [
    { id: 'all', name: 'All', count: documents.length },
    { id: 'financial-highlights', name: 'Financial Highlights', count: documents.filter(d => d.category === 'financial-highlights').length },
    { id: 'financial-statements', name: 'Financial Statements', count: documents.filter(d => d.category === 'financial-statements').length },
    { id: 'statutory-reports', name: 'Statutory Reports', count: documents.filter(d => d.category === 'statutory-reports').length },
    { id: 'annexures', name: 'Annexures', count: documents.filter(d => d.category === 'annexures').length },
    { id: 'Subsidiaries', name: 'Subsidiaries', count: documents.filter(d => d.category === 'Subsidiaries').length }
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
    
          <div className="w-fit mx-auto mb-6 md:text-center">
                <div className='space-y-2'>
                    {/* Technology Badge */}
                    <Reveal animation="slide-up mx-aut text-cente">
                        <div className="inline-flex mx-aut flex-col md:items-start">
                            <span className="text-xs md:text-lg font-bold text-[#ed1c25] tracking-wide  mb-2">
                                Download Center
                            </span>
                            {/* Centered decorative line for mobile */}
                            <div className='flex w-12 md:mx-auto md:w-16'>
                                <div className='h-[2px] bg-[#ed1c25] w-1/2' />
                                <div className='h-[2px] bg-[#013367] w-1/2' />
                            </div>
                        </div>
                    </Reveal>

                    {/* Main Title - Much smaller for mobile */}
                    <Reveal animation="slide-up">
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-ligh leading-snug text-transparent bg-gradient-to-r from-[#ed1c25] to-[#013367] bg-clip-text md:px-0">
                            Access financial statements and reports
                        </h1>
                    </Reveal>
                </div>
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
                ? 'bg-gradient-to-br from-[#9f0910] to-[#ed1c25] text-white'
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
                {/* <div className={`p-2 rounded-lg ${getCategoryColor(document.category)}`}>
                  {document.icon}
                </div> */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-gray-900 line-clamp-2 sm:line-clamp-1">
                    {document.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-1">
                    {/* <span className={`inline-block px-2 py-1 rounded-md text-xs font-medium ${getCategoryColor(document.category)}`}>
                      {document.category.charAt(0).toUpperCase() + document.category.slice(1)}
                    </span> */}
                  </div>
                </div>
              </div>
              <a
                href={document.link}
                target='_blank'
                onClick={() => handleDownload(document)}
                className="bg-gradient-to-br from-[#9f0910] to-[#ed1c25] text-white px-2 py-2 rounded-full text-xs font-medium hover:bg-blue-700 transition-colors flex items-center gap-1 whitespace-nowrap flex-shrink-0"
              >
                <FiDownload className="w-4 h-4" />

              </a>
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