import * as React from "react"

function ArrowIcon(props) {
  return (
    <svg
      width={18}
      height={14}
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 5.75h13.055L8.962 1.783 10.782 0 18 7l-7.219 7-1.819-1.782 4.093-3.969H0V5.751z"
        fill="#000"
      />
    </svg>
  )
}

export default ArrowIcon
