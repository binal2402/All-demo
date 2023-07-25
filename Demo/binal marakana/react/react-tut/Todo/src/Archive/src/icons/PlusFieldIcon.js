import * as React from "react"

function PlusFieldIcon(props) {
  return (
    <svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={14} cy={14} r={14} fill="#04AC80" />
      <path
        d="M14.357 9v10.353M9.18 14.176h10.354"
        stroke="#000"
        strokeWidth={2.4}
        strokeLinecap="square"
      />
    </svg>
  )
}

export default PlusFieldIcon
