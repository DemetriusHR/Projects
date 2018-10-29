import styled from 'styled-components';

export const ContentWrapper = styled.div`
  width: 100%;
  background: #6748324f;
  text-align: center;

  @media screen and (max-width: 414px) {
    .cards {
      padding: 12vh 15px 20px;
    }
  }

  @media screen and (min-width: 768px) {
    .cards {
      padding: 6vh 15% 20px;
      display: grid;
      grid-template-columns: 50% 50%;
    }
  }
`;

export const ChangeLanguageContent = styled.div`
  padding: 3vh 15px 20px;
  text-align: left;
  background: #423b36;
  color: #fff;
`;
