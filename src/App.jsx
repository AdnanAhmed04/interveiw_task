import React from 'react'
import './App.css'
import TopNav from './Component/navbar.jsx'
import HeroSetapp from './Component/HeroSetapp.jsx'
import SetappSection from './Component/SetappSection';
import TwoFeatureCards from './Component/TwoFeatureCards.jsx';
import SimpleTestimonialSlider from './Component/SimpleTestimonialSlider.jsx';
import SetappWordsSlider from './Component/SetappWordsSlider.jsx';
import CTAWithFooter from './Component/CTAWithFooter.jsx';

const App = () => {
  return (
    <div className=''>
      <TopNav />
      <HeroSetapp />
      <SetappSection />
      <TwoFeatureCards/>
      <SimpleTestimonialSlider />
      <SetappWordsSlider /> 
      <CTAWithFooter />

    </div>
  )
}

export default App