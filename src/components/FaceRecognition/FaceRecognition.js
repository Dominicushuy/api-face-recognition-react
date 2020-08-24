import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
        
        { box.map((ele,i) =>(
          <div className='bounding-box' key={i}
              style={{top: ele.topRow, right: ele.rightCol, bottom: ele.bottomRow, left: ele.leftCol}}>
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default FaceRecognition;