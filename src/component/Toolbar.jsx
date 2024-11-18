'use client';

import React from 'react';

// Toolbar component to provide controls for adding, undoing, and redoing text actions
function Toolbar({ addText, undo, redo }) {
  return (
    <div className="toolbar">
      <button onClick={undo}>Undo</button>
      <button onClick={addText}>Add Text</button>
      <button onClick={redo}>Redo</button>
      <style jsx>{`
        .toolbar {
          text-align: center;
          margin-bottom: 20px;
        }
        .toolbar button {
          margin: 0 100px;
          padding: 10px 15px;
          font-size: 16px;
          background-color: #1F4529;
          color: #fff;
          border: none;
          border-radius: 50px;
          cursor: pointer;
        }
        .toolbar button:hover {
          background-color: #47663B;
        }
      `}</style>
    </div>
  );
}

export default Toolbar;