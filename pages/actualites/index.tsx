import Layout from "@/components/layouts/Layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";

function index() {
  return (
    <>
      <Head>
        <title>NEC</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {/* <!----header end-----> */}
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
                    <div className="title_page">Actualités</div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="breadcrumbs creote">
                    <ul className="breadcrumb m-auto">
                      <li>
                        <Link href="/">Accueil</Link>
                      </li>
                      <li className="active">Actualitès</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!----header-----> */}
        <div className="auto-container">
          <div className="row default_row">
            <div
              id="primary"
              className="content-area service col-lg-12 col-md-12 col-sm-12 col-xs-12"
            >
              <div className="pd_top_90"></div>
              <main id="main" className="site-main" role="main">
                <article
                  id=""
                  className="clearfix service type-service status-publish has-post-thumbnail hentry"
                >
                  <div className="row grid_layout">
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 grid_box">
                      <div className="news_box style_one blog_classic has_images">
                        <div className="image img_hover-1">
                          <img
                            width="750"
                            height="420"
                            src="/images/blog/blog-image-9.jpg"
                            className="wp-post-image"
                            alt="img"
                          />
                          <a className="arrow" href="#">
                            <i className="fa fa-angle-right"></i>
                          </a>
                        </div>
                        <div className="content_box">
                          <div className="date">
                            <span className="date_in_number">08</span>
                            <span className="date_in_month">Oct</span>
                          </div>
                          <a href="#" className="categories">
                            <i className="icon-folder"></i>Coaching
                          </a>
                          <h2 className="title">
                            <a href="blog-single.html" rel="bookmark">
                              Why Should Business Payroll Outsourcing?
                            </a>
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 grid_box">
                      <div className="news_box style_one blog_classic has_images">
                        <div className="image img_hover-1">
                          <img
                            width="750"
                            height="420"
                            src="/images/blog/blog-image-8.jpg"
                            className="wp-post-image"
                            alt="img"
                          />
                          <a className="arrow" href="#">
                            <i className="fa fa-angle-right"></i>
                          </a>
                        </div>
                        <div className="content_box">
                          <div className="date">
                            <span className="date_in_number">08</span>
                            <span className="date_in_month">Oct</span>
                          </div>
                          <a href="#" className="categories">
                            <i className="icon-folder"></i>HR Consulting
                          </a>
                          <h2 className="title">
                            <a href="blog-single.html" rel="bookmark">
                              Most Employees Support Measures
                            </a>
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 grid_box">
                      <div className="news_box style_one blog_classic has_images">
                        <div className="image img_hover-1">
                          <img
                            width="750"
                            height="420"
                            src="/images/blog/blog-image-7.jpg"
                            className="wp-post-image"
                            alt="img"
                          />
                          <a className="arrow" href="#">
                            <i className="fa fa-angle-right"></i>
                          </a>
                        </div>
                        <div className="content_box">
                          <div className="date">
                            <span className="date_in_number">08</span>
                            <span className="date_in_month">Oct</span>
                          </div>
                          <a href="#" className="categories">
                            <i className="icon-folder"></i>Compliance Audits
                          </a>
                          <h2 className="title">
                            <a href="blog-single.html" rel="bookmark">
                              How to Handle Employee
                            </a>
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 grid_box">
                      <div className="news_box style_one blog_classic has_images">
                        <div className="image img_hover-1">
                          <img
                            width="750"
                            height="420"
                            src="/images/blog/blog-image-6.jpg"
                            className="wp-post-image"
                            alt="img"
                          />
                          <a className="arrow" href="#">
                            <i className="fa fa-angle-right"></i>
                          </a>
                        </div>
                        <div className="content_box">
                          <div className="date">
                            <span className="date_in_number">08</span>
                            <span className="date_in_month">Oct</span>
                          </div>
                          <a href="#" className="categories">
                            <i className="icon-folder"></i>Coaching
                          </a>
                          <h2 className="title">
                            <a href="blog-single.html" rel="bookmark">
                              Retaining Good Employees & Motivated
                            </a>
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 grid_box">
                      <div className="news_box style_one blog_classic has_images">
                        <div className="image img_hover-1">
                          <img
                            width="750"
                            height="420"
                            src="/images/blog/blog-image-5.jpg"
                            className="wp-post-image"
                            alt="img"
                          />
                          <a className="arrow" href="#">
                            <i className="fa fa-angle-right"></i>
                          </a>
                        </div>
                        <div className="content_box">
                          <div className="date">
                            <span className="date_in_number">08</span>
                            <span className="date_in_month">Oct</span>
                          </div>
                          <a href="#" className="categories">
                            <i className="icon-folder"></i>Compliance Audits
                          </a>
                          <h2 className="title">
                            <a href="blog-single.html" rel="bookmark">
                              Understanding Executive Coaching
                            </a>
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 grid_box">
                      <div className="news_box style_one blog_classic has_images">
                        <div className="image img_hover-1">
                          <img
                            width="750"
                            height="420"
                            src="/images/blog/blog-image-4.jpg"
                            className="wp-post-image"
                            alt="img"
                          />
                          <a className="arrow" href="#">
                            <i className="fa fa-angle-right"></i>
                          </a>
                        </div>
                        <div className="content_box">
                          <div className="date">
                            <span className="date_in_number">08</span>
                            <span className="date_in_month">Oct</span>
                          </div>
                          <a href="#" className="categories">
                            <i className="icon-folder"></i>Coaching
                          </a>
                          <h2 className="title">
                            <a href="blog-single.html" rel="bookmark">
                              How to Handle Your Good Employee
                            </a>
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 grid_box">
                      <div className="news_box style_one blog_classic has_images">
                        <div className="image img_hover-1">
                          <img
                            width="750"
                            height="420"
                            src="/images/blog/blog-image-3.jpg"
                            className="wp-post-image"
                            alt="img"
                          />
                          <a className="arrow" href="#">
                            <i className="fa fa-angle-right"></i>
                          </a>
                        </div>
                        <div className="content_box">
                          <div className="date">
                            <span className="date_in_number">08</span>
                            <span className="date_in_month">Oct</span>
                          </div>
                          <a href="#" className="categories">
                            <i className="icon-folder"></i>Employee Relations
                          </a>
                          <h2 className="title">
                            <a href="blog-single.html" rel="bookmark">
                              Workforce Challenges & Opportunities
                            </a>
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 grid_box">
                      <div className="news_box style_one blog_classic has_images">
                        <div className="image img_hover-1">
                          <img
                            width="750"
                            height="420"
                            src="/images/blog/blog-image-11.jpg"
                            className="wp-post-image"
                            alt="img"
                          />
                          <a className="arrow" href="#">
                            <i className="fa fa-angle-right"></i>
                          </a>
                        </div>
                        <div className="content_box">
                          <div className="date">
                            <span className="date_in_number">08</span>
                            <span className="date_in_month">Oct</span>
                          </div>
                          <a href="#" className="categories">
                            <i className="icon-folder"></i>Coaching
                          </a>
                          <h2 className="title">
                            <a href="blog-single.html" rel="bookmark">
                              Workplace problems in your business?
                            </a>
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 grid_box">
                      <div className="news_box style_one blog_classic has_images">
                        <div className="image img_hover-1">
                          <img
                            width="750"
                            height="420"
                            src="/images/blog/blog-image-10.jpg"
                            className="wp-post-image"
                            alt="img"
                          />
                          <a className="arrow" href="#">
                            <i className="fa fa-angle-right"></i>
                          </a>
                        </div>
                        <div className="content_box">
                          <div className="date">
                            <span className="date_in_number">08</span>
                            <span className="date_in_month">Oct</span>
                          </div>
                          <a href="#" className="categories">
                            <i className="icon-folder"></i>Employee Relations
                          </a>
                          <h2 className="title">
                            <a href="blog-single.html" rel="bookmark">
                              Supporting Employees Through The Menopause
                              Guidance For Employers
                            </a>
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 grid_box">
                      <div className="news_box style_one blog_classic has_images">
                        <div className="image img_hover-1">
                          <img
                            width="750"
                            height="420"
                            src="/images/blog/blog-image-2.jpg"
                            className="wp-post-image"
                            alt="img"
                          />
                          <a className="arrow" href="#">
                            <i className="fa fa-angle-right"></i>
                          </a>
                        </div>
                        <div className="content_box">
                          <div className="date">
                            <span className="date_in_number">08</span>
                            <span className="date_in_month">Oct</span>
                          </div>
                          <a href="#" className="categories">
                            <i className="icon-folder"></i>Coaching
                          </a>
                          <h2 className="title">
                            <a href="blog-single.html" rel="bookmark">
                              Policies & Procedures for Startups
                            </a>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <nav aria-label="Page navigation example">
                        <ul className="pagination text-center">
                          <li className="active">
                            <a href="blog-simple.html">1</a>
                          </li>
                          <li>
                            <a href="blog-simple.html">2</a>
                          </li>
                          <li className="next_link">
                            <a href="blog-simple.html">
                              <div className="nav-next">
                                <i className="fas fa-angle-right"></i>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </article>
              </main>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default index;