const WHATSAPP_BASE = 'https://wa.me/923014438752'

export const CONTACT = {
  whatsapp: WHATSAPP_BASE,
  email: 'mailto:solvistack@gmail.com',
  emailSubject: 'Project Inquiry',
}

export const FAB_ACTIONS = [
  {
    id: 'automation',
    label: 'Build Automation for My Business',
    href: `${WHATSAPP_BASE}?text=${encodeURIComponent('Hi SolviStack, I want automation for my business.')}`,
    icon: 'rocket',
  },
  {
    id: 'analysis',
    label: 'Request Workflow Analysis Call',
    href: `${WHATSAPP_BASE}?text=${encodeURIComponent('Hi SolviStack, I want to schedule a workflow analysis call.')}`,
    icon: 'chart',
  },
  {
    id: 'shopify',
    label: 'Shopify Automation Setup',
    href: `${WHATSAPP_BASE}?text=${encodeURIComponent('Hi SolviStack, I need Shopify automation support.')}`,
    icon: 'cart',
  },
  {
    id: 'email',
    label: 'Send Direct Email',
    href: `mailto:solvistack@gmail.com?subject=${encodeURIComponent(CONTACT.emailSubject)}`,
    icon: 'mail',
  },
]
