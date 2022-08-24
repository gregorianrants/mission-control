import styled from "styled-components";


const Outline = styled.div`
  position: absolute;
  left: ${props=>props.left+'px'};
  top: ${props=>props.top+'px'};
  width: ${props=>props.width+'px'};
  height: ${props=>props.height+'px'};
  border: 2px solid red;
`

const Name = styled.p`
  size: 18px;
  font-weight: bold;
  color: red;

`


export default function Box({bbox,name}){
    const [x,y,width,height] = bbox

    return <Outline left={x} top={y} width={width} height={height}>
        <Name>{name}</Name>
            </Outline>
}