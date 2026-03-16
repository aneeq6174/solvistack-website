const WHATSAPP_BASE = 'https://wa.me/923014438752'

export const CONTACT = {
  whatsapp: WHATSAPP_BASE,
  email: 'mailto:aneeq@solvistack.com',
  emailSubject: 'Clinic Automation Inquiry',
  calendly: 'https://calendly.com/aneeqijaz99/30min',
}

export const FAB_ACTIONS = [
  {
    id: 'automation',
    label: 'Automate Patient Follow-Up',
    href: 'https://calendly.com/aneeqijaz99/30min',
    icon: 'rocket',
  },
  {
    id: 'analysis',
    label: 'Request Clinic Workflow Review',
    href: 'https://calendly.com/aneeqijaz99/30min',
    icon: 'chart',
  },
  {
    id: 'email',
    label: 'Email About My Clinic',
    href: `mailto:aneeq@solvistack.com?subject=${encodeURIComponent(CONTACT.emailSubject)}`,
    icon: 'mail',
  },
]
