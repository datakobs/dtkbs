import React from "react"
import Layout from "../components/layout"

const kontaktPage = () => (
  <Layout>
    <h1>Kontakt</h1>

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

export default kontaktPage
