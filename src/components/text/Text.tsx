import React, { CSSProperties, useMemo, memo } from 'react'

interface Props {
  fontSize: CSSProperties['fontSize']
  lineHeight: CSSProperties['lineHeight']
  fontWeight: number
  classname?: string
  children?: React.ReactNode
}

const Text = memo(
  ({ classname, fontWeight, fontSize, lineHeight, children }: Props) => {
    const styled = useMemo<CSSProperties>(
      () => ({
        fontSize,
        fontWeight,
        lineHeight,
      }),
      [fontSize, fontWeight, lineHeight]
    )
    return (
      <span className={classname} style={styled}>
        {children}
      </span>
    )
  }
)

interface Body1Props {
  fontWeight?: 'bold' | 'medium' | 'regular'
  classname?: string
  children?: React.ReactNode
}

const WEIGHT = {
  bold: 700,
  medium: 500,
  regular: 400,
}

export const Body1 = ({ classname, fontWeight, children }: Body1Props) => {
  const weightValue = WEIGHT[fontWeight ?? 'medium']
  return (
    <Text
      classname={classname}
      fontSize="16px"
      lineHeight="24px"
      fontWeight={weightValue}
    >
      {children}
    </Text>
  )
}

export const Body2 = ({ classname, fontWeight, children }: Body1Props) => {
  const weightValue = WEIGHT[fontWeight ?? 'medium']
  return (
    <Text
      classname={classname}
      fontSize="14px"
      lineHeight="21px"
      fontWeight={weightValue}
    >
      {children}
    </Text>
  )
}
