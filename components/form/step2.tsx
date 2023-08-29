import React, { useState } from "react";

interface Step2Props {
  formData: any;
  setFormData: (data: any) => void;
}

const Step2: React.FC<Step2Props> = ({ formData, setFormData }) => {
  return (

      <section
        className="col-xl-8 col-lg-6 mb-5 mb-lg-5 mb-xl-0 contact_form_box_all type_one"
        style={{ margin: "auto" }}
      >
        <div className="contact_form_box_inner">
          <div className="contact_form_shortcode">
            <div className="heading" style={{ marginBottom: "2rem" }}>
              <h2>Qui êtes vous?</h2>
            </div>

            <div role="form" className="wpcf7">
              <form action="#" method="post" className="wpcf7-form init">
                <p>
                  <label>
                    Raison social
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
                        placeholder="Saisissez votre Raison social  "
                      />
                    </span>
                    <br />
                  </label>
                </p>
                <p>
                  <label>
                    Adresse du siege
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
                        placeholder="Saisissez votre Adresse du siege  "
                      />
                    </span>
                    <br />
                  </label>
                </p>
                <p>
                  <label>
                    Numéro RCCM
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
                        placeholder="Saisissez votre Numéro RCCM  "
                      />
                    </span>
                    <br />
                  </label>
                </p>
                <p>
                  <label>
                    Numéro d'identification fiscale
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
                        placeholder="Saisissez votre Numéro d'identification fiscale  "
                      />
                    </span>
                    <br />
                  </label>
                </p>
                <p>
                  <label>
                    Numéro d'affiliation à la caisse de securité sociale
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
                        placeholder="Saisissez votre Numéro d'affiliation à la caisse de securité sociale  "
                      />
                    </span>
                    <br />
                  </label>
                </p>
                <p>
                  <label>
                    attestation d'affiliation à la Caisse Nationale de sécurité
                    Sociale
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
                        placeholder="Saisissez votre attestation d'affiliation à la Caisse Nationale de sécurité Sociale   "
                      />
                    </span>
                    <br />
                  </label>
                </p>
                <p>
                  <label>
                    Affiliation employeur CNSS
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
                        placeholder="Saisissez votre Affiliation employeur CNSS  "
                      />
                    </span>
                    <br />
                  </label>
                </p>
                <p>
                  <label>
                    Numéro impots
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
                        placeholder="Saisissez votre Numéro impots  "
                      />
                    </span>
                    <br />
                  </label>
                </p>
                <p>
                  <label>
                    Attestation fiscale
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
                        placeholder="Saisissez votre Attestation fiscale   "
                      />
                    </span>
                    <br />
                  </label>
                </p>
                <p>
                  <label>
                    Organisation paysanne
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
                        placeholder="Saisissez votre Organisation paysanne"
                      />
                    </span>
                    <br />
                  </label>
                </p>
                <p>
                  <label>
                    ONG
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
                        placeholder="Saisissez votre ONG  "
                      />
                    </span>
                    <br />
                  </label>
                </p>
                <p>
                  <label>
                    communauté locale
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
                        placeholder="Saisissez votre communauté locale  "
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

export default Step2;
