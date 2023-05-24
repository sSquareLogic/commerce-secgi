import { USFlag } from '@components/icons/language/USFlag';
import siteLogo from 'public/assets/images/logo.svg';
import { TMFlag } from '@components/icons/language/TMFlag';

export const siteSettings = {
  name: 'Seçgi',
  description:
    'Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS.',
  author: {
    name: 'RedQ, Inc.',
    websiteUrl: 'https://redq.io',
    address: '',
  },
  logo: {
    url: siteLogo,
    alt: 'Seçgi',
    href: '/',
    width: 128,
    height: 30,
  },
  defaultLanguage: 'en',
  currencyCode: 'TMT',
  site_header: {
    menu: [
      {
        id: 1,
        path: '/',
        label: 'menu-home',
      },
      {
        id: 2,
        path: '/about-us',
        label: 'menu-about-us',
      },
      {
        id: 3,
        path: '/contact-us',
        label: 'menu-customer-support',
      },
      {
        id: 4,
        path: '/shops',
        label: 'menu-shops',
      },
      {
        id: 5,
        path: '/contact-us',
        label: 'menu-contact-us',
      },
    ],
    languageMenu: [
      {
        id: 'en',
        name: 'English - EN',
        value: 'en',
        icon: <USFlag />,
      },
      {
        id: 'tm',
        name: 'Turkmen - TM',
        value: 'tm',
        icon: <TMFlag />,
      },
    ],
    pagesMenu: [
      {
        id: 1,
        path: '/search',
        label: 'menu-best-deals',
      },
      {
        id: 2,
        path: '/about-us',
        label: 'menu-about-us',
      },
      {
        id: 3,
        path: '/contact-us',
        label: 'menu-contact-us',
      },
      {
        id: 4,
        path: '/faq',
        label: 'menu-faq',
      },
    ],
  },
};
