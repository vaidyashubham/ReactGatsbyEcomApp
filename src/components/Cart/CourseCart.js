import React, { Component } from "react"
import Heading from "../Reuseable/Heading"
import Img from "gatsby-image"

const getCaty = items => {
  let holdItems = items.map(items => {
    return items.node.category
  })
  let holdCategories = new Set(holdItems)
  let categories = Array.from(holdCategories)
  categories = ["All", ...categories]
  return categories
}

export default class CourseCart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      course: props.courses.edges,
      mycourse: props.courses.edges,
      mycategories: getCaty(props.courses.edges),
    }
  }

  catyClicked = category => {
    let keepItSafe = [...this.state.course]
    if(category === 'All') {
      this.setState(()=>{
        return{ mycourse: keepItSafe }
      })
    } else{
      let holdme = keepItSafe.filter(({node}) => node.category === category )
      this.setState(()=>{
        return { mycourse: holdme }
      })
    }
  }

  render() {
    return (
      <section className="py-5">
        <div className="container">
          <Heading title="Courses" />
          <div className="row my-3">
            <div className="col-10 mx-auto text-center">
              {this.state.mycategories.map((category, index) => {
                return (
                  <button
                    type="button"
                    className="btn btn-info m-3 px-3"
                    key={index}
                    onClick={() => {
                      this.catyClicked(category)
                    }}
                  >
                    {category}
                  </button>
                )
              })}
            </div>
          </div>
          <div className="row">
            {this.state.mycourse.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  className="col-11 col-md-6 d-flex my-3 mx-auto"
                >
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
