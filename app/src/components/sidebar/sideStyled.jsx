import styled from "styled-components";

export const Aside = styled.aside`
  background: ${({ theme }) => theme.colors.blue};
  height: 100vh;
  width: ${({ show }) => (show ? "auto" : "15rem")};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  z-index: 1000;
  font-size: 15px;
  padding: 0px 0px 10rem 0px;
  color: ${({ theme }) => theme.colors.dark};
  
  @media (max-width: 992px) {
    width: ${({ show }) => (show ? "auto" : "3rem")};
    font-size: 13px;
  }

  a {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const Hamburguer = styled.div`
  display: none;
  gap: 5px;
  flex-direction: column;
  cursor: pointer;
  position: fixed;
  top: 35px;

  @media (max-width: 992px) {
    display: flex;
  }

  .line1 {
    width: 1.4rem;
    height: 2px;
    background: ${({ theme }) => theme.colors.black};
  }
  .line2 {
    width: 1rem;
    height: 2px;
    background: ${({ theme }) => theme.colors.black};
  }
  .line3 {
    width: 1.4rem;
    height: 2px;
    background: ${({ theme }) => theme.colors.black};
  }
`;

export const MenuStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 2rem;

  @media (max-width: 992px) {
    display: ${({ show }) => (show ? "flex" : "none")};
    padding: 14px;
  }

  li {
    display: flex;
    gap: 10px;
    text-align: center;
    align-items: center;
  }

  .icons {
    color: ${({ theme }) => theme.colors.black};
    cursor: pointer;
  }
`;
