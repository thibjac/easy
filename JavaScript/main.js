class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<header id="nav-placeholder">
      <nav class="navbar fixed-top navbar-expand-xl navbar-dark bg-black">
        <div class="container-fluid header-container">
          <div class="site-logo-container">
            <a class="navbar-brand" href="index.html">
              <img
                class="site-logo"
                src="images/EasyCharged_logo_black.png"
                alt="EasyCharged Installatie Laadpalen"
              />
            </a>
          </div>

          <!-- Collapse button -->
          <button
            class="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
            <span></span>
            <span></span>
          </button>

          <!-- Collapsible content -->
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarScroll"
            style="background-color: black"
          >
            <!-- Links -->
            <ul class="navbar-nav ml-auto" style="--bs-scroll-height: 250px">
              <!-- Item -->
              <li class="nav-item my-auto">
                <a
                  class="nav-link nav-link active"
                  href="index.html"
                  aria-current="page"
                  >Home</a
                >
              </li>
              <!-- Item -->

              <!-- Dropdown item -->
              <li class="nav-item my-auto dropdown">
                <a
                  class="nav-link nav-link dropdown-toggle large-hover"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-expanded="false"
                  >Laadpaal thuis</a
                >
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="thuisoplossing.html">Thuisoplossingen</a></li>
                  <li><a class="dropdown-item" href="thuisoplossing.html#voordelen">Voordelen</a></li>
                  <li><a class="dropdown-item" href="fiscale_voordelen_thuis.html">*Fiscale voordelen</a></li>
                  <li><a class="dropdown-item" href="#">*Onze laadpalen</a></li>
                  <li><a class="dropdown-item" href="#">*Offerte aanvragen</a></li>
                </ul>
              </li>
              <!-- Dropdown item -->

              <!-- Dropdown item -->
              <li class="nav-item my-auto dropdown">
                <a
                  class="nav-link nav-link dropdown-toggle large-hover"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-expanded="false"
                  >Laadpaal bedrijf</a
                >
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="bedrijfsoplossing.html">Laadoplossingen</a></li>
                  <li><a class="dropdown-item" href="bedrijfsoplossing.html#voordelen">Voordelen</a></li>
                  <li><a class="dropdown-item" href="fiscale_voordelen_bedrijven.html">*Fiscale voordelen</a></li>
                  <li><a class="dropdown-item" href="#">*Onze laadpalen</a></li>
                  <li><a class="dropdown-item" href="#">*Offerte aanvragen</a></li>
                </ul>
              </li>
              <!-- Dropdown item -->

              <!-- Item -->
              <li class="nav-item my-auto">
                <a class="nav-link nav-link" href="werkwijze.html">Werkwijze</a>
              </li>
              <!-- Item -->

              <!-- Item -->
              <li class="nav-item my-auto dropdown">
                <a
                  class="nav-link nav-link dropdown-toggle large-hover"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-expanded="false"
                  >Nieuws en advies</a
                >
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="nieuws.html">Nieuws & blog</a></li>
                  <li><a class="dropdown-item" href="opties.html">Laadpaal opties</a></li>
                  <li><a class="dropdown-item" href="merken.html">Laadpaal merken</a></li>
                  <li><a class="dropdown-item" href="vergelijken.html">Laadpalen vergelijken</a></li>
                  <li><a class="dropdown-item" href="faq.html">Veelgestelde vragen (FAQ)</a></li>
                </ul>
              </li>
              <!-- Item -->

              <!-- Item -->
              <li class="nav-item my-auto">
                <a class="nav-link nav-link" href="over_ons.html">Over ons</a>
              </li>
              <!-- Item -->

              <!-- Item -->
              <li class="nav-item my-auto dropdown" style="margin-right: 20px">
                <a
                  class="nav-link nav-link dropdown-toggle large-hover"
                  data-bs-toggle="dropdown"
                  href="contact.html"
                  role="button"
                  aria-expanded="false"
                  >Contact</a
                >
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="contact.html">Contact opnemen</a></li>
                  <li><a class="dropdown-item" href="contact.html#vragen">Vragen</a></li>
                  <li><a class="dropdown-item" href="contact.html#gratis_offerte">Gratis offerte</a></li>

                </ul>
              </li>
              <!-- Item -->

              <!-- Item -->
              <li class="nav-item nav-link my-auto">
               <a href="contact.html#gratis_offerte">
                <button class="button-offerte" >GRATIS OFFERTE</button>
               </a>
              </li>
              <!-- Item -->
            </ul>
            <!-- Links -->
          </div>
        </div>
      </nav>
    </header>`;
  }
}

customElements.define("my-header", MyHeader);

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer id="web-footer">
      <div class="footer-container">
        <div class="row text-center text-sm-start p-0 m-0">
          <!-- LOGO -->
          <div class="col-md-12 col-lg-auto flex p-0 mb-4">
            <div class="mx-auto mx-sm-0 mx-md-auto" style="padding-top: 20px">
              <img
                class="footer-logo adaptive-img"
                src="images/EasyCharged_logo_black.png"
                alt="EasyCharged Installatie Laadpalen"
              />
            </div>
          </div>
          <!-- LOGO -->

          <!-- LINKS -->
          <div class="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-2 p-0 m-0">
            <div>
              <!-- Heading LINKS -->
              <div class="footer-heading">Links</div>
              <!-- Heading LINKS -->

              <ul class="footer-ul">
                <li>
                  <a class="footer-link" href="index.html" aria-current="page"
                    >Home</a
                  >
                </li>

                <li>
                  <a class="footer-link" href="thuisoplossing.html">Laadpaal thuis</a>
                </li>

                <li>
                  <a class="footer-link" href="bedrijfsoplossing.html">Laadpaal bedrijf</a>
                </li>

                <li>
                  <a class="footer-link" href="werkwijze.html">Werkwijze</a>
                </li>

                <li>
                  <a class="footer-link" href="nieuws.html">Nieuws</a>
                </li>

                <li>
                  <a class="footer-link" href="over_ons.html">Over ons</a>
                </li>

                <li>
                  <a class="footer-link" href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <!-- LINKS -->

          <!-- CONTACT -->
          <div class="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-2 p-0 pt-2 p-sm-0 m-0">
            <!-- Heading Contact -->
            <div class="footer-heading">Contact</div>
            <!-- Heading Contact -->

            <ul class="footer-ul">
              <li id="footer-address">
                  <div class="row d-inline-flex justify-content-start pt-1 m-0">
                    <div class="col-auto p-0 mx-0 my-auto pe-3">
                      <i class="bi bi-geo-alt footer-icon"></i>
                    </div>
                    <div class="col-auto text-left my-auto p-0 m-0">
                      <span class="footer-text"
                        >Kiezelstraat 4
                        <br />
                        3350 Linter</span
                      >
                    </div>
                </div>
              </li>

              <li id="footer-email">
                <p class="footer-text py-1"><i class="bi bi-envelope footer-icon pe-3"></i>info@easycharged.eu</p>
              </li>

              <li id="footer-phone">
                <p class="footer-text py-1"><i class="bi bi-telephone footer-icon pe-3"></i>+32470 63 19 23</p>
              </li>
            </ul>

            <!-- Item (button) -->
            <a href="contact.html#gratis_offerte">
            <button class="button-offerte mt-2 mb-0 my-sm-4" href="contact.html#gratis_offerte">GRATIS OFFERTE</button>
            </a>
            <!-- Item (button) -->

          </div>
          <!-- CONTACT -->

          <!-- FOLLOW US -->
          <div class="col-12 col-sm-6 col-md-3 col-lg-5 col-xl-2 m-0 mt-4 p-0 m-0">
            <!-- Heading Volg ons -->
            <div class="footer-heading">Volg ons</div>
            <!-- Heading Volg ons -->

            <ul class="footer-ul">
              <div class="row d-inline-flex justify-content-start p-0 m-0">
                <div class="col-auto socials-icon">
                  <a href=""><i class="bi bi-linkedin socials-icon"></i></a>
                </div>
                <div class="col-auto socials-icon">
                  <a href=""><i class="bi bi-facebook socials-icon"></i></a>
                </div>
                <div class="col-auto socials-icon">
                  <a href=""><i class="bi bi-instagram socials-icon"></i></a>
                </div>
              </div>
            </ul>
          </div>
          <!-- FOLLOW US -->

        </div>
      </div>
      <hr />
      <div class="footer-bottom">
        <div class="container">
          <div class="copyrights pe-4 ps-4 pb-4">
            © Copyright EasyCharged Laadpalen Installatie 2023. All Rights
            Reserved.
          </div>
        </div>
      </div>
    </footer>`;
  }
}

customElements.define("my-footer", MyFooter);
