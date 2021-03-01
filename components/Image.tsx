import React from 'react'

const Image : React.FC<{ src: string, type?: string , style?: Object}> = ({
  src,
  type = 'image/webp',
  style,
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