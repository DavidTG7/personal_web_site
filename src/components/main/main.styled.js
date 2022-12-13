import styled from "styled-components";
import greenSphere from "./images/greenBG.png";

export const MainBox = styled.main``;

export const BannerSection = styled.section`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding-top: 10%;
  /* width: 60%; */
  background-image: url(${greenSphere});
  background-position: 50% -40rem;
  background-size: 80rem;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export const TextBanner = styled.p`
  font-size: 4rem;
  color: white;
  width: 60%;
  font-weight: 500;
  text-align: center;
  padding: 5rem 1rem 15rem;
`;

export const GreenButton = styled.a`
  border: 0;
  padding: 1rem 2rem;
  font-weight: 600;
  text-decoration: none;
  color: black;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1rem;
  background: linear-gradient(
    90deg,
    rgba(222, 226, 61, 1) 30%,
    rgba(55, 236, 100, 1) 100%
  );
  transition: 0.2s;

  &:hover,
  :focus {
    box-shadow: 0 0 15px #30ad29;
    transform: scale(1.05);
    border: none;
    outline: none;
  }
`;
