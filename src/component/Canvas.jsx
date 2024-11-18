'use client';

import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import TextElement from './TextElement';

// Canvas component to manage text elements and their interactions
const Canvas = forwardRef(({ setSelectedText }, ref) => {
  const [texts, setTexts] = useState([]); // State to store text elements
  const [history, setHistory] = useState([]); // State to store history for undo
  const [redoStack, setRedoStack] = useState([]); // State to store redo actions
  const canvasRef = useRef(null); // Ref to the canvas DOM element

  // Function to add a new text element
  const addText = () => {
    const newText = {
      id: Date.now(),
      content: 'Double-click to edit',
      x: 100,
      y: 100,
      fontSize: 24,
      fontFamily: 'Arial',
      fontStyle: 'normal',
    };
    updateTexts([...texts, newText]);
  };

  // Function to update the texts state and manage history
  const updateTexts = (newTexts) => {
    setHistory([...history, texts]);
    setTexts(newTexts);
    setRedoStack([]);
  };

  // Function to undo the last action
  const undo = () => {
    if (history.length > 0) {
      const previousState = history[history.length - 1];
      setRedoStack([texts, ...redoStack]);
      setHistory(history.slice(0, history.length - 1));
      setTexts(previousState);
    }
  };

  // Function to redo the last undone action
  const redo = () => {
    if (redoStack.length > 0) {
      const nextState = redoStack[0];
      setHistory([...history, texts]);
      setTexts(nextState);
      setRedoStack(redoStack.slice(1));
    }
  };

  // Function to update the position of a text element
  const updateTextPosition = (id, x, y) => {
    const newTexts = texts.map((text) =>
      text.id === id ? { ...text, x, y } : text
    );
    setTexts(newTexts);
  };

  // Function to update the content of a text element
  const updateTextContent = (id, content) => {
    const newTexts = texts.map((text) =>
      text.id === id ? { ...text, content } : text
    );
    setTexts(newTexts);
  };

  // Function to update the style of a text element
  const updateTextStyle = (id, style) => {
    const newTexts = texts.map((text) =>
      text.id === id ? { ...text, ...style } : text
    );
    setTexts(newTexts);
  };

  // Expose functions to parent component using ref
  useImperativeHandle(ref, () => ({
    addText,
    undo,
    redo,
    updateTextStyle,
  }));

  return (
    <div
      ref={canvasRef}
      className="canvas"
      style={{
        position: 'relative',
        width: '800px',
        height: '600px',
        border: '1px solid #ccc',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        overflow: 'hidden',
        borderRadius: '20px',
      }}
    >
      {texts.map((text) => (
        <TextElement
          key={text.id}
          text={text}
          updatePosition={updateTextPosition}
          updateContent={updateTextContent}
          canvasRef={canvasRef}
          setSelectedText={setSelectedText}
        />
      ))}
    </div>
  );
});

Canvas.displayName = 'Canvas';

export default Canvas;