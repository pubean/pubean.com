import SmoothScroll from 'smooth-scroll';
import './styles/main.css';

const shMenu = document.querySelector('.site-header__menu');
const shContainer = document.querySelector('.site-header__container');
const shIndicator = document.querySelector('.site-header__indicator');
const services = document.querySelector('.services');

/* eslint-disable no-unused-vars */
const scrollToHash = new SmoothScroll('a[href*="#"]');
/* eslint-enable */

/* Toggle classname of element with given indicator's threshold. */
const toggleDisplay = (element, indicator, threshold, classname) => {
  if (indicator.getBoundingClientRect().top < threshold) element.classList.add(classname);
  else element.classList.remove(classname);
};

if (shMenu && shContainer && shIndicator) {
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        toggleDisplay(shContainer, shContainer, 100, 'is-hide');
        toggleDisplay(shIndicator, shIndicator, 100, 'is-hide');
        toggleDisplay(shMenu, services, 0, 'dark-bg');
        ticking = false;
      });
      ticking = true;
    }
  });
}

// HMR interface
if (module.hot) module.hot.accept();
