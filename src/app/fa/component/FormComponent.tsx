// FormComponent.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const FormComponent: React.FC = () => {
  const { t } = useTranslation();
  return (
    <form style={{ textAlign: 'inherit' }}>
      <label htmlFor="name">{t('name')}:</label>
      <input type="text" id="name" name="name" />
      <button type="submit">{t('submit')}</button>
    </form>
  );
};

export default FormComponent;
