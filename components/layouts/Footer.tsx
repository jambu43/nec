import React from "react";

function Footer() {
  return (
    <div className="footer_area" id="footer_contents">
      <div className="lines d-flex">
        <div className="hero-line col-4 bg-primaryColor"></div>
        <div className="hero-line col-4 bg-redColor"></div>
        <div className="hero-line col-4 bg-yellowColor"></div>
      </div>
      <div className="footer_widgets_wrap bg_dark_2">
        <div className="pd_top_80"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="footer_widgets about_company light_color">
                <div className="about_company_inner">
                  <div className="footer_logo">
                    <a href="#" target="_blank" rel="nofollow">
                      <img
                        src="logo/logo-white.png"
                        className="img-fluid"
                        alt="logo"
                      />
                    </a>
                    <div className="pd_bottom_30"></div>
                  </div>
                  <div className="content_box">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatibus nam, quidem sint rem labore nesciunt
                      Libero, iusto?
                    </p>
                    <div className="footer_copy_content_right">
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
                        <span className="fa fa-skype"></span>
                        <small>skype</small>
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
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12"></div>
            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12">
              <div className="footer_widgets wid_tit style_one">
                <div className="fo_wid_title">
                  <h2>Liens Rapide</h2>
                </div>
              </div>
              <div className="pd_bottom_25"></div>
              <div className="footer_widgets clearfix navigation_foo light_color style_one">
                <div className="navigation_foo_box">
                  <div className="navigation_foo_inner">
                    <ul className="menu">
                      <li>
                        <a href="#">Actualités</a>
                      </li>
                      <li>
                        <a href="#">Services</a>
                      </li>
                      <li>
                        <a href="#">Evénements</a>
                      </li>
                      <li>
                        <a href="#">Projets</a>
                      </li>
                      <li>
                        <a href="#">Ressources</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12">
            
            </div>
            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12">
              <div className="footer_widgets wid_tit style_one">
                <div className="fo_wid_title">
                  <h2>Essentials</h2>
                </div>
              </div>
              <div className="pd_bottom_25"></div>
              <div className="footer_widgets clearfix navigation_foo light_color style_one">
                <div className="navigation_foo_box">
                  <div className="navigation_foo_inner">
                    <ul className="menu">
                      <li>
                        <a href="#">Careers</a>
                      </li>
                      <li>
                        <a href="#">Infrastructure</a>
                      </li>
                      <li>
                        <a href="#">Client Support</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Terms of Use</a>
                      </li>
                      <li>
                        <a href="#">Sitemap</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
