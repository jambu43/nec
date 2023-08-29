import React, { useState } from "react";

interface Step6Props {
  formData: any;
  setFormData: (data: any) => void;
}

const Step6: React.FC<Step6Props> = ({ formData, setFormData }) => {
  return (
    <section
      className="col-xl-8 col-lg-6 mb-5 mb-lg-5 mb-xl-0 contact_form_box_all type_one"
      style={{ margin: "auto" }}
    >
      <div className="contact_form_box_inner">
        <div className="contact_form_shortcode">
          <div className="heading" style={{ marginBottom: "2rem" }}>
            <h2>
              Quelles sont les conditions que vous avez deja remplies?
            </h2>
          </div>

          <div role="form" className="wpcf7">
            <form action="#" method="post" className="wpcf7-form init">
              <p>
                <label>
                Mesurer et vérifier vos émissions 
                  <br />
                  <span className="wpcf7-form-control-wrap your-name">
                    <select name="" id=""  
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      value={formData.email}
                      className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                      >
                        <option value="">Selectionnez une option</option>
                      <option value="">Oui</option>
                      <option value="">Non</option>
                    </select>
                  </span>
                  <br />
                </label>
              </p>
              <p>
                <label>
                Travailler pour réduire vos émissions 
                  <br />
                  <span className="wpcf7-form-control-wrap your-name">
                    <select name="" id=""  
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      value={formData.email}
                      className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                      >
                        <option value="">Selectionnez une option</option>
                      <option value="">Oui</option>
                      <option value="">Non</option>
                    </select>
                  </span>
                  <br />
                </label>
              </p>
              <p>
                <label>
                Mécanisme de développement propre (MDP) 
                  <br />
                  <span className="wpcf7-form-control-wrap your-name">
                    <select name="" id=""  
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      value={formData.email}
                      className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                      >
                        <option value="">Selectionnez une option</option>
                      <option value="">Oui</option>
                      <option value="">Non</option>
                    </select>
                  </span>
                  <br />
                </label>
              </p>
              <p>
                <label>
                Système d'échange de quotas d'émission (SEQE),
                  <br />
                  <span className="wpcf7-form-control-wrap your-name">
                    <select name="" id=""  
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      value={formData.email}
                      className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                      >
                        <option value="">Selectionnez une option</option>
                      <option value="">Oui</option>
                      <option value="">Non</option>
                    </select>
                  </span>
                  <br />
                </label>
              </p>
              <p>
                <label>
                Participer à un registre 
                  <br />
                  <span className="wpcf7-form-control-wrap your-name">
                    <select name="" id=""  
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      value={formData.email}
                      className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                      >
                        <option value="">Selectionnez une option</option>
                      <option value="">Oui</option>
                      <option value="">Non</option>
                    </select>
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

export default Step6;
