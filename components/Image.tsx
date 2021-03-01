import React from 'react'

const Image = ({
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
        alt={restProps.alt}
        {...restProps}
      />
    </picture>
  )
}

export default Image