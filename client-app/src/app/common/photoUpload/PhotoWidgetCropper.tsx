import React, { useRef } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

interface IProps {
  setImage: (file: Blob) => void;
  imagePreview: string;
}

const PhotoWidgetCropper: React.FC<IProps> = ({ setImage, imagePreview }) => {
  const cropperRef = useRef<HTMLImageElement>(null);

  const onCrop = () => {
    const imageElement: any = cropperRef?.current;
    const cropper: any = imageElement?.cropper;
    cropper.getCroppedCanvas().toBlob((blob: any) => {
      setImage(blob);
    }, 'image/jpeg');
  };

  return (
    <Cropper
      src={imagePreview}
      style={{ height: 200, width: '100%' }}
      // Cropper.js options
      initialAspectRatio={1 / 1}
      guides={false}
      viewMode={1}
      dragMode='move'
      scalable={true}
      cropBoxMovable={true}
      cropBoxResizable={true}
      crop={onCrop}
      preview='.img-preview'
      ref={cropperRef}
    />
  );
};

export default PhotoWidgetCropper;
