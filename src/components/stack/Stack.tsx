import React, { DOMAttributes, CSSProperties, useMemo } from 'react'

interface StackProps extends DOMAttributes<any> {
  flexDirection?: CSSProperties['flexDirection']
  alignItems?: CSSProperties['alignItems']
  justifyContent?: CSSProperties['justifyContent']
  className?: string
  space?: 4 | 8 | 12 | 16 | 24 | 32
}

const StackComp = ({
  className,
  space = 16,
  children,
  flexDirection = 'column',
  alignItems = 'initial',
  justifyContent = 'initial',
}: StackProps) => {
  const style = useMemo<CSSProperties>(
    () => ({
      display: 'flex',
      flexDirection,
      alignItems,
      justifyContent,
      ...(flexDirection?.includes('row')
        ? { columnGap: `${space}px` }
        : { rowGap: `${space}px` }),
    }),
    [alignItems, flexDirection, justifyContent, space]
  )
  return (
    <div className={className} style={style}>
      {children}
    </div>
  )
}

export const Stack = React.memo(StackComp)
