import React from "react";

export default function BuilderViewerSwitch({ onClick, builderView }) {
  return (
    <div className="switch">
      <button onClick={onClick}>
        {builderView === true ? "View Form" : "Edit Form"}
      </button>
    </div>
  );
}
