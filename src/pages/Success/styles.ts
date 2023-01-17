import styled from 'styled-components'

export const PageContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;

  margin-top: 2.5rem;
  padding: 0 2rem;

  @media (min-width: 750px) {
    padding: 0 5rem;
  }
  @media (min-width: 1350px) {
    padding: 0 10rem;
  }

  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme['yellow-dark']};
    margin-bottom: 0.25rem;
  }

  p {
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
    font-stretch: 100;
  }

  .success-information {
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: space-between;
    gap: 6.37rem;
    margin-top: 2.5rem;
  }
`

export const OrderInformation = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 6px 36px;
  border: 1px solid transparent;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%) border-box;

  .information-box {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 0.75rem;
    align-items: center;
    color: ${(props) => props.theme.background};
  }

  .information {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  p {
    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;
  }

  strong {
    font-size: 1rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-text']};
  }
`
