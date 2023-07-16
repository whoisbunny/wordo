import React from 'react'

const Theme = (props) => {
  return (
    <div style={{ zIndex: 5 }}>
      <div
        className={`  bg-${
          props.mode === "light" ? "dark" : "light"
        }  p-2  border border-2   rounded-circle  `}
        style={{
          width: "max-content",
          position: "fixed",
          right: "5vh",
          bottom: "2vh",
        }}
      >
        <button
          type="button"
          onClick={props.toggleMode}
          className={`cursor-pointer   border  border-3 border-${
            props.mode === "light" ? "light" : "dark"
          } bg-${
            props.mode === "light" ? "dark" : "light"
          }  rounded-circle p-1 `}
        >
          {props.mode === "light" ? "🌙" : "☀️"}
        </button>
      </div>

    </div>
  );
}

export default Theme