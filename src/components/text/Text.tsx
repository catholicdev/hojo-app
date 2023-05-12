import React, { memo, DOMAttributes } from 'react'
import classNames from 'classnames'
import styles from './Text.module.scss'

interface Props extends DOMAttributes<any> {
  component?: keyof JSX.IntrinsicElements
  className?: string
  children?: React.ReactNode
}
const Text = memo(
  ({ component: Component = 'span', children, ...props }: Props) => {
    return <Component {...props}>{children}</Component>
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
      {...props}
    >
      {children}
    </Text>
  )
}
