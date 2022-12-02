import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { RightSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey, I am Bruno <br />
          I am a Developer
        </SectionTitle>
        <SectionText>
        I am an experienced Engineer, I have worked as a project designer and manager for 10 years. During my professional journey I worked for a tech company that develops SaaS products. <br />
        I have experience with agile scrum methodology and a passion for digital innovation;
        </SectionText>
        <Button onClick={props.handleClick}>Download CV</Button>
      </LeftSection>
      <RightSection>
<img src="images/me2.png" alt="me"/>
  </RightSection>
    </Section>
  </>
);

export default Hero;