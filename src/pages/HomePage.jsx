import React from 'react'
import '../css/Home.css'
import NavbarItem from '../componentPage/NavbarItem'
import Dynamic from '../components/Dynamic'

const HomePage = () => {
  return (
    <>
      <NavbarItem />
      <main className="container">
        <section>
          <div className="container">
            <div className="row">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={0}
                    className="active"
                  />
                  <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                  <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active col-12">
                    <img
                      src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/Card%20Promotion.png"
                      className="w-100"
                      alt="Promotion"
                    />
                  </div>
                  <div className="carousel-item col-12">
                    <img
                      src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/Card%20Promotion%202.png"
                      className="w-100"
                      alt="Promotion2"
                    />
                  </div>
                  <div className="carousel-item col-12">
                    <img
                      src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/Card%20Promotion.png"
                      className="w-100"
                      alt="Promotion"
                    />
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-target="#carouselExampleControls"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-target="#carouselExampleControls"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-5 ">
          <>
            <h2 className="ml-3 font-weight-bold">Category</h2>
            <p className="ml-3">What are you currently looking for?</p>
            <div style={{ marginTop: "-80px" }}>
              <div className="container">
                <div className="row">
                  <div
                    id="carouselCategory"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <ol className="carousel-indicators">
                      <li
                        data-target="#carouselCategory"
                        data-slide-to={0}
                        className="active"
                      />
                      <li data-target="#carouselCategory" data-slide-to={1} />
                    </ol>
                    <div className="carousel-inner ">
                      <div className="carousel-item active col-md-12">
                        <div className="row">
                          <div className="col-md-3 col-sm-12 mb-5">
                            <div>
                              <img
                                className="category"
                                src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/T-shirt.png"
                                alt="pants"
                              />
                            </div>
                          </div>
                          <div className="col-md-3 col-sm-12 mb-5">
                            <div>
                              <img
                                className="category"
                                src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/short.png"
                                alt="shorts"
                              />
                            </div>
                          </div>
                          <div className="col-md-3 col-sm-12 mb-5">
                            <div>
                              <img
                                className="category"
                                src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/jacket.png"
                                alt="jacket"
                              />
                            </div>
                          </div>
                          <div className="col-md-3 col-sm-12 mb-5">
                            <div>
                              <img
                                className="category"
                                src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/pants.png"
                                alt="shorts"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item col-12">
                        <div className="row">
                          <div className="col-md-3 col-sm-4 mb-5">
                            <div>
                              <img
                                className="category"
                                src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/pants.png"
                                alt="pants"
                              />
                            </div>
                          </div>
                          <div className="col-md-3 col-sm-4 mb-5">
                            <div>
                              <img
                                className="category"
                                src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/jacket.png"
                                alt="shorts"
                              />
                            </div>
                          </div>
                          <div className="col-md-3 col-sm-4 mb-5">
                            <div>
                              <img
                                className="category"
                                src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/short.png"
                                alt="t-shirt"
                              />
                            </div>
                          </div>
                          <div className="col-md-3 col-sm-4 mb-5">
                            <div>
                              <a href="/pages/detail.html">
                                <img
                                  className="category"
                                  src="http://127.0.0.1:5500/react-2/public/Responsive/assets/img/T-shirt.png"
                                  alt="shorts"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-target="#carouselCategory"
                        data-slide="prev"
                      >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-target="#carouselCategory"
                        data-slide="next"
                      >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>

        </section>
        <section className="mt-5">
          <h2 className="ml-3 font-weight-bold">New</h2>
          <p className="ml-3">You've never seen before!</p>
          <div className="row">
          <Dynamic />
          </div>
        </section>
        <section className="mt-5">
          <h2 className="ml-3 font-weight-bold">Populer</h2>
          <p className="ml-3">Find Clothes that are you tranding recently!</p>
          <div className="container mt-5">
            <div className="row">
              <Dynamic />
            </div>
          </div>
        </section>
      </main>
    </>

  )
}

export default HomePage