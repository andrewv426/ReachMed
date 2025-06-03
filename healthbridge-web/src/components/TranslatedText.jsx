import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../utils/translations';

// Component for displaying translated text
function TranslatedText({ textKey, fallback = '', className = '', as: Component = 'span', ...props }) {
  const { language } = useLanguage();
  const translatedText = getTranslation(language, textKey, fallback);
  
  return (
    <Component className={className} {...props}>
      {translatedText}
    </Component>
  );
}

export default TranslatedText;
