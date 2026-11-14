'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring, useInView, animate, useReducedMotion } from 'framer-motion'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'


export const MBox = motion.create(Box)
const MCardBase = motion.create(Card)
const MGridBase = motion.create(Grid)

const reveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: 'easeOut' },
}

export function MCard(props) {
  return <MCardBase {...reveal} whileHover={{ y: -6, boxShadow: '0 14px 30px rgba(47,85,212,.18)' }} {...props} />
}

export function MGrid({ delay = 0, ...props }) {
  return <MGridBase {...reveal} transition={{ ...reveal.transition, delay }} {...props} />
}

export function Reveal({ children, delay = 0, y = 40, x = 0, sx, ...rest }) {
  return (
    <MBox initial={{ opacity: 0, y, x }} whileInView={{ opacity: 1, y: 0, x: 0 }} viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }} sx={sx} {...rest}>
      {children}
    </MBox>
  )
}

export function Float({ children, amplitude = 14, duration = 5, delay = 0, sx }) {
  return (
    <MBox animate={{ y: [0, -amplitude, 0] }} transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }} sx={sx}>
      {children}
    </MBox>
  )
}

export function CountUp({ to, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, Number(to), { duration: 2, ease: 'easeOut', onUpdate: (x) => setV(Math.round(x)) })
    return () => c.stop()
  }, [inView, to])
  return <span ref={ref}>{v}{suffix}</span>
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })
  return (
    <MBox style={{ scaleX }} sx={{ position: 'fixed', top: 0, left: 0, right: 0, height: 3, zIndex: 2000, transformOrigin: '0 50%', background: 'linear-gradient(90deg,#2f55d4,#2eca8b)' }} />
  )
}

export function LottieView({ data, loop = true, sx }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  useEffect(() => {
    let anim
    let dead = false
    import('lottie-web').then((m) => {
      if (dead || !ref.current) return
      const lw = m.default || m
      anim = lw.loadAnimation({ container: ref.current, renderer: 'svg', loop, autoplay: !reduce, animationData: data })
    })
    return () => { dead = true; anim?.destroy() }
  }, [data, loop, reduce])
  return <Box ref={ref} sx={sx} />
}

export function Orbs() {
  const o = (size, top, left, color, dur) => (
    <MBox animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.15, 0.95, 1] }} transition={{ duration: dur, repeat: Infinity, ease: 'easeInOut' }}
      sx={{ position: 'absolute', width: size, height: size, top, left, borderRadius: '50%', background: color, filter: 'blur(70px)', opacity: 0.45, pointerEvents: 'none' }} />
  )
  return <>{o(320, '-5%', '-5%', '#2f55d4', 14)}{o(260, '50%', '70%', '#2eca8b', 18)}{o(200, '10%', '55%', '#f17425', 16)}</>
}
