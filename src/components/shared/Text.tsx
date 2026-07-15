import React from 'react'

interface TextProps {
  children: string
  className?: string
}

function Text({ children, className }: TextProps) {
  const message = children.split('\n').map((str, idx, array) => (
    <React.Fragment key={idx}>
      <span dangerouslySetInnerHTML={{ __html: str }} />
      {idx === array.length - 1 ? null : <br />}
    </React.Fragment>
  ))

  return <div className={className}>{message}</div>
}

export default Text
