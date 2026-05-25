import './Hero.css'

function Hero(){
    return(
        <section>
        <div className="container">
        <div className="list">
<div className="item active">
<div className="product-img">
<img src="/img/AULAS.JPG" alt="Shock"/>
</div>
<div className="content">
<p className="product-tag"> Curso</p>
<p className="product-name font-shock font-extrabold uppercase">Shock</p>
<p className="product-description"> O Shock é um curso realizado na nossa Base Missionária.</p>
<button className="btn cadastro">Saiba Mais!</button>
</div>
</div>
<div className="item">
<div className="product-img">
<img src="" alt="Caraguatá"/>
</div>
<div className="content">
<p className="product-tag">Corpus</p>
<p className="product-name">Caraguatá</p>
<p className="product-description"></p>
<button className="btn cadastro"></button>
</div>
</div>
<div className="item">
<div className="product-img">
<img src="/img/Caraguata.JPG" alt="Marmita"/>
</div>
<div className="content">
<p className="product-tag"> Marmita </p>
<p className="product-name"></p>
<p className="product-description"></p>
<button className="btn cadastro"></button></div>
</div>
</div>
<div class="arrows">
<button class="arrow-btn" id="prev">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
</svg>
</button>
<button className="arrow-btn" id="next">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
</svg>
</button>
</div>
<div className="indicators">
<div className="dots">
<div className="dot active"></div>
<div className="dot"></div>
<div className="dot"></div>
</div>
</div>
</div>
        </section>
        
    )
}

export default Hero