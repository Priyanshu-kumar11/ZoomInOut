import React, { useState } from 'react';
import img from '../assets/wsi.png';
import ReactImageMagnify from 'react-image-magnify';

const CenteralPanel = ({ setZoomData }) => {
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleMouseMove = (e) => {
    const imgBounds = e.target.getBoundingClientRect();
    const x = ((e.clientX - imgBounds.left) / imgBounds.width) * 100;
    const y = ((e.clientY - imgBounds.top) / imgBounds.height) * 100;

    setZoomData({
      zoom: zoomLevel,
      position: { x, y },
    });
  };

  const handleZoomChange = (newZoomLevel) => {
    setZoomLevel(newZoomLevel);
    setZoomData((prevData) => ({
      ...prevData,
      zoom: newZoomLevel,
    }));
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center h-100">
      {/* Zoom Controls */}
      <div className="d-flex mb-3">
        <button onClick={() => handleZoomChange(1)}>100%</button>
        <button onClick={() => handleZoomChange(2)}>200%</button>
        <button onClick={() => handleZoomChange(3)}>300%</button>
      </div>

      {/* Zoomed In View */}
      <div className="card border-secondary mb-4 text-center p-4" style={{ width: '100%' }}>
        <h5 className="card-title">WSI Zoomed IN View</h5>

        {/* Image with Magnification */}
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: 'WSI Zoomed In View',
              isFluidWidth: true,
              src: img,
            },
            largeImage: {
              src: img,
              width: 1200, // Actual image size
              height: 900,  // Actual image size
            },
            lensStyle: { backgroundColor: 'rgba(255, 255, 255, 0.7)' },
            isHintEnabled: true,
            onMouseMove: handleMouseMove, // Track mouse movement
          }}
        />
      </div>
    </div>
  );
};

export default CenteralPanel;
