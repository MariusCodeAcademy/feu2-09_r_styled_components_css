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
`;
// Susikurti SingleCard componenta naudojan styled components

//
