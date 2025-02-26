// App.tsx
"use client"
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '@/i18n';
import FormComponent from './component/FormComponent';

const App: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState<string>('en');

  useEffect(() => {
    document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr';
  }, [language]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  return (
    <div className="App">
      <header>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('fa')}>فارسی</button>
      </header>
      <main>
        <FormComponent />
      </main>
    </div>
  );
};

export default App;
