import React from "react";

const CybersecurityCaseStudy = () => {
  return (
    <div className="bg-[#f4f8fd] p-6 md:p-10 rounded-3xl  mx-auto">
      <h2 className="text-[#004d9d] text-xl md:text-2xl font-semibold mb-4">
        Strengthening Cybersecurity and IT Risk Management: A case study
      </h2>
<div className="bg-[#e3f1fd] p-5 rounded-3xl space-y-4 mb-5">
            <div className="flex items-center gap-3">
              <img
                src="\All_Icons\Icon-75.webp"
                alt="Incident Icon"
                className="w-10 h-10"
              />
              <h3 className="text-[#004d9d] text-lg font-semibold">Incident</h3>
            </div>
            <p className="text-lg leading-relaxed text-[#333]">
              The Bank had received an order dated 24<sup>th</sup> April, 2024
              ("Order") from the RBI, inter alia, directing the Bank to cease
              and desist, with effect from 24<sup>th</sup> April, 2024, from
              on-boarding new customers through the Bank's online and mobile
              banking channels and issuing fresh credit cards. The Order was
              based, inter alia, on the deficiencies observed by the RBI in the
              Information Technology (IT) Examinations of the Bank, for the
              years 2022 and 2023.
            </p>
          </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 space-y-6">
          {/* Response */}
          <div className="bg-[#e3f1fd] p-5 rounded-3xl space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="\All_Icons\Icon3-75.webp"
                alt="Response Icon"
                className="w-10 h-10"
              />
              <h3 className="text-[#004d9d] text-lg font-semibold">Response</h3>
            </div>
            <p className="text-lg leading-relaxed text-[#333] mb-3">
              In view of the above, the Bank undertook a series of strategic
              initiatives to enhance its cybersecurity posture. Senior industry
              experts were onboarded to guide these efforts and comprehensive
              gap assessments were completed against the RBI Master Directions,
              covering Digital Payment Security Controls, IT Governance,
              Outsourcing and Cybersecurity Frameworks. To drive proactive
              closures of identified risks, weekly insights and summaries were
              published and shared with senior management and security
              committees, enabling improved visibility and informed
              decision-making.
            </p>
            <p className="text-lg leading-relaxed text-[#333] mb-3">
              All policies and standards were reviewed and updated and
              regulatory advisories are tracked and addressed promptly by a
              dedicated team. To further strengthen governance, the Bank has
              established IT Risk and Information Security Committee (IRISC),
              which reviews technology risks based on a structured risk
              register. The implementation of a Security Orchestration,
              Automation and Response (SOAR) solution and a comprehensive
              ransomware response playbook has significantly enhanced the
              Bank's incident response capabilities. Additionally, information
              security awareness has been reinforced through regular mailers and
              phishing simulation exercises, fostering a strong culture of
              cybersecurity across the organisation.
            </p>
            <p className="text-lg leading-relaxed text-[#333]">
              The Bank also regularly monitors Key Risk Indicators (KRIs) and
              conducts thematic assessments across key risk areas which are
              reviewed in various management and committee forums to ensure
              continuous oversight and improvement.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 space-y-6">
          {/* Impact */}
          <div className="bg-[#e3f1fd] p-5 rounded-3xl space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="\All_Icons\Icon4-75.webp"
                alt="Impact Icon"
                className="w-10 h-10"
              />
              <h3 className="text-[#004d9d] text-lg font-semibold">Impact</h3>
            </div>
            <p className="text-lg leading-relaxed text-[#333] mb-3">
              Risk monitoring has been significantly strengthened through timely
              vulnerability management, RED team exercises, tabletop
              simulations and third-party assessments, which have validated the
              effectiveness of cybersecurity controls and identified areas for
              enhancement.
            </p>
            <p className="text-lg leading-relaxed text-[#333]">
              The RBI, vide its letter dated 12<sup>th</sup> February, 2025,
              communicated its decision to the Bank to lift the aforementioned
              restrictions placed on the Bank, having satisfied itself of the
              remedial measures undertaken by the Bank to address the
              supervisory concerns and the submission of compliances made to it
              (including the report of the external Auditor).
            </p>
            <img
              src="\All_Icons\Meeting.webp"
              alt="Impact Visual"
              className="w-full rounded-xl mt-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CybersecurityCaseStudy;