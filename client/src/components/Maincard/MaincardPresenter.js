import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Flex, { FlexItem } from "styled-flex-component";
import yeed from 'assets/images/yeed-symbol.png';
import { Yeed } from "components/Shared";
import { Download } from 'styled-icons/feather/Download';
import { PersonAdd } from 'styled-icons/material/PersonAdd';
import Store from "context/store";

const Notification = styled.div`
  background-color: #ffffff;
  box-shadow: 0 7px 14px rgba(0,0,0,.0975);, 0 3px 6px rgba(0, 0, 0, 0.08);
  width: 50%;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 90px;
  box-sizing: border-box;
  border: 2px solid rgba(0,0,0,.0975);
`;

const Title = styled.span`
  font-weight: 400;
  display: flex;
  font-size: 1.3em;
  margin-left: 10px;
`;

const Line = styled.span`
  font-weight: 400;
  font-size: 1.3em;
  display: flex;
  border-bottom: 0.1px solid rgb(105,105,105);
  width: 100%;
`;

const Address = styled.span`
  font-weight: 400;
  font-size: 1.1em;
  margin-top: 20px;
  width: 100%;
`;

const Balance = styled.span`
  font-weight: 400;
  font-size: 1.1em;
  margin-top: 30px;
  width: 100%;
`;


const ImportAccount = styled(Download)`
  width: 20px;
  margin-right:7px;
`

const CreateAccount = styled(PersonAdd)`
  width: 20px;
  margin-right:7px;
`

const Button = styled.button`
  border: 0;
  width: 150px;
  height: 5%;
  padding: 10px 0;
  color: #f5f6fa;
  margin-right:10px;
  margin-top:15px;
  margin-bottom:15px;
  background-color: #006266;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: all 0.1s linear;
  cursor: pointer;
  &:focus,
  &:active {
    outline: none;
  }
  &:hover {
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
    transform: translateY(-1px);
  }
  &:active {
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    background-color: #7f8c8d
    transform: translateY(1px);
  }
  &:disabled {
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    background-color: #009432;
    transform: none;
    cursor: progress;
    &:focus,
    &:active,
    &:hover {
      transform: none;
    }
  }
`;
// background-color: ${props => {
//   if (props.seen) {
//     return "#7f8c8d";
//   } else if (props.success) {
//     return "#2ecc71";
//   } else if (props.danger) {
//     return "#e74c3c";
//   }
// }};
const MaincardPresenter = ({ id, text, balance, address }) => (
  <Notification >
    <Flex alignCenter justifyBetween>
      <Title>
        {text} 
        <Yeed><img src={yeed} alt="yeed" /></Yeed>
        {balance}
      </Title>
    </Flex>
    <Line/>
    <Flex alignCenter justifyBetween>
      <FlexItem>
        <Fragment>
          <Store.Consumer>
            {store => (
              <Fragment>
                <Button
                  import
                  onClick={() => store.seeNotification(id)}
                >
                <ImportAccount/> 
                IMPORT ACCOUNT
                </Button>
                <Button
                  create
                  onClick={() => store.createAccount()}
                >
                <CreateAccount/>
                CREATE ACCOUNT
                </Button>
              </Fragment>
            )}
          </Store.Consumer>
        </Fragment>
      </FlexItem>
    </Flex>
    <Line/>
    <Flex alignCenter justifyBetween>
      <Address>{address}</Address>
      <FlexItem>
        <Fragment>
          <Fragment>
            <Balance>{address ? balance : null}</Balance>
          </Fragment>
        </Fragment>
      </FlexItem>
    </Flex>
  </Notification>
);

MaincardPresenter.propTypes = {
  text: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired
};

export default MaincardPresenter;
