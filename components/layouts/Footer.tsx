import React from "react";

function Footer() {
  return (
    <>
      <div className="footer_area footer_three bg_dark_3" id="footer_contents">
        <div className="pd_top_70"></div>

        <div className="footer_widgets_wrap">
          <div className="auto-container">
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12 mb-5 mb-lg-5 mb-xl-0">
                <div className="footer_widgets about_company light_color">
                  <div className="about_company_inner">
                    <div className="footer_logo">
                      <a href="/" target="_blank" rel="nofollow">
                        <img src="/logo/logo-white.png" alt="logo" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-2 col-lg-6 col-md-12 col-sm-12 mb-5 mb-lg-5 mb-xl-0">
                <div className="footer_widgets wid_tit style_two">
                  <div className="pd_top_20"></div>

                  <div className="fo_wid_title">
                    <h2>Informations</h2>
                  </div>
                </div>

                <div className="footer_widgets clearfix navigation_foo light_color style_one">
                  <div className="navigation_foo_box">
                    <div className="navigation_foo_inner">
                      <ul className="menu">
                        <li>
                          <a href="#">Agenda</a>
                        </li>
                        <li>
                          <a href="#">Opportunités</a>
                        </li>
                        <li>
                          <a href="#">Documents</a>
                        </li>
                        <li>
                          <a href="#">Projets</a>
                        </li>

                        <li>
                          <a href="#">Contact</a>
                        </li>

                        <li>
                          <a href="#">Privacy policy</a>
                        </li>
                        <li>
                          <a href="#">Terms of use</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-2 col-lg-6 col-md-12 col-sm-12 mb-5 mb-lg-5 mb-xl-0">
                <div className="footer_widgets wid_tit style_two">
                  <div className="pd_top_20"></div>

                  <div className="fo_wid_title">
                    <h2>Présidence</h2>
                  </div>
                </div>

                <div className="footer_widgets clearfix navigation_foo light_color style_one">
                  <div className="navigation_foo_box">
                    <div className="navigation_foo_inner">
                      <ul className="menu">
                        <li>
                          <a
                            href="https://presidence.cd/president/le-president"
                            target="_blank"
                          >
                            Président
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://presidence.cd/president/le-president"
                            target="_blank"
                          >
                            Première dame
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://presidence.cd/president/le-president"
                            target="_blank"
                          >
                            Cabinet du Président
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://presidence.cd/president/le-president"
                            target="_blank"
                          >
                            Anciens présidents
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12">
                <div className="footer_widgets wid_tit style_two">
                  <div className="pd_top_20"></div>

                  <div className="fo_wid_title">
                    <h2>Inscrivez-vous </h2>
                  </div>
                </div>
                <div className="footer_widgets foo_subscribe light_color style_one">
                  <div className="item_subscribe with_text">
                    <p>
                      Inscrivez-vous &amp; Recevez nos offres et mises à jour
                      directement dans votre boîte de réception. directement
                      dans votre boîte de réception.
                    </p>
                    <div className="shortcodes">
                      <form
                        className="mc4wp-form"
                        method="post"
                        data-name="Subscibe"
                      >
                        <div className="mc4wp-form-fields">
                          <input
                            type="email"
                            name="EMAIL"
                            placeholder="Votre adresse email"
                          />
                          <input type="submit" value="S'inscrire" />
                        </div>
                      </form>
                    </div>
                    <p>* Nous ne partageons pas votre adresse e-mail</p>
                  </div>
                </div>
                <div className="social_media_v_one">
                  <ul>
                    <li>
                      <a href="#">
                        <span className="fa fa-facebook"></span>
                        <small>facebook</small>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-twitter"></span>
                        <small>twitter</small>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-linkedin"></span>
                        <small>Linkedin</small>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-instagram"></span>
                        <small>instagram</small>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pd_bottom_40"></div>

        <div className="bg_dark_1 copyright">
          <div className="pd_top_20"></div>

          <div className="auto-container">
            <div className="row">
              <div className="col-lg-6 col-md-12 mb-2 mb-lg-0 mb-xl-0">
                <div className="footer_copy_content color_white">
                  © 2024 NEC All Rights Reserved.
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="nav_link_v_one text-md-end">
                  <ul>
                    <li>
                      <a
                        className="color_white"
                        href="#"
                        target="_blank"
                        rel="nofollow"
                      >
                        Conditions d'utilisation
                      </a>
                    </li>

                    <li>
                      <a
                        className="color_white"
                        href="#"
                        target="_blank"
                        rel="nofollow"
                      >
                        Politique privée
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="pd_bottom_15"></div>
        </div>
      </div>
    </>
  );
}

export default Footer;
