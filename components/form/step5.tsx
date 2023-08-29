import React, { useState } from "react";

interface Step5Props {
  formData: any;
  setFormData: (data: any) => void;
}

const Step5: React.FC<Step5Props> = ({ formData, setFormData }) => {
  return (
    <section
      className="col-xl-8 col-lg-6 mb-5 mb-lg-5 mb-xl-0 contact_form_box_all type_one"
      style={{ margin: "auto" }}
    >
      <div className="contact_form_box_inner">
        <div className="contact_form_shortcode">
          <div className="heading" style={{ marginBottom: "2rem" }}>
            <h2>
            Comment votre entreprise pense-elle souscrire aux crédits carbone?
            </h2>
          </div>

          <div role="form" className="wpcf7">
            <form action="#" method="post" className="wpcf7-form init">
              <p>
                <label>
                  Identifier les projets de réduction des émissions de gaz à effet de serre auxquels elle souhaite contribuer.
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
                      placeholder="Saisissez votre Identifier les projets de réduction des émissions de gaz ...  "
                    />
                  </span>
                  <br />
                </label>
              </p>
              <p>
                <label>
                Calculer les émissions de gaz à effet de serre générées par ses activités.
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
                      placeholder="Saisissez votre Calculer les ...  "
                    />
                  </span>
                  <br />
                </label>
              </p>

              <p>
                <label>
                Acheter des crédits carbone correspondant à ces émissions non compensées.
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
                      placeholder="Saisissez votre Acheter des crédits carbone ..."
                    />
                  </span>
                  <br />
                </label>
              </p>

              <p>
                <label>
                 Contribuer financièrement aux projets de réduction des émissions ou acheter des crédits carbone sur le marché.
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
                      placeholder="Saisissez votreContribuer financièrement ...  "
                    />
                  </span>
                  <br />
                </label>
              </p>

              <p>
                <label>
                Suivre et vérifier les résultats de la réduction des émissions et la compensation carbone.
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
                      placeholder="Saisissez votre Suivre et vérifier les résultats de la réduction...  "
                    />
                  </span>
                  <br />
                </label>
              </p>
              <p>
                <label>
                Trouver des clients pour acheter les credits carbones 
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
                      placeholder="Saisissez votre Trouver des clients pour acheter...  "
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

export default Step5;
