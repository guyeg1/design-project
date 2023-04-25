import React from "react"

export const Container = props => {
  const className = `${props.className} w-full items-center justify-between`
  return (
    <section {...props} className={className}>
      {props.children}
    </section>
  )
}
