/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const GamingHead = styled.h1`
  color: ${props => (props.isDark ? '#181818' : '#f0f0f0')};
  font-size: 20px;
  font-family: 'Roboto';
`
export const Game = styled.div`
  display: flex;
  align-items: center;
  padding-left: 5vw;
  background-color: ${props => (props.isDark ? '#f0f0f0' : '#181818')};
`

export const GamingBody = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-y: scroll;
  width: 100%;
  background-color: ${props => (props.isDark ? '#f0f0f0' : '#020202')};
  color: ${props => (props.isDark ? '#181818' : '#fff')};
  height: 90vh;
  flex-direction: column;
  
  }
`
