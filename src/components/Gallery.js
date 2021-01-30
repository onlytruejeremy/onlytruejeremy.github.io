import React from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import data from "../data/data";
const Gallery = (props) => {
  const [photoIndex, setPhotoIndex] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);
  const [images, setImages] = React.useState([]);
  React.useEffect(() => {
    setIsOpen(props.open);
    let imageToGall;
    imageToGall = data.filter((item) => item.id == props.imagesId);
    setImages(imageToGall[0]?.projectImages);
  }, [props]);
  return (
    <>
      {isOpen && images && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </>
  );
};

export default Gallery;
