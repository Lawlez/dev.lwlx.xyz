import React from 'react'

const Image : React.FC<{ src: string, type?: string , style?: Object}> = ({
  src,
  type = 'image/webp',
  style,
  ...restProps
}) => {
  return (
    <picture>
      <source
        srcSet={src + '.webp'}
        type={type}
        style={style}
        {...restProps}
      />
      <img
        src={src + '.jpg'}
        style={style}
        {...restProps}
      />
    </picture>
  )
}

export default Image