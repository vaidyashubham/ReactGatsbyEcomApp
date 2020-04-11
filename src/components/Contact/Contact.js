import React from 'react'
import Heading from "../Reuseable/Heading"

export default function Contact() {
    return (
        <section className="py-3">
            <Heading title="Contact Us"></Heading>
            <div className="col-10 col-sm-8 mx-auto">
                <form action="https://formspree.io/shubhamvaidya604@gmail.com" method="POST">
                    <div className="form-group">
                        <input type="text" name="name" id="name" placeholder="Your Name" className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" id="email" placeholder="Your Email" className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="mobile" id="mobile" placeholder="Your Contact No." className="form-control" />
                    </div>
                    <div className="form-group">
                        <textarea type="text" name="description" id="description" placeholder="Your Message" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-outline-info btn-block">Submit</button>
                </form>
            </div>
        </section>
    )
}
