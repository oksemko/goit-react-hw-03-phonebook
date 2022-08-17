import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 768px;
    min-height: 100%;
    margin: 0 auto;
    background-color: #2a2b38;
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg');
    background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 250%;
  border-radius: 10px;


`

export const Title = styled.a`
  font-family: "Work Sans", sans-serif;
	font-size: 25px;
  font-weight: 600;
  letter-spacing: 0.03em;
  text-align: center;
  border-radius: 10px;
	line-height: 1.7;
  padding: 15px;
  margin: 20px;
	color: #c4c3ca;
	box-shadow: 0 15px 25px rgba(0,0,0,.9);
  background-color: rgba(0,0,0,0.6);

  background-clip: text;
  background-image: linear-gradient(to left, #09f1b8, #00a2ff);
  color: rgba(0,0,0,0.6);
  -webkit-text-stroke-color: transparent;
  -webkit-text-stroke-width: 300px;
`
