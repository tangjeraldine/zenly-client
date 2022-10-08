import Layout from "../../components/layoutPublic";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import urlcat from "urlcat";
import axios from "axios";

export default function Services() {
  return (
    <Layout home>
      <Head>
        <title>Our Services</title>
      </Head>
      <div>
        <div className='accordion' id='accordionPanelsStayOpenExample'>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='panelsStayOpen-headingOne'>
              <button
                className='accordion-button'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#panelsStayOpen-collapseOne'
                aria-expanded='true'
                aria-controls='panelsStayOpen-collapseOne'>
                Hey! Check out some of the best massage treatments in Singapore.
              </button>
            </h2>
            <div
              id='panelsStayOpen-collapseOne'
              className='accordion-collapse collapse show'
              aria-labelledby='panelsStayOpen-headingOne'>
              <div className='accordion-body'>
                <strong>This is the first item&apos;s accordion body.</strong>{" "}
                It is shown by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It&apos;s also
                worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
        <h1>HI THERE BUY SOMETHING</h1>
        <div
          className='alert alert-warning alert-dismissible fade show'
          role='alert'>
          <strong>Holy guacamole!</strong> You found us at the right time.{" "}
          <br />
          We&apos;re running a promotion that ends on 30 Nov 2022. You should
          REALLY check in on some of these great deals by{" "}
          <a href='/login/main' className='alert-link'>
            logging in here
          </a>
          .
          <button
            type='button'
            className='btn-close'
            data-bs-dismiss='alert'
            aria-label='Close'></button>
        </div>
        <div className='card text-center'>
          <div className='card-header'>
            <ul className='nav nav-tabs card-header-tabs'>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='true' href='#'>
                  Active
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Link
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link disabled'>Disabled</a>
              </li>
            </ul>
          </div>
          <div className='card-body'>
            <h5 className='card-title'>Special title treatment</h5>
            <p className='card-text'>
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href='#' className='btn btn-primary'>
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
