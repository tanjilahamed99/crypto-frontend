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
        {websiteData?.description}
      </h2>
    </div>
  );
};

export default About;
