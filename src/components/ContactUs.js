import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              N'hésitez pas à me contacter ici : 
            </p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>Profile Comet ici:  {resumeData.comet}</h4>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
