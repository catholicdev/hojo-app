import React, { memo, DOMAttributes, useMemo } from 'react'
import classNames from 'classnames'
import styles from './Text.module.scss'

interface Props extends DOMAttributes<any> {
  component?: keyof JSX.IntrinsicElements
  className?: string
  children?: React.ReactNode
  color?: 'primary' | 'error' | 'default' | 'gray'
}
const Text = memo(
  ({
    component: Component = 'span',
    children,
    className,
    color,
    ...props
  }: Props) => {
    const colorClassName = useMemo<string | undefined>(() => {
      switch (color) {
        case 'primary':
          return styles.colorPrimary
        case 'error':
          return styles.colorError
        case 'default':
          return styles.colorDefault
        default:
          return styles.colorGray
      }
    }, [color])

    return (
      <Component className={classNames(className, colorClassName)} {...props}>
        {children}
      </Component>
    )
  }
)

export const Body1 = ({ className, children, color, ...props }: Props) => {
  return (
    <Text
      className={classNames(className, styles.body1)}
      color={color || 'default'}
      {...props}
    >
      {children}
    </Text>
  )
}

export const Body2 = ({ className, children, ...props }: Props) => {
  return (
    <Text className={classNames(className, styles.body2)} {...props}>
      {children}
    </Text>
  )
}

export const PageTitle = ({ className, children, ...props }: Props) => {
  return (
    <Text
      className={classNames(className, styles.pageTitle)}
      component="div"
      color="default"
      {...props}
    >
      {children}
    </Text>
  )
}
