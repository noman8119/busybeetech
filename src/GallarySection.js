import React from "react";
import bar from '../src/images/bar.png';
import gal1 from '../src/images/gal1.png';
import gal2 from '../src/images/gal2.png';
import gal3 from '../src/images/gal3.png';
import gal4 from '../src/images/gal4.png';
import gal5 from '../src/images/gal5.png';
import gal6 from '../src/images/gal6.png';
import gal7 from '../src/images/gal7.png';
import gal8 from '../src/images/gal8.png';
import AddIcon from '@material-ui/icons/Add';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const GallarySection =()=>{
 

// Add active className to the current button (highlight it)
// var btnContainer = document.getElementById("myBtnContainer");
// if (btnContainer !== null) {
//     var btns = btnContainer.getElementsByclassNameName("btn1");
//     for (var i = 0; i < btns.length; i++) {
//         btns[i].addEventListener("click", function(){
//           var current = document.getElementsByclassNameName("active");
//           current[0].classNameName = current[0].classNameName.replace(" active", "");
//           this.classNameName += " active";
//         });
//       }
// }

    return(
    <>
<section classNameName="gallary-sec">
<div className="container-fluid">
<div classNameName="row bg-transparent ">
                <div classNameName="col-8 mx-auto top-gallary-text text-center">
                    <h3>FEATURED PRODUCTS</h3>
                    <img src={bar} alt="bar" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod <br/>
tempor incididunt ut labore et dolore magnam </p>
            
                </div>
            </div>
<div className="row">
    <div className="col-10 mx-auto text-center py-3">
            <button className="btn active btn-default filter-button" data-filter="all">All</button>
            <button className="btn btn-default filter-button" data-filter="hdpe">Design</button>
            <button className="btn btn-default filter-button" data-filter="sprinkle">Code</button>
            <button className="btn btn-default filter-button" data-filter="spray">Photography</button>
            <button className="btn btn-default filter-button" data-filter="irrigation">Apps</button>
        </div>
        <br/>
</div>

        <div className="row pb-5">
    
            <div className="gallery_product col-lg-3 col-md-4 col-sm-4 col-xs-6 filter hdpe">
            <div classNameName="content">
                <img src={gal4} className="img-responsive"/>
                <a href="#"  title="User Profile">
      <div className="overlay">
 
  <span>
  <AddIcon classNameName="icon"/>
  </span>

  </div>
  </a>
            </div>
</div>
            <div className="gallery_product col-lg-3 col-md-4 col-sm-4 col-xs-6 filter sprinkle">
            <div classNameName="content">
                <img src={gal3} className="img-responsive"/>
                <a href="#"  title="User Profile">
      <div className="overlay">
 
  <span>
  <AddIcon classNameName="icon"/>
  </span>

  </div>
  </a>
            </div>
            </div>

            <div className="gallery_product col-lg-3 col-md-4 col-sm-4 col-xs-6 filter hdpe">
            <div classNameName="content">
                <img src={gal2} className="img-responsive"/>
                <a href="#"  title="User Profile">
      <div className="overlay">
 
  <span>
  <AddIcon classNameName="icon"/>
  </span>

  </div>
  </a>
            </div>
            </div>

            <div className="gallery_product col-lg-3 col-md-4 col-sm-4 col-xs-6 filter irrigation">
            <div classNameName="content">
                <img src={gal1} className="img-responsive"/>
                <a href="#"  title="User Profile">
      <div className="overlay">
 
  <span>
  <AddIcon classNameName="icon"/>
  </span>

  </div>
  </a>
            </div>
            </div>

            <div className="gallery_product col-lg-3 col-md-4 col-sm-4 col-xs-6 filter spray">
            <div classNameName="content">
                <img src={gal4} className="img-responsive"/>
                <a href="#"  title="User Profile">
      <div className="overlay">
 
  <span>
  <AddIcon classNameName="icon"/>
  </span>

  </div>
  </a>
            </div>
            </div>

            <div className="gallery_product col-lg-3 col-md-4 col-sm-4 col-xs-6 filter irrigation">
            <div classNameName="content">
                <img src={gal6} className="img-responsive"/>
                <a href="#"  title="User Profile">
      <div className="overlay">
 
  <span>
  <AddIcon classNameName="icon"/>
  </span>

  </div>
  </a>
            </div>
            </div>

            <div className="gallery_product col-lg-3 col-md-4 col-sm-4 col-xs-6 filter spray">
            <div classNameName="content">
                <img src={gal7} className="img-responsive"/>
                <a href="#"  title="User Profile">
      <div className="overlay">
 
  <span>
  <AddIcon classNameName="icon"/>
  </span>

  </div>
  </a>
            </div>
            </div>

            <div className="gallery_product col-lg-3 col-md-4 col-sm-4 col-xs-6 filter irrigation">
            <div classNameName="content">
                <img src={gal8} className="img-responsive"/>
                <a href="#"  title="User Profile">
      <div className="overlay">
 
  <span>
  <AddIcon classNameName="icon"/>
  </span>

  </div>
  </a>
            </div>
            </div>

            <div className="gallery_product col-lg-3 col-md-4 col-sm-4 col-xs-6 filter irrigation">
            <div classNameName="content">
                <img src={gal3} className="img-responsive"/>
                <a href="#"  title="User Profile">
      <div className="overlay">
 
  <span>
  <AddIcon classNameName="icon"/>
  </span>

  </div>
  </a>
            </div>
            </div>

            <div className="gallery_product col-lg-3 col-md-4 col-sm-4 col-xs-6 filter hdpe">
            <div classNameName="content">
                <img src={gal1} className="img-responsive"/>
                <a href="#"  title="User Profile">
      <div className="overlay">
 
  <span>
  <AddIcon classNameName="icon"/>
  </span>

  </div>
  </a>
            </div>
            </div>

            <div className="gallery_product col-lg-3 col-md-4 col-sm-4 col-xs-6 filter spray">
            <div classNameName="content">
                <img src={gal1} className="img-responsive"/>
                <a href="#"  title="User Profile">
      <div className="overlay">
 
  <span>
  <AddIcon classNameName="icon"/>
  </span>

  </div>
  </a>
            </div>
            </div>

            <div className="gallery_product col-lg-3 col-md-4 col-sm-4 col-xs-6 filter sprinkle">
            <div classNameName="content">
                <img src={gal5} className="img-responsive"/>
                <a href="#"  title="User Profile">
      <div className="overlay">
 
  <span>
  <AddIcon classNameName="icon"/>
  </span>

  </div>
  </a>
            </div>
            </div>
        </div>
    </div>
</section>
    </>
    )
}
export default GallarySection;