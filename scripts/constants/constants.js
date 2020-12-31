import {
  faFacebookF, faInstagram, faYoutube, faLinkedin, faGoodreads, faGithub,
} from '@fortawesome/free-brands-svg-icons';

/* eslint-disable import/prefer-default-export */
const CONTACT_EMAIL = 'antoniyaata@gmail.com';

const PROFESSION = '[\'Front-end Developer\', \'Technical Trainer\', \'Freelancer\']';

const WEBSITE_TITLE = 'Antonia Atanasova | Front-end Developer, Technical Trainer, Freelancer';

const SOCIAL_MEDIA_ACCOUNTS = [
  {
    key: 'fb',
    icon: faFacebookF,
    url: 'https://www.facebook.com/antoniyaata',
  },
  {
    key: 'ig',
    icon: faInstagram,
    url: 'https://www.instagram.com/antoniyaat/',
  },
  {
    key: 'yt',
    icon: faYoutube,
    url: 'https://www.youtube.com/channel/UCYO3R9oWbDsDnKOkls0OPhA?view_as=subscriber',
  },
  {
    key: 'linkedin',
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/antoniyaata',
  },
  {
    key: 'goodreads',
    icon: faGoodreads,
    url: 'https://www.goodreads.com/user/show/81914692-antonia-atanasova',
  },
  {
    key: 'gh',
    icon: faGithub,
    url: 'https://github.com/antoniaat',
  },
];

const LOGO_TYPES = {
  light: 'light',
  dark: 'dark',
};

export {
  CONTACT_EMAIL,
  PROFESSION,
  WEBSITE_TITLE,
  SOCIAL_MEDIA_ACCOUNTS,
  LOGO_TYPES,
};
