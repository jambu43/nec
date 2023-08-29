import React, { useState } from "react";

interface Step1Props {
  formData: any;
  setFormData: (data: any) => void;
}

const Step1: React.FC<Step1Props> = ({ formData, setFormData }) => {
  return (
    <section
      className="col-xl-8 col-lg-6 mb-5 mb-lg-5 mb-xl-0 contact_form_box_all type_one"
      style={{ margin: "auto" }}
    >
      <div className="contact_form_box_inner">
        <div className="contact_form_shortcode">
          <div className="heading" style={{ marginBottom: "2rem" }}>
            <h2>Contact</h2>
          </div>

          <div role="form" className="wpcf7">
            <form action="#" method="post" className="wpcf7-form init">
              <p>
                <label>
                  NOMS
                  <br />
                  <span className="wpcf7-form-control-wrap your-name">
                    <input
                      type="text"
                      name="name"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      size={40}
                      className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="saisissez votre nom"
                    />
                  </span>
                  <br />
                </label>
              </p>
              <p>
                <label>
                  POST NOM
                  <br />
                  <span className="wpcf7-form-control-wrap your-email">
                    <input
                      type="text"
                      name="middle-name"
                      value={formData.middleName}
                      size={40}
                      className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="saisissez votre Post nom "
                      onChange={(e) =>
                        setFormData({ ...formData, middleName: e.target.value })
                      }
                    />
                  </span>
                  <br />
                </label>
              </p>
              <p>
                <label>
                  PRENOM
                  <br />
                  <span className="wpcf7-form-control-wrap your-email">
                    <input
                      type="text"
                      name="middle-name"
                      value={formData.lastName}
                      size={40}
                      className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="saisissez votre Prénom "
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                    />
                  </span>
                  <br />
                </label>
              </p>
              <p>
                <label>
                  NATİONALİTE
                  <br />
                  <span className="wpcf7-form-control-wrap your-email">
                    <input
                      type="text"
                      name="middle-name"
                      value={formData.email}
                      size={40}
                      className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="saisissez votre Nationalité  "
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </span>
                  <br />
                </label>
              </p>
              <p>
                <label>
                  NUMERO DE TELEPHONE
                  <br />
                  <span className="wpcf7-form-control-wrap your-email">
                    <input
                      type="text"
                      name="middle-name"
                      value={formData.phone}
                      size={40}
                      className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="saisissez votre numéro de téléphone  "
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </span>
                  <br />
                </label>
              </p>
              <p>
                <label>
                  EMAİL
                  <br />
                  <span className="wpcf7-form-control-wrap your-email">
                    <input
                      type="mail"
                      name="middle-name"
                      value={formData.email}
                      size={40}
                      className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="saisissez votre adresse email  "
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </span>
                  <br />
                </label>
              </p>
              <p>
                <label>
                  ADRESSE
                  <br />
                  <span className="wpcf7-form-control-wrap your-email">
                    <input
                      type="text"
                      name="middle-name"
                      value={formData.address}
                      size={40}
                      className="wpcf7-form-control wpcf7-text wpcf7-address wpcf7-validates-as-required wpcf7-validates-as-address"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="saisissez votre adresse  "
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
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

export default Step1;
