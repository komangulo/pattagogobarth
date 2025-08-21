import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-6 right-6 z-50 bg-gray-800 hover:bg-pink-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 border-2 border-pink-500"
      aria-label={language === 'en' ? 'Switch to Thai' : 'เปลี่ยนเป็นภาษาอังกฤษ'}
      title={language === 'en' ? 'Switch to Thai' : 'เปลี่ยนเป็นภาษาอังกฤษ'}
    >
      {language === 'en' ? 'TH' : 'EN'}
    </button>
  );
};

export default LanguageSwitcher;
