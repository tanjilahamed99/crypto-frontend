"use client";
import useGetWebsiteData from "@/hooks/useGetWebsiteData/userGetWebsiteData";

const About = () => {
  const [websiteData] = useGetWebsiteData();
  console.log(websiteData);
  return (
    <div className="my-10 lg:w-[80%] w-[90%] mx-auto">
      <h2 className="text-primary  text-2xl lg:text-3xl font-extrabold text-center md:mb-10 mb-5">
        About
      </h2>

      <h2 className="text-white w-full md:mb-4 mb-2 text-sm md:text-base">
        ISTIMATE-PRO is the emerging <span className="text-primary">3D enabled digital space</span> that
        users virtual reailty & other advanced internet technology. Pro is also
        advanced technology, then Istimate-pro have developed on both features.
        Everyone know about power of pro technology, Pro means <span className="text-primary">FORWARD</span> & it
        means <span className="text-primary">FUTURE</span>.
      </h2>
      <h2 className="text-white w-full md:mb-4 mb-2 text-sm md:text-base">
        World's No.1 "ISTIMATE PRO'' Is a Investment Free Mining, Crypto
        Lottery, NFT Gaming & Decentralized Global Crowd Funding Platform (Web
        V3.0.0 DeFi Pro Ecosystem).
      </h2>
    </div>
  );
};

export default About;
