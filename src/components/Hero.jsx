import { useState, useEffect, useCallback } from 'react'
import './Hero.css'
import slides from '../config/slides'
import logger from '../utils/logger'

const CAROUSEL_INTERVAL = Number(import.meta.env.VITE_APP_CAROUSEL_INTERVAL) || 5000

function Hero() {
  const [active, setActive] = useState(0)
  const total = slides.length

  const updateSlide = useCallback((direction) => {
    if (direction > 0) {
      setActive((prev) => (prev + 1 === total ? 0 : prev + 1))
    } else if (direction < 0) {
      setActive((prev) => (prev - 1 < 0 ? total - 1 : prev - 1))
    }
  }, [total])

  useEffect(() => {
    logger.debug('Carousel auto-advance interval:', CAROUSEL_INTERVAL, 'ms')
    const timer = setInterval(() => {
      updateSlide(1)
    }, CAROUSEL_INTERVAL)
    return () => clearInterval(timer)
  }, [active, updateSlide])

  return (
    <section>
      <div className="container">
        <div className="list">
          {slides.map((slide, index) => (
            <div key={slide.alt} className={`item ${active === index ? 'active' : ''}`}>
              <div className="product-img">
                <img src={slide.image} alt={slide.alt} />
              </div>
              <div className="content">
                <p className="product-tag">{slide.tag}</p>
                <p className={`product-name ${slide.nameFont} font-extrabold uppercase ${slide.nameColor}`}>
                  {slide.name}
                </p>
                <p className="product-description font-desc">{slide.description}</p>
                <button className="btn cadastro">Saiba Mais!</button>
              </div>
            </div>
          ))}
        </div>
        <div className="arrows">
          <button className="arrow-btn" id="prev" onClick={() => updateSlide(-1)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5" />
            </svg>
          </button>
          <button className="arrow-btn" id="next" onClick={() => updateSlide(1)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
            </svg>
          </button>
        </div>
        <div className="indicators">
          <div className="dots">
            {slides.map((slide, index) => (
              <div
                key={slide.alt}
                className={`dot ${active === index ? 'active' : ''}`}
                onClick={() => setActive(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
