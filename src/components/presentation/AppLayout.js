import React from "react";

export default function AppLayout({ children, onSwitchClick, isOnPreview }) {
  return (
    <div>
      {children}{" "}
      <button onClick={onSwitchClick}>
        {isOnPreview ? "Preview" : "Edit"}
      </button>
    </div>
  );
}
