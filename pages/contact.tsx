import Layout from "@/components/layouts/Layout";
import Link from "next/link";
import React from "react";

function contact() {
  return (
    <Layout>
      <div className="page_header_default style_one ">
        <div className="parallax_cover">
          <div className="simpleParallax">
            <img
              src="/images/page-header-default.jpg"
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
                  <div className="title_page">Contact</div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="breadcrumbs creote">
                  <ul className="breadcrumb m-auto">
                    <li>
                      <Link href="/">Accueil</Link>
                    </li>
                    <li className="active">Contact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="content" className="site-content ">
        <section className="contact-section">
          <div className="pd_top_90"></div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 mb-5 mb-lg-5 mb-xl-0">
                <div className="contact_form_box_all type_one">
                  <div className="contact_form_box_inner">
                    <div className="contact_form_shortcode">
                      <form
                        id="contact-form"
                        method="post"
                        action="contact.php"
                        role="form"
                      >
                        <div className="messages"></div>

                        <div className="controls">
                          <div className="row">
                            <div className="col-sm-12">
                              <div className="form-group">
                                <label>
                                  Votre nom complet
                                  <br />
                                </label>
                                <input
                                  type="text"
                                  name="name"
                                  placeholder="Joe Dukoche"
                                  required={true}
                                  data-error="Enter Your Name"
                                />
                                <div className="help-block with-errors"></div>
                              </div>
                            </div>
                            <div className="col-sm-12">
                              <div className="form-group">
                                <label>
                                  Votre adresse email
                                  <br />
                                </label>
                                <input
                                  type="text"
                                  name="email"
                                  required={true}
                                  placeholder="Email *"
                                  data-error="joedukock@domaine.com"
                                />
                                <div className="help-block with-errors"></div>
                              </div>
                            </div>

                            <div className="col-sm-12">
                              <div className="form-group">
                                <label>
                                  Votre Message
                                  <br />
                                </label>
                                <textarea
                                  name="message"
                                  placeholder="Votre message "
                                  rows={3}
                                  required={true}
                                  data-error="Please, leave us a message."
                                ></textarea>
                                <div className="help-block with-errors"></div>
                              </div>
                            </div>

                            <div className="col-sm-12">
                              <div className="form-group mg_top apbtn">
                                <button className="theme_btn" type="submit">
                                  Envoyer
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 pd_left_30">
                <div className="title_all_box style_one dark_color">
                  <div className="title_sections left">
                    <div className="before_title">Contact Info to</div>
                    <h2>Reach Our Expert Team</h2>
                    <p>
                      Send a message through given form, If your enquiry is time
                      sensitive please use below contact details.
                    </p>
                  </div>
                </div>

                <div className="contact_box_content style_one">
                  <div className="contact_box_inner icon_yes">
                    <div className="icon_bx">
                      <span className=" icon-placeholder"></span>
                    </div>
                    <div className="contnet">
                      <h3> Post Address </h3>
                      <p>280 Granite Run Drive Suite #200 Lancaster, PA 1760</p>
                    </div>
                  </div>
                </div>
                <div className="pd_bottom_15"></div>
                <div className="contact_box_content style_one">
                  <div className="contact_box_inner icon_yes">
                    <div className="icon_bx">
                      <span className="icon-phone-call"></span>
                    </div>
                    <div className="contnet">
                      <h3> General Enquires </h3>
                      <p>
                        Phone: +98 060 712 34 &amp; Email: sendmail@qetus.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pd_bottom_15"></div>
                <div className="contact_box_content style_one">
                  <div className="contact_box_inner icon_yes">
                    <div className="icon_bx">
                      <span className="fa fa-clock-o"></span>
                    </div>
                    <div className="contnet">
                      <h3> Operation Hours </h3>
                      <p>Mon-Satday: 09.00 to 07.00 (Sunday: Closed)</p>
                    </div>
                  </div>
                </div>
                <div className="pd_bottom_40"></div>
                <div className="social_media_v_one style_two">
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
          <div className="pd_top_70"></div>
        </section>
      </div>
    </Layout>
  );
}

export default contact;
