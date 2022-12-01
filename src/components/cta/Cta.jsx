import { Container, Section } from './../styled/UI.styled';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #333;
  padding: 3rem 4rem;
  color: white;
`;

function Cta(props) {
  return (
    <Section>
      <Container>
        <Wrapper>CTA content</Wrapper>
      </Container>
    </Section>
  );
}
export default Cta;
