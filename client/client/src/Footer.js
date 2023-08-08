import React from 'react'
import "./Style.css"

function Footer() {
  return (
    <div>
      <div class="main5">
        <footer class="text-lg-start text-dark">
          <section class="d-flex justify-content-between p-4 text-white"></section>

          <section>
            <div class="container text-md-start mt-5">
              <div class="row mt-3">






                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 lt">
                  <h6 class="text-uppercase fw-bold">Subscribe To Plus</h6>

                  <p style={{ margin: 0 }}>
                    Enter your email address for receiving valuable newsletters.Enter Email
                  </p>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    style={{ height: "48px" }} />

                  <p style={{ margin: "0" }}>© Copyright 2023 - Osmosis Learn</p>
                </div>
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 lt">
                  <h6 class="text-uppercase fw-bold">



                    <h2
                      class="titles"
                    //     style="
                    //   height: 25.180395126342773px;
                    //   width: 138.8623504638672px;
                    // "
                    >
                      Osmosis
                    </h2>
                    <h3>Learn</h3>
                  </h6>
                </div>
              </div>

            </div>

          </section>
        </footer>
      </div>
    </div>
  )
}

export default Footer