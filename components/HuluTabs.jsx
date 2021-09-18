import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { data } from "../data/tabs";
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
  FinePrint,
} from "../styles/styled";

export default function HuluTabs() {
  const [activeTab, setActiveTab] = useState(1);
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
      //bgImageRef.current.src = `/${data[id].image}`;
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
          src={"/" + data[activeTab].image}
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
          {data.map(({ id, text }) => (
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
          <Title>{data[activeTab].text}</Title>
          <Description>{data[activeTab].description}</Description>
          <FinePrint>
            Live TV plan required. Regional restrictions, blackouts and
            additional terms apply. <a href="#">See details</a>
          </FinePrint>
        </Content>
      </ContentContainer>
    </>
  );
}
