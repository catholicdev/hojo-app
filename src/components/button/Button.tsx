import React, { ReactNode, useMemo } from 'react'
import classNames from 'classnames'
import styles from './Button.module.scss'

interface Props {
  children?: ReactNode
  className?: string
  color?: 'primary' | 'success' | 'error'
  component?: keyof JSX.IntrinsicElements
  disabled?: boolean
  fullWidth?: boolean
  href?: string
  size?: 'small' | 'medium' | 'large'
  startIcon?: ReactNode
  endIcon?: ReactNode
  variant?: 'filled' | 'outlined' | 'text'
  onClick?: () => void
}

export const Button = ({
  className,
  children,
  component: Component = 'button',
  disabled,
  fullWidth = true,
  size = 'large',
  color = 'primary',
  variant = 'filled',
  onClick = () => {},
}: Props) => {
  const colorStyle = useMemo(() => {
    switch (color) {
      case 'error':
        return styles.colorError
      default:
        return styles.colorPrimary
    }
  }, [color])

  const variantStyle = useMemo(() => {
    switch (variant) {
      case 'outlined':
        return styles.outlined
      case 'text':
        return styles.text
      default:
        return styles.filled
    }
  }, [variant])

  const sizeStyle = useMemo(() => {
    switch (size) {
      case 'large':
        return styles.buttonLarge
      case 'small':
        return styles.buttonSmall
      default:
        return styles.buttonMedium
    }
  }, [size])
  return (
    <Component
      className={classNames(
        className,
        styles.default,
        sizeStyle,
        colorStyle,
        variantStyle,
        {
          [styles.disabled]: disabled,
          [styles.displayFullWidth]: fullWidth,
        }
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{children}</span>
    </Component>
  )
}
