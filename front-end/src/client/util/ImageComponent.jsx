import React from 'react';

const ImageComponent = ({ fileName }) => {
    const imageUrl = `http://localhost:8080/sugarnest/v0.1/images/${fileName}`;
    
    return (
        <div>
            <img src={imageUrl} alt={fileName} />
        </div>
    );
};

export default ImageComponent;
