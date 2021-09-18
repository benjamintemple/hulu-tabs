import styled from "styled-components";

export const ImageContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: -1;
`;

export const ContentContainer = styled.div`
  height: 100vh;
  width: 80%;
  margin: 0 auto;
  padding-top: 15rem;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.6;
`;

export const TabContainer = styled.ul`
  list-style-type: none;
  display: flex;
  /* margin: 0 0 0.3rem 0; */
  padding: 0;
`;

export const Tab = styled.li`
  margin: 0 1.5rem 0 0;
  opacity: ${props => (props.active ? "1" : "0.7")};
  cursor: pointer;
  &:hover {
    opacity: ${props => (props.active ? "0.7" : "0.5")};
  }
  font-weight: bold;
  font-size: 12px;
  line-height: 13px;
  letter-spacing: -0.1px;
  text-transform: uppercase;
  color: #fff;
`;

export const Content = styled.section`
  position: relative;
`;

export const Underline = styled.div`
  padding: 2.5px 0;
  background-color: #fff;
  display: inline-block;
  position: relative;
  /* right: 20px; */
`;

export const Title = styled.h2`
  font-size: 62px;
  line-height: 84px;
  letter-spacing: 0.1rem;
  text-align: left;
  margin-top: 1rem;
  margin-bottom: 0;
  max-width: 650px;
  font-weight: 800;
  color: #fff;
`;

export const Description = styled.p`
  max-width: 500px;
  font-size: 24px;
  line-height: 34px;
  margin-top: 18px;
  text-align: left;
  color: #fff;
  letter-spacing: 0.1rem;
  font-weight: 300;
`;

export const FinePrint = styled.p`
  font-size: 0.6rem;
  color: #fff;
  opacity: 0.8;
`;
