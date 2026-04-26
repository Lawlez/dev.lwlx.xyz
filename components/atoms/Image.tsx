import React from 'react'
import NextImage from 'next/image'

/**
 * Image component using next/image for optimization.
 * Preserves the existing naming convention where src paths
 * (e.g., "/htb/htb-black-hole") reference images in /public.
 *
 * For banner/thumbnail images specified in frontmatter without extensions,
 * we append .webp as the preferred format. For paths that already include
 * an extension, we use them as-is.
 */
const Image: React.FC<{
  src: string
  alt?: string
  style?: React.CSSProperties
  priority?: boolean
  fill?: boolean
  width?: number
  height?: number
}> = ({
  src,
  alt = '',
  style,
  priority = false,
  fill = false,
  width,
  height,
}) => {
  // Guard against empty, undefined, or root-only paths like "/"
  if (!src || src.trim() === '/') return null

  // If the src already has an extension, use it directly
  const hasExtension = /\.(webp|jpg|jpeg|png|gif|svg|avif)$/i.test(src)
  const imageSrc = hasExtension ? src : `${src}.webp`

  if (fill) {
    return (
      <NextImage
        src={imageSrc}
        alt={alt}
        fill
        priority={priority}
        style={{ objectFit: 'cover', ...style }}
      />
    )
  }

  return (
    <NextImage
      src={imageSrc}
      alt={alt}
      width={width || 1200}
      height={height || 630}
      priority={priority}
      style={{ width: '100%', height: 'auto', ...style }}
    />
  )
}

export default Image
