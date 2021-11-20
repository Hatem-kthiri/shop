import React from "react";

function Loader() {
  return (
    <div className="mt-5">
      <div className="spinner-border text-dark mt-5" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Loader;
