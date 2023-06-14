import Card from "./main_elements/Card";
import SearchInput from "./main_elements/SearchInput";
import Images from "./main_elements/Images";
import { useEffect } from "react";
import axios from "axios";
import { PEXELS_API } from "../api";
import { useState } from "react";
import ModalWindow from "./main_elements/Flickr/ModalWindow";

const FlickerWidget = () => {
  const [photos, setPhotos] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [query, setQuery] = useState(null);
  const [modalData, setModalData] = useState(null);
  const handleModal = (img, data) => {
    setSelectedImage(img);
    setModalData(data);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const handleQuery = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          `https://api.pexels.com/v1/search?query=${
            query ? query : "popular"
          }&per_page=16&orientation=landscape`,
          {
            headers: {
              Authorization: PEXELS_API,
            },
          }
        );
        setPhotos(response.data.photos);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPhotos();
  }, [query]);

  return (
    <>
      <Card className="min-w-full">
        <header className="p-[1rem] bg-gradient-to-t from-indigo-500 to-indigo-700 text-[white] rounded-t-md">
          <h1 className="text-4xl font-semibold">Trend Images</h1>
          <SearchInput
            placeholder="Dogs, cute cats..."
            className="pl-[0.4rem] rounded-full w-full text-gray mt-2"
            onChange={handleQuery}
          />
        </header>
        <section className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 p-[1rem] max-h-128 min-h-64 overflow-auto">
          {photos.length > 0
            ? photos.map((item) => {
                return (
                  <span
                    key={item.id}
                    onClick={() => handleModal(item.src.large2x, item.alt)}
                  >
                    <Images
                      className="cursor-pointer"
                      url={item.src.portrait}
                    />
                  </span>
                );
              })
            : console.log("something went wrong")}
        </section>
      </Card>
      {modal && selectedImage && (
        <ModalWindow
          url={selectedImage}
          enabled={modal}
          onClose={closeModal}
          alt={modalData}
        ></ModalWindow>
      )}
    </>
  );
};

export default FlickerWidget;
