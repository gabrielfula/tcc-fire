import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const ContentRoom = styled.div`
  display: flex;
  padding: 9rem 0 0 12rem;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

 section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.red};
  }
`;

export const FireDetected = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  span {
    color: ${({ theme }) => theme.colors.red};
  }
`;

export const Icon = styled.div`
  color: ${({ theme }) => theme.colors.red};
`;
