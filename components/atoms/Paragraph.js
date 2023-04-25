import React from "react"
export const Paragraph = ({ ...props }) => {
  const className = `${props.className}`
  return (
    <p {...props} className={className}>
      {props.children}
    </p>
  )
}