import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 56px auto;
  gap: 12px;
  padding: 24px 20px;
  background-color: var(--bg);
`

export const Img = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  overflow: hidden;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const User = styled.h3`
  font-size: 16px;
  font-weight: bold;

  & span {
    font-size: 14px;
    font-weight: 500;
    color: var(--placeholder);
  }
`

export const Post = styled.div`
  font-size: 16px;
  font-weight: 400;
`

export const Actions = styled.div`
  display: flex;
  gap: 48px;
`