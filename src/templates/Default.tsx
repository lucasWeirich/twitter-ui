import styled from "styled-components"
import Header from "../components/Header/Header"
import SideBar from "../components/SideBar/SideBar"
import usePageTitle from "../Hooks/usePageTitle"

interface TemplateDefaultProps {
  children: React.ReactNode
  title: string
}

export default function TemplateDefault(props: TemplateDefaultProps) {

  usePageTitle(props.title)

  return <Wrapper>
    <SideBar />

    <Content>
      <Header title={props.title} />
      {props.children}
    </Content>
  </Wrapper>
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  min-height: 100vh;
  margin: auto;
  display: grid;
  grid-template-columns: 320px auto;

  @media (max-width: 800px) {
    grid-template-columns: 60px auto;
  }
`

const Content = styled.div`
  border-left: solid 1px var(--border);
  border-right: solid 1px var(--border);
  background-color: var(--bg-content);
`