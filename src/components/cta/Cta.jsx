import { Btn, Container, Flex, Section } from './../styled/UI.styled';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #333;
  padding: 62px 98px;
  color: white;
`;

const CtaTitle = styled.h2`
  font-size: 36px;
  line-height: 44px;
  margin-bottom: 16px;
  max-width: 456px;
`;

const CtaSubttle = styled.p`
  font-size: 20px;
  line-height: 1.5;
  color: #8896ab;
  max-width: 456px;
  margin-bottom: 0;
`;

function Cta(props) {
  return (
    <Section>
      <Container>
        <Wrapper>
          <Flex>
            <div>
              <CtaTitle>
                The fastest way from idea to live site. Period.
              </CtaTitle>
              <CtaSubttle>
                Flex is a Small SaaS Business. Flex isn't a traditional company.
              </CtaSubttle>
            </div>
            <div>
              <Btn>Get Started</Btn>
              <Btn secondary>Learn more</Btn>
              <SecondaryBtn>Learn more</SecondaryBtn>
            </div>
          </Flex>
        </Wrapper>
      </Container>
    </Section>
  );
}
export default Cta;
