import React from "react";

export default ({ onClick, builderView }) => {
  return (
    <div className="switch">
      <button onClick={onClick}>
        {builderView === true ? "View Form" : "Edit Form"}
      </button>
    </div>
  );
};
