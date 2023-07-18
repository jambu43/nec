import Layout from "@/components/layouts/Layout";
import Link from "next/link";
import React from "react";

function services() {
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
                  <div className="title_page">Nos Services</div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="breadcrumbs creote">
                  <ul className="breadcrumb m-auto">
                    <li>
                      <Link href="/">Accueil</Link>
                    </li>
                    <li className="active">Services</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="content" className="site-content ">
        <section className="service-section">
          <div className="pd_top_90"></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="service_box style_two dark_color">
                  <div className="service_content_two ">
                    <div
                      className="content_inner"
                      style={{
                        backgroundImage:
                          "url(/images/service/service-image-1.png)",
                      }}
                    >
                      <div className="content_inner_in">
                        <div className="icon_image">
                          <img
                            src="/images/010-job-search.png"
                            className="img-fluid"
                            alt="Service Image"
                          />
                        </div>
                        <h2>
                          <a href="#"> Recruitment Process </a>
                        </h2>
                        <p>
                          {" "}
                          These cases are perfectly simple and easy to
                          distinguish.
                        </p>
                        <ul>
                          <li> Reducing Redundancy </li>
                          <li> Uncovering Hidden Resources </li>
                          <li> Increasing Company’s Agility </li>
                        </ul>
                      </div>
                    </div>
                    <div className="ovarlay_link">
                      <a href="#">
                        <i className="icon-right-arrow"></i>
                      </a>
                    </div>
                    <div className="overlay_content">
                      <h2>
                        <a href="#"> Recruitment Process </a>
                      </h2>
                      <p>
                        {" "}
                        These cases are perfectly simple and easy to
                        distinguish.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="service_box style_two dark_color">
                  <div className="service_content_two  active_ser">
                    <div
                      className="content_inner"
                      style={{
                        backgroundImage:
                          "url(/images/service/service-image-2.png)",
                      }}
                    >
                      <div className="content_inner_in">
                        <div className="icon_image">
                          <img
                            src="/images/service-ico-1.png"
                            className="img-fluid"
                            alt="Service Image"
                          />
                        </div>
                        <h2>
                          <a href="#">Employee Relations</a>
                        </h2>
                        <p>
                          Indignation sed dislike men who are beguiled and
                          demoralized.
                        </p>
                        <ul>
                          <li>Improving Communication</li>
                          <li>Employee issue resolution</li>
                          <li>Proper Documentation Process</li>
                        </ul>
                      </div>
                    </div>
                    <div className="ovarlay_link">
                      <a href="#">
                        <i className="icon-right-arrow"></i>
                      </a>
                    </div>
                    <div className="overlay_content">
                      <h2>
                        <a href="#">Employee Relations</a>
                      </h2>
                      <p>
                        Indignation sed dislike men who are beguiled and
                        demoralized.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="service_box style_two dark_color">
                  <div className="service_content_two ">
                    <div
                      className="content_inner"
                      style={{
                        backgroundImage:
                          "url(/images/service/service-image-3.png)",
                      }}
                    >
                      <div className="content_inner_in">
                        <div className="icon_image">
                          <img
                            src="/images/service-ico-2.png"
                            className="img-fluid"
                            alt="Service Image"
                          />
                        </div>
                        <h2>
                          <a href="#">Compliance Audits</a>
                        </h2>
                        <p>
                          Prevents our being able too what get like best every
                          pleasure.
                        </p>
                        <ul>
                          <li>Handling of employment</li>
                          <li>Greater retention rates</li>
                          <li>A fully engaged workforce</li>
                        </ul>
                      </div>
                    </div>
                    <div className="ovarlay_link">
                      <a href="#">
                        <i className="icon-right-arrow"></i>
                      </a>
                    </div>
                    <div className="overlay_content">
                      <h2>
                        <a href="#">Compliance Audits</a>
                      </h2>
                      <p>
                        Prevents our being able too what get like best every
                        pleasure.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pd_bottom_90"></div>
        </section>
      </div>
    </Layout>
  );
}

export default services;
