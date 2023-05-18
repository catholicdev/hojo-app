import React, { memo, DOMAttributes, useMemo } from 'react'
import classNames from 'classnames'
import styles from './Text.module.scss'

interface Props extends DOMAttributes<any> {
  component?: keyof JSX.IntrinsicElements
  className?: string
  children?: React.ReactNode
  color?: 'primary' | 'error'
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
        default:
          return
      }
    }, [color])
    return (
      <Component className={classNames(className, colorClassName)} {...props}>
        {children}
      </Component>
    )
  }
)

export const Body1 = ({ className, children, ...props }: Props) => {
  return (
    <Text className={classNames(className, styles.body1)} {...props}>
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
      color="primary"
      {...props}
    >
      {children}
    </Text>
  )
}
