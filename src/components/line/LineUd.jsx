const LineUd = () => {
  return <Lined id="lineud"></Lined>;
};

export default LineUd;

// -----------------styled-----------------------

const Lined = styled.span`
  position: absolute;
  width: 1px;
  height: 100%;
  background: #9a9a99;
  top: auto;
  left: 45px;
  z-index: -999;
  opacity: 0.1;
`;
