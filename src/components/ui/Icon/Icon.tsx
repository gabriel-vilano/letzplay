import { IconProps, IconSize } from './types'
import styles from './Icon.module.css'

const sizeMap: Record<IconSize, number> = {
  xs: 12,
  sm: 16,
  md: 24,
  lg: 32,
  xl: 64,
}

export function Icon({
  icon: PhosphorIcon,
  size = 'md',
  weight = 'regular',
  className,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
}: IconProps) {
  const hidden = ariaHidden ?? !ariaLabel
  return (
    <PhosphorIcon
      size={sizeMap[size]}
      weight={weight}
      className={`${styles.icon}${className ? ` ${className}` : ''}`}
      aria-label={ariaLabel}
      aria-hidden={hidden || undefined}
    />
  )
}
