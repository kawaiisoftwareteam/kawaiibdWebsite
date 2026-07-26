import React from 'react';
import HeaderContact from '../HeaderContact/HeaderContact';
import { useLocale } from '../../i18n/LocaleContext';

const PrivacyPolicy = () => {
  const { t } = useLocale();

  return (
    <div >
        <HeaderContact text={t('privacy.pageTitle')}
    backgroundImage={require('../../Assets/location.png')}/>
      <div className="px-24 py-24 flex flex-col justify-center items-center">
      <h1>{t('privacy.pageTitle')}</h1>
      <p><strong>{t('privacy.effectiveDate')}</strong></p>
      <p>{t('privacy.intro')}</p>

      <h2>{t('privacy.sections.infoCollect')}</h2>
      <p>{t('privacy.sections.infoCollectIntro')}</p>
      
      <h3>{t('privacy.sections.personalData')}</h3>
      <ul>
        {(t('privacy.sections.personalItems') || []).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3>{t('privacy.sections.usageData')}</h3>
      <p>{t('privacy.sections.usageDataText')}</p>

      <h3>{t('privacy.sections.cookies')}</h3>
      <p>{t('privacy.sections.cookiesText')}</p>

      <h2>{t('privacy.sections.whyCollect')}</h2>
      <ul>
        {(t('privacy.sections.whyItems') || []).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>{t('privacy.sections.disclosure')}</h2>
      <p>{t('privacy.sections.disclosureText')}</p>

      <h2>{t('privacy.sections.security')}</h2>
      <p>{t('privacy.sections.securityText')}</p>

      <h2>{t('privacy.sections.rights')}</h2>
      <ul>
        {(t('privacy.sections.rightsItems') || []).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>{t('privacy.sections.changes')}</h2>
      <p>{t('privacy.sections.changesText')}</p>

      <h2>{t('privacy.sections.contact')}</h2>
      <p>{t('privacy.sections.contactText')}</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
