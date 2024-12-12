"use client";

import UploadImage from "@/components/UploadImge/UploadImage";
import { BASE_URL } from "@/constant/constant";
import useGetWebsiteData from "@/hooks/useGetWebsiteData/userGetWebsiteData";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const AdminBanner = () => {
  const [websiteData, refetch] = useGetWebsiteData();
  const { data: user } = useSession();
  const [mainImg, setMainImg] = useState("");
  const [smFirstImg, setSmFirstImg] = useState("");
  const [smSecantImg, setSmSecantImg] = useState("");
  const [smThirdImg, setSmThirdImg] = useState("");
  const [smForthImg, setSmForthImg] = useState("");
  const [bigFirstImg, setBigFirstImg] = useState("");
  const [bigSecantImg, setBigSecantImg] = useState("");
  const [bigThirdImg, setBigThirdImg] = useState("");
  const [bigForthImg, setBigForthImg] = useState("");

  const handleSetNewData = async () => {
    const mainData = {
      banner: {
        mainImage: mainImg,
        smFirstImg,
        smSecantImg,
        smThirdImg,
        smForthImg,
        bigFirstImg,
        bigSecantImg,
        bigThirdImg,
        bigForthImg,
      },
    };
    const url = `${BASE_URL}/admin/faq/${user?.user?._id}/${user?.user?.email}/${user?.user?.wallet}/others`;

    const { data } = await axios.post(url, mainData);
    console.log(data);
    if (data?.status) {
      refetch();
      Swal.fire({
        title: "Good job!",
        text: "Same data changed",
        icon: "success",
      });
    }
  };

  useEffect(() => {
    if (websiteData?.banner?.mainImage) {
      setMainImg(websiteData?.banner?.mainImage);
    }
    if (websiteData?.banner?.smFirstImg) {
      setSmFirstImg(websiteData?.banner?.smFirstImg);
    }
    if (websiteData?.banner?.smSecantImg) {
      setSmSecantImg(websiteData?.banner?.smSecantImg);
    }
    if (websiteData?.banner?.smThirdImg) {
      setSmThirdImg(websiteData?.banner?.smThirdImg);
    }
    if (websiteData?.banner?.smForthImg) {
      setSmForthImg(websiteData?.banner?.smForthImg);
    }
    if (websiteData?.banner?.bigFirstImg) {
        setBigFirstImg(websiteData?.banner?.bigFirstImg);
    }
    if (websiteData?.banner?.bigSecantImg) {
        setBigSecantImg(websiteData?.banner?.bigSecantImg);
    }
    if (websiteData?.banner?.bigThirdImg) {
        setBigThirdImg(websiteData?.banner?.bigThirdImg);
    }
    if (websiteData?.banner?.bigForthImg) {
        setBigForthImg(websiteData?.banner?.bigForthImg);
    }
  }, [websiteData]);

  return (
    <div>
      <div className="flex justify-between items-center px-2">
        <h2 className="text-white text-2xl font-bold my-5">Banner</h2>
      </div>
      <div className="border-gray-700 border p-5 space-y-10">
        <div className="space-y-2">
          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <h2 className="text-white font-semibold  mb-1">Main Image</h2>
              <UploadImage img={mainImg} name={"mainImg"} setImg={setMainImg} />
            </div>
            <div>
              <h2 className="text-white font-semibold  mb-1">
                Small Row First Image
              </h2>
              <UploadImage
                img={smFirstImg}
                name={"smFirstImg"}
                setImg={setSmFirstImg}
              />
            </div>
            <div>
              <h2 className="text-white font-semibold  mb-1">
                {" "}
                Small Row Secant Image
              </h2>
              <UploadImage
                img={smSecantImg}
                name={"smSecantImg"}
                setImg={setSmSecantImg}
              />
            </div>
            <div>
              <h2 className="text-white font-semibold  mb-1">
                {" "}
                Small Row Third Image
              </h2>
              <UploadImage
                img={smThirdImg}
                name={"smThirdImg"}
                setImg={setSmThirdImg}
              />
            </div>
            <div>
              <h2 className="text-white font-semibold  mb-1">
                Small Row Forth Image
              </h2>
              <UploadImage
                img={smForthImg}
                name={"smForthImg"}
                setImg={setSmForthImg}
              />
            </div>
            <div>
              <h2 className="text-white font-semibold  mb-1">
                {" "}
                Big Row First Image
              </h2>
              <UploadImage
                img={bigFirstImg}
                name={"bigFirstImg"}
                setImg={setBigFirstImg}
              />
            </div>
            <div>
              <h2 className="text-white font-semibold  mb-1">
                Big Row Secant Image
              </h2>
              <UploadImage
                img={bigSecantImg}
                name={"bigSecantImg"}
                setImg={setBigSecantImg}
              />
            </div>
            <div>
              <h2 className="text-white font-semibold  mb-1">
                Big Row Third Image
              </h2>
              <UploadImage
                img={bigThirdImg}
                name={"bigThirdImg"}
                setImg={setBigThirdImg}
              />
            </div>
            <div>
              <h2 className="text-white font-semibold  mb-1">
                Big Row Forth Image
              </h2>
              <UploadImage
                img={bigForthImg}
                name={"bigForthImg"}
                setImg={setBigForthImg}
              />
            </div>
          </div>
          <button
            onClick={handleSetNewData}
            type="submit"
            className="bg-primary  text-md font-semibold border-none h-10 w-28 hover:bg-[#f2a74b] rounded-lg text-white"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminBanner;
