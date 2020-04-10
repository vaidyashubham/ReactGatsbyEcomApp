import React, { Component } from "react"
import Heading from "../Reuseable/Heading"
import Img from "gatsby-image"

export default class CourseCart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      course: props.courses.edges,
      mycourse: props.courses.edges,
    }
  }
  render() {
    return (
      <section className="py-5">
        <div className="container">
          <Heading title="Courses" />
          <div className="row">
            {this.state.mycourse.map(({ node }) => {
              return (
                <div key={node.id} className="col-11 col-md-6 d-flex my-3 mx-auto">
                  <Img fixed={node.images.fixed} />
                  <div className="flex-grow-1 px-3">
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-0">{node.title}</h6>
                      <h6 className="mb-0 text-success">$ {node.price}</h6>
                    </div>
                    <p className="text-muted">
                      <small>{node.description.description}</small>
                    </p>
                    <button
                      className="btn btn-warning snipcart-add-item"
                      data-item-id={node.id}
                      data-item-price={node.price}
                      data-item-url="https://code-online.netlify.com/"
                      data-item-description={node.description.description}
                      data-item-image={node.images.fixed.src}
                      data-item-name={node.title}
                    >
                      Join Now!
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}
