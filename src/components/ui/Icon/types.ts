type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type IconWeight = 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone'

interface IconProps {
  icon: React.ElementType
  size?: IconSize
  weight?: IconWeight
  className?: string
  'aria-label'?: string
  'aria-hidden'?: boolean
}

export type { IconSize, IconWeight, IconProps }
