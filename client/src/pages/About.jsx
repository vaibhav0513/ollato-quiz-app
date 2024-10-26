import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

const About = () => {
  const { user } = useAuth();
  return (
    <>
      <main>
        {/* 2 section */}
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p className="username-heading">
                Welcome,{" "}
                {user ? `${user.username} to our website` : `to our website`}
              </p>
              <p>We are here to help you</p>
              <h1>Get Started today.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, laboriosam culpa recusandae nobis assumenda minima
                sed necessitatibus voluptates perferendis corrupti.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, laboriosam culpa recusandae nobis assumenda minima
                sed necessitatibus voluptates perferendis corrupti.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, laboriosam culpa recusandae nobis assumenda minima
                sed necessitatibus voluptates perferendis corrupti.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, laboriosam culpa recusandae nobis assumenda minima
                sed necessitatibus voluptates perferendis corrupti.
              </p>
              <div className="btn btn-group">
                <NavLink href="/contact">
                  <button className="btn">Connect now</button>
                </NavLink>
                <NavLink to="/services">
                  <button className="btn secondary-btn">Learn more</button>
                </NavLink>
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
      </main>
    </>
  );
};

export default About;
