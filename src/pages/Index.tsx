import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { useLanguage } from '@/contexts/LanguageContext';
import Logo from '@/components/Logo';
import SectionTitle from '@/components/SectionTitle';

const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const [state, handleSubmit] = useForm('xjkoqdev');
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    city: '',
    email: '',
    social: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (state.succeeded) {
    return (
      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-8">
        <p className="font-bold">{t('submitted')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
            {t('namePlaceholder')}
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="age" className="block text-sm font-medium text-gray-300 mb-1">
            {t('agePlaceholder')}
          </label>
          <input
            id="age"
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Your age"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-300 mb-1">
            {t('cityPlaceholder')}
          </label>
          <input
            id="city"
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Your city"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            {t('emailPlaceholder')}
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="social" className="block text-sm font-medium text-gray-300 mb-1">
          {t('socialMediaPlaceholder')}
        </label>
        <input
          id="social"
          type="text"
          name="social"
          value={formData.social}
          onChange={handleChange}
          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
          placeholder="Your social media username"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
          {t('messagePlaceholder')}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
          placeholder="Tell us about yourself and your experience..."
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 flex items-center justify-center"
        >
          {state.submitting ? (
            <>
              <Loader2 className="animate-spin mr-2 h-4 w-4" />
              {t('submitting')}
            </>
          ) : (
            t('submitButton')
          )}
        </button>
      </div>
    </form>
  );
};

const Index: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center max-w-6xl w-full mx-auto px-2">
      <header className="w-full flex flex-col items-center pt-6 pb-2">
        <Logo />
      </header>
      
      <main className="w-full px-0 pb-8 flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full mb-6 text-center">
          <img
            src="/lovable-uploads/Gemini_Generated_Image_2uz32o2uz32o2uz3-removebg-preview.png"
            alt="Pattaya Gogo Bar Auditions"
            className="mx-auto w-full max-w-md object-contain"
          />
        </section>
        
        {/* Main Content */}
        <section className="w-full mb-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 text-white">
            {t('mainTitle')}
          </h1>
          <p className="text-xl md:text-2xl text-center mb-8 text-pink-300">
            {t('mainSubtitle')}
          </p>
          <p className="mb-6">
            {t('welcomeText')}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 text-left my-10">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-pink-400 mb-4">{t('findYourPerfectJob')}</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span>{t('job1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span>{t('job2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span>{t('job3')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span>{t('job4')}</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-pink-400 mb-4">{t('whyChooseUs')}</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span>{t('benefit1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span>{t('benefit2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span>{t('benefit3')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span>{t('benefit4')}</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-10 mb-8">
            <h3 className="text-2xl font-bold text-pink-400 mb-6">{t('dontWait')}</h3>
            <p className="mb-6 text-lg">
              {t('browseListings')}
            </p>
          </div>
          
          <div className="text-sm text-gray-400 mt-12">
            <p>{t('nowHiring')}</p>
            <div className="grid md:grid-cols-2 gap-6 text-left my-10">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-pink-400 mb-4">{t('findYourPerfectJob')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-2">•</span>
                    <span>{t('job1')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-2">•</span>
                    <span>{t('job2')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-2">•</span>
                    <span>{t('job3')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-2">•</span>
                    <span>{t('job4')}</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-pink-400 mb-4">{t('whyChooseUs')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-2">•</span>
                    <span>{t('benefit1')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-2">•</span>
                    <span>{t('benefit2')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-2">•</span>
                    <span>{t('benefit3')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-2">•</span>
                    <span>{t('benefit4')}</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-10 mb-8">
              <h3 className="text-2xl font-bold text-pink-400 mb-6">{t('dontWait')}</h3>
              <p className="mb-6 text-lg">
                {t('browseListings')}
              </p>
            </div>
            
            <div className="text-sm text-gray-400 mt-12">
              <p>{t('nowHiring')}</p>
            </div>
          </div>
        </section>
        
        {/* Success Stories */}
        <section className="w-full mb-16 px-4">
          <SectionTitle>{t('successStories')}</SectionTitle>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-12">
            {[
              {
                name: t('nokName'),
                age: 23,
                location: t('nokLocation'),
                review: t('nokReview'),
                rating: 5,
              },
              {
                name: t('daoName'),
                age: 25,
                location: t('daoLocation'),
                review: t('daoReview'),
                rating: 5,
              },
              {
                name: t('meiName'),
                age: 22,
                location: t('meiLocation'),
                review: t('meiReview'),
                rating: 5,
              },
              {
                name: t('yingName'),
                age: 24,
                location: t('yingLocation'),
                review: t('yingReview'),
                rating: 5,
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-800 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-pink-900/10">
                <div className="flex items-start mb-3">
                  <div className="w-12 h-12 rounded-full bg-pink-900/30 flex items-center justify-center text-2xl mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-pink-400">{testimonial.name}</h4>
                    <div className="flex items-center text-yellow-400 text-sm mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-gray-400 text-xs ml-2">• {testimonial.location}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">"{testimonial.review}"</p>
                <div className="mt-3 pt-3 border-t border-gray-800 text-xs text-gray-500 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                  <span>{t('googleReview')}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-lg text-gray-300 mb-6">{t('couldBeNext')}</p>
            <a 
              href="#apply" 
              className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-md text-sm uppercase tracking-wider transition duration-300 transform hover:scale-105"
            >
              {t('startYourJourney')}
            </a>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="w-full mb-16 px-4">
          <SectionTitle>{t('faq')}</SectionTitle>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: t('faqQuestion1'),
                answer: t('faqAnswer1')
              },
              {
                question: t('faqQuestion2'),
                answer: t('faqAnswer2')
              },
              {
                question: t('faqQuestion3'),
                answer: t('faqAnswer3')
              },
              {
                question: t('faqQuestion4'),
                answer: t('faqAnswer4')
              },
              {
                question: t('faqQuestion5'),
                answer: t('faqAnswer5')
              },
              {
                question: t('faqQuestion6'),
                answer: t('faqAnswer6')
              },
              {
                question: t('faqQuestion7'),
                answer: t('faqAnswer7')
              },
              {
                question: t('faqQuestion8'),
                answer: t('faqAnswer8')
              }
            ].map((item, index) => {
              const [isOpen, setIsOpen] = React.useState(false);
              
              return (
                <div key={index} className="border border-gray-800 rounded-lg overflow-hidden">
                  <button 
                    className="w-full px-6 py-4 text-left font-medium text-white bg-gray-900 hover:bg-gray-800 transition-all flex justify-between items-center"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>
                    <svg 
                      className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div 
                    className="bg-gray-900 px-6 overflow-hidden transition-all duration-300 ease-in-out"
                    style={{
                      maxHeight: isOpen ? '500px' : '0',
                      opacity: isOpen ? 1 : 0.8
                    }}
                  >
                    <div className="py-4 text-gray-300">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Application Form */}
        <section id="apply" className="w-full mb-16">
          <SectionTitle>{t('applyNow')}</SectionTitle>
          <div className="bg-gray-900 p-6 rounded-lg max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </section>
      </main>
      
      <footer className="w-full py-6 text-center text-xs text-gray-400 border-t border-gray-800">
        <p>Pattaya Gogo Bar Auditions © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Index;
