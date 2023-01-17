import React from 'react'
import { IconBackgroundColors, RoudedIconContainer } from './styles'

interface RoudedIconProps {
  backGround: IconBackgroundColors
  children: React.ReactNode
}

export function RoundedIcon({ backGround, children }: RoudedIconProps) {
  return (
    <RoudedIconContainer bgColor={backGround}>{children}</RoudedIconContainer>
  )
}
