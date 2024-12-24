import React, { useEffect, useState } from "react";

const TestimonailVideo = ({ data }) => {
  const [linkIds, setLinkIds] = useState([]);

  // Function to extract the video ID from YouTube URLs
  const extractVideoId = (url) => {
    try {
      const urlObj = new URL(url);
      // If it's a youtu.be link, the video ID is in the pathname
      if (urlObj.hostname === "youtu.be") {
        return urlObj.pathname.slice(1); // Removes the leading '/'
      }
      // If it's a standard YouTube URL, the video ID is in the "v" query parameter
      if (
        urlObj.hostname === "www.youtube.com" ||
        urlObj.hostname === "youtube.com"
      ) {
        return urlObj.searchParams.get("v");
      }
    } catch (error) {
      console.error("Invalid YouTube URL:", url);
      return null;
    }
  };

  useEffect(() => {
    // Extract video IDs from the provided URLs
    if (data && Array.isArray(data)) {
      const ids = data.map((url) => extractVideoId(url)).filter((id) => id);
      setLinkIds(ids);
    }
  }, [data]);

  return (
    <div className="lg:grid grid-cols-3 hidden gap-5">
      {linkIds.map((id, idx) => (
        <iframe
          key={idx}
          src={`https://www.youtube.com/embed/${id}`}
          title={`YouTube Video ${idx + 1}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-[200px]"
          style={{ marginBottom: "20px" }}
        />
      ))}
    </div>
  );
};

export default TestimonailVideo;
