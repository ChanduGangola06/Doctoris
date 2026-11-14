import {
  GrDashboard, PiBrowsers, RiStethoscopeLine, LuUser2, PiWheelchairFill, AiOutlineAppstore,
  PiShoppingCart, MdFlip, FaRegFile, BsEnvelopeOpen, BiLogOutCircle, TbFileInfo, BsPostcard,
} from '@/components/icons'

export const navItems = [
  { title: 'Dashboard', href: '/', icon: GrDashboard },
  { title: 'Layouts', icon: PiBrowsers, children: [
    { title: 'Dark Sidebar', href: '/index-sidebar-dark' },
    { title: 'Colored Sidebar', href: '/index-sidebar-colored' },
  ] },
  { title: 'Appointment', href: '/appointment', icon: RiStethoscopeLine },
  { title: 'Doctors', icon: LuUser2, children: [
    { title: 'Doctors', href: '/doctors' },
    { title: 'Add Doctor', href: '/add-doctor' },
    { title: 'Profile', href: '/dr-profile' },
  ] },
  { title: 'Patients', icon: PiWheelchairFill, children: [
    { title: 'All Patients', href: '/patients' },
    { title: 'Add Patient', href: '/add-patient' },
    { title: 'Profile', href: '/patient-profile' },
  ] },
  { title: 'Apps', icon: AiOutlineAppstore, children: [
    { title: 'Chat', href: '/chat' },
    { title: 'Email', href: '/email' },
    { title: 'Calendar', href: '/calendar' },
  ] },
  { title: 'Pharmacy', icon: PiShoppingCart, children: [
    { title: 'Shop', href: '/shop' },
    { title: 'Shop Detail', href: '/product-detail' },
    { title: 'Shopcart', href: '/shopcart' },
    { title: 'Checkout', href: '/checkout' },
  ] },
  { title: 'Blogs', icon: MdFlip, children: [
    { title: 'Blogs', href: '/blogs' },
    { title: 'Blog Detail', href: '/blog-detail' },
  ] },
  { title: 'Pages', icon: FaRegFile, children: [
    { title: 'FAQs', href: '/faqs' },
    { title: 'Reviews', href: '/review' },
    { title: 'Invoice List', href: '/invoice-list' },
    { title: 'Invoice', href: '/invoice' },
    { title: 'Terms & Policy', href: '/terms' },
    { title: 'Privacy Policy', href: '/privacy' },
    { title: 'Blank Page', href: '/blank-page' },
  ] },
  { title: 'Email Template', icon: BsEnvelopeOpen, children: [
    { title: 'Confirmation', href: '/email-confirmation' },
    { title: 'Reset Password', href: '/email-password-reset' },
    { title: 'Alert', href: '/email-alert' },
    { title: 'Invoice', href: '/email-invoice' },
  ] },
  { title: 'Authentication', icon: BiLogOutCircle, children: [
    { title: 'Login', href: '/login' },
    { title: 'Signup', href: '/signup' },
    { title: 'Forgot Password', href: '/forgot-password' },
    { title: 'Lock Screen', href: '/lock-screen' },
  ] },
  { title: 'UI Components', icon: TbFileInfo, children: [
    { title: 'Buttons', href: '/ui-button' },
    { title: 'Badges', href: '/ui-badges' },
    { title: 'Alert', href: '/ui-alert' },
    { title: 'Dropdowns', href: '/ui-dropdown' },
    { title: 'Typography', href: '/ui-typography' },
    { title: 'Background', href: '/ui-background' },
    { title: 'Text Color', href: '/ui-text' },
    { title: 'Tooltips & Popovers', href: '/ui-tooltip-popover' },
    { title: 'Shadows', href: '/ui-shadow' },
    { title: 'Border', href: '/ui-border' },
    { title: 'Form Elements', href: '/ui-form' },
    { title: 'Pagination', href: '/ui-pagination' },
    { title: 'Avatars', href: '/ui-avatar' },
    { title: 'Modals', href: '/ui-modals' },
    { title: 'Icons', href: '/ui-icons' },
  ] },
  { title: 'Miscellaneous', icon: BsPostcard, children: [
    { title: 'Coming Soon', href: '/comingsoon' },
    { title: 'Maintenance', href: '/maintenance' },
    { title: '404 Error', href: '/error' },
    { title: 'Thank you', href: '/thankyou' },
  ] },
]
