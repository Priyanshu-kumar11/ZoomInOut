import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import LeftPanel from './components/LeftPanel';
import CenteralPanel from './components/CenteralPanel';
import HubView from './components/HubView';
import { useState } from 'react';


function App() {
  
  const [zoomData, setZoomData] = useState({
    zoom: 1, 
    position: { x: 0, y: 0 },
  });
  
  return (
    <>
       <div className="container-fluid bg-light p-0" style={{ height: '100vh' }}> {/* Full height */}
        <div className="m-0" style={{ maxWidth: '1200px', margin: '0 auto', height: '100%' }}>
          {/* Header */}
          <Header />
          {/* Main Content Area */}
          <div className="row no-gutters h-100"> {/* Full height and no gaps */}
            <div className="col-md-4 d-flex">
              {/* LeftPanel */}
              <LeftPanel className="flex-fill" />
            </div>
            <div className="col-md-8 d-flex justify-content-center align-items-center">
              {/* CenterPanel */}
              <CenteralPanel className="flex-fill" setZoomData={setZoomData}/>
            </div>
            <div className="col-md-4 d-flex">
              {/* HubView */}
              <HubView className="flex-fill" zoomData={zoomData} />
            </div>
          </div>
        </div>
         {/* Report Button positioned at Bottom-Right of the entire page */}
         <button
          className="btn btn-primary position-fixed"
          style={{ bottom: '20px', right: '20px' }}
        >
          Report
        </button>
      </div>

    </>
  )
}

export default App
