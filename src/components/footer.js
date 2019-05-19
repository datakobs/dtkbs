import PropTypes from "prop-types"
import React from "react"

import dtkbsbrand from "../images/datakobsbrandnav.png"
import footerpic from "../images/footer.jpg"

const Footer = () => (
  <footer class="text-white">
    <div class="py-3 text-center">
      <img src={footerpic} class="pt-5" />
      <div class="footer1">
        <div class="container">
          <img src={dtkbsbrand} height="35" />
          <div class="row py-3">
            <div class="col-lg-6">
              <a href="/datenschutz" class="px-2">
                Datenschutz
              </a>
              <a href="impressum" class="px-2">
                Impressum
              </a>
              <a href="/kontakt" class="px-2">
                Kontakt
              </a>
            </div>
            <div class="col-lg-6">
              <p align="right">© 2019 – datakobs • Alle Rechte vorbehalten.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
