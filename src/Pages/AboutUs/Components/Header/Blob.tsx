import React from 'react';
import blackblob from "./blackblob.png";
import greenclouds from "./greencloud.png";

// PLACEHOLDERS: Replace these string constants with your actual image URLs or imports
// The Mask: A black/white PNG where the black area is the shape you want.
const MASK_IMAGE_URL = blackblob; 

// The Overlay: The green clouds PNG with a transparent background.
const OVERLAY_IMAGE_URL = greenclouds;

interface BlobPhotoFrameProps {
  /** The source URL of the main photo (the group of people) */
  photoUrl: string;
  /** Alt text for accessibility */
  altText?: string;
  /** Optional extra classes for sizing (e.g., "w-96 h-auto") */
  className?: string;
}

const BlobPhotoFrame: React.FC<BlobPhotoFrameProps> = ({ 
  photoUrl, 
  altText = "Team photo", 
  className = "" 
}) => {
  return (
    <div className={className} style={{ position: 'relative', width: '100%', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ 
        position: 'relative', 
        width: '100%', 
        aspectRatio: '4 / 3',
        display: 'block',
        overflow: 'visible'
      }}>
        
        {/* LAYER 1: The Masked Photo */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: '-20%', // Shift left to center the blob shape better
            width: '130%',
            height: '100%',
            zIndex: 10,
            // Standard standard syntax
            maskImage: `url(${MASK_IMAGE_URL})`,
            WebkitMaskImage: `url(${MASK_IMAGE_URL})`,
            maskSize: '100% 100%',
            WebkitMaskSize: '100% 100%',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskPosition: 'center',
          }}
        >
          <img 
            src={photoUrl} 
            alt={altText} 
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>

        {/* LAYER 2: The Green Clouds Overlay */}
        <img 
          src={OVERLAY_IMAGE_URL} 
          alt="" 
          style={{ 
            position: 'absolute', 
            top: '-5%', 
            left: '-15%', // Slightly offset to the left for better visual balance
            width: '110%', 
            height: '110%', 
            zIndex: 20, 
            pointerEvents: 'none',
            objectFit: 'fill',
            display: 'block',
            opacity: 0.9, // Adjust opacity for better blending
          }} 
        />
      </div>
    </div>
  );
};

export default BlobPhotoFrame;