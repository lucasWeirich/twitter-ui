import styled from "styled-components"
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  label: string
  small?: boolean
}

export default function Button({ label, small, type }: ButtonProps) {
  return <Wrapper
    small={small}
    type={type}
  >
    {label}
  </Wrapper>
}

const Wrapper = styled.button<{
  small?: boolean | false
}>`
  width: 100%;
  height: ${p => p.small ? '40px' : '55px'};
  font-size: ${p => p.small ? '16px' : '20px'};
  font-weight: 700;
  color: #fff;
  background: var(--blue);
  border: none;
  border-radius: 999px;
  transition: all 0.3s;

  &::first-letter {
    text-transform: uppercase;
  }

  &:hover {
    box-shadow: 4px 4px 12px #1da1f280;
  }
`