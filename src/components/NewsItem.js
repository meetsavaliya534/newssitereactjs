import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, url, author, date} = props;
  return (
    <div className="my-3">
      <div className="card" >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position:'absolute',
            right: "0",
          }}
        >
        </div>
        
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={url}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};
export default NewsItem;
