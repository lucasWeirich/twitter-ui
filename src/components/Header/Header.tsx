import { useState } from "react"
import styled from "styled-components"

interface HeaderProps {
  title: string
  themeTwitterDark?: boolean
}

export default function Header({ title, themeTwitterDark }: HeaderProps) {

  const [themeDark, setThemeDark] = useState<boolean>(themeTwitterDark || false)

  function handleTheme() {
    const page = document.querySelector('body')

    setThemeDark(!themeDark)
    page?.classList.toggle('--dark')
    localStorage.setItem('themeTwitter', `${themeDark}`)
  };


  return <Wrapper>
    <Title>{title}</Title>

    <Theme onClick={handleTheme}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.0031 16.4532L11.2031 21.3375C11.1499 21.4811 11.0539 21.6049 10.9282 21.6923C10.8025 21.7797 10.6531 21.8265 10.5 21.8265C10.3469 21.8265 10.1975 21.7797 10.0718 21.6923C9.94608 21.6049 9.85016 21.4811 9.79688 21.3375L7.99688 16.4532C7.95889 16.3501 7.89898 16.2564 7.82129 16.1787C7.7436 16.1011 7.64998 16.0411 7.54688 16.0032L2.6625 14.2032C2.51897 14.1499 2.39518 14.054 2.30776 13.9283C2.22035 13.8026 2.17349 13.6531 2.17349 13.5C2.17349 13.3469 2.22035 13.1975 2.30776 13.0718C2.39518 12.9461 2.51897 12.8502 2.6625 12.7969L7.54688 10.9969C7.64998 10.9589 7.7436 10.899 7.82129 10.8213C7.89898 10.7436 7.95889 10.65 7.99688 10.5469L9.79688 5.66253C9.85016 5.519 9.94608 5.39521 10.0718 5.3078C10.1975 5.22038 10.3469 5.17352 10.5 5.17352C10.6531 5.17352 10.8025 5.22038 10.9282 5.3078C11.0539 5.39521 11.1499 5.519 11.2031 5.66253L13.0031 10.5469C13.0411 10.65 13.101 10.7436 13.1787 10.8213C13.2564 10.899 13.35 10.9589 13.4531 10.9969L18.3375 12.7969C18.481 12.8502 18.6048 12.9461 18.6922 13.0718C18.7797 13.1975 18.8265 13.3469 18.8265 13.5C18.8265 13.6531 18.7797 13.8026 18.6922 13.9283C18.6048 14.054 18.481 14.1499 18.3375 14.2032L13.4531 16.0032C13.35 16.0411 13.2564 16.1011 13.1787 16.1787C13.101 16.2564 13.0411 16.3501 13.0031 16.4532Z" stroke="#1DA1F2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M16.5 1.5V6" stroke="#1DA1F2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M18.75 3.75H14.25" stroke="#1DA1F2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M21 6.75V9.75" stroke="#1DA1F2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M22.5 8.25H19.5" stroke="#1DA1F2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </Theme>
  </Wrapper>
}

const Wrapper = styled.div`
  border-bottom: solid 1px var(--border);
  padding: 24px 20px; 
  background-color: var(--bg);
  display: flex;
  justify-content: space-between;
`

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;

  &::first-letter {
    text-transform: uppercase;
  }
`

const Theme = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  outline: none;
  background-color: transparent;

  & svg path {
    transition: all 0.3s;
  }
`
