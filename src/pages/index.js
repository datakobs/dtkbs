import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Particles from "react-particles-js"

import b2 from "../images/b2.png"
import processovervie from "../images/processovervie.png"
import googleanaylticsLogo from "../images/event_cover_2x_Google-Anayltics-Logo.png"
import cxlcert from "../images/conversionxl-certified-optimizer-nb4bz2h0k0ve1rt8jboan1fuwfa06pz8tdd47rw238.jpg"
import hubspotcert from "../images/hubspot-inbound-certified.png"
import pic3 from "../images/3.png"
import knowledgepic from "../images/knowledgestack.png"
import dtkbsstack from "../images/dtkbsstack.png"
import techstack from "../images/techstack.png"
import footerpic from "../images/footer.jpg"

const IndexPage = () => (
  <Layout>
    <Particles
      width="100%"
      height="70vh"
      params={{
        particles: {
          number: {
            value: 160,
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
            value: 1,
            random: true,
            anim: {
              enable: true,
              speed: 1.038961038961039,
              opacity_min: 0,
              sync: false,
            },
          },
          size: {
            value: 1.5,
            random: true,
            anim: {
              enable: false,
              speed: 4,
              size_min: 0.3,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 600,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: false,
              mode: "bubble",
            },
            onclick: {
              enable: false,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 250,
              size: 0,
              duration: 2,
              opacity: 0,
              speed: 3,
            },
            repulse: {
              distance: 400,
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
      }}
      style={{
        backgroundColor: "",
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
    />

    <Particles
      width="100%"
      height="70vh"
      params={{
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
            distance: 145,
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
          detect_on: "windows",
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: false,
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
      }}
      style={{
        backgroundColor: "",
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
    />
    <div className="header1 text-white pt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 pt-5 mt-5">
            <div className="container">
              <h1 className="display-5 pt-5">
                Powered by Data.
                <br />
                Driven by People.
              </h1>
              <p className="lead">
                datakobs ist ihr Wachstumspartner im Digitalen
              </p>
              <a className="btn btn-primary btn-lg" href="#" role="button">
                Mehr Erfahren
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={b2} height="400" className="mt-5 pt-5" />
          </div>
        </div>
      </div>
    </div>

    <section className="about py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src={processovervie} alt="" />
          </div>
          <div className="col-lg-6">
            <h2 className="display-3 pb-2">Über uns</h2>
            <p className="display-5 pb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quos
              aperiam dicta sapiente odio dolore beatae voluptas eligendi enim
              natus voluptatibus voluptate dolores commodi adipisci, officiis
              alias perferendis
            </p>
            <ul className="fa-ul">
              <li>
                <span className="fa-li">
                  <i className="fas fa-chart-pie" />
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-chart-bar" />
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-chart-line" />
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-cogs" />
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="pt-5 text-white" id="Vorteile">
      <div id="particles-js" />
      <div className="grad">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-4">
              <div className="mt-5 text-center">
                <i className="fas fa-palette fa-5x" />

                <h2 className="my-4">Design Intelligence</h2>
              </div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
              possimus corporis omnis, nisi commodi ratione, fuga, voluptatem
              necessitatibus quos sint doloribus minima repudiandae in quibusdam
              vitae tempora perferendis id nihil! Nisi, ea. Hic expedita
              asperiores cupiditate inventore error magni nesciunt dolore
              necessitatibus fuga quidem, quaerat rem fugit neque enim quibusdam
              porro voluptates optio officia eum eius, voluptatibus animi
              quisquam molestiae. Aspernatur accusamus tempore asperiores
              ratione provident, iusto deleniti maiores repellat, rem voluptate
              qui odit vitae nobis voluptas dolor in harum hic, impedit
              quisquam. Dolore laboriosam reiciendis ex! Alias accusantium optio
              nihil voluptates, nam cupiditate numquam eligendi, culpa, quia
              tenetur laborum.
            </div>
            <div className="col-lg-4">
              <div className="mt-5 text-center">
                <i className="fas fa-user fa-5x" />

                <h2 className="my-4">Customer Intelligence</h2>
              </div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
              possimus corporis omnis, nisi commodi ratione, fuga, voluptatem
              necessitatibus quos sint doloribus minima repudiandae in quibusdam
              vitae tempora perferendis id nihil! Nisi, ea. Hic expedita
              asperiores cupiditate inventore error magni nesciunt dolore
              necessitatibus fuga quidem, quaerat rem fugit neque enim quibusdam
              porro voluptates optio officia eum eius, voluptatibus animi
              quisquam molestiae. Aspernatur accusamus tempore asperiores
              ratione provident, iusto deleniti maiores repellat, rem voluptate
              qui odit vitae nobis voluptas dolor in harum hic, impedit
              quisquam. Dolore laboriosam reiciendis ex! Alias accusantium optio
              nihil voluptates, nam cupiditate numquam eligendi, culpa, quia
              tenetur laborum.
            </div>
            <div className="col-lg-4">
              <div className="mt-5 text-center">
                <i className="fas fa-chart-line fa-5x" />

                <h2 className="my-4">Data Intelligence</h2>
              </div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
              possimus corporis omnis, nisi commodi ratione, fuga, voluptatem
              necessitatibus quos sint doloribus minima repudiandae in quibusdam
              vitae tempora perferendis id nihil! Nisi, ea. Hic expedita
              asperiores cupiditate inventore error magni nesciunt dolore
              necessitatibus fuga quidem, quaerat rem fugit neque enim quibusdam
              porro voluptates optio officia eum eius, voluptatibus animi
              quisquam molestiae. Aspernatur accusamus tempore asperiores
              ratione provident, iusto deleniti maiores repellat, rem voluptate
              qui odit vitae nobis voluptas dolor in harum hic, impedit
              quisquam. Dolore laboriosam reiciendis ex! Alias accusantium optio
              nihil voluptates, nam cupiditate numquam eligendi, culpa, quia
              tenetur laborum.
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="prozess processback">
      <div className="container text-center process1" />
    </section>

    <section className="certificate py-5">
      <div className="container py-5">
        <div className="row py-5">
          <div className="col-lg-4 text-center">
            <img src={googleanaylticsLogo} width="300" alt="" />
          </div>
          <div className="col-lg-4 text-center">
            <img src={cxlcert} width="110" alt="" />
          </div>
          <div className="col-lg-4 text-center">
            <img src={hubspotcert} width="200" alt="" />
          </div>
        </div>
      </div>
    </section>

    <section className="contrast py-5">
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-4">
            <h1 className="display-5">Immer auf dem aktuellsten Stand</h1>
          </div>
          <div className="col-lg-8">
            <table className="table table-dark">
              <thead>
                <tr>
                  <th className="text-center" scope="col">
                    Früher
                  </th>
                  <th className="text-center" scope="col">
                    Heute
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <i className="fas fa-times" /> Oberflächliche Messungen der
                    Kundenströme
                  </td>
                  <td>
                    <i className="fas fa-check" /> Exakte Messungen jeder
                    einzelnen Interaktion mit deinen Kunden
                  </td>
                </tr>
                <tr>
                  <td>
                    <i className="fas fa-times" /> Sie müssen sich auf
                    Kundenmeinungen verlassen
                  </td>
                  <td>
                    <i className="fas fa-check" /> Finden Sie die wahren
                    Motivationen Ihrer Kunden heraus und wie damit arbeiten
                    können
                  </td>
                </tr>
                <tr>
                  <td>
                    <i className="fas fa-times" /> Kunden sagen Ihnen was sie
                    hören wollen
                  </td>
                  <td>
                    <i className="fas fa-check" /> Finden sie heraus, was der
                    Kunde ihnen nicht sagt
                  </td>
                </tr>
                <tr>
                  <td>
                    <i className="fas fa-times" /> Sie sind abhängig von den
                    Daten anderer
                  </td>
                  <td>
                    <i className="fas fa-check" /> Bauen Sie ihr eigenes
                    Datenasset auf
                  </td>
                </tr>
                <tr>
                  <td>
                    <i className="fas fa-times" /> Positionierung und
                    Orientierung am Markt / unterscheidet sich nicht viel von
                    anderen
                  </td>
                  <td>
                    <i className="fas fa-check" /> Positionierung und
                    Orientierung am Kunden / einzigartig und unkopierbar
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <section className="iq-project-info position-relative iq-rmt-40 py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <div className="section-title">
              <p className=" text-uppercase iq-fw-3 iq-ls-3">
                Dienstleistungen
              </p>
              <h2 className="title  iq-fw-8">Das leisten wir für dich</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="media iq-project-info">
              <div className="media-body mr-3 text-right float-left">
                <h5 className="mt-0 mb-1 iq-fw-8">
                  <a href="service-detail.html">Conversion Optimierung</a>
                </h5>
                <p className="mb-0">
                  Re-Designs können ein Risiko darstellen, weswegen ein
                  datenbasierter Ansatz Pflicht ist. Wo andere noch diskutieren,
                  was auf die Seite kommen soll, wissen Sie was ihr Kunde will
                  und setzen dies erfolgreich um.
                </p>
              </div>
              <div className="service-shap align-self-center float-right">
                <i className="ion-ios-cloud-download-outline" />
              </div>
            </div>
            <div className="media iq-project-info">
              <div className="media-body mr-3 text-right float-left">
                <h5 className="mt-0 mb-1 iq-fw-8">
                  <a href="service-detail.html">Strategie & Roadmapping</a>
                </h5>
                <p className="mb-0">
                  Re-Designs können ein Risiko darstellen, weswegen ein
                  datenbasierter Ansatz Pflicht ist. Wo andere noch diskutieren,
                  was auf die Seite kommen soll, wissen Sie was ihr Kunde will
                  und setzen dies erfolgreich um.
                </p>
              </div>
              <div className="service-shap align-self-center float-right">
                <i className="ion-ios-pie-outline" />
              </div>
            </div>
            <div className="media iq-project-info mb-0">
              <div className="media-body mr-3 text-right float-left">
                <h5 className="mt-0 mb-1 iq-fw-8">
                  <a href="service-detail.html">Zielgruppenanalysen</a>
                </h5>
                <p className="mb-0">
                  Re-Designs können ein Risiko darstellen, weswegen ein
                  datenbasierter Ansatz Pflicht ist. Wo andere noch diskutieren,
                  was auf die Seite kommen soll, wissen Sie was ihr Kunde will
                  und setzen dies erfolgreich um.
                </p>
              </div>
              <div className="service-shap align-self-center float-right">
                <i className="ion-ios-world-outline" />
              </div>
            </div>
          </div>
          <div className="col-md-4 align-self-center  feature-images">
            <img src={pic3} className="img-fluid " alt="image" />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="media iq-project-info">
              <div className="service-shap align-self-center">
                <i className="ion-ios-gear-outline" />
              </div>
              <div className="media-body ml-3">
                <h5 className="mt-0 mb-1 iq-fw-8">
                  <a href="service-detail.html">Webdesign das verkauft</a>
                </h5>
                <p className="mb-0">
                  Re-Designs können ein Risiko darstellen, weswegen ein
                  datenbasierter Ansatz Pflicht ist. Wo andere noch diskutieren,
                  was auf die Seite kommen soll, wissen Sie was ihr Kunde will
                  und setzen dies erfolgreich um.
                </p>
              </div>
            </div>
            <div className="media iq-project-info">
              <div className="service-shap align-self-center">
                <i className="ion-ios-briefcase-outline" />
              </div>
              <div className="media-body ml-3">
                <h5 className="mt-0 mb-1 iq-fw-8">
                  <a href="service-detail.html">Analytics Integration</a>
                </h5>
                <p className="mb-0">
                  Re-Designs können ein Risiko darstellen, weswegen ein
                  datenbasierter Ansatz Pflicht ist. Wo andere noch diskutieren,
                  was auf die Seite kommen soll, wissen Sie was ihr Kunde will
                  und setzen dies erfolgreich um.
                </p>
              </div>
            </div>
            <div className="media iq-project-info mb-0">
              <div className="service-shap align-self-center">
                <i className="ion-ios-gear-outline" />
              </div>
              <div className="media-body ml-3">
                <h5 className="mt-0 mb-1 iq-fw-8">
                  <a href="service-detail.html">Kampagnenplanung</a>
                </h5>
                <p className="mb-0">
                  Re-Designs können ein Risiko darstellen, weswegen ein
                  datenbasierter Ansatz Pflicht ist. Wo andere noch diskutieren,
                  was auf die Seite kommen soll, wissen Sie was ihr Kunde will
                  und setzen dies erfolgreich um.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="technologies py-5">
      <div className="container">
        <h1 className="display-4 text-center pb-4">Alles aus einer Hand</h1>
        <h5 className="text-center pb-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus quas modi vitae! Odit nulla quae ex molestias ad
          corporis veniam voluptatum neque, quidem sint tenetur eveniet cum!
          Repellendus dolorem ea adipisci harum tempora ad ex corrupti quasi
          nulla soluta molestias exercitationem sunt quos beatae, illum eligendi
          recusandae. Nam, mollitia in.
        </h5>
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="col-lg-4">
            <img src={knowledgepic} height="400" alt="" />
          </div>
          <div className="col-lg-4">
            <img src={dtkbsstack} height="400" alt="" />
          </div>
          <div className="col-lg-4">
            <img src={techstack} height="400" alt="" />
          </div>
        </div>
      </div>
    </section>

    <section className="contact py-5">
      <div className="container my-5">
        <h1 className="display-4 my-3">Noch Fragen?</h1>
        <h2 className="display5">Gerne helfen wir Ihnen bei weiteren Fragen</h2>
      </div>

      <div className="container my-5">
        <form>
          <div className="row my-4">
            <div className="col-lg-6">
              <label for="example">Anrede</label>
              <select className="form-control form-control-md">
                <option>Bitte auswählen</option>
                <option>Frau</option>
                <option>Herr</option>
              </select>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label for="exampleInputEmail1">Vorname</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Damit wir dich persönlich ansprechen können"
                />
              </div>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-lg-6">
              <div className="form-group">
                <label for="exampleInputEmail1">Nachname</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Damit wir dich persönlich ansprechen können"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label for="exampleInputEmail1">E-Mail</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Damit wir dir antworten können"
                />
              </div>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-lg-6">
              <div className="form-group">
                <label for="exampleInputEmail1">Unternehmen</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Damit wir noch besser auf dich eingehen können"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label for="exampleInputEmail1">Position im Unternehmen</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Damit wir noch besser auf dich angehen können"
                />
              </div>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-lg-6">
              <div className="form-group">
                <label for="exampleInputEmail1">PLZ</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Damit wir bei Bedarf einen Berater in deiner Nähe selektieren können"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label for="exampleInputEmail1">Ort</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Damit wir bei Bedarf einen Berater in deiner Nähe selektieren können"
                />
              </div>
            </div>
          </div>
          <div className="container row my-4">
            <div className="form-group">
              <label for="exampleFormControlTextarea1">
                Wie können wir dir helfen?
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Schreib uns was dich bewegt und wie wir dir helfen können"
              />
            </div>
          </div>
          <div className="">
            <button type="submit" className="btn btn-primary mb-2">
              Bitte kontaktieren Sie mich
            </button>
          </div>
        </form>
      </div>
    </section>
  </Layout>
)

export default IndexPage
