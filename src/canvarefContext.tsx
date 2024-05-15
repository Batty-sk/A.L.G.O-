import React, { createContext, useState } from 'react';

interface CanvaRefContextType {
  canvaRef: any; 
  setCanvaRef: React.Dispatch<React.SetStateAction<any>>; // Adjust the type as per your setCanvaRef function
}

const CanvaRef = createContext<CanvaRefContextType>({
  canvaRef: null,
  setCanvaRef: () => {} 
});

export default CanvaRef;
