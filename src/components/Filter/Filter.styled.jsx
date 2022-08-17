import styled from "styled-components";

export const Container = styled.div`
width: 100%;
font-size: 20px;
display: flex;
flex-direction: column;
margin-top: 30px;
margin-bottom: 30px;
// border: 1px solid #ffffff;
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
	font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.03em;
  border-radius: 10px;
	line-height: 1.7;
  padding: 15px;
	color: #c4c3ca;
`

export const Input = styled.input`
    width: 80%;
    margin-top: 10px;
    box-shadow: 0px 1px 2px 0px rgba(0, 65, 200, 0.5),
            1px 2px 4px 0px rgba(0,65,200,0.5),
            2px 4px 8px 0px rgba(0,65,200,0.5),
            2px 4px 16px 0px rgba(0,65,200,0.5);
`
