import React from "react"
import Heading from "./Heading"
import {Link} from "gatsby"

export default function InfoBlock({ heading }) {
  return (
    <section className="bg-theme my-5 py-4">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-white mb-4">
              Should you decide to use a single instance of a styled{" "}
              for multiple different images, it will
              automatically add an additional className, a hashed 32bit integer
              of the current srcSet or className prefixed with gbi-, to prevent
              erroneous styling of individual instances. You wouldn’t have added
              the same class for different CSS background-image styles on your
              own, or would you have ; )?
            </p>
            <Link to="/about">
              <button className="btn btn-warning btn-lg">{heading}</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
