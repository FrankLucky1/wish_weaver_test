import ErrorPage from "component/ErrorPage";
import Loader from "component/Loader";
import React, { useEffect, useState } from "react";

export function Welcome() {
  interface Image {
    src: { original: string };
    height: number;
  }

  const [images, setImages] = useState<Image[]>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const devUrl = import.meta.env.VITE_PEXEL_API_URL;
  const accessKey = import.meta.env.VITE_PEXELS_API_KEY;

  useEffect(() => {
    setLoading(true);
    fetch(`${devUrl}`, {
      headers: {
        Authorization: `${accessKey}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setImages(data.photos))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="w-full h-[100vh] flex items-center justify-center">
        <Loader />
      </div>
    );
  }
  if (error)
    return (
      <div className="w-full h-[100vh] flex items-center justify-center">
        <ErrorPage />
      </div>
    );
  return (
    <main className="flex flex-col gap-10 items-center justify-center pt-16 px-12 pb-4">
      <h1 className="text-2xl font-semibold">
        Nature images in a Mansory gridlike layout
      </h1>
      <div className="columns-2 sm:columns-3 md:columns-4">
        {images.map((src, index) => (
          <div
            key={index}
            className={`relative break-inside-avoid mb-4 rounded-lg overflow-clip`}
          >
            <img
              src={src?.src?.original}
              alt={`Masonry ${index}`}
              className="w-full object-cover rounded-lg hover:scale-[1.1] duration-300 ease-in cursor-pointer"
            />
          </div>
        ))}
      </div>
    </main>
  );
}

