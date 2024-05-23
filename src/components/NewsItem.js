import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let { title , description, Imgurl,newsUrl } = this.props;
    return (
      <div className='my-3'>
        <div className="card mb-4">
          <img src={!Imgurl?"https://th.bing.com/th?id=OVP.IxE7Plrp9X884SNMzH2pxwEsDh&w=216&h=120&c=7&o=6&dpr=1.3&pid=13.1":Imgurl} className="card-img-top"  alt="loading"/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text ">{description}...</p>
              <a href={newsUrl}  className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
