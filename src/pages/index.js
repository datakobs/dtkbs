import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "../css/index.css"

import Particles from "react-particles-js"

import "../../style/Ico/css/style2dea.css"
import "../../style/Ico/css/vendor.bundle2dea.css"

import "../../style/Ico/landing/css/style72a0.css"
import "../../style/Ico/landing/css/theme72a0.css"
import "../../style/Ico/landing/css/vendor.bundle72a0.css"

import processoverview from "../images/processovervie.png"
import gfxa from "../images/gfx-a.png"
import gfxb from "../images/gfx-b.png"
import doca from "../images/doc-a.png"

const IndexPage = () => (
  <Layout>
    <section class="section bg-light section-l section-about" id="about">
      <div class="container">
        <div class="nk-block nk-block-about">
          <div class="row gutter-vr-30px align-items-center pdb-l">
            <div class="col-lg-6">
              <div class="nk-block-text">
                <h2 class="title " data-animate="fadeInUp" data-delay=".1">
                  About ICO Crypto
                </h2>
                <p class="" data-animate="fadeInUp" data-delay=".2">
                  <strong>ICO Crypto is #1 best selling ICO Landing</strong>{" "}
                  page, which helps you lunch and introduce your ICO Website. We
                  designed it very carefully to make it more attractive, useful
                  and fit any kind of ICO/Crypto website.{" "}
                </p>
                <p class="" data-animate="fadeInUp" data-delay=".3">
                  ICO Crypto sectetur adipiscing elit, sed do eiusmod tempor
                  incididunt uteop labore et dolore magna aliqua. Ut enim ad
                  minim veniam, nostrud exercit ullamco laboris nisi commodo
                  consequat.
                </p>
                <p class="" data-animate="fadeInUp" data-delay=".4">
                  We create cryptocurrency dipiscing elit, sed do eiusmod tempor
                  incididunt uteop labore et dolore magna aliqua. Ut enim ad
                  minim veniam, nostrud exercit ullamco laboris nisi commodo
                  consequat.
                </p>
              </div>
            </div>
            <div class="col-lg-6">
              <div
                class="nk-block-video "
                data-animate="fadeInUp"
                data-delay=".5"
              >
                <img src={processoverview} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="section-head">
          <h2 class="title title-lg " data-animate="fadeInUp" data-delay=".6">
            Key features of ICO Crypto
          </h2>
        </div>
        <div class="nk-block nk-block-features mgb-m30">
          <div class="row">
            <div class="col-lg-4">
              <div class="feature " data-animate="fadeInUp" data-delay=".7">
                <div class="feature-icon dot">
                  <em class="icon ikon ikon-paricle-alt" />
                </div>
                <div class="feature-text">
                  <h5 class="title title-sm">Create a secure decentralize</h5>
                  <p>
                    Tempore, cum soluta nobis est eligendi optiocum que nihil
                    maxime placeat facere possimus.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="feature " data-animate="fadeInUp" data-delay=".8">
                <div class="feature-icon dot">
                  <em class="icon ikon ikon-donught" />
                </div>
                <div class="feature-text">
                  <h5 class="title title-sm">
                    Solving small business problems
                  </h5>
                  <p>
                    Placeat facere possimus, omnis voluptas assum enda est,
                    omnis dolor repellendus.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="feature " data-animate="fadeInUp" data-delay=".9">
                <div class="feature-icon dot">
                  <em class="icon ikon ikon-document" />
                </div>
                <div class="feature-text">
                  <h5 class="title title-sm">Personal data must be isolated</h5>
                  <p>
                    Nam libero tempore, cum soluta nobis est optio cumque nihil
                    impedit quo minus id quod.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-l section-features bg-white" id="features">
      <div class="container">
        <div class="nk-block nk-block-features-2">
          <div class="row align-items-center flex-row-reverse">
            <div class="col-lg-5">
              <div class="gfx py-4 " data-animate="fadeInUp" data-delay=".1">
                <img src={gfxb} alt="gfx" />
              </div>
            </div>
            <div class="col-lg-7">
              <div class="section-head">
                <h2 class="title " data-animate="fadeInUp" data-delay=".2">
                  Why Choose ICO Crypto?
                </h2>
                <p class="" data-animate="fadeInUp" data-delay=".3">
                  We believe in a new world, which helps you lunch and introduce
                  your ICO Website. We designed it very carefully to make it
                  more attractive, useful and fit any kind of ICO/Crypto
                  website.{" "}
                </p>
              </div>
              <div class="features-list mr-4 mgb-m30">
                <div
                  class="feature feature-2 "
                  data-animate="fadeInUp"
                  data-delay=".4"
                >
                  <div class="feature-icon dot">
                    <em class="icon ikon ikon-shiled-alt" />
                  </div>
                  <div class="feature-text">
                    <h5 class="title title-sm">Secured User Data</h5>
                    <p>
                      We protect user data and emo enim ipsam voluptatem quia
                      voluptas sitaut odit aut fugit, sed quia conseq ur magni
                      dolores aspernatur.
                    </p>
                  </div>
                </div>
                <div
                  class="feature feature-2 "
                  data-animate="fadeInUp"
                  data-delay=".5"
                >
                  <div class="feature-icon dot">
                    <em class="icon ikon ikon-user" />
                  </div>
                  <div class="feature-text">
                    <h5 class="title title-sm">Most Credibility</h5>
                    <p>
                      Most authentically sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua cillum dolore eu fugiat
                      ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
                <div
                  class="feature feature-2 "
                  data-animate="fadeInUp"
                  data-delay=".6"
                >
                  <div class="feature-icon dot">
                    <em class="icon ikon ikon-data-server" />
                  </div>
                  <div class="feature-text">
                    <h5 class="title title-sm">Big Data Insights</h5>
                    <p>
                      You can trade &amp; invest toekn oluta nobis est eligendi
                      optio cumque nihil impedit quo minus id quod maxime
                      placeat magni dolores.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="section section-pad section-bg" id="roadmap">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="section-head-s6">
              <h6 class="heading-sm-s2" data-animate="fadeInUp" data-delay=".1">
                TIMELINE
              </h6>
              <h2
                class="section-title-s6 "
                data-animate="fadeInUp"
                data-delay=".3"
              >
                Road Map
              </h2>
              <p class="" data-animate="fadeInUp" data-delay=".3">
                Our team working hardly to make archive lorem ipsum dolor sit
                amet, consectetur amet, consectetur adipiscing elit.
              </p>
            </div>
            <div class="gaps size-1x" />
            <div class="gaps size-2x d-none d-md-block" />
          </div>
        </div>
        <div
          class="timeline-row timeline-row-odd timeline-row-done"
          data-animate="fadeInUp"
          data-delay=".4"
        >
          <div class="row no-gutters text-left text-lg-center justify-content-center">
            <div class="col-lg">
              <div class="timeline-item timeline-done">
                <span class="timeline-date">2017 Q1</span>
                <h6 class="timeline-title">Concept</h6>
                <ul class="timeline-info">
                  <li>Concept Generation</li>
                  <li>Team Assemble</li>
                </ul>
              </div>
            </div>
            <div class="col-lg">
              <div class="timeline-item timeline-done">
                <span class="timeline-date">2017 Q2</span>
                <h6 class="timeline-title">Research</h6>
                <ul class="timeline-info">
                  <li>Proving the concept can work</li>
                  <li>Strategic Plan</li>
                  <li>White paper conpletion</li>
                </ul>
              </div>
            </div>
            <div class="col-lg">
              <div class="timeline-item timeline-done">
                <span class="timeline-date">2018 Q1</span>
                <h6 class="timeline-title">Design</h6>
                <ul class="timeline-info">
                  <li>Platform design and technical demonstration</li>
                  <li>Building the MVP</li>
                </ul>
              </div>
            </div>
            <div class="col-lg">
              <div class="timeline-item timeline-done">
                <span class="timeline-date">2018 Q2</span>
                <h6 class="timeline-title">Pre-Sale</h6>
                <ul class="timeline-info">
                  <li>Public financing &amp; Seed funding raised</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          class="timeline-row timeline-row-even"
          data-animate="fadeInUp"
          data-delay=".4"
        >
          <div class="row no-gutters text-left text-lg-center justify-content-center flex-row-reverse">
            <div class="col-lg">
              <div class="timeline-item timeline-current">
                <span class="timeline-date">2018 Q3</span>
                <h6 class="timeline-title">Alpha Test</h6>
                <ul class="timeline-info">
                  <li>In-house testing of functional</li>
                  <li>
                    Prototype published and linked to Ethereum blockchain with
                    real-time scanning
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg">
              <div class="timeline-item">
                <span class="timeline-date">2018 Q4</span>
                <h6 class="timeline-title">Token Sale</h6>
                <ul class="timeline-info">
                  <li>ICO Press Tour</li>
                  <li>Open global sales of ICOblock token</li>
                </ul>
              </div>
            </div>
            <div class="col-lg">
              <div class="timeline-item">
                <span class="timeline-date">2019 Q1</span>
                <h6 class="timeline-title">App Beta Test</h6>
                <ul class="timeline-info">
                  <li>Private closed beta</li>
                  <li>Open beta launched to public and improvement the app</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          class="timeline-row timeline-row-odd timeline-row-last mb--x5"
          data-animate="fadeInUp"
          data-delay=".4"
        >
          <div class="row no-gutters text-left text-lg-center justify-content-center">
            <div class="col-lg">
              <div class="timeline-item">
                <span class="timeline-date">2019 Q2</span>
                <h6 class="timeline-title">Crowdfunding Integration</h6>
                <ul class="timeline-info">
                  <li>Smart contracts support creators</li>
                  <li>Ethereum tokens support</li>
                </ul>
              </div>
            </div>
            <div class="col-lg">
              <div class="timeline-item">
                <span class="timeline-date">2019 Q3</span>
                <h6 class="timeline-title">Community Benefits</h6>
                <ul class="timeline-info">
                  <li>Establishing global user base</li>
                  <li>US start retailer selection</li>
                </ul>
              </div>
            </div>
            <div class="col-lg">
              <div class="timeline-item">
                <span class="timeline-date">2019 Q4</span>
                <h6 class="timeline-title">Hardware things</h6>
                <ul class="timeline-info">
                  <li>Integration of third party controllers</li>
                  <li>Marketplace cooperative module</li>
                </ul>
              </div>
            </div>
            <div class="col-lg">
              <div class="timeline-item">
                <span class="timeline-date">2020 Q1</span>
                <h6 class="timeline-title">More Operational</h6>
                <ul class="timeline-info">
                  <li>Integration with Private Chains, More Coin in Wallet</li>
                  <li>New services offered by members or business</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="gaps size-2x d-lg-none" />
      </div>
    </div>

    <section class="section section-l section-problem bg-light" id="problem">
      <div class="container">
        <div class="section-head text-center wide-auto-sm">
          <h2 class="title " data-animate="fadeInUp" data-delay=".1">
            Problem and Challenge
          </h2>
          <p class="" data-animate="fadeInUp" data-delay=".2">
            We are creating modular software, apps blockchain based accusamus et
            eiusto odio dignimus qui blan ditiis praes entium volup tatun.
          </p>
        </div>
        <div class="nk-block nk-block-problems tc-light">
          <div class="row no-gutters align-items-center">
            <div class="col-lg-6">
              <div
                class="feature boxed boxed-lg bg-theme no-mg split-lg-left split-left "
                data-animate="fadeInUp"
                data-delay=".3"
              >
                <h4 class="title title-md">Automation Development</h4>
                <p>
                  The automation development provides rem aperiam, et quasi
                  architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit
                  molestiae illum qui dolorem eum.
                </p>
                <ul class="list list-dot">
                  <li>
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </li>
                  <li>Wende omnis iste natus error sit volupt.</li>
                  <li>
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat.
                  </li>
                  <li>Exercitation ullamco laboris nisi ut consequ.</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6">
              <div
                class="feature-group bg-theme-alt split-right split-lg "
                data-animate="fadeInUp"
                data-delay=".4"
              >
                <div class="feature boxed bg-white-10">
                  <div class="feature-text">
                    <h4 class="title title-md">High transfer fees</h4>
                    <p>
                      Each year over than 200$ bilion fees rem aperiam, et quasi
                      arch itecto beatae vitae dicta sunt explicabo. Voluptas
                      sit aspernatur aut odit aut fugit molestiae illum qui
                      dolorem eum.
                    </p>
                  </div>
                </div>
                <div class="feature boxed bg-white-2">
                  <div class="feature-text">
                    <h4 class="title title-md">Scaling and Absolete Tool</h4>
                    <p>
                      Scalling is biggest problem that comes rem aperiam, et
                      quasi arch itecto beatae vitae dicta sunt explicabo.
                      Voluptas sit aspern odit aut fugit illum qui dolorem eum.
                    </p>
                  </div>
                </div>
                <div class="feature boxed bg-black-10">
                  <div class="feature-text">
                    <h4 class="title title-md">
                      Secure Networks &amp; Flexibility
                    </h4>
                    <p>
                      Security is most concern for long rem aperiam, et quasi
                      arch itecto beatae vitae aspernatur aut odit aut fugit
                      molestiae illum qui dolorem ullamco laboris nisi volupt
                      natus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="section section-l section-solution bg-light pt-0"
      id="solution"
    >
      <div class="container">
        <div class="section-head text-center wide-auto-sm">
          <h2 class="title " data-animate="fadeInUp" data-delay=".1">
            Solutions
          </h2>
          <p class="" data-animate="fadeInUp" data-delay=".2">
            We are creating modular software, apps blockchain based accusamus et
            eiusto odio dignimus qui blan ditiis praes entium volup tatun.
          </p>
        </div>
        <div class="nk-block nk-block-features-3 mgb-m40 mgt-m20">
          <div class="row justify-content-center">
            <div class="col-lg-6 col-md-10">
              <div
                class="feature feature-3 feature-center "
                data-animate="fadeInUp"
                data-delay=".3"
              >
                <div class="feature-icon">
                  <em class="icon icon-lg ikon ikon-cloud" />
                </div>
                <div class="feature-text">
                  <h4 class="title title-md title-dark">
                    Global Single-Platform:
                  </h4>
                  <p>
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid eos qui
                    ratione
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-10">
              <div
                class="feature feature-3 feature-center "
                data-animate="fadeInUp"
                data-delay=".4"
              >
                <div class="feature-icon">
                  <em class="icon icon-lg ikon ikon-safety" />
                </div>
                <div class="feature-text">
                  <h4 class="title title-md title-dark">Be Safe and Secure:</h4>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia agni dolores eos qui ratione
                    voluptatem sequi
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-10">
              <div
                class="feature feature-3 feature-center "
                data-animate="fadeInUp"
                data-delay=".5"
              >
                <div class="feature-icon">
                  <em class="icon icon-lg ikon ikon-cash" />
                </div>
                <div class="feature-text">
                  <h4 class="title title-md title-dark">
                    Decentralize Payment Systems
                  </h4>
                  <p>
                    Empor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud ullamco laboris fugiat nulla
                    sed do
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-10">
              <div
                class="feature feature-3 feature-center "
                data-animate="fadeInUp"
                data-delay=".6"
              >
                <div class="feature-icon">
                  <em class="icon icon-lg ikon ikon-globe" />
                </div>
                <div class="feature-text">
                  <h4 class="title title-md title-dark">
                    Blockchain Based DevOps Marketplace
                  </h4>
                  <p>
                    Ut enim ad minim veniam, quis nostrud ullamco laboris fugiat
                    nulla sed do eiusmod. Empor incididunt ut labore et dolore
                    magna
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding-0-0 relative clearfix">
      <div class="container">
        <div class="has-shadow agency-sec">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 ">
              <div class="services-block-four v2">
                <div class="inner-box">
                  <div class="icon-img-box">
                    <img
                      src="../../style/Cryptomania/img/features/f1.svg"
                      alt=""
                    />
                  </div>
                  <h2 className="display-4">Früher</h2>
                  <div class="text">
                    Lorem ipsum dolor sit amet, conse ctetur dolor adipisicing
                    elit.
                  </div>

                  <div class="side-feature-list-item v2 ">
                    <i
                      class="fa fa-check check-mark-icon-font"
                      aria-hidden="true"
                    />
                    <div class="foot-c-info">All PHP Apps Supported</div>
                  </div>
                  <div class="side-feature-list-item v2 ">
                    <i
                      class="fa fa-check check-mark-icon-font"
                      aria-hidden="true"
                    />
                    <div class="foot-c-info">Innovative Control Panel</div>
                  </div>
                  <div class="side-feature-list-item v2 ">
                    <i
                      class="fa fa-check check-mark-icon-font"
                      aria-hidden="true"
                    />
                    <div class="foot-c-info">Unlimited Applications</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 ">
              <div class="services-block-four v2">
                <div class="inner-box">
                  <div class="icon-img-box">
                    <img
                      src="../../style/Cryptomania/img/features/f2.svg"
                      alt=""
                    />
                  </div>
                  <h2 className="display-4">Heute</h2>
                  <div class="text">
                    Lorem ipsum dolor sit amet, conse ctetur dolor adipisicing
                    elit.
                  </div>
                  <div class="side-feature-list-item v2 ">
                    <i
                      class="fa fa-check check-mark-icon-font"
                      aria-hidden="true"
                    />
                    <div class="foot-c-info">All PHP Apps Supported</div>
                  </div>
                  <div class="side-feature-list-item v2 ">
                    <i
                      class="fa fa-check check-mark-icon-font"
                      aria-hidden="true"
                    />
                    <div class="foot-c-info">Innovative Control Panel</div>
                  </div>
                  <div class="side-feature-list-item v2 ">
                    <i
                      class="fa fa-check check-mark-icon-font"
                      aria-hidden="true"
                    />
                    <div class="foot-c-info">Unlimited Applications</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section bg-light section-l section-document" id="documents">
      <div class="container">
        <div class="section-head text-center wide-auto">
          <h2 class="title " data-animate="fadeInUp" data-delay=".1">
            ICOX Tokens
          </h2>
          <p class="" data-animate="fadeInUp" data-delay=".2">
            Our Tokens with a realworld use case created on the blockchain
            network.
          </p>
        </div>
        <div class="nk-block nk-block-document">
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <div
                class="card card-lg "
                data-animate="fadeInUp"
                data-delay=".3"
              >
                <div class="row align-items-center">
                  <div class="col-md-6">
                    <div class="nk-block-img px-4 pb-4 pb-md-0">
                      <img src={doca} alt="doc" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="nk-block-text">
                      <h4 class="title title-md">Read the Whitepaper</h4>
                      <p>
                        Our main goal helps rem aperiam, et quasi architecto
                        beatae vitae dicta sunt explicabo. Nemo enim ipsam
                        voluptatem quia voluptas sit aspernatur aut odit aut
                        fugit molestiae illum quim eum.
                      </p>
                      <ul class="btn-grp gutter-30px gutter-vr-20px">
                        <li>
                          <a href="#" class="btn btn-grad">
                            Download WHite paper
                          </a>
                        </li>
                        <li>
                          <a href="#" class="link">
                            <em class="link-icon fas fa-file-alt" /> Download
                            Two Pager
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
    </section>

    <section class="section section-m bg-white">
      <div class="container">
        <div class="nk-block block-partners">
          <h6 class="title title-xs title-light text-center">Zertifikate</h6>
          <ul class="partner-list flex-lg-nowrap">
            <li class="partner-logo">
              <img src="images/partners/a.png" alt="partner" />
            </li>
            <li class="partner-logo">
              <img src="images/partners/b.png" alt="partner" />
            </li>
            <li class="partner-logo">
              <img src="images/partners/c.png" alt="partner" />
            </li>
            <li class="partner-logo">
              <img src="images/partners/d.png" alt="partner" />
            </li>
            <li class="partner-logo">
              <img src="images/partners/e.png" alt="partner" />
            </li>
            <li class="partner-logo">
              <img src="images/partners/f.png" alt="partner" />
            </li>
            <li class="partner-logo">
              <img src="images/partners/g.png" alt="partner" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
