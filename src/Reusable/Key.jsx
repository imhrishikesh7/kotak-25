import React from "react";

export default function Key({
  highlights = [],
  materialTopics = [],
  capitalLinkage = [],
  sdgs = [],
  highlightSuperscript = null, // New prop for the Key Highlights superscript
}) {
  // Helper function to format the label with superscripts for '#' and '*'
  const formatLabel = (labelText) => {
    if (typeof labelText !== 'string') {
      return labelText; // Return as is if not a string
    }

    let result = [];
    let currentText = labelText;

    // First, handle '#' superscript
    if (currentText.includes('#')) {
      const parts = currentText.split('#');
      for (let i = 0; i < parts.length; i++) {
        result.push(parts[i]);
        if (i < parts.length - 1) {
          result.push(<sup>#</sup>);
        }
      }
      currentText = <>{result}</>; // Wrap in a fragment for further processing if needed
    } else {
      currentText = labelText; // No '#' found, so start with original text
    }

    // Reset result for '*' processing, applying to currentText (which might be a string or a React fragment)
    result = [];
    let textToProcess = currentText;

    // Handle '*' superscript
    // We need to convert React fragments back to string temporarily or process recursively
    // A simpler approach for two distinct symbols is to ensure the first one is processed
    // and then the second one operates on the output of the first.

    // If currentText is already a React fragment (from '#'), we need to make sure we don't
    // try to split on it directly as a string. The safest way is to ensure this function
    // is called for each part of the string if it contains multiple formatting needs.
    // For simplicity, let's refine the sequential processing.

    // Let's re-think `formatLabel` to apply both in a more robust way.
    // The previous approach could indeed overwrite React elements.
    // A better approach is to use a regex or a more iterative splitting method.

    // --- REVISED formatLabel function ---
    let finalFormattedText = [labelText]; // Start with the raw text in an array

    // Process '*' first, as it's the one currently having issues when combined
    if (String(labelText).includes('*')) {
        const parts = String(labelText).split('*');
        finalFormattedText = []; // Clear and rebuild
        for (let i = 0; i < parts.length; i++) {
            finalFormattedText.push(parts[i]);
            if (i < parts.length - 1) {
                finalFormattedText.push(<sup>*</sup>);
            }
        }
    }

    // Now, iterate through the (potentially * formatted) parts and apply '#'
    let tempResult = [];
    finalFormattedText.forEach(part => {
        if (typeof part === 'string' && part.includes('#')) {
            const hashParts = part.split('#');
            for (let i = 0; i < hashParts.length; i++) {
                tempResult.push(hashParts[i]);
                if (i < hashParts.length - 1) {
                    tempResult.push(<sup>#</sup>);
                }
            }
        } else {
            tempResult.push(part); // Already a React element or no '#'
        }
    });

    return <>{tempResult}</>;
  };

  return (
    <div className="border rounded-xl overflow-hidden ">
      {/* Key Highlights Section */}
      <div className="p-4">
        <h3 className="text-red-600 font-semibold mb-4">
          Key Highlights
          {highlightSuperscript && (
            <sup className="text-red-600">{highlightSuperscript}</sup>
          )}
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {highlights.map((item, i) => (
            <div key={i}>
              <p className="text-2xl font-bold text-blue-900">{item.value}</p>
              <p className="">{formatLabel(item.label)}</p> {/* Use the helper function here */}
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section: Material, Capital, SDGs */}
      {/* Changed `grid grid-cols-1 md:grid-cols-3 gap-4` to `flex md:flex-row md:gap-20 gap-5` */}
      <div className="flex md:flex-row md:gap-20 gap-5 bg-blue-50 p-4 border-t">
        {/* Material Topics */}
        <div>
          <p className="text-red-600 font-semibold mb-2">Material Topics Covered</p>
          {/* Custom bullet styling for this UL */}
          <ul
            className="pl-4 space-y-1"
            style={{
              listStyleType: 'none', // Remove default bullet
              paddingLeft: '20px', // Adjust padding for bullet image
            }}
          >
            {materialTopics.map((topic, i) => (
              <li
                key={i}
                style={{
                  position: 'relative', // For positioning the custom bullet
                  marginBottom: '0.25rem', // Tailwind's space-y-1 is 0.25rem
                }}
              >
                <span
                  style={{
                    content: '""', // Required for pseudo-elements
                    position: 'absolute',
                    left: '-20px', // Adjust to position the bullet
                    top: '50%', // Vertically center the bullet
                    transform: 'translateY(-50%)',
                    width: '16px', // Desired width of your bullet image
                    height: '16px', // Desired height of your bullet image
                    backgroundImage: 'url(/All_Icons/image-removebg-preview.png)',
                    backgroundSize: 'contain', // Scale image to fit
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                  }}
                ></span>
                {topic}
              </li>
            ))}
          </ul>
        </div>

        {/* Capital Linkage */}
        <div>
          <p className="text-red-600 font-semibold mb-2">Capital Linkage</p>
          <ul className="space-y-2">
            {capitalLinkage.map((item, i) => (
              <li key={i} className="flex items-center gap-2 ">
                <div className="w-10 h-10">
                  <img src={item.icon} alt={item.label} className="" />
                </div>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* SDGs */}
        <div>
          <p className="text-red-600 font-semibold mb-2">Contribution to SDGs</p>
          <div className="flex flex-wrap gap-2">
            {sdgs.map((icon, i) => (
              <div key={i} className="w-16 h-16">
                <img src={icon} alt={`SDG-${i}`} className="" />
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}