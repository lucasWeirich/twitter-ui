import styled from "styled-components";

export const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 24px 20px;

  @media (max-width: 800px) {
    padding: 24px 10px;
    align-items: center;

    & button {
      display: none;
    }
  }
`

export const Logo = styled.img`
  width: 32px;
  height: 32px;
`

export const Menu = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    gap: 32px;

    li {
      height: 32px;
      display: flex;
      align-items: center;
      gap: 20px;

      & a {
        display: flex;
        align-content: center;
        gap: 20px;
        font-size: 20px;
        font-weight: bold;
        line-height: 35px;
        text-decoration: none;
        transition: all 0.3s;

        & svg path {
          transition: all 0.3s;
          
          &.--fill {
            fill: var(--color);
          }

          &.--stroke {
            stroke: var(--color);
          }
        }

        &:hover, &.active {
          color: var(--blue);

          & .--fill {
            fill: var(--blue);
          }

          & .--stroke {
            stroke: var(--blue);
          }
        }
      }
    }
  }

  @media (max-width: 800px) {
    
    & span {
      display: none;
    }

    & svg {
      width: 30px;
    }
  }
`