import React, { useState } from "react";

interface Step7Props {
  formData: any;
  setFormData: (data: any) => void;
}

const Step7: React.FC<Step7Props> = ({ formData, setFormData }) => {
  return (
    <section
      className="col-xl-8 col-lg-6 mb-5 mb-lg-5 mb-xl-0 contact_form_box_all type_one"
      style={{ margin: "auto" }}
    >
      <div className="contact_form_box_inner">
        <div className="contact_form_shortcode">
          <div className="heading" style={{ marginBottom: "2rem" }}>
            <h2>Informations complementaires</h2>
          </div>

          <div role="form" className="wpcf7">
            <form action="#" method="post" className="wpcf7-form init">
              <p>
                <label>
                  Superficie
                  <br />
                  <span className="wpcf7-form-control-wrap your-name">
                    <input
                      type="text"
                      name="name"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      size={40}
                      className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="Saisissez votre superficie...  "
                    />
                  </span>
                  <br />
                </label>
              </p>
              <p>
                <label>
                  Chiffre d'affaire
                  <br />
                  <span className="wpcf7-form-control-wrap your-name">
                    <input
                      type="text"
                      name="name"
                      value=""
                      size={40}
                      className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="Saisissez votre chiffre d'affaire"
                    />
                  </span>
                  <br />
                </label>
              </p>
              <p>
                <label>
                  Nombre de travailleurs
                  <br />
                  <span className="wpcf7-form-control-wrap your-name">
                    <input
                      type="text"
                      name="name"
                      value=""
                      size={40}
                      className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="Saisissez votre nombre de travailleurs"
                    />
                  </span>
                  <br />
                </label>
              </p>
              <p>
                <label>
                  Secteurs d’intérêts
                  <br />
                  <span className="wpcf7-form-control-wrap your-name">
                    <input
                      type="text"
                      name="name"
                      value=""
                      size={40}
                      className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="Saisissez votre Secteurs d’intérêts "
                    />
                  </span>
                  <br />
                </label>
              </p>

              <p>
                <label>
                  Responsabilité sociétale
                  <br />
                  <span className="wpcf7-form-control-wrap your-name">
                    <textarea
                      name=""
                      id=""
                      cols={30}
                      rows={10}
                      className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                      placeholder="Saisissez votre Responsabilité sociétale ..."
                    ></textarea>
                  </span>
                  <br />
                </label>
              </p>

              <p>
                <label>
                  Facteurs clés de succès
                  <br />
                  <span className="wpcf7-form-control-wrap your-name">
                    <input
                      type="text"
                      name="name"
                      value=""
                      size={40}
                      className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="Saisissez votre Facteurs clés de succès  "
                    />
                  </span>
                  <br />
                </label>
              </p>

              <p>
                <label>
                  Compétences clés
                  <br />
                  <span className="wpcf7-form-control-wrap your-name">
                    <input
                      type="text"
                      name="name"
                      value=""
                      size={40}
                      className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="Saisissez votre Compétences clés  "
                    />
                  </span>
                  <br />
                </label>
              </p>
              <p>
                <label>
                  Clientèle cible
                  <br />
                  <span className="wpcf7-form-control-wrap your-name">
                    <textarea
                      name=""
                      id=""
                      cols={30}
                      rows={10}
                      className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                      placeholder="Saisissez votre Clientèle cible"
                    ></textarea>
                  </span>
                  <br />
                </label>
              </p>
              <p>
                <label>
                  Autre
                  <br />
                  <span className="wpcf7-form-control-wrap your-name">
                    <textarea
                      name=""
                      id=""
                      cols={30}
                      rows={10}
                      className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                      placeholder="Saisissez votre autre"
                    ></textarea>
                  </span>
                  <br />
                </label>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Step7;
