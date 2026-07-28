'use client';

import React from 'react';
import Map from '../../Components/Map/Map';
import HeaderContact from '../../Components/HeaderContact/HeaderContact';
import ContactForm from '../../Components/ContactForm/ContactForm';
import { useLocale } from '../../i18n/LocaleContext';
import locationCover from '../../Assets/location.png';

const getSrc = (img) => (typeof img === 'string' ? img : img?.src || img);

const Contact = () => {
  const { t } = useLocale();

  return (
    <>
      <HeaderContact
        text={t('contact.header')}
        backgroundImage={getSrc(locationCover)}
      />
      <ContactForm />
      <Map />
    </>
  );
};

export default Contact;
