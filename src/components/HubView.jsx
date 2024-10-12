import React from 'react';
import img from '../assets/wsi.png'; // Replace with your actual zoomed-out image

const HubView = ({ zoomData }) => {
  const { zoom, position } = zoomData;

  // Calculate the pointer's position and size in the zoomed-out view
  const hubPosition = {
    top: `${position.y}%`, // Y-position in percentage
    left: `${position.x}%`, // X-position in percentage
    width: `${100 / zoom}%`, // Shrinks the size as zoom increases
    height: `${100 / zoom}%`, // Shrinks the size as zoom increases
  };

  return (
    <div className="position-absolute top-0 end-0 mt-4 me-4 p-3 bg-light border rounded shadow-sm text-center" style={{ width: '300px' }}>
      <h5 className="card-title">WSI Zoomed out View (Hub)</h5>

      <div className="mt-4 position-relative">
        <img
          src={img} // Zoomed-out version of the image
          alt="Zoomed Out Image"
          className="img-fluid rounded"
        />

        {/* Pointer to indicate zoomed-in area */}
        <div
          className="pointer"
          style={{
            position: 'absolute',
            top: hubPosition.top,
            left: hubPosition.left,
            width: hubPosition.width,
            height: hubPosition.height,
            backgroundColor: 'rgba(255, 0, 0, 0.3)', // Semi-transparent red
            border: '2px solid red',
            pointerEvents: 'none', // Disable pointer events to prevent interference
          }}
        />
      </div>
    </div>
  );
};

export default HubView;
