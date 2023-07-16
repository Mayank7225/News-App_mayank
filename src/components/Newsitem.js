import React, { Component } from 'react'

export class Newsitem extends Component {
    
  render() {
    let {title,description,imageurl,newsUrl,author,date,lallu}=this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "22rem"}}>
            <img src={imageurl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {lallu}
                <span class="visually-hidden">unread messages</span>
                </span>
                </h5>
                <p className="card-text">{description}.....</p>
                <p className="card-text"><small className='text-muted'>By {!author?"Unknown":author} on {date}</small></p>
                <a  rel="noreferrer" href={newsUrl} target="_blank" className="btn  btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default Newsitem
