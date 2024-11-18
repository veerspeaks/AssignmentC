'use client';

import React, { useRef, useState } from 'react';
import Toolbar from '../component/Toolbar';
import Canvas from '../component/Canvas';
import TextStylingMenu from '../component/TextStylingMenu';

// Main page component to render the application
export default function Home() {
  const canvasRef = useRef(null); // Ref to the Canvas component
  const [selectedText, setSelectedText] = useState(null); // State to track selected text for styling

  // Function to add a new text element
  const addText = () => {
    canvasRef.current.addText();
  };

  // Function to undo the last action
  const undo = () => {
    canvasRef.current.undo();
  };

  // Function to redo the last undone action
  const redo = () => {
    canvasRef.current.redo();
  };

  // Function to update the style of the selected text
  const updateStyle = (id, style) => {
    canvasRef.current.updateTextStyle(id, style);
    // Update the selectedText state to reflect changes in the styling menu
    setSelectedText((prev) => ({ ...prev, ...style }));
  };

  return (
    <div className="app">
      <Toolbar addText={addText} undo={undo} redo={redo} />
      <Canvas ref={canvasRef} setSelectedText={setSelectedText} />
      <TextStylingMenu selectedText={selectedText} updateStyle={updateStyle} />
      <style jsx global>{`
        body {
          margin: 0;
          font-family: sans-serif;
        }
        .app {
          max-width: 1000px;
          margin: 0 auto;
          padding: 20px;
        }
      `}</style>
    </div>
  );
}