import React, { useState } from 'react';

interface Step3Props {
  formData: any;
  setFormData: (data: any) => void;
}


const Step3: React.FC<Step3Props> = ({ formData, setFormData }) => {


  return (
    <section
    className="col-xl-8 col-lg-6 mb-5 mb-lg-5 mb-xl-0 contact_form_box_all type_one"
    style={{ margin: "auto" }}
  >
    <div className="contact_form_box_inner">
      <div className="contact_form_shortcode">
        <div className="heading" style={{ marginBottom: "2rem" }}>
          <h2>Quel type  d'entreprise êtes-vous ? </h2>
        </div>

        <div role="form" className="wpcf7">
          <form action="#" method="post" className="wpcf7-form init">
            <p>
              <label>
                entreprise industrielle 
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
                    placeholder="Saisissez votre entreprise industrielle   "
                  />
                </span>
                <br />
              </label>
            </p>
            <p>
              <label>
                entreprise de production d'énergie 
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
                    placeholder="Saisissez votre entreprise de production d'énergie   "
                  />
                </span>
                <br />
              </label>
            </p>
            <p>
              <label>
              entreprises de transport 
                <br />
                <span className="wpcf7-form-control-wrap your-name">
                  <select name="" id="" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required">
                    <option value="">Compagnie aérienne </option>
                    <option value="">Entreprise de transport maritime</option>
                    <option value="">Transport routier </option>
                    <option value="">Entreprise de logistique </option>
                  </select>
                </span>
                <br />
              </label>
            </p>
            <p>
              <label>
              entreprise agricole 
                <br />
                <span className="wpcf7-form-control-wrap your-name">
                  <select name="" id="" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required">
                    <option value="">Exploitation agricole</option>
                    <option value="">Entreprise agroalimentaire</option>
                  </select>
                </span>
                <br />
              </label>
            </p>
            <p>
              <label>
                entreprise de forestière
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
                    placeholder="Saisissez votre entreprise de forestière  "
                  />
                </span>
                <br />
              </label>
            </p>
            <p>
              <label>
                entreprise de conservation
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
                    placeholder="Saisissez votre entreprise de conservation  "
                  />
                </span>
                <br />
              </label>
            </p>
            <p>
              <label>
              entreprise miniere
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
                    placeholder="Saisissez votre entreprise miniere  "
                  />
                </span>
                <br />
              </label>
            </p>
            <p>
              <label>
                entreprise petroliere
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
                    placeholder="Saisissez votre entreprise petroliere  "
                  />
                </span>
                <br />
              </label>
            </p>
            <p>
              <label>
                Entreprise financiere
                <br />
                <span className="wpcf7-form-control-wrap your-name">
                <select name="" id="" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required">
                    <option value="">Assurance</option>
                    <option value="">Banque</option>
                    <option value="">Fond d'investissement</option>
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

export default Step3;
