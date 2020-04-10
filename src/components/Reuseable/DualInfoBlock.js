import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function DualInfoBlock({ heading }) {
  return (
    <section className="my-4 py-4 bg-theme">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-8 mx-auto">
            <p className="lead text-white mb-5">
              Should you decide to use a single instance of a styled for
              multiple different images, it will automatically add an additional
              className, a hashed 32bit integer of the current srcSet or
              className prefixed with gbi-, to prevent erroneous styling of
              individual instances. You wouldn’t have added the same class for
              different CSS background-image styles on your own, or would you
              have ; )?Should you decide to use a single instance of a styled for
              multiple different images, it will automatically add an additional
              className, a hashed 32bit integer of the current srcSet or
              className prefixed with gbi-, to prevent erroneous styling of
              individual instances. You wouldn’t have added the same class for
              different CSS background-image styles on your own, or would you
              have ; )?Should you decide to use a single instance of a styled for
              multiple different images, it will automatically add an additional
              className, a hashed 32bit integer of the current srcSet or
              className prefixed with gbi-, to prevent erroneous styling of
              individual instances. You wouldn’t have added the same class for
              different CSS background-image styles on your own, or would you
              have ; )?
            </p>
          </div>
          <div className="col-4">
          <div class="card bg-dark">
            <img class="card-img-top" src="data:image/jpeg;base64,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" alt="Card image cap"/>
            <div class="card-body">
                <h5 class="card-title text-white">Just click photos.</h5>
                <p class="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-warning btn-block">{heading}</a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
