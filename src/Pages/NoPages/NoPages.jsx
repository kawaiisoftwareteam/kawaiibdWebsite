import React from 'react'
import { useLocale } from '../../i18n/LocaleContext'

const NoPages = () => {
  const { t } = useLocale();

  return (
    <div>
      {t('nopages.title')}
    </div>
  )
}

export default NoPages
