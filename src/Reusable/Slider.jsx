import React from "react";

const initiatives = [
  "Sonata’s collaboration with the Uttar Pradesh Micro Finance Association marked a significant step in aligning with the state’s ‘One District One Product’ (ODOP) initiative, successfully connecting its borrowers to regional markets by supporting the sale of locally crafted products such as Mirzapur pottery, Bhadohi carpets and Aligarh locks.",
  "Integration of Aadhaar seeding functionality into our digital banking journey through BC-assisted channels, enabled the customers to link Aadhaar with their bank accounts, ensuring direct and timely receipt of government subsidies under the Direct Benefit Transfer schemes.",
  "Robust network of over 50,000 Aadhaar Enabled Payment System (AEPS) points, facilitating over 1.2 crore acquiring transactions, ensuring last mile delivery of financial services across urban and rural India",
  "Provision of health insurance coverage at reasonable premium amounts through BSS’s Hospicash insurance",
  "All ATMs equipped with voice guidance facility to aid visually challenged",
  "Over 650 ATMs and 990 branches are differently-abled friendly.",
  "692 branches in Rural and semi-urban locations.",
];

const InitiativeDisplay = () => {
  return (
    <div className="w-full px- py-4 bg-white">
      <div className="grid grid-cols-1 gap-5">
        {initiatives.map((text, index) => (
          <div
            key={index}
            className="bg-[#dff3fc] text-black  p-4 border-1 border-red-500 flex items-center justify-center"
            style={{
              borderRadius: "20px 0 20px 0",
            }}
          >
            <p className="text-center leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InitiativeDisplay;