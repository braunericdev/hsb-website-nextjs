"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface GalleryImage {
  src: string;
  alt: string;
  category?: 'vorher' | 'nachher' | 'wÃ¤hrend' | 'standard';
}

interface ImageGalleryProps {
  images: GalleryImage[];
  title?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, title = "Unsere Arbeit" }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const getCategoryColor = (category?: string) => {
    switch (category) {
      case 'vorher': return 'bg-red-100 text-red-800';
      case 'nachher': return 'bg-green-100 text-green-800';
      case 'wÃ¤hrend': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryText = (category?: string) => {
    switch (category) {
      case 'vorher': return 'Vorher';
      case 'nachher': return 'Nachher';
      case 'wÃ¤hrend': return 'WÃ¤hrend';
      default: return '';
    }
  };

  return (
    <div className="py-12 lg:py-20 px-4 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-1 h-8 bg-green-500 mr-3"></div>
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">
              Galerie
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Überzeugen Sie sich von der Qualität unserer Arbeit
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative group cursor-pointer bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              onClick={() => openModal(image)}
            >
              <div className="aspect-square relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  loading='lazy'
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                
                {/* Category Badge */}
                {image.category && getCategoryText(image.category) && (
                  <div className={`absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(image.category)}`}>
                    {getCategoryText(image.category)}
                  </div>
                )}
                
                {/* Zoom Icon on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 rounded-full p-2">
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="p-3">
                <p className="text-sm text-gray-600 text-center font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal fÃ¼r vergrÃ¶ÃŸerte Ansicht */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeModal}
                className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors z-10"
                aria-label="SchlieÃŸen"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="relative bg-white rounded-lg overflow-hidden shadow-2xl">
                <div className="relative h-[60vh] lg:h-[70vh]">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    className="object-contain"
                    sizes="90vw"
                    loading='lazy'
                  />
                </div>
                
                <div className="p-4 bg-white">
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-medium text-gray-900">{selectedImage.alt}</p>
                    {selectedImage.category && getCategoryText(selectedImage.category) && (
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(selectedImage.category)}`}>
                        {getCategoryText(selectedImage.category)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
