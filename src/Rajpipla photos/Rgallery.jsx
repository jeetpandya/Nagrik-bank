import React,{useState} from 'react'
import {Link} from "react-router-dom";
import Modal from 'react-modal';
import styles from "./rgallery.module.css";
const images = [
  './images/STATUE A.jpg',
  './images/STATUE.jpg',
  './images/Unity-glow-Garden_2.jpg',
  './images/vadia palace.jpg',
  './images/VALLEY.jpeg',
  './images/VIEW.jpg',
  './images/ZARVANI.jpg',
  './images/MIYAWAKI.JPG',
  './images/MAZE GARDEN.JPG',
  './images/DSCF2681.JPG',
  './images/DSCF2692.JPG',
  './images/DSCF2693.JPG',
  './images/KARJAN DAM.jpg',
  './images/ka la goda.jpg',
  './images/lal tower.jpg',
  './images/DAM.jpg',
];
const Rgallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };
  return (
  <>
    <div className={styles.body}>
    <div className= {styles.h}>
      <ul  className={styles.header}>
    <li><h1>Photo Gallery</h1></li>
<div  className={styles.hh}>
    <Link to="/"><li><h4>Home</h4></li></Link><li><h4>/Photo Gallery</h4></li>
    </div>
    </ul>
    </div>
   <div className={styles.cover}>
    <div className={styles.list}>
    {images.map((image, index) => (
              <div className={styles.content} key={index} onClick={() => openImageModal(image)}>
                <img src={image} alt={`Image ${index + 1}`} />
              </div>
            ))}
    
  
</div>
</div>
</div>
<Modal
        isOpen={selectedImage !== null}
        onRequestClose={closeImageModal}
        contentLabel="Image Modal"
        style={{
          content: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            justifyContent: 'flex-start',
            maxWidth: '80%', // Adjust the desired width
            maxHeight: '80%', // Adjust the desired height
            inset: '10%', // Position within the viewport
            overflow: 'hidden',
          },
        }}
      >
        <div className={styles.closeButton} onClick={closeImageModal}>
          <span className={styles.closeIcon}>X</span>
        </div>
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Selected Image"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        )}
      </Modal>
</>
  )
}

export default Rgallery