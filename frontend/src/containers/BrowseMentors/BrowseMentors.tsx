import './index.css';
import allSvg from '../../assets/images/domain-filter-all.svg';
import uiUx from '../../assets/images/domain-filter-ui-ux.svg';
import marketing from '../../assets/images/domain-filter-marketing.svg';
import webDev from '../../assets/images/domain-filter-web-dev.svg';
import aiML from '../../assets/images/domain-filter-ai-ml.svg';
import seo from '../../assets/images/domain-filter-seo.svg';
import graphicDesign from '../../assets/images/domain-filter-graphic-design.svg';
import MentorCardsContainer from '../MentorCardsContainer/MentorCardsContainer';

export default function BrowseMentors() {
    return (
     <div className='browse-mentors-container'>
        <span className='browse-mentors-heading'>Mentors</span>
      <div className='sort-mentors-section'>
         <h4 className='sort-mentors-text'>
            Sort Mentors by
         </h4>
         <button className='sort-by-option'>top rated</button>
         <button className='sort-by-option'>new</button>
         <button className='sort-by-option'>recommended</button>
      </div>
      <div className='domain-filters-section'>
      <button className='domain-filter-option'>
         <span><img src={allSvg} alt="domain-filter-icon" /></span>All
      </button>

      <button className='domain-filter-option'>
         <span><img src={uiUx} alt="domain-filter-icon" /></span>UI UX Design 
      </button>

      <button className='domain-filter-option'>
         <span><img src={marketing} alt="domain-filter-icon" /></span>Marketing 
      </button>

      <button className='domain-filter-option'>
         <span><img src={webDev} alt="domain-filter-icon" /></span>Web Development 
      </button>

      <button className='domain-filter-option'>
         <span><img src={aiML} alt="domain-filter-icon" /></span>AI ML 
      </button>

      <button className='domain-filter-option'>
         <span><img src={seo} alt="domain-filter-icon" /></span>SEO 
      </button>

      <button className='domain-filter-option'>
         <span><img src={graphicDesign} alt="domain-filter-icon" /></span>Graphic Design 
      </button>
      </div>
      <MentorCardsContainer/>
      <button className='view-more-mentors-btn'>View More Mentors</button>
     </div>
    )
  }