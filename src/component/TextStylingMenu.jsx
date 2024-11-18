'use client';

import React from 'react';

// TextStylingMenu component to provide styling options for selected text
function TextStylingMenu({ selectedText, updateStyle }) {
  if (!selectedText) {
    return null; // Do not render if no text is selected
  }

  // Handle changes in styling options
  const handleStyleChange = (e) => {
    const { name, value } = e.target;
    updateStyle(selectedText.id, { [name]: value });
  };

  return (
    <div className="text-styling-menu">
      <label>
        Font Family:
        <select name="fontFamily" value={selectedText.fontFamily} onChange={handleStyleChange}>
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Verdana">Verdana</option>
          <option value="Courier New">Courier New</option>
        </select>
      </label>
      <label>
        Font Size:
        <input
          type="number"
          name="fontSize"
          value={selectedText.fontSize}
          onChange={handleStyleChange}
          min="10"
          max="100"
        />
      </label>
      <label>
        Font Style:
        <select name="fontStyle" value={selectedText.fontStyle} onChange={handleStyleChange}>
          <option value="normal">Normal</option>
          <option value="italic">Italic</option>
        </select>
      </label>
      <style jsx>{`
        .text-styling-menu {
          margin-top: 20px;
          text-align: center;
          border-radius: 20px;
        }
        .text-styling-menu label {
          margin: 0 10px;
          font-size: 16px;
          border-radius: 20px;
        }
        .text-styling-menu input,
        .text-styling-menu select {
          margin-left: 5px;
          border-radius: 20px;
        }
      `}</style>
    </div>
  );
}

export default TextStylingMenu;