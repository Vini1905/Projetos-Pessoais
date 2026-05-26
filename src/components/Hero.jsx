import { useState, useEffect } from 'react';
import './Hero.css'

function Hero(){
    const [active, setActive]= useState(0);
    const total =3;

    const updateSlide= (direction)=>{
        if (direction>0){
            setActive((prev)=> (prev+1 ===total? 0: prev +1));
        } else if(direction<0){
            setActive((prev)=> (prev-1<0? total-1: prev - 1));
        }
    };
    useEffect(()=>{
        const timer = setInterval(()=>{
            updateSlide(1);
        }, 5000);
        return()=>clearInterval(timer);
    },[active]);

    return(
        <section>
        <div className="container">
        <div className="list">
<div className={`item ${active===0 ?  'active': ''}`}>
<div className="product-img">
<img src="/img/AULAS.JPG" alt="Shock"/>
</div>
<div className="content">
<p className="product-tag"> Curso</p>
<p className="product-name font-shock font-bold uppercase text-[#F2A007] ">Shock</p>
<p className="product-description font-desc"> O Shock é um curso realizado na nossa Base Missionária.</p>
<button className="btn cadastro">Saiba Mais!</button>
</div>
</div>
<div className={`item ${active===1 ?  'active': ''}`}>
<div className="product-img">
<img src="/img/Caraguata.JPG" alt="Caraguatá"/>
</div>
<div className="content">
<p className="product-tag">Corpus</p>
<p className="product-name font-marmita font-extrabold uppercase text-[#00F7FF]">Caraguatá</p>
<p className="product-description font-desc">Nossa Igreja em Mairiporã, onde realizamos ações sociais.</p>
<button className="btn cadastro">Saiba Mais!</button>
</div>
</div>
<div className={`item ${active === 2 ?  'active' : ''}`}>
    <div className="product-img">
<img src="/img/Marmita.jpg" alt="Marmita"/>
</div>
<div className="content">
<p className="product-tag"> Entrega de</p>
<p className="product-name font-caraguata font-extrabold uppercase text-[#A3E635]"> Marmitas </p>
<p className="product-description font-desc"> O grande foco é no evangelismo.</p>
<button className="btn cadastro">Saiba Mais!</button></div>
</div>
</div>
<div class="arrows">
<button class="arrow-btn" id="prev" onClick={()=> updateSlide(-1)}>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
</svg>
</button>
<button className="arrow-btn" id="next" onClick={()=> updateSlide(1)}>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
</svg>
</button>
</div>
<div className="indicators">
<div className="dots">
<div className={`dot ${active ===0 ? 'active' : ''}`} onClick={()=> setActive(0)}></div>
<div className={`dot ${active ===1 ? 'active' : ''}`} onClick={()=> setActive(1)}></div>
<div className={`dot ${active ===2 ? 'active' : ''}`} onClick={()=> setActive(2)}></div></div>
</div>
</div>
        </section>
        
    );
}

export default Hero