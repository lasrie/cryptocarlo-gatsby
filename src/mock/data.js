import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'CryptoCarlo', // e.g: 'Name | Developer'
  lang: 'de', // e.g: en, es, fr, jp
  description: 'Gemeinsam schaffen wir Ihren Einstieg in dei Kryptowährungen.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Kontrolle und Verständnis für den Einstieg in den',
  subtitle: ' entwickeln.',
  highlight: 'Kryptomarkt',
  cta: 'Vereinbare noch heute einen Beratungstermin',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'exchange.jpg',
    title: 'Erstellung von Exchangekonten',
    info: '',
    info2: '',
    url: '',
  },
  {
    id: nanoid(),
    img: 'wallet.jpg',
    title: 'Einrichtung von Wallets',
    info: '',
    info2: '',
    url: '',
  },
  {
    id: nanoid(),
    img: 'crypto.jpg',
    title: 'Bitcoin und andere Kryptowährungen verstehen',
    info: '',
    info2: '',
    url: '',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
