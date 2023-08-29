// FormComponent.tsx
import Step1 from "@/components/form/step1";
import Step2 from "@/components/form/step2";
import Step3 from "@/components/form/step3";
import Step4 from "@/components/form/step4";
import Step5 from "@/components/form/step5";
import Step6 from "@/components/form/step6";
import Step7 from "@/components/form/step7";
import Layout from "@/components/layouts/Layout";
import React, { useState } from "react";

// Importez les autres étapes similaires

const FormComponent: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    companyAddress: "",
    contactNumber: "",
  });

  const handleNext = () => {
    // Vérification pour s'assurer que les champs obligatoires sont remplis
    // if (currentStep === 1) {
    //   if (!formData.firstName || !formData.firstName) {
    //     alert("Please fill in all required fields");
    //     return;
    //   }
    // }
    // if (currentStep === 2) {
    //   if (!formData.email || !formData.phoneNumber) {
    //     alert("Please fill in all required fields");
    //     return;
    //   }
    // }
    // if (currentStep === 3) {
    //   if (!formData.companyAddress || !formData.contactNumber) {
    //     alert("Please fill in all required fields");
    //     return;
    //   }
    // }

    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <Layout>
      <div className="page_header_default style_one">
        <div className="parallax_cover">
          <div className="simpleParallax">
            <img
              src="https://images.pexels.com/photos/2646237/pexels-photo-2646237.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="bg_image"
              className="cover-parallax"
            />
          </div>
        </div>
        <div className="page_header_content">
          <div className="auto-container">
            <div className="row">
              <div className="col-md-12">
                <div className="banner_title_inner">
                  <div
                    className="title_page"
                    style={{ fontSize: 30, lineHeight: 1.5 }}
                  >
                    FORMULAİRE D'İDENTİFİCATİON DES ENTRİPRİSES DEVANT
                    ACCOMPAGNER SEM PRESİDENT DE LA REPUBLİQUE A LA COP 28
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-content" style={{ backgroundColor: "#f0ebf8" }}>
        <div className="container">
          <div className="ow default_row">
            <div className="full_width_box">
              <div className="pd_top_80"></div>
              {currentStep === 1 && (
                <Step1 formData={formData} setFormData={setFormData} />
              )}
              {currentStep === 2 && (
                <Step2 formData={formData} setFormData={setFormData} />
              )}
              {currentStep === 3 && (
                <Step3 formData={formData} setFormData={setFormData} />
              )}
              {currentStep === 4 && (
                <Step4 formData={formData} setFormData={setFormData} />
              )}
              {currentStep === 5 && (
                <Step5 formData={formData} setFormData={setFormData} />
              )}
              {currentStep === 6 && (
                <Step6 formData={formData} setFormData={setFormData} />
              )}
              {currentStep === 7 && (
                <Step7 formData={formData} setFormData={setFormData} />
              )}

              {/* Affichez les autres étapes en fonction de currentStep */}
              <div className="col-xl-8 col-lg-6 mb-5 mb-lg-5 mb-xl-0 contact_form_box_all type_one" style={{ margin: "auto", padding: "2rem", display: "flex", justifyContent: "space-between" }}>
                <button
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className="theme-btn one"
                >
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentStep === 7}
                  className="theme-btn one"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FormComponent;
