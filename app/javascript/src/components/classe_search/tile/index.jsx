import React from 'react';
import PropTypes from 'prop-types';
import { getExperienceString } from '../../../classe_utils';

function getTeacherQualification(experience, certified) {
  const expStr = getExperienceString(experience);

  if (!certified) {
    return expStr;
  }

  return `${expStr} · Certified teacher`;
}

const ClasseSearchTile = ({
  title,
  experience,
  certified,
  teacher,
}) => (
  <div className="card-classDetail">
    <div className="card-classDetail-title">
      <div className="row">
        <div className="col-xs-12">
          <div className="userImage">
            <img alt={`${teacher.first_name} ${teacher.last_name}`} src="" />
          </div>
          <div className="classTitle">
            <h5>{ title }</h5>
            <p className="serif">
              { getTeacherQualification(experience, certified) }
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

ClasseSearchTile.defaultProps = {
};

ClasseSearchTile.propTypes = {
  title: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
  certified: PropTypes.bool.isRequired,
  teacher: PropTypes.object.isRequired,
};

export default ClasseSearchTile;

/* eslint-disable max-len */
//
// <div className="card-classDetail-content">
//       <div className="card-classDetail-image">
//         <div className="row">
//           <div className="col-xs-12">
//             <div className="owl-carousel owl-theme class-slider owl-loaded owl-drag owl-hidden">
//               <div className="owl-stage-outer">
//                 <div className="owl-stage">
//                   <div className="owl-item active center">
//                     <div className="item">
//                       <div className="class-image-caption">
//                         <p className="serif">A very recent work I’ve done in the back aelly of Robson St.</p>
//                       </div>
//                       <div className="image"><img alt="TODO" src="/img/image-streetpainting.png" /></div>
//                     </div>
//                   </div>
//                   <div className="owl-item">
//                     <div className="item">
//                       <div className="class-image-caption">
//                         <p className="serif">Wall Street Art in a public place</p>
//                       </div>
//                       <div className="image"><img alt="TODO" src="/img/image-streetpainting-2.jpg" /></div>
//                     </div>
//                   </div>
//                   <div className="owl-item">
//                     <div className="item">
//                       <div className="class-image-caption">
//                         <p className="serif">Wall Street Art in a public place</p>
//                       </div>
//                       <div className="image"><img alt="TODO" src="/img/image-streetpainting-3.jpg" /></div>
//                     </div>
//                   </div>
//                   <div className="owl-item">
//                     <div className="item">
//                       <div className="class-image-caption">
//                         <p className="serif">Wall Street Art in a public place</p>
//                       </div>
//                       <div className="image"><img alt="TODO" src="/img/image-streetpainting-4.jpg" /></div>
//                     </div>
//                   </div>
//                   <div className="owl-item">
//                     <div className="item">
//                       <div className="class-image-caption">
//                         <p className="serif">Wall Street Art in a public place</p>
//                       </div>
//                       <div className="image"><img alt="TODO" src="/img/image-streetpainting-5.jpg" /></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="owl-nav">
//                 <div className="owl-prev disabled">
//                   prev
//                 </div>
//                 <div className="owl-next">
//                   next
//                 </div>
//               </div>
//               <div className="owl-dots">
//                 <div className="owl-dot active">
//                   <span />
//                 </div>
//                 <div className="owl-dot">
//                   <span />
//                 </div>
//                 <div className="owl-dot">
//                   <span />
//                 </div>
//                 <div className="owl-dot">
//                   <span />
//                 </div>
//                 <div className="owl-dot">
//                   <span />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="class-lessonInfo">
//         <div className="row">
//           <div className="col-xs-8">
//             <span>2&nbsp;</span><span>lessons&nbsp;</span> <span>·&nbsp;</span><span>36&nbsp;</span> <span>reviews</span><span className="rating-stars" />
//             <ul>
//               <li><span className="rating-stars"><img alt="TODO" src="/img/icon-star-active.svg" /></span></li>
//               <li><span className="rating-stars"><img alt="TODO" src="/img/icon-star-active.svg" /></span></li>
//               <li><span className="rating-stars"><img alt="TODO" src="/img/icon-star-active.svg" /></span></li>
//               <li><span className="rating-stars"><img alt="TODO" src="/img/icon-star-active.svg" /></span></li>
//               <li><span className="rating-stars"><img alt="TODO" src="/img/icon-star-inactive.svg" /></span></li>
//             </ul>
//           </div>
//           <div className="col-xs-4">
//             <div className="lesson-fee">
//               <span className="duration" />
//               <p className="serif"><span className="duration">lesson</span></p><span className="duration"><label>1hour</label></span><span className="fee"></span>
//               <h2><span className="fee">$45 /</span></h2>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="card-classDetail-description">
//         <p className="serif no-margin-top">About this class</p>
//         <p>I’ve been street painting for serveral years now, you can see some of my works around the skytrain stations. The more noticible one is the Hallo Kitty on the commercial boardway skytrain station. You can streetpaint your art anywhere and it will stay there for as long as the wall stands, how cool is that eh? I always want to pass this skill to other people, join my class and you’ll learn the best techiques.</p><span><a className="serif" href="#">See class details</a></span><span className="serif">&nbsp;/&nbsp;</span><span className="serif pinClass">+Pin this class</span>
//       </div>
//       <div className="card-classDetail-stats">
//         <div className="row">
//           <div className="col-xs-4">
//             <label>Students Attended</label>
//             <h2>68</h2>
//           </div>
//           <div className="col-xs-4">
//             <label>Completed Rate</label>
//             <h2>83%</h2>
//           </div>
//           <div className="col-xs-4">
//             <label>Class Rating</label>
//             <h2>4.7 / 5</h2>
//           </div>
//         </div>
//       </div>
//       <div className="card-classDetail-CTA">
//         <div className="row">
//           <div className="col-xs-12 col-sm-8">
//             <a href="#"><button className="large">I’m interested, sign me up!</button></a>
//           </div>
//           <div className="col-xs-12 col-sm-4">
//             <a href="#"><button className="large line">See class detail<img alt="TODO" src="/img/icon-arrow-next-active.svg" /></button></a>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="card-classDetail-brief">
//       <div className="row">
//         <div className="col-xs-12" />
//       </div>
//       <div className="category-icon"><img alt="TODO" src="/img/icon-type-visualArt.svg" /></div>
//       <div className="card-classDetail-brief-content">
//         <span>$45&nbsp;</span><span>/&nbsp;</span><span>hour&nbsp;</span> <span>·&nbsp;</span><span>2&nbsp;</span><span>lessons&nbsp;</span> <span>·&nbsp;</span><span>36&nbsp;</span> <span>reviews</span><span className="rating-stars" />
//         <ul>
//           <li><span className="rating-stars"><img alt="TODO" src="/img/icon-star-active.svg" /></span></li>
//           <li><span className="rating-stars"><img alt="TODO" src="/img/icon-star-active.svg" /></span></li>
//           <li><span className="rating-stars"><img alt="TODO" src="/img/icon-star-active.svg" /></span></li>
//           <li><span className="rating-stars"><img alt="TODO" src="/img/icon-star-active.svg" /></span></li>
//           <li><span className="rating-stars"><img alt="TODO" src="/img/icon-star-inactive.svg" /></span></li>
//         </ul>
//       </div>
//     </div>
//
