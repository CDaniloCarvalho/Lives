import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border:1px solid;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  margin:20px auto;
  
  

  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .6;
  width: 318px;
  height: 217px;
  
  
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
