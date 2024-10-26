import React from "react";

const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>Lorem ipsum dolor sit amet.</p>
              <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, laboriosam culpa recusandae nobis assumenda minima
                sed necessitatibus voluptates perferendis corrupti.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">Connect now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">Learn more</button>
                </a>
              </div>
            </div>

            {/* Hero image */}
            <div className="hero-image">
              <img
                src="/images/hero1.png"
                alt="hero image"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>

        {/* 2 section */}
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            {/* Hero image */}
            <div className="hero-image">
              <img
                src="/images/hero1.png"
                alt="hero image"
                width="400"
                height="500"
              />
            </div>

            <div className="hero-content">
              <p>We are here to help you</p>
              <h1>Get Started today.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, laboriosam culpa recusandae nobis assumenda minima
                sed necessitatibus voluptates perferendis corrupti.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">Connect now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">Learn more</button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
