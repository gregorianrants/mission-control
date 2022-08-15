import styled from "styled-components";


const Outline = styled.div`
  position: absolute;
  left: ${props=>props.left+'px'};
  top: ${props=>props.top+'px'};
  width: ${props=>props.width+'px'};
  height: ${props=>props.height+'px'};
  border: 1px solid red;
`


export default function Box({bbox,name}){
    const [x,y,width,height] = bbox

    return <Outline left={x} top={y} width={width} height={height}>
        <p>{name}</p>
            </Outline>
}