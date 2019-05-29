import PropTypes from "prop-types"
import React from "react"

import dtkbsbrand from "../images/datakobsbrandnav.png"
import footerpic from "../images/footer.jpg"

const Footer = () => (
  <footer class="nk-footer bg-theme-grad">
    <div className="text-center text-white py-5">
      <h2>Noch Fragen?</h2>
      <p>Gerne helfen wir bei weiteren Fragen</p>
      <div className="py-3">
        <a href="" className="btn btn-primary py-3 px-5">
          Kontakt
        </a>
      </div>
    </div>
    <section class="section section-footer section-l tc-light bg-transparent">
      <div class="container">
        <div class="nk-block block-footer mgb-m30">
          <div class="row">
            <div class="col-lg-6 mb-4 mb-lg-0">
              <div class="wgs wgs-text">
                <div class="wgs-body">
                  <a href="index.html" class="wgs-logo">
                    <img
                      src="images/logo-full-white.png"
                      srcset="images/logo-full-white2x.png 2x"
                      alt="logo"
                    />
                  </a>
                  <p>
                    Copyright © 2018 ICO Crypto. <br />
                    ABN: 2018AD947. All rights reserved.{" "}
                  </p>
                  <p class="copyright-text">
                    Template by <a href="https://softnio.com/">Softnio</a>.
                    Handcrafted by iO.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-sm-4 mb-4 mb-sm-0">
              <div class="wgs wgs-menu">
                <h6 class="wgs-title">Company</h6>
                <div class="wgs-body">
                  <ul class="wgs-links">
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Meet Our Team</a>
                    </li>
                    <li>
                      <a href="#">Advisors</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Insights</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-sm-4 mb-4 mb-sm-0">
              <div class="wgs wgs-menu">
                <h6 class="wgs-title">Legal</h6>
                <div class="wgs-body">
                  <ul class="wgs-links">
                    <li>
                      <a href="#">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Terms of Sales</a>
                    </li>
                    <li>
                      <a href="#">Whitepaper</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-sm-4 mb-4 mb-sm-0">
              <div class="wgs wgs-menu">
                <h6 class="wgs-title">Quick Links</h6>
                <div class="wgs-body">
                  <ul class="wgs-links">
                    <li>
                      <a href="#">Ecosystems</a>
                    </li>
                    <li>
                      <a href="#">Tokens</a>
                    </li>
                    <li>
                      <a href="#">Roadmaps</a>
                    </li>
                    <li>
                      <a href="#">Faqs</a>
                    </li>
                    <li>
                      <a href="#">Login</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="nk-ovm shape-b" />
  </footer>
)

export default Footer
