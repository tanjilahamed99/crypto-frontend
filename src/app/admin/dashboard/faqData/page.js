"use client";
import useGetWebsiteData from "@/hooks/useGetWebsiteData/userGetWebsiteData";
import SaveFaq from "@/page/admin/SaveFaq/SaveFaq";
import React, { useState } from "react";

const Faq = () => {
  const [websiteData, refetch] = useGetWebsiteData();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {" "}
      <div className="mt-2 border-gray-700 border p-5">
        <h2 className="text-white text-2xl font-bold mb-2">Faq</h2>

        {websiteData?.faq?.length > 0 && (
          <>
            {websiteData?.faq?.map((item, index) => (
              <div
                key={index}
                tabIndex={0}
                className="collapse collapse-arrow border-b border-gray-500 rounded-none text-white mb-3"
              >
                <div className="collapse-title  font-semibold text-green-600 hover:text-primary">
                  {item.question}
                </div>
                <div className="collapse-content">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </>
        )}

        <div>
          <div>
            {isOpen && (
              <SaveFaq
                setIsOpen={setIsOpen}
                refetch={refetch}
                faqData={websiteData?.faq}
              />
            )}
          </div>

          {!isOpen && (
            <button
              onClick={() => setIsOpen(true)}
              className="bg-primary  text-md font-semibold border-none h-10 w-28 hover:bg-[#f2a74b] rounded-lg text-white"
            >
              Add Faq
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Faq;
