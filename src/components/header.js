import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Fragment } from "react"

import dtkbsbrand from "../images/datakobsbrandnav.png"
import Layout from "./layout"

import Particles from "react-particles-js"

import navbrand from "../../src/images/datakobsbrandnav.png"

const particlesOptions = {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.1683582663908799,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 144.30708547789706,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 167.83216783216784,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
}

const Header = ({ siteTitle }) => (
  <header
    class="nk-header page-header is-transparent is-sticky is-shrink"
    id="header"
  >
    <div class="header-main">
      <div class="header-container container">
        <div class="header-wrap">
          <div
            class="header-logo logo "
            data-animate="fadeInDown"
            data-delay=".6"
          >
            <a href="index.html" class="logo-link">
              <img
                class="logo-dark"
                src="images/logo.png"
                srcset="images/logo2x.png 2x"
                alt="logo"
              />
              <img
                class="logo-light"
                src={navbrand}
                srcset="images/logo-full-white2x.png 2x"
                alt="logo"
              />
            </a>
          </div>

          <div class="header-nav-toggle">
            <a href="#" class="navbar-toggle" data-menu-toggle="header-menu">
              <div class="toggle-line">
                <span />
              </div>
            </a>
          </div>

          <div
            class="header-navbar "
            data-animate="fadeInDown"
            data-delay=".75"
          >
            <nav class="header-menu globalNav" id="header-menu">
              <ul class="menu">
                <li class="menu-item has-sub">
                  <a class="menu-link nav-link menu-toggle" href="#">
                    Dienstleistungen
                  </a>
                  <ul class="menu-sub menu-drop">
                    <div class="dropdownContent">
                      <div class="linkGroup">
                        <ul class="productsGroupPrimary">
                          <li>
                            <a
                              class="linkContainer item-payments"
                              href="de/payments.html"
                              data-analytics-action="payments"
                              data-analytics-source="nav_dropdown"
                              tabindex="-1"
                            >
                              <svg viewbox="0 0 48 48">
                                <path
                                  fill="#87BBFD"
                                  class="hover-fillLight"
                                  d="M24 48C12.11 48 2.244 39.35.338 28H6.5V9H5.27C9.67 3.515 16.423 0 24 0c13.255 0 24 10.745 24 24S37.255 48 24 48z"
                                />
                                <path
                                  fill="#555ABF"
                                  class="hover-fillDark"
                                  d="M25 21v8H.526A24.082 24.082 0 0 1 0 24 23.908 23.908 0 0 1 6.116 8H31.5c.828 0 1.5.67 1.5 1.5V21h-8zm-10.502-8.995a6.497 6.497 0 1 0 0 12.994 6.497 6.497 0 0 0 0-12.996z"
                                />
                                <path
                                  fill="#FFF"
                                  d="M39.823 39.276a2.44 2.44 0 0 1-1.76.724H16.5a1.5 1.5 0 0 1-1.5-1.5v-18c0-.828.67-1.5 1.5-1.5h27.693a1.51 1.51 0 0 1 1.484 1.256c.21 1.217.323 2.467.323 3.744 0 5.936-2.355 11.32-6.177 15.276zM33.5 23.002a6.497 6.497 0 1 0 0 12.995 6.497 6.497 0 0 0 .002-12.994z"
                                />
                              </svg>
                              <div class="productLinkContent">
                                <h3 class="linkTitle">Payments</h3>
                                <p class="linkSub">
                                  Alle notwendigen Werkzeuge für Ihr
                                  Online-Geschäft, konzipiert für
                                  Entwickler/innen.
                                </p>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a
                              class="linkContainer item-subscriptions"
                              href="de/billing.html"
                              data-analytics-action="billing"
                              data-analytics-source="nav_dropdown"
                              tabindex="-1"
                            >
                              <svg viewbox="0 0 48 48">
                                <path
                                  fill="#74E4A2"
                                  class="hover-fillLight"
                                  d="M24 0c13.255 0 24 10.745 24 24S37.255 48 24 48 0 37.255 0 24 10.745 0 24 0z"
                                />
                                <path
                                  fill="#FFF"
                                  d="M39.558 30.977c-6.23 6.225-16.304 6.194-22.535-.03l13.975-13.962c-6.232-6.224-16.335-6.224-22.567 0-4.043 4.04-5.456 9.712-4.247 14.896l-.654.174a21.89 21.89 0 0 1-1.536-8.61c.284-11.806 10.003-21.35 21.823-21.446 6.15-.05 11.72 2.42 15.744 6.438 6.23 6.226 6.23 16.318 0 22.542z"
                                />
                                <path
                                  fill="#159570"
                                  class="hover-fillDark"
                                  d="M33.653 21.413c1.43 5.336-1.735 10.82-7.068 12.25-5.332 1.43-10.814-1.736-12.242-7.072-1.43-5.334 1.735-10.82 7.068-12.25 5.334-1.43 10.815 1.738 12.244 7.074z"
                                />
                              </svg>
                              <div class="productLinkContent">
                                <h3 class="linkTitle">Subscriptions</h3>
                                <p class="linkSub">
                                  Flexible Logik für wiederkehrende Zahlungen.
                                </p>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a
                              class="linkContainer item-connect"
                              href="de/connect.html"
                              data-analytics-action="connect"
                              data-analytics-source="nav_dropdown"
                              tabindex="-1"
                            >
                              <svg viewbox="0 0 48 48">
                                <path
                                  fill="#68D4F8"
                                  class="hover-fillLight"
                                  d="M48 24c0 13.255-10.745 24-24 24S0 37.255 0 24 10.745 0 24 0c1.363 0 2.698.12 4 .338V15h5v5h14.662c.218 1.302.338 2.637.338 4z"
                                />
                                <path
                                  fill="#FFF"
                                  d="M16.99 29.966L17 17l-5.55-.006a1.02 1.02 0 0 0-.725.3L2.65 25.446a1.55 1.55 0 0 0-.44 1.28c1.22 9.944 9.1 17.825 19.042 19.047.472.058.945-.104 1.28-.44l8.172-8.076c.192-.193.3-.453.3-.725L31 31l-12.985-.01a1.023 1.023 0 0 1-1.024-1.024z"
                                />
                                <path
                                  fill="#217AB7"
                                  class="hover-fillDark"
                                  d="M47.697 20.195L37.194 30.702a1.03 1.03 0 0 1-.726.3h-5.462V18.03c0-.567-.46-1.025-1.025-1.025H16.994V11.52c0-.274.108-.534.3-.726L27.783.3C38 1.916 46.07 9.98 47.698 20.194z"
                                />
                              </svg>
                              <div class="productLinkContent">
                                <h3 class="linkTitle">Connect</h3>
                                <p class="linkSub">
                                  Alles Notwendige, um Zahlungen für Marktplätze
                                  und Plattformen abzuwickeln.
                                </p>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div class="linkGroup">
                        <ul class="productsGroupSecondary">
                          <li>
                            <a
                              class="linkContainer item-sigma"
                              href="de/sigma.html"
                              data-analytics-action="sigma"
                              data-analytics-source="nav_dropdown"
                              tabindex="-1"
                            >
                              <svg viewBox="0 0 48 48">
                                <path
                                  class="hover-fillLight"
                                  d="M24 48c-2.6 0-5-.3-7.2-1.1V35.2H4v2.1c-2.6-4-4-8.6-4-13.3C0 12.6 7.8 3.2 18.4.6V4h14.4V1.6C41.8 5.1 48 13.8 48 24c0 13.3-10.7 24-24 24z"
                                  fill="#beb0f4"
                                />
                                <path
                                  class="hover-fillDark"
                                  d="M45.6 24H32.8v17.6H17.6v-.2 5.8c-6.4-1.8-11.7-6.1-14.9-12 2.1-6.6 8-10.9 14.9-11.2V.8C19.7.3 21.9 0 24 0c3.4 0 6.7.6 9.6 1.9v8c0 6.1 4.5 10.9 10.2 11.7 1 .2 1.8 1.3 1.8 2.4z"
                                  fill="#7356b6"
                                />
                                <path
                                  d="M45.6 24c0 1.1-.8 2.1-1.8 2.2-5.8 1-10.2 5.8-10.2 11.7v5.3c-3 1.4-6.2 2.2-9.6 2.2-2.2 0-4.3-.3-6.4-1V40c0-7 5.8-13 12.5-13.8C31.2 26 32 25.1 32 24h13.6zM4 15.7C6.6 9.8 11.5 5.3 17.6 3.4V8c0 7 5.8 12.8 12.5 13.8 1.1.2 1.9 1.1 1.9 2.2H17.9C12 24 6.7 20.6 4 15.7z"
                                  fill="#FFF"
                                />
                              </svg>
                              <div class="productLinkContent">
                                <h3 class="linkTitle">Sigma</h3>
                                <p class="linkSub">
                                  Eine neue Dimension der Datenanalyse.
                                </p>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a
                              class="linkContainer item-atlas"
                              href="de/atlas.html"
                              data-analytics-action="atlas"
                              data-analytics-source="nav_dropdown"
                              tabindex="-1"
                            >
                              <svg viewbox="0 0 48 48">
                                <path
                                  fill="#FCD669"
                                  class="hover-fillLight"
                                  d="M24 0c13.255 0 24 10.745 24 24S37.255 48 24 48 0 37.255 0 24 10.745 0 24 0z"
                                />
                                <path
                                  fill="#CE7C3A"
                                  class="hover-fillDark"
                                  d="M24.012 1.834c.366.005.73.196.92.575l16.825 33.72c.396.79-.314 1.685-1.175 1.48L24 33.626V1.834h.01z"
                                />
                                <path
                                  fill="#FFF"
                                  d="M24 1.834v31.794l-16.584 3.98A1.043 1.043 0 0 1 6.24 36.13L23.067 2.41c.195-.39.572-.58.947-.576H24z"
                                />
                              </svg>
                              <div class="productLinkContent">
                                <h3 class="linkTitle">Atlas</h3>
                                <p class="linkSub">
                                  Der beste Weg, ein Internet-Unternehmen
                                  aufzubauen.
                                </p>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a
                              class="linkContainer item-radar"
                              href="de/radar.html"
                              data-analytics-action="radar"
                              data-analytics-source="nav_dropdown"
                              tabindex="-1"
                            >
                              <svg viewbox="0 0 48 48">
                                <path
                                  class="hover-fillLight"
                                  fill="#F6A4EB"
                                  d="M41.364 21.886h6.538c.06.697.098 1.4.098 2.114 0 13.255-10.745 24-24 24S0 37.255 0 24 10.745 0 24 0c6.833 0 12.993 2.86 17.364 7.442v14.444z"
                                />
                                <path
                                  fill="#FFF"
                                  d="M37.746 37.4a1.3 1.3 0 0 1 .92-.38c.72 0 1.303.444 1.303 1.163 0 .503-.353.982-.708 1.292-3.484 3.122-8.325 5.53-13.783 5.53-11.75 0-19.486-9.538-19.486-18.83 0-8.72 7.195-16.19 15.25-16.19s11.227 5.54 11.227 5.54L37.747 37.4z"
                                />
                                <path
                                  class="hover-fillDark"
                                  fill="#9251AC"
                                  d="M47.995 24zm0 0c0-.995-.807-1.974-1.802-1.974-1.15 0-1.8.94-1.8 1.83-.09 3.174-1.228 7.127-3.453 10.182-2.355 3.232-6.91 6.956-13.242 6.956-7.625 0-13.213-5.767-13.213-11.925 0-4.3 2.886-7.17 5.828-7.17 1.588 0 2.48.683 2.965 1.312.362.468 1.063.493 1.482.074L40.968 7.032A23.926 23.926 0 0 1 47.995 24z"
                                />
                              </svg>
                              <div class="productLinkContent">
                                <h3 class="linkTitle">Radar</h3>
                                <p class="linkSub">
                                  Bekämpfen Sie Betrug mit Machine Learning.
                                </p>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a
                              class="linkContainer item-issuing"
                              href="de/issuing.html"
                              data-analytics-action="issuing"
                              data-analytics-source="nav_dropdown"
                              tabindex="-1"
                            >
                              <svg viewBox="0 0 48 48">
                                <g fill="none">
                                  <circle
                                    class="hover-fillLight"
                                    fill="#87BBFD"
                                    cx="24"
                                    cy="24"
                                    r="24"
                                  />
                                  <path
                                    fill="#FFF"
                                    d="M38.27 8H20a4 4 0 0 0-4 4v3H4.59a1 1 0 0 0-.93.61 22.5 22.5 0 0 0-1.44 5.27 1 1 0 0 0 1 1.12H16v14a4 4 0 0 0 4 4h18.27a2 2 0 0 0 1.41-.58 22 22 0 0 0 0-30.84A2 2 0 0 0 38.27 8z"
                                  />
                                  <path
                                    class="hover-fillDark"
                                    fill="#555ABF"
                                    d="M46.25 15H16v7h31.91c-.2-2.4-.75-4.76-1.66-7z"
                                  />
                                </g>
                              </svg>
                              <div class="productLinkContent">
                                <h3 class="linkTitle">
                                  Issuing<span class="new-badge">Neu</span>
                                </h3>
                                <p class="linkSub">
                                  Karten erstellen, verteilen und verwalten.
                                </p>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a
                              class="linkContainer item-terminal"
                              href="de/terminal.html"
                              data-analytics-action="terminal"
                              data-analytics-source="nav_dropdown"
                              tabindex="-1"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 48 48"
                              >
                                <path
                                  class="hover-fillLight"
                                  d="M38,8H10L.19,27a24,24,0,0,0,47.62,0Z"
                                  fill="#87bbfd"
                                />
                                <path
                                  d="M10,24V39.48A3,3,0,0,0,11.29,42a22,22,0,0,0,25.42,0A3,3,0,0,0,38,39.48V24Z"
                                  fill="#fff"
                                />
                                <path
                                  class="hover-fillDark"
                                  d="M24,0A24,24,0,0,0,.19,27H47.81A24,24,0,0,0,24,0ZM38,21H10V14a4,4,0,0,1,4-4H34a4,4,0,0,1,4,4Z"
                                  fill="#555abf"
                                />
                              </svg>
                              <div class="productLinkContent">
                                <h3 class="linkTitle">
                                  Terminal <span class="new-badge">Neu</span>
                                </h3>
                                <p class="linkSub">
                                  Die programmierbare Verkaufsstelle.
                                </p>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>

                      <ul class="linkGroup linkList prodsubGroup">
                        <li>
                          <a
                            class="linkContainer item-workswith"
                            href="works-with.html"
                            data-analytics-action="works-with"
                            data-analytics-source="nav_dropdown"
                            tabindex="-1"
                          >
                            <h3 class="linkTitle linkIcon">
                              <svg width="17" height="17">
                                <path
                                  class="hover-fillLight"
                                  fill="#87BBFD"
                                  d="M15.998 12.495a1.03 1.03 0 0 1-.595.908L8.93 16.395a1.018 1.018 0 0 1-.86 0l-6.473-2.992a1.03 1.03 0 0 1-.594-.908V4.51c.006-.2.07-.39.18-.55L8.5 7.338l7.32-3.38c.108.16.172.35.178.55v7.984z"
                                />
                                <path
                                  class="hover-fillDark"
                                  fill="#6772E5"
                                  d="M15.998 12.495a1.03 1.03 0 0 1-.595.908L8.93 16.395a1.026 1.026 0 0 1-.43.095V7.34l7.32-3.38c.11.16.173.35.18.55v7.984z"
                                />
                                <path
                                  class="hover-fillLight"
                                  fill="#87BBFD"
                                  d="M8.5 5C6.567 5 5 4.228 5 3.275v-1.15h.098c.36.768 1.742 1.34 3.402 1.34 1.66.002 3.043-.572 3.402-1.34H12v1.15C12 4.228 10.433 5 8.5 5z"
                                />
                              </svg>
                              Works with Stripe
                            </h3>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </ul>
                </li>
                <li class="menu-item">
                  <a class="menu-link nav-link" href="#header">
                    Unternehmen
                  </a>
                </li>
                <li class="menu-item">
                  <a class="menu-link nav-link" href="#about">
                    Projekte
                  </a>
                </li>
                <li class="menu-item">
                  <a class="menu-link nav-link" href="#features">
                    Prozess
                  </a>
                </li>
              </ul>
              <ul class="menu-btns">
                <li>
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#login-popup"
                    class="btn btn-md btn-auto btn-grad"
                  >
                    <span>Kontakt</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div class="header-banner bg-theme-grad">
      <div class="nk-banner">
        <div class="banner banner-fs banner-single banner-gap-b2">
          <div class="banner-wrap">
            <div class="container">
              <div class="row align-items-center justify-content-center">
                <div class="col-lg-5 order-lg-last">
                  <div
                    class="banner-gfx "
                    data-animate="fadeInUp"
                    data-delay=".9"
                  >
                    <img src="images/header/gfx-a.png" alt="header" />
                  </div>
                </div>
                <div class="col-lg-7 col-sm-10 text-center text-lg-left">
                  <div class="banner-caption cpn tc-light">
                    <div class="cpn-head">
                      <h1 class="title " data-animate="fadeInUp" data-delay="1">
                        World’s First Ecosystem that{" "}
                        <br class="d-none d-md-block" /> Scaling Decentralized
                        Applications
                      </h1>
                    </div>
                    <div class="cpn-text">
                      <p class="" data-animate="fadeInUp" data-delay="1.1">
                        Our revolutionary blockchain service is designed to
                        create your own blockchain ecosystem, secure digital
                        assets and access to funding all over the world.
                      </p>
                    </div>
                    <div class="cpn-action">
                      <div class="cpn-btns ">
                        <a class="btn btn-grad" href="#">
                          Register &amp; Buy Token Now
                        </a>
                      </div>
                      <ul
                        class="cpn-links "
                        data-animate="fadeInUp"
                        data-delay="1.3"
                      >
                        <li>
                          <a class="link" href="#">
                            <em class="link-icon far fa-lightbulb" />
                            How to Buy
                          </a>
                        </li>
                        <li>
                          <a class="link" href="#">
                            <em class="link-icon fas fa-file-alt" />
                            White Paper
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="nk-ovm mask-a shape-a" />

      <Particles
        id="particles-bg"
        className="particles-container"
        params={particlesOptions}
      />

      <div id="particles-bg" class="particles-container particles-bg" />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
