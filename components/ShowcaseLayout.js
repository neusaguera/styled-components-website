import React, { Component } from 'react';
import styled from 'styled-components';
import Head from './SeoHead';
import Nav from './Nav';

import { Content } from '../components/Layout';

import rem from '../utils/rem';
import { headerFont } from '../utils/fonts';
import { ocher } from '../utils/colors';

const Wrapper = styled.div`
  display: inline-block;
  margin: ${rem(35)} 0;
  text-align: left;
  width: 100%;
`;

const Title = styled.div`
  @media screen and (min-width: 800px) and (min-height: 421px) {
    margin-top: -3rem;
  }
  h1,
  h2 {
    margin: 0;
    @media screen and (min-width: 800px) and (min-height: 421px) {
      text-align: center;
      width: 70%;
      margin: 0 auto;
    }
  }
`;

const Tagline = styled.h1`
  display: block;
  text-align: left;
  width: 100%;
  color: ${ocher};
  font-size: ${rem(42)};
  font-weight: bold;
  font-family: ${headerFont};
`;

const SupportingTagline = styled.h2`
  font-weight: 400;
  font-size: 1.1rem;
`;

class ShowcaseLayout extends Component {
  state = {
    isSideFolded: true,
    isMobileNavFolded: true,
  };

  static defaultProps = {
    title: '',
    description: '',
  };

  render() {
    const { children, title, description } = this.props;

    return (
      <div>
        <Head title={`styled-components${title ? `: ${title}` : ''}`} description={description}>
          <meta name="robots" content="noodp" />
        </Head>

        <Nav showSideNav={false} />

        <Wrapper>
          <Content>
            <Title>
              <Tagline>Showcase</Tagline>
              <SupportingTagline>
                styled-components is used by teams all around the world to create beautiful websites like these:
              </SupportingTagline>
            </Title>
          </Content>
          {children}
        </Wrapper>
      </div>
    );
  }
}

export default ShowcaseLayout;
