import React from "react";

function PlusIcon_filled({ width, height, color, stroke, onclick }) {
    return (<>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill="none"
            viewBox="0 0 20 20"
            onClick={onclick}
        >
            <circle cx="10" cy="10" r="10" fill={color}></circle>
            <path
                stroke={stroke}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.7"
                d="M10 5v10M15 10H5"
            ></path>
        </svg>
    </>
    );
}

export default PlusIcon_filled;