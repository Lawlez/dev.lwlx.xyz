import React from 'react'

const Image : React.FC<{ src: string, type?: string }> = ({
  src,
  type = 'image/webp',
  ...restProps
}) => {
  return (
    <picture >
      <source
        srcSet={src + '.webp'}
        type={type}
        {...restProps}
      />
      <img
        src={src + '.jpg'}
        {...restProps}
      />
    </picture>
  )
}

export default Image