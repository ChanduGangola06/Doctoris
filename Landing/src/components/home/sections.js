'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Rating from '@mui/material/Rating'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ArrowForward from '@mui/icons-material/ArrowForward'
import ChevronLeft from '@mui/icons-material/ChevronLeft'
import ChevronRight from '@mui/icons-material/ChevronRight'
import Facebook from '@mui/icons-material/Facebook'
import LinkedIn from '@mui/icons-material/LinkedIn'
import Twitter from '@mui/icons-material/Twitter'
import Instagram from '@mui/icons-material/Instagram'
import CalendarMonthOutlined from '@mui/icons-material/CalendarMonthOutlined'
import AccessTime from '@mui/icons-material/AccessTime'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import ChatBubbleOutlineOutlined from '@mui/icons-material/ChatBubbleOutlineOutlined'
import { Section, SectionTitle, IconBox } from '@/components/ui'
import { MCard, MBox, Reveal, Float, CountUp, Orbs, LottieView } from '@/components/motion'
import { motion, useScroll, useTransform } from 'framer-motion'
import medical from '@/animations/pulse.json'
import healthcare from '@/animations/healthcare.json'
import { medicalServices, doctorData, blogData, partners, counterData, patientsData, ctaData, accordionData, category, contactData } from '@/data/data'

const lorem = 'Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.'
const colors = ['primary', 'success', 'warning', 'error', 'info', 'secondary']

const container = { hidden: {}, show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } } }
const item = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } } }
const MContainer = motion.create(Container)
const MTypography = motion.create(Typography)

export function HeroImage({ title = <>Meet The <br />Best Doctor</>, bg = '/images/bg/01.jpg' }) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 700], [0, 160])
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', minHeight: { xs: 560, md: 720 }, display: 'flex', alignItems: 'center', color: '#fff', pt: 10 }}>
      <MBox sx={{ position: 'absolute', inset: '-10% 0', backgroundImage: `linear-gradient(rgba(15,23,42,.65), rgba(15,23,42,.65)), url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <Orbs />
      <Container maxWidth="lg" sx={{ position: 'relative' }}><MBox variants={container} initial="hidden" animate="show">
        <Grid container spacing={4} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div variants={item}><Image src="/images/logo-icon.png" width={54} height={50} alt="" /></motion.div>
            <MTypography variants={item} variant="h2" component="h1" sx={{ fontWeight: 700, fontSize: { xs: 40, md: 64 }, my: 3 }}>{title}</MTypography>
            <MTypography variants={item} sx={{ maxWidth: 560, opacity: 0.85 }}>{lorem}</MTypography>
            <motion.div variants={item}>
              <Button component={Link} href="/booking-appointment" variant="contained" size="large" sx={{ mt: 4, boxShadow: '0 0 0 0 rgba(47,85,212,.7)', animation: 'pulse 2s infinite', '@keyframes pulse': { '70%': { boxShadow: '0 0 0 16px rgba(47,85,212,0)' }, '100%': { boxShadow: '0 0 0 0 rgba(47,85,212,0)' } } }}>Make Appointment</Button>
            </motion.div>
            <MTypography variants={item} variant="body2" sx={{ mt: 2, opacity: 0.75 }}>T&C apply. Please read <Link href="/terms" style={{ color: 'inherit' }}>Terms and Conditions</Link></MTypography>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }} sx={{ display: { xs: 'none', md: 'block' } }}>
            <motion.div variants={item}><Float><LottieView data={medical} sx={{ maxWidth: 380, ml: 'auto', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,.35))' }} /></Float></motion.div>
          </Grid>
        </Grid>
      </MBox></Container>
    </Box>
  )
}

const slides = [
  { img: '/images/bg/slider01.jpg', title: 'Your Health Is Our Priority', text: 'Experienced specialists, modern equipment and caring staff — all in one place.' },
  { img: '/images/bg/slider02.jpg', title: 'Quality Care For Every Family', text: 'Book appointments online and get the care you need, when you need it.' },
  { img: '/images/bg/slider03.jpg', title: 'Expert Doctors Near You', text: 'Consult with certified doctors across more than 20 departments.' },
]
export function HeroSlider() {
  const [i, setI] = useState(0)
  useEffect(() => { const t = setInterval(() => setI((x) => (x + 1) % slides.length), 6000); return () => clearInterval(t) }, [])
  const s = slides[i]
  return (
    <Box sx={{ position: 'relative', minHeight: { xs: 560, md: 720 }, display: 'flex', alignItems: 'center', color: '#fff', backgroundImage: `linear-gradient(rgba(15,23,42,.6), rgba(15,23,42,.6)), url(${s.img})`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'background-image .6s', pt: 10 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" sx={{ fontWeight: 700, fontSize: { xs: 36, md: 60 }, maxWidth: 720 }}>{s.title}</Typography>
        <Typography sx={{ maxWidth: 560, opacity: 0.85, my: 3 }}>{s.text}</Typography>
        <Button component={Link} href="/booking-appointment" variant="contained" size="large">Book Appointment</Button>
      </Container>
      <IconButton onClick={() => setI((i + slides.length - 1) % slides.length)} sx={{ position: 'absolute', left: 16, top: '50%', color: '#fff', bgcolor: 'rgba(255,255,255,.15)' }} aria-label="previous"><ChevronLeft /></IconButton>
      <IconButton onClick={() => setI((i + 1) % slides.length)} sx={{ position: 'absolute', right: 16, top: '50%', color: '#fff', bgcolor: 'rgba(255,255,255,.15)' }} aria-label="next"><ChevronRight /></IconButton>
      <Stack direction="row" spacing={1} sx={{ position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)' }}>
        {slides.map((_, k) => <Box key={k} onClick={() => setI(k)} sx={{ width: 10, height: 10, borderRadius: '50%', cursor: 'pointer', bgcolor: k === i ? '#fff' : 'rgba(255,255,255,.4)' }} />)}
      </Stack>
    </Box>
  )
}

export function HeroSplit() {
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', pt: { xs: 14, md: 18 }, pb: { xs: 6, md: 10 }, background: (t) => `linear-gradient(135deg, rgba(${t.vars.palette.primary.mainChannel} / .12), transparent 60%)` }}>
      <Orbs />
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Grid container spacing={4} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <MBox variants={container} initial="hidden" animate="show">
              <MTypography variants={item} variant="overline" color="primary" sx={{ fontWeight: 700 }}>Trusted healthcare</MTypography>
              <MTypography variants={item} variant="h2" component="h1" sx={{ fontWeight: 700, fontSize: { xs: 36, md: 56 }, my: 2, background: 'linear-gradient(90deg,#2f55d4,#2eca8b)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Healthy Life <br />Starts Here</MTypography>
              <MTypography variants={item} color="text.secondary" sx={{ maxWidth: 480 }}>{lorem}</MTypography>
              <motion.div variants={item}>
                <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
                  <Button component={Link} href="/booking-appointment" variant="contained" size="large">Make Appointment</Button>
                  <Button component={Link} href="/doctor" variant="outlined" size="large">Our Doctors</Button>
                </Stack>
              </motion.div>
            </MBox>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <MBox initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.3 }}>
              <LottieView data={healthcare} sx={{ maxWidth: 520, mx: 'auto', '& svg': { display: 'block' } }} />
            </MBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export function FeatureCards() {
  return (
    <Section sx={{ py: { xs: 6, md: 8 } }}>
      <Grid container spacing={3}>
        {contactData.map((c, i) => (
          <Grid key={c.title} size={{ xs: 12, md: 4 }}>
            <MCard sx={{ p: 3, height: '100%', textAlign: 'center' }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}><IconBox icon={c.icon} color={colors[i]} /></Box>
              <Typography variant="h6" gutterBottom>{c.title}</Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>{c.desc}</Typography>
            </MCard>
          </Grid>
        ))}
      </Grid>
    </Section>
  )
}

export function About({ reverse }) {
  return (
    <Section>
      <Grid container spacing={6} direction={reverse ? 'row-reverse' : 'row'} sx={{ alignItems: "center" }}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Reveal x={reverse ? 60 : -60} y={0}><Float amplitude={10} duration={6}><Box component="img" src="/images/about/about-2.png" alt="" sx={{ width: '100%', borderRadius: 3 }} /></Float></Reveal>
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700 }}>About Our Treatments</Typography>
          <Typography sx={{ color: "text.secondary", mb: 2 }}>Great doctor if you need your family member to get effective immediate assistance, examination, emergency treatment or a simple consultation. Thank you.</Typography>
          <Typography sx={{ color: "text.secondary", mb: 2 }}>The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to proper Latin.</Typography>
          <Button component={Link} href="/aboutus" variant="contained" endIcon={<ArrowForward />}>Read More</Button>
        </Grid>
      </Grid>
    </Section>
  )
}

export function Services({ count = 8, bg }) {
  return (
    <Section bg={bg}>
      <SectionTitle badge="Departments" title="Our Medical Services" text={lorem} />
      <Grid container spacing={3}>
        {medicalServices.slice(0, count).map((s, i) => (
          <Grid key={s.title} size={{ xs: 12, sm: 6, md: 3 }}>
            <MCard sx={{ p: 3, height: '100%' }}>
              <IconBox icon={s.icon} color={colors[i % 6]} />
              <Typography component={Link} href="/departments" variant="h6" sx={{ display: 'block', mt: 2, color: 'text.primary', textDecoration: 'none' }}>{s.title}</Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", my: 1.5 }}>{s.desc}</Typography>
              <Typography component={Link} href="/departments" variant="body2" color="primary" sx={{ textDecoration: 'none' }}>Read More →</Typography>
            </MCard>
          </Grid>
        ))}
      </Grid>
    </Section>
  )
}

const hours = [['Monday', '8:00 - 20:00'], ['Tuesday', '8:00 - 20:00'], ['Wednesday', '8:00 - 20:00'], ['Thursday', '8:00 - 20:00'], ['Friday', '8:00 - 20:00'], ['Saturday', '8:00 - 20:00'], ['Sunday', 'Closed']]
export function Timetable() {
  return (
    <Section bg="action.hover">
      <Grid container spacing={5} sx={{ alignItems: "center" }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700 }}>Working Hours</Typography>
          <Typography sx={{ color: "text.secondary", mb: 2 }}>{lorem}</Typography>
          <Button component={Link} href="/booking-appointment" variant="contained">Book an Appointment</Button>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <MCard><Table><TableBody>
            {hours.map(([d, t]) => <TableRow key={d}><TableCell sx={{ fontWeight: 600 }}>{d}</TableCell><TableCell align="right">{t}</TableCell></TableRow>)}
          </TableBody></Table></MCard>
        </Grid>
      </Grid>
    </Section>
  )
}

export function DoctorCard({ d, href = '/doctor' }) {
  return (
    <MCard sx={{ overflow: 'hidden', height: '100%', '&:hover .social': { opacity: 1, transform: 'translateX(0)' } }}>
      <Box sx={{ position: 'relative' }}>
        <CardMedia component="img" image={d.image} alt={d.name} sx={{ aspectRatio: '1 / 1', objectFit: 'cover' }} />
        <Stack className="social" spacing={0.5} sx={{ position: 'absolute', top: 12, right: 12, opacity: 0, transform: 'translateX(12px)', transition: 'all .25s' }}>
          {[Facebook, LinkedIn, Twitter, Instagram].map((I, i) => <IconButton key={i} size="small" sx={{ bgcolor: 'background.paper', '&:hover': { bgcolor: 'primary.main', color: '#fff' } }}><I fontSize="small" /></IconButton>)}
        </Stack>
      </Box>
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography component={Link} href={href} variant="h6" sx={{ color: 'text.primary', textDecoration: 'none' }}>{d.name}</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>{d.speciality}</Typography>
      </CardContent>
    </MCard>
  )
}

export function Doctors({ count = 4, bg }) {
  return (
    <Section bg={bg}>
      <SectionTitle title="Doctors" text={lorem} />
      <Grid container spacing={3}>
        {doctorData.slice(0, count).map((d) => <Grid key={d.name} size={{ xs: 12, sm: 6, md: 3 }}><DoctorCard d={d} /></Grid>)}
      </Grid>
      <Box sx={{ textAlign: 'center', mt: 5 }}><Button component={Link} href="/doctor" variant="contained">See More</Button></Box>
    </Section>
  )
}

export function Cta() {
  return (
    <Box sx={{ py: 9, color: '#fff', textAlign: 'center', backgroundImage: 'linear-gradient(rgba(47,85,212,.88), rgba(47,85,212,.88)), url(/images/cta.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Container maxWidth="md">
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700 }}>Have Question? Get in touch!</Typography>
        <Typography sx={{ opacity: 0.85, mb: 4 }}>{lorem}</Typography>
        <Button component={Link} href="/contact" variant="contained" color="inherit" size="large" sx={{ color: 'primary.main', bgcolor: '#fff' }}>Contact us</Button>
      </Container>
    </Box>
  )
}

export function Counters() {
  return (
    <Section>
      <Grid container spacing={3}>
        {counterData.map((c) => (
          <Grid key={c.titleOne} size={{ xs: 6, md: 3 }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h3" color="primary" sx={{ fontWeight: 700 }}><CountUp to={c.target} suffix={c.symbol} /></Typography>
              <Typography sx={{ fontWeight: 600 }}>{c.titleOne}</Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>{c.titleTwo}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Section>
  )
}

export function Testimonials() {
  const [i, setI] = useState(0)
  useEffect(() => { const t = setInterval(() => setI((x) => (x + 1) % patientsData.length), 7000); return () => clearInterval(t) }, [])
  const p = patientsData[i]
  return (
    <Section maxWidth="md">
      <SectionTitle title="Patients Says" text={lorem} />
      <MCard sx={{ p: { xs: 3, md: 5 }, textAlign: 'center' }}>
        <Avatar src={p.image} sx={{ width: 84, height: 84, mx: 'auto', mb: 2 }} />
        <Rating value={5} readOnly />
        <Typography sx={{ color: "text.secondary", my: 2, fontStyle: 'italic' }}>{p.desc}</Typography>
        <Typography sx={{ fontWeight: 700 }}>{p.name}</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>{p.title}</Typography>
        <Stack direction="row" spacing={1} sx={{ justifyContent: "center", mt: 3 }}>
          {patientsData.map((_, k) => <Box key={k} onClick={() => setI(k)} sx={{ width: 10, height: 10, borderRadius: '50%', cursor: 'pointer', bgcolor: k === i ? 'primary.main' : 'action.disabled' }} />)}
        </Stack>
      </MCard>
    </Section>
  )
}

export function BlogCard({ b }) {
  return (
    <MCard sx={{ height: '100%', overflow: 'hidden' }}>
      <CardMedia component="img" image={b.image} alt="" sx={{ aspectRatio: '16 / 10', objectFit: 'cover' }} />
      <CardContent>
        <Stack direction="row" spacing={2} sx={{ color: 'text.secondary', mb: 1 }}>
          <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}><CalendarMonthOutlined sx={{ fontSize: 16 }} /><Typography variant="caption">{b.date}</Typography></Stack>
          <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}><AccessTime sx={{ fontSize: 16 }} /><Typography variant="caption">{b.time}</Typography></Stack>
        </Stack>
        <Typography component={Link} href={`/blog-detail/${b.id}`} variant="h6" sx={{ color: 'text.primary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>{b.title}</Typography>
        <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", mt: 2, color: 'text.secondary' }}>
          <Stack direction="row" spacing={2}>
            <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}><FavoriteBorder sx={{ fontSize: 16 }} /><Typography variant="caption">{b.like}</Typography></Stack>
            <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}><ChatBubbleOutlineOutlined sx={{ fontSize: 16 }} /><Typography variant="caption">{b.comment}</Typography></Stack>
          </Stack>
          <Typography component={Link} href={`/blog-detail/${b.id}`} variant="body2" color="primary" sx={{ textDecoration: 'none' }}>Read More »</Typography>
        </Stack>
      </CardContent>
    </MCard>
  )
}

export function Blogs({ count = 3, bg }) {
  return (
    <Section bg={bg}>
      <SectionTitle badge="Read News" title="Latest News & Blogs" text={lorem} />
      <Grid container spacing={3}>
        {blogData.slice(0, count).map((b) => <Grid key={b.id} size={{ xs: 12, sm: 6, md: 4 }}><BlogCard b={b} /></Grid>)}
      </Grid>
    </Section>
  )
}

export function Partners() {
  return (
    <Box sx={{ py: 4, bgcolor: 'action.hover' }}>
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ justifyContent: "center", alignItems: "center" }}>
          {partners.map((p, i) => <Grid key={i} size={{ xs: 6, sm: 4, md: 2 }} sx={{ textAlign: 'center' }}><Image src={p} width={125} height={25} alt="" style={{ height: 'auto', maxWidth: '100%' }} /></Grid>)}
        </Grid>
      </Container>
    </Box>
  )
}

export function Faq({ items = accordionData }) {
  return (
    <Box>
      {items.map((f, i) => (
        <Accordion key={f.id} defaultExpanded={i === 0} disableGutters>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}><Typography sx={{ fontWeight: 600 }}>{f.title}</Typography></AccordionSummary>
          <AccordionDetails><Typography sx={{ color: "text.secondary" }}>{f.desc}</Typography></AccordionDetails>
        </Accordion>
      ))}
    </Box>
  )
}

export function CategoryStrip() {
  return (
    <Section sx={{ py: { xs: 5, md: 7 } }}>
      <Grid container spacing={3} sx={{ justifyContent: "center" }}>
        {category.map((c, i) => (
          <Grid key={c.title} size={{ xs: 6, sm: 4, md: 2.4 }}>
            <MCard sx={{ p: 3, textAlign: 'center', height: '100%' }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1.5 }}><IconBox icon={c.icon} color={colors[i % 6]} /></Box>
              <Typography sx={{ fontWeight: 600 }}>{c.title}</Typography>
              <Typography variant="caption" sx={{ color: "text.secondary" }}>{c.desc}</Typography>
            </MCard>
          </Grid>
        ))}
      </Grid>
    </Section>
  )
}

export function MissionVision() {
  return (
    <Section>
      <Grid container spacing={3}>
        {ctaData.map((c, i) => (
          <Grid key={c.title} size={{ xs: 12, md: 4 }}>
            <MCard sx={{ p: 3, height: '100%' }}>
              <IconBox icon={c.icon} color={colors[i % 6]} />
              <Typography variant="h6" sx={{ mt: 2 }} gutterBottom>{c.title}</Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>{c.desc}</Typography>
            </MCard>
          </Grid>
        ))}
      </Grid>
    </Section>
  )
}
