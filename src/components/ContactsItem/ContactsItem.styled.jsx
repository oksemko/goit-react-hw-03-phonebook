import styled from "styled-components";

export const Button = styled.button`
display: block;
border-radius: 10px;
font-size: 14px;
padding: 10px;
    // margin-top: 20px;
    // width: 180px;
    background-color: white;
    cursor: pointer;
    box-shadow: 0px 1px 2px 0px rgba(0, 65, 200, 0.5),
            1px 2px 4px 0px rgba(0,65,200,0.5),
            2px 4px 8px 0px rgba(0,65,200,0.5),
            2px 4px 16px 0px rgba(0,65,200,0.5);

  {&}:hover{
  background-color: #102770;
  color: #c4c3ca;
  box-shadow: 0 8px 24px 0 rgba();
}
`

export const ContactsElement = styled.li`
  display: flex;
  align-items: center;
  color: #c4c3ca;
  box-shadow: 0 8px 24px 0 rgba();
  cursor: pointer;
    box-shadow: 0px 1px 2px 0px rgba(0, 65, 200, 0.5),
            1px 2px 4px 0px rgba(0,65,200,0.5),
            2px 4px 8px 0px rgba(0,65,200,0.5),
            2px 4px 16px 0px rgba(0,65,200,0.5);

{&}:not(:first-child) {
margin-top: 20px;
}
`

export const Span = styled.span`
  display: flex;
  align-items: center;
  // color: #c4c3ca;
  // box-shadow: 0 8px 24px 0 rgba();
  flex-basis: calc(150% / 3);
`
