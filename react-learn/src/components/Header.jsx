function Header() {
  return (
      <section className="header">
        <nav>
          <a href="home1.html"
            ><img
              className="favicon"
              src="../images/130267-d-letter-download-hq.png"
              alt=""
          /></a>
          <div class="nav-links">
            <ul>
              <li><a href="home.html">HOME</a></li>
              <li><a href="aboutus.html" target="_blank">ABOUT</a></li>
              <li><a href="product.html" target="blank">PRODUCT</a></li>
              <li><a href="category.html" target="blank">CATEGORIES</a></li>
              <li><a href="#service">SERVICES</a></li>
              <li><a href="!#">REVIEWS</a></li>
            </ul>
          </div>
        </nav>

        <div className="text-box">
          <h1>Africa's Largest Online Gadget's Store</h1>
          <p>Best prices on the market!</p>
          <a href="" className="hero-button">View Our Products</a>
        </div>
      </section>

  )
}

export default Header