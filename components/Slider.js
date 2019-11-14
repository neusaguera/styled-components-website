import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import Image from './Image';
import Navigation from './Slider/Navigation';
import Link from './Link';
import { headerFont } from '../utils/fonts';

const NavWidth = 192;
const NavHeight = 144;
const NavOffset = 32;
const ScreenMultipliers = {
  xs: 0.3,
  sm: 0.5,
  md: 0.75,
  lg: 1,
};

const Wrapper = styled.div`
  width: 100%;
  @media screen and (min-width: 800px) and (min-height: 421px) {
    margin-top: -32px;
  }
`;

const Section = styled.section`
  display: flex;
  min-height: 0;
  min-width: 0;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.div`
  width: ${NavWidth * ScreenMultipliers.xs}px;
  min-width: ${NavWidth * ScreenMultipliers.xs}px;
  height: ${NavHeight * ScreenMultipliers.xs}px;
  overflow: hidden;
  transition: all 0.2s ease;

  @media screen and (min-width: 420px) {
    width: ${NavWidth * ScreenMultipliers.sm}px;
    min-width: ${NavWidth * ScreenMultipliers.sm}px;
    height: ${NavHeight * ScreenMultipliers.sm}px;
  }

  @media screen and (min-width: 800px) and (min-height: 421px) {
    width: ${NavWidth * ScreenMultipliers.md}px;
    min-width: ${NavWidth * ScreenMultipliers.md}px;
    height: ${NavHeight * ScreenMultipliers.md}px;
  }

  @media screen and (min-width: 1280px) and (min-height: 421px) {
    width: ${NavWidth * ScreenMultipliers.lg}px;
    min-width: ${NavWidth * ScreenMultipliers.lg}px;
    height: ${NavHeight * ScreenMultipliers.lg}px;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
  }

  ${props =>
    props.prev
      ? `
    margin-left: -${NavOffset * ScreenMultipliers.xs}px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    &:hover {
      transform: translateX(${NavOffset * ScreenMultipliers.xs}px);
    }

    @media screen and (min-width: 420px) {
      margin-left: -${NavOffset * ScreenMultipliers.sm}px;

      &:hover {
        transform: translateX(${NavOffset * ScreenMultipliers.sm}px);
      }
    }

    @media screen and (min-width: 800px) and (min-height: 421px) {
      margin-left: -${NavOffset * ScreenMultipliers.md}px;

      &:hover {
        transform: translateX(${NavOffset * ScreenMultipliers.md}px);
      }
    }

    @media screen and (min-width: 1280px) and (min-height: 421px) {
      margin-left: -${NavOffset * ScreenMultipliers.lg}px;

      &:hover {
        transform: translateX(${NavOffset * ScreenMultipliers.lg}px);
      }
    }
  `
      : `
    margin-right: -${NavOffset * ScreenMultipliers.xs}px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    &:hover {
      transform: translateX(-${NavOffset * ScreenMultipliers.xs}px);
    }

    @media screen and (min-width: 420px) {
      margin-right: -${NavOffset * ScreenMultipliers.sm}px;

      &:hover {
        transform: translateX(-${NavOffset * ScreenMultipliers.sm}px);
      }
    }

    @media screen and (min-width: 800px) and (min-height: 421px) {
      margin-right: -${NavOffset * ScreenMultipliers.md}px;

      &:hover {
        transform: translateX(-${NavOffset * ScreenMultipliers.md}px);
      }
    }

    @media screen and (min-width: 1280px) and (min-height: 421px) {
      margin-right: -${NavOffset * ScreenMultipliers.lg}px;

      &:hover {
        transform: translateX(-${NavOffset * ScreenMultipliers.lg}px);
      }
    }
  `};
`;

const Body = styled.div`
  position: relative;
  max-width: 1280px;
  width: calc(100% - ${NavWidth * ScreenMultipliers.xs * 2}px);

  @media screen and (min-width: 420px) {
    width: calc(100% - ${NavWidth * ScreenMultipliers.sm * 2}px);
  }

  @media screen and (min-width: 800px) and (min-height: 421px) {
    width: calc(100% - ${NavWidth * ScreenMultipliers.md * 2}px);
  }

  @media screen and (min-width: 1280px) and (min-height: 421px) {
    width: calc(100% - ${NavWidth * ScreenMultipliers.lg * 3}px);
  }
`;

const ImageSlider = styled.div`
  flex: 1;
  margin: 0 16px;
  box-shadow: 0 30px 40px rgba(0, 0, 0, 0.12);
  max-width: 100%;
  border-radius: 4px;
  overflow: hidden;

  @media screen and (min-width: 800px) and (min-height: 421px) {
    margin: 0 32px;
  }
  @media screen and (min-width: 1280px) and (min-height: 421px) {
    margin: 0 48px;
  }

  /* Handle landscape mobile devices */
  @media screen and (max-height: 420px) {
    max-width: 70%;
    margin: 0 auto;
  }

  /* Handle landscape mobile devices with an 18:9 screen-ratio */
  @media screen and (max-height: 420px) and (min-width: 760px) {
    max-width: 55%;
  }
`;

const Caption = styled.div`
  max-width: 100%;
  text-align: center;
  margin-top: 2rem;
  z-index: 1;

  @media screen and (min-width: 800px) and (min-height: 421px) {
    margin-top: 1rem;
  `;

const Title = styled.h1`
  display: block;
  color: #333;
  font-size: 1.4rem;
  font-weight: 500;
  font-family: ${headerFont};
  margin: 0;

  @media screen and (max-height: 420px) {
    font-size: 0.65rem;
  }
`;

const Slider = ({ previousSlide, currentSlide, nextSlide }) => (
  <Wrapper>
    <Section>
      <Nav prev>
        <Navigation previous item={previousSlide} />
      </Nav>
      <Body>
        <ImageSlider>
          <Image
            width={currentSlide.width}
            height={currentSlide.height}
            src={currentSlide.src}
            margin={0}
            renderImage={() => {
              return (
                <TransitionGroup>
                  <CSSTransition key={currentSlide.src} timeout={500} classNames="fade">
                    <img src={currentSlide.src} />
                  </CSSTransition>
                </TransitionGroup>
              );
            }}
          />
        </ImageSlider>
        <Caption>
          <Title>{currentSlide.title}</Title>
          <Link inline href={currentSlide.link}>
            {currentSlide.link}
          </Link>
        </Caption>
      </Body>
      <Nav>
        <Navigation item={nextSlide} />
      </Nav>
    </Section>
  </Wrapper>
);

export default Slider;
