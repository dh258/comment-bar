import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
  console.log(props.images);

  const imgResult = props.images.map((image) => {
    return <ImageCard image={image} key={image.id} />
  });

  return (
    <div className="image-list">{imgResult}</div>
  );
};

export default ImageList;