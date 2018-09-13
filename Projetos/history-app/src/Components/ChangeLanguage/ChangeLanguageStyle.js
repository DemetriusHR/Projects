import styled from 'styled-components';

const ChangeLanguageWrapper = styled.div`
padding: 7px;
font-size: 9px;
-webkit-touch-callout: none;
-webkit-user-select: none;
 -khtml-user-select: none;
   -moz-user-select: none;
    -ms-user-select: none;
        user-select: none;

.title {
  margin: 0;
  padding-bottom: 10px;
  padding-left: 10px;
  font-weight: 600;
}

.language {
  padding: 1px 10px;
  border-radius: 3px;
}

.language:hover {
  cursor: pointer;
}
`;

export default ChangeLanguageWrapper;
