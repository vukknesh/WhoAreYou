import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <header class="site-navbar mt-3">
          <div class="container-fluid">
            <div class="row align-items-center">
              <div class="site-logo col-6">
                <a href="index.html">Careers</a>
              </div>

              <nav class="mx-auto site-navigation">
                <ul class="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
                  <li>
                    <a href="index.html" class="nav-link active">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="job-listings.html">Job Listings</a>
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="services.html">Services</a>
                  </li>
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  <li class="d-lg-none">
                    <a href="contact.html">Contact Us</a>
                  </li>
                </ul>
              </nav>

              <div class="right-cta-menu text-right d-flex aligin-items-center col-6">
                <div class="ml-auto">
                  <a
                    href="contact.html"
                    class="btn btn-primary border-width-2 d-none d-lg-inline-block"
                  >
                    <span class="mr-2 icon-paper-plane" />Contact Us
                  </a>
                </div>
                <a
                  href="#"
                  class="site-menu-toggle js-menu-toggle d-inline-block d-xl-none mt-lg-2 ml-3"
                >
                  <span class="icon-menu h3 m-0 p-0 mt-2" />
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
