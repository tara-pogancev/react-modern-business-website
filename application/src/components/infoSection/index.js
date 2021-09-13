import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import { InfoContainer, InfoWrapper, Subtitle, Title } from "./InfoElements";
import { ButtonBasic } from "../ButtonElements";

const InfoSection = ({ id, title, subtitle, text, image, btnText }) => {
  return (
    <>
      <InfoContainer id={id} className="bg-black">
        <InfoWrapper>
          <div className="row expand-row gx-4">
            <div className="col-6 my-auto">
              <Subtitle>{subtitle}</Subtitle>
              <Title className="text-white mb-5">{title}</Title>
              <p className="text-white mb-4">{text}</p>
              <ButtonBasic to="" primary="true" dark="true" className="mx-auto">
                  {btnText}
              </ButtonBasic>
            </div>
            <div className="col-6 img-wrap">
              <img src={image} alt="" className="fit-img"></img>
            </div>
          </div>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
