import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed; /* full screen */
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #f7f7f7; /* optional */
  z-index: 9999;
`;

const SpinnerBox = styled.div`
  position: relative;
  width: ${({ size }) => size || "100px"};
  height: ${({ size }) => size || "100px"};
`;

const Dot = styled.div`
  position: absolute;
  width: ${({ dotSize }) => dotSize || "12px"};
  height: ${({ dotSize }) => dotSize || "12px"};
  border-radius: 50%;
  background-color: ${({ color }) => color};

  animation: spin 1.2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg) translate(40px) rotate(0deg);
    }
    100% {
      transform: rotate(360deg) translate(40px) rotate(-360deg);
    }
  }
`;

/* 🌈 Smooth blue gradient (dark → light) */
const colors = [
  "#0d47a1",
  "#1565c0",
  "#1976d2",
  "#1e88e5",
  "#2196f3",
  "#42a5f5",
  "#64b5f6",
  "#90caf9",
  "#bbdefb",
  "#e3f2fd",
];

const Spinner = ({ size = "100px", dotSize = "12px" }) => {
  return (
    <Wrapper>
      <SpinnerBox size={size}>
        {colors.map((color, index) => (
          <Dot
            key={index}
            color={color}
            dotSize={dotSize}
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          />
        ))}
      </SpinnerBox>
    </Wrapper>
  );
};

export default Spinner;