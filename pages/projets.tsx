import Layout from "@/components/layouts/Layout";
import Link from "next/link";
import React from "react";

function projets() {
  return (
    <Layout>
      <div className="page_header_default style_one">
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
                  <div className="title_page">Projets</div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="breadcrumbs creote">
                  <ul className="breadcrumb m-auto">
                    <li>
                      <Link href="index.html">Accueil</Link>
                    </li>
                    <li className="active">Projets</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="content" className="site-content ">
        <section className="project_all filt_style_four  filter_enabled">
          <div className="container">
            <div className="pd_top_90"></div>
            <div className="row">
              <div className="col-lg-12">
                <div className="fliter_group" style={{ textAlign: "center" }}>
                  <ul className="project_filter dark clearfix">
                    <li data-filter="*" className="current">
                      View All
                    </li>
                    <li data-filter=".project_category-coaching">Coaching</li>
                    <li data-filter=".project_category-human-resources">
                      Human Resources
                    </li>
                    <li data-filter=".project_category-leadership">
                      Leadership
                    </li>
                    <li data-filter=".project_category-pre-sale">Pre sale</li>
                    <li data-filter=".project_category-recruiting">
                      Recruiting
                    </li>
                    <li data-filter=".project_category-values">Values</li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="project_container  clearfix "
              style={{ position: "relative", height: "1142px" }}
            >
              <div className="row clearfix">
                <div
                  className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-12 col-sm-12 project_category-coaching"
                  style={{ position: "absolute", left: "0px", top: "0px" }}
                >
                  <div className="project_post style_one style_four">
                    <div className="image">
                      <img
                        loading="lazy"
                        width="746"
                        height="497"
                        src="/images/projects/project-2-img.jpg"
                        className="img-fluid"
                        alt="img"
                      />
                      <a href="project-details.html" className="two">
                        <i className="icon-right-arrow"></i>
                      </a>
                    </div>
                    <div className="project_caro_content">
                      <div className="left_side">
                        <p>coaching</p>
                        <h2 className="title_pro">
                          <a href="project-details.html" rel="bookmark">
                            Complex Dismissal for a Small Company
                          </a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-12 col-sm-12 project_category-human-resources"
                  style={{
                    position: "absolute",
                    left: "373.328px",
                    top: "0px",
                  }}
                >
                  <div className="project_post style_one style_four">
                    <div className="image">
                      <img
                        width="742"
                        height="495"
                        src="/images/projects/project-3-img.jpg"
                        className="img-fluid"
                        alt="img"
                      />
                      <a href="project-details.html" className="two">
                        <i className="icon-right-arrow"></i>
                      </a>
                    </div>
                    <div className="project_caro_content">
                      <div className="left_side">
                        <p>human-resources</p>
                        <h2 className="title_pro">
                          <a href="project-details.html" rel="bookmark">
                            Essential Steps to Writing Job Description
                          </a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-12 col-sm-12 project_category-leadership"
                  style={{
                    position: "absolute",
                    left: "746.656px",
                    top: "0px",
                  }}
                >
                  <div className="project_post style_one style_four">
                    <div className="image">
                      <img
                        width="999"
                        height="665"
                        src="/images/projects/project-1-img.jpg"
                        className="img-fluid"
                        alt="img"
                      />
                      <a href="project-details.html" className="two">
                        <i className="icon-right-arrow"></i>
                      </a>
                    </div>
                    <div className="project_caro_content">
                      <div className="left_side">
                        <p>leadership</p>
                        <h2 className="title_pro">
                          <a href="project-details.html" rel="bookmark">
                            Company Values &amp; The Relationship
                          </a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-12 col-sm-12 project_category-pre-sale"
                  style={{ position: "absolute", left: "0px", top: "571px" }}
                >
                  <div className="project_post style_one style_four">
                    <div className="image">
                      <img
                        width="827"
                        height="465"
                        src="/images/projects/project-4-img.jpg"
                        className="img-fluid"
                        alt="img"
                      />
                      <a href="project-details.html" className="two">
                        <i className="icon-right-arrow"></i>
                      </a>
                    </div>
                    <div className="project_caro_content">
                      <div className="left_side">
                        <p>pre-sale</p>
                        <h2 className="title_pro">
                          <a href="project-details.html" rel="bookmark">
                            Time HR Prepares Plastic Contract Manufacturer
                          </a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-12 col-sm-12 project_category-recruiting"
                  style={{
                    position: "absolute",
                    left: "373.328px",
                    top: "571px",
                  }}
                >
                  <div className="project_post style_one style_four">
                    <div className="image">
                      <img
                        width="731"
                        height="488"
                        src="/images/projects/project-6-img.jpg"
                        className="img-fluid"
                        alt="img"
                      />
                      <a href="project-details.html" className="two">
                        <i className="icon-right-arrow"></i>
                      </a>
                    </div>
                    <div className="project_caro_content">
                      <div className="left_side">
                        <p>recruiting</p>
                        <h2 className="title_pro">
                          <a href="project-details.html" rel="bookmark">
                            Shared Time Human Resources Management
                          </a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-12 col-sm-12 project_category-values"
                  style={{
                    position: "absolute",
                    left: "746.656px",
                    top: "571px",
                  }}
                >
                  <div className="project_post style_one style_four">
                    <div className="image">
                      <img
                        width="887"
                        height="591"
                        src="/images/projects/project-5-img.jpg"
                        className="img-fluid"
                        alt="img"
                      />
                      <a href="project-details.html" className="two">
                        <i className="icon-right-arrow"></i>
                      </a>
                    </div>
                    <div className="project_caro_content">
                      <div className="left_side">
                        <p>values</p>
                        <h2 className="title_pro">
                          <a href="project-details.html" rel="bookmark">
                            Six Essential Steps To Writing Successful Job
                          </a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pd_bottom_70"></div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default projets;
