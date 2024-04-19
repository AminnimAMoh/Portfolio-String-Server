import React, { memo, PropsWithChildren } from 'react'
import { TypographyProps } from './Typography.interface'
import { StyledTypographyContainer } from './Typography.styles'

const Typography=(props: PropsWithChildren<TypographyProps>)=> {
  const{variant, children, ...rest}=props

  return <StyledTypographyContainer variant={variant} {...rest}>{children}</StyledTypographyContainer>
}

export default memo(Typography)