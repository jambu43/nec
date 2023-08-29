import React, { useState } from "react";

interface Step4Props {
  formData: any;
  setFormData: (data: any) => void;
}

const Step4: React.FC<Step4Props> = ({ formData, setFormData }) => {
  return (
    <section
      className="col-xl-8 col-lg-6 mb-5 mb-lg-5 mb-xl-0 contact_form_box_all type_one"
      style={{ margin: "auto" }}
    >
      <div className="contact_form_box_inner">
        <div className="contact_form_shortcode">
          <div className="heading" style={{ marginBottom: "2rem" }}>
            <h2>
              Pourquoi votre entreprise souhaite-elle souscrire aux crédits
              carbone?
            </h2>
          </div>

          <div role="form" className="wpcf7">
            <form action="#" method="post" className="wpcf7-form init">
              <p>
                <label>
                  Réduire son empreinte carbone et compenser ses émissions de
                  gaz à effet de serre.
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
                      placeholder="Saisissez votre Réduire son empreinte carbone   "
                    />
                  </span>
                  <br />
                </label>
              </p>
              <p>
                <label>
                  Répondre à des exigences réglementaires ou légales en matière
                  de réduction des émissions.
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
                      placeholder="Saisissez votre Répondre à des exigences réglementaires ...  "
                    />
                  </span>
                  <br />
                </label>
              </p>

              <p>
                <label>
                  Améliorer son image et sa réputation en tant qu'entreprise
                  éco-responsable
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
                      placeholder="Saisissez votre Améliorer son image et sa réputation..."
                    />
                  </span>
                  <br />
                </label>
              </p>

              <p>
                <label>
                  Se conformer aux attentes des consommateurs
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
                      placeholder="Saisissez votre Se conformer aux attentes des consommateurs  "
                    />
                  </span>
                  <br />
                </label>
              </p>

              <p>
                <label>
                  se positionner sur la nouvelle economie du climat
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
                      placeholder="Saisissez votre se positionner sur la ...  "
                    />
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

export default Step4;
