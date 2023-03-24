import styled from "styled-components";

export const Wrapper = styled.form<{
  type: 'tweet' | 'answer'
}>`
  display: grid;
  grid-template-columns: 56px auto ${p => p.type == 'tweet' ? 93 : 103}px;
  gap: 12px;
  background-color: var(--bg);
  padding: 24px 20px;
`

export const User = styled.img`
  border-radius: 50%;
  overflow: hidden;
`

export const Input = styled.textarea`
  border: none;
  outline: none;
  padding-top: 16px;
  background-color: transparent;
  color: var(--color);
  font-size: 18px;
  font-weight: 500;
  resize: none;
  height: auto;
  transition: all 0.2s;

  &::placeholder {
    color: var(--placeholder);
    font-size: 20px;
  }

  &:focus {
    resize: vertical;
  }
`