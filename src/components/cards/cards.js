import React, { useState } from "react";
import { Card } from "react-bootstrap";


function Cards({ imageSrc, moduleTitle, selected  }) {
    return (
      <Card style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Card.Body className="text-center flex-grow-1">
            <img src={imageSrc} className="w-50 mb-2" />
            <h5 style={{ color: selected ? "#0090F5" : "#000" }}>{moduleTitle}</h5> 
        </Card.Body>
      </Card>
    );
  }
  
  export default Cards;