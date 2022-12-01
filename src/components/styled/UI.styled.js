import styled from 'styled-components';

// susikuri Section styled componenta
export const Section = styled.section`
  padding-top: 6%;
  padding-bottom: 5%;
`;
// susikuri Container styled componenta
export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 20px;
`;
// susikuri Grid componenta

// jei gaunam propsa pavadinimu cols, tai tai bus kiek stulpeliu
// kitu atveju 3
export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(${(props) => props.cols || '3'}, 1fr);
  gap: 1rem;
  list-style: none;
  padding-left: 0;
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
// Susikurti SingleCard componenta naudojan styled components

// Icon
// nustatem papildomus atributus priklausancius nuo props
export const Icon = styled.i.attrs((props) => ({
  className: `fa fa-${props.icon}`,
  ariaHidden: true,
}))`
  font-size: 24px;
  width: 64px;
  height: 64px;
  background-color: var(--primary-500);
  color: #fff;
  display: inline-block;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;

// buttto type submit

// defaut attributes using attrs
const SubmitBtn = styled.button.attrs({
  type: 'submit',
})`
  font-size: 2rem;
`;

// Sukurti Flex styled komponent
// kuris isdelioja elementus kaip pavyzdyje
