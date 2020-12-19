import React, { useState } from "react";
import styled from "styled-components";

const Tooltip = ({ children, text, showArrow = true, ...rest }) => {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <TooltipBox className={show ? "tooltip-box visible" : "tooltip-box"}>
        {text}
        {showArrow && <Arrow />}
      </TooltipBox>
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        {...rest}
      >
        {children}
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  .tooltip-box {
    position: absolute;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 5px;
    border-radius: 2px;
    top: calc(100% + 5px);
    display: none;
  }

  .tooltip-box.visible {
    display: block;
  }
`;

const TooltipBox = styled.div``;

const Arrow = styled.span`
  position: absolute;
  top: -10px;
  left: 50%;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent rgba(0, 0, 0, 0.7) transparent;
`;

export default Tooltip;
