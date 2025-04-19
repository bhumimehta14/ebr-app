import React from "react";
export default function Sidebar({ pages, setActivePage }) {
  return (
    <div style={{ width: "200px", padding: "10px", borderRight: "1px solid #ccc" }}>
      <h3>Navigation</h3>
      {pages.map((page) => (
        <button key={page} onClick={() => setActivePage(page)} style={{ display: "block", margin: "5px 0" }}>
          {page}
        </button>
      ))}
    </div>
  );
}
