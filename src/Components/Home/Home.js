import React, { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { IoClose } from "react-icons/io5";

import { LuCopyright } from "react-icons/lu";
import "./home.css";
import banner from "../../assets/banner.png";
import group1 from "../../assets/group1.png";
import group2 from "../../assets/group2.png";
import group3 from "../../assets/group3.png";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className="main_home">
        <div className=" close__icon d-flex justify-content-end text-white align-content-end pe-1 pt-3 me-4">
          <IoClose
            className={`close-button ${isHovered ? "rotate" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>
        <div>
          <p className="title__main">
            Epic Games : An American Vedio Game And Software Developer <br></br>{" "}
            And Publisher Based in Cary , North Carolina
          </p>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <img className="main_image" src={banner} alt="banner" />
        </div>
        <div className="w-100 d-flex justify-content-center align-items-center mt-4 mb-4">
          <p className="title1">
            Create,Play and Battle with friends for free in fortnite, Be the
            last player standing Lorem, breadcrumb ipsum dolor sit amet
            consectetur adipisicing elit. Hic voluptate incidunt enim
            repellendus reiciendis cumque in an individual age rating{" "}
          </p>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <Button className="visit__btn bg-white btn text-black  ">
            Visit Website
          </Button>
        </div>
        <div className="card__image__wrapper d-flex justify-content-center align-items-center gap-5 pt-5">
          <Card className="bg-black game__card__Style">
            <Card.Img variant="top" src={group1} />
            <Card.Body>
              <p className="card__discription__style">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </Card.Body>
          </Card>
          <Card className="bg-black game__card__Style">
            <Card.Img variant="top" src={group2} />
            <Card.Body>
              <p className="card__discription__style">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </Card.Body>
          </Card>
          <Card className="bg-black game__card__Style">
            <Card.Img variant="top" src={group3} />
            <Card.Body>
              <p className="card__discription__style">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </Card.Body>
          </Card>
        </div>
        <div className="title4">
          <h2 className="contribution__header__style pt-5 d-flex justify-content-center align-items-center ">
            Our Contributions
          </h2>
          <p className="contribution__style pt-1">
            Our core offering extends beyond mere profit generation we emphasize
            the growth and active involvement of our user community. Collbrating
            with us represents an investment . rather than a mere expemditure
            distictive digital interactions gurantees unparalelled benefits of
            our clients
          </p>
        </div>
        <div className="title__head">
          <Row className="title3 text-white mt-5 ">
            <Col className="text-white contribution__engagement__style">
              <h1 className="card__discription__style ">5M</h1>
              <p className="card__sub-discription__style ">
                Daily User Engagements
              </p>
            </Col>
            <Col className="text-white contribution__engagement__style">
              <h1 className="card__discription__style ">$500K</h1>
              <p className="card__sub-discription__style ">
                Revenue Surge for an Platform
              </p>
            </Col>
            <Col className="text-white contribution__engagement__style">
              <h1 className="card__discription__style ">10X</h1>
              <p className="card__sub-discription__style ">
                ROAS roll on all our marketing Campaigns
              </p>
            </Col>
          </Row>
        </div>

        <div className="footer__style">
          <div className="title5">
            <h3 className="pt-5 footer__sub-headeing">
              Interested In Delving Deepeer Into The Project ?
            </h3>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <p className="pt-2 footer__discription__style">
              If You'd like to explore further details about our initiatives or
              any of our affiliated brands, don't hesitate to connect. You can
              reach out to us via email at{" "}
              <span className="text-white">hello@abc.com</span> or give us a
              call at
              <span className="text-white">+91 480 20802730</span>
            </p>
          </div>
          <div className="main_btns d-flex justify-content-center align-items-center gap-5 mt-5">
            <Button className="main_btns1 bg-black btn text-white mt-4  ">
              Ring Us On Skype
            </Button>
            <Button className="main_btns1 bg-white btn text-black mt-4  ">
              Contact Us
            </Button>
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center text-white mt-5 ">
          <p className="text-center card__discription__style">
            <LuCopyright className="mx-2" />
            2019-2023 abc Technology Solutions Pvt.Ltd. All rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
