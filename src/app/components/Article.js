import React from 'react';
import { Link } from 'react-router-dom';

export default function Article() {
  return (
    <div className="selfArticle">
      <div className="articleWrap">
        <div className="image">
          <img src="" alt="" />
        </div>
        <div className="descript">
          <h2>Article Name 1</h2>
          <div className="misk">
            <time>10.02.19</time>
            <p>1 comment</p>
            <span>Category</span>
          </div>
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, provident! Quo sequi deleniti, vero reiciendis id dolore enim, dicta quod accusamus porro quidem, rem deserunt! Culpa tempora, repellendus ab soluta maxime eaque veritatis ipsa obcaecati.</h5>
          <div className="read">
            <p><Link to="/">Read More</Link></p>
            <ul>
              <li><i className="fab fa-facebook-square" /></li>
              <li><i className="fab fa-twitter" /></li>
              <li><i className="fab fa-instagram" /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
