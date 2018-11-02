import React from 'react';
import './FaceRecognition.css'


const FaceRecognition = ({ imageUrl, box} ) => {
  return  (
    <div className="ma4 mt0">
        <div className="center ma">
          <div className="absolute mt2">
            <img id="inputimage" src={imageUrl} width="500px" height="auto" alt=""/>
            <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
          </div>
        </div>
    </div>
  );
}

export default FaceRecognition;
