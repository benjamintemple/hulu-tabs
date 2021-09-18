import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  ImageContainer,
  ContentContainer,
  Overlay,
  TabContainer,
  Tab,
  Underline,
  Content,
  Title,
  Description,
  LogoWrapper,
  FinePrint,
} from "../styles/styled";

export default function HuluTabs({ tabData }) {
  // if (!tabData) return "Fatal: tabData is required";
  const [activeTab, setActiveTab] = useState(0);
  const [coords, setCoords] = useState({ left: 0, width: 0 });

  const bgImageRef = useRef(null);
  const underlineRef = useRef(null);
  const contentRef = useRef(null);
  const tabRefs = useRef(null);
  tabRefs.current = [];

  const addToRefs = el => {
    if (el && !tabRefs.current.includes(el)) {
      tabRefs.current.push(el);
    }
  };

  const handleClick = id => {
    setActiveTab(id);
    setCoords({
      left:
        tabRefs.current[id].getBoundingClientRect().left -
        tabRefs.current[0].getBoundingClientRect().left,
      width: tabRefs.current[id].getBoundingClientRect().width,
    });

    let content = contentRef.current.style;

    content.transition = "none";
    content.opacity = "0";
    content.top = ".4rem";

    const timer = setTimeout(() => {
      content.transition = "all .7s ease";
      content.opacity = "1";
      content.top = "0";
    }, 50);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    handleClick(0);
    const timer = setTimeout(() => {
      underlineRef.current.style.transition = "left 0.5s, width 0.5s";
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ImageContainer>
        <Image
          ref={bgImageRef}
          src={"/" + tabData[activeTab].image}
          alt=""
          layout="fill"
          objectFit="cover"
          quality={100}
          priority={true}
        />
        <Overlay />
      </ImageContainer>
      <ContentContainer>
        <TabContainer>
          {tabData.map(({ id, text }) => (
            <Tab
              active={activeTab === id}
              onClick={() => handleClick(id)}
              key={id}
              ref={addToRefs}
            >
              {text}
            </Tab>
          ))}
        </TabContainer>
        <Underline
          ref={underlineRef}
          style={{
            left: coords.left,
            width: coords.width,
          }}
        />
        <Content ref={contentRef}>
          <Title>{tabData[activeTab].text}</Title>
          <Description>{tabData[activeTab].description}</Description>
          <LogoRow logos={tabData[activeTab].logos} />
          <FinePrint>
            Live TV plan required. Regional restrictions, blackouts and
            additional terms apply. <a href="#">See details</a>
          </FinePrint>
        </Content>
      </ContentContainer>
    </>
  );
}

const LogoRow = ({ logos }) => {
  {
    return logos.map(logos => (
      <LogoWrapper key={logos.url}>
        <Image
          src={logos.url}
          alt={logos.alt}
          width="55"
          height="25"
          layout="fixed"
        />
      </LogoWrapper>
    ));
  }
};
