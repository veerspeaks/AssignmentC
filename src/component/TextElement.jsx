'use client';

import React, { useState, useRef } from 'react';

function TextElement({ text, updatePosition, updateContent, canvasRef, setSelectedText }) {
  const [isDragging, setIsDragging] = useState(false);
  const [editing, setEditing] = useState(false);
  const textRef = useRef(null);

  const onMouseDown = (e) => {
    if (!editing) {
      e.stopPropagation();
      setIsDragging(true);
      const startX = e.clientX;
      const startY = e.clientY;
      const initialX = text.x;
      const initialY = text.y;

      const onMouseMove = (e) => {
        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;
        const canvasRect = canvasRef.current.getBoundingClientRect();
        let newX = initialX + deltaX;
        let newY = initialY + deltaY;

        // Keep within canvas bounds
        newX = Math.max(0, Math.min(newX, canvasRect.width - textRef.current.offsetWidth));
        newY = Math.max(0, Math.min(newY, canvasRect.height - textRef.current.offsetHeight));

        updatePosition(text.id, newX, newY);
      };

      const onMouseUp = () => {
        setIsDragging(false);
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    }
  };

  const onDoubleClick = (e) => {
    e.stopPropagation();
    setEditing(true);
    setSelectedText(text);
  };

  const onBlur = () => {
    setEditing(false);
  };

  const onChange = (e) => {
    updateContent(text.id, e.target.value);
  };

  return (
    <div
      ref={textRef}
      style={{
        position: 'absolute',
        left: text.x,
        top: text.y,
        cursor: isDragging ? 'grabbing' : 'grab',
        userSelect: editing ? 'text' : 'none',
      }}
      onMouseDown={onMouseDown}
      onDoubleClick={onDoubleClick}
    >
      {editing ? (
        <input
          type="text"
          value={text.content}
          onChange={onChange}
          onBlur={onBlur}
          autoFocus
          style={{
            fontSize: `${text.fontSize}px`,
            fontFamily: text.fontFamily,
            fontStyle: text.fontStyle,
            border: 'none',
            outline: 'none',
            background: 'transparent',
          }}
        />
      ) : (
        <span
          style={{
            fontSize: `${text.fontSize}px`,
            fontFamily: text.fontFamily,
            fontStyle: text.fontStyle,
            color: '#000000',
          }}
        >
          {text.content}
        </span>
      )}
    </div>
  );
}

export default TextElement;