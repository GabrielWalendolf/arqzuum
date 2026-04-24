'use client'

import Tilt from 'react-parallax-tilt'

interface Card3DProps {
  children: React.ReactNode
  className?: string
}

export default function Card3D({ children, className }: Card3DProps) {
  return (
    <Tilt
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      scale={1.02}
      transitionSpeed={400}
      glareEnable={false}
      className={className}
    >
      {children}
    </Tilt>
  )
}
