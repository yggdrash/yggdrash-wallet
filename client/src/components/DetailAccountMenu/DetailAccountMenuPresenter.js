import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Flex, { FlexItem } from "styled-flex-component";
import ModalHeader from 'components/AddressHeader';
import ReactModal from 'react-modal';
import { Button } from "components/Shared";
import Store from "context/store";

const txProp = "transfer"
const Transfer = styled(ReactModal)`
  border: 0;
  width: 50%;
  position: absolute;
  top: 30%
  left: 25%;
  background-color: rgba( 22, 48, 72, 0.9 );
  border: 2px solid rgba(0,0,0,.0975);
  box-shadow: 0 7px 14px rgba(0,0,0,.0975);, 0 3px 6px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  box-sizing: border-box;
  border-color: rgba(70, 219, 115, 0);
  &:focus,
  &:active {
    outline: none;
  }
  -webkit-animation-name: zoom;
    -webkit-animation-duration: 0.3s;
    animation-name: zoom;
    animation-duration: 0.3s;
  @-webkit-keyframes zoom {
      from {-webkit-transform:scale(0)} 
      to {-webkit-transform:scale(1)}
  }
  
  @keyframes zoom {
      from {transform:scale(0)} 
      to {transform:scale(1)}
  }
`
const Submit = styled.input`
  border: 0;
  margin-right:10px;
  background-color:transparent
  padding: 10px 0;
  border-bottom: 0.2px solid ${props => {
    if (props.AlertImportAccount) {
      return "rgb(204,000,000);";
    } else if(props.toAddress || props.amount || props.password) {
      return "rgb(75,203,188);";
    } else {
      return "";
    }
  }};
  color: white;
  &::-webkit-input-placeholder {
    color: #dfe6e9
  }
  &:focus,
  &:active {
    outline: none;
  }
  &:disabled{
      color:#999;
      border: 2px solid #999;
      cursor:not-allowed;
      transform: none;
      box-shadow:none;
      &:focus,
      &:active,
      &:hover {
        transform: none;
      }
  }
  &:hover {
    border-bottom: 0.2px solid ${props => (props.AlertImportAccount ?"rgb(204,000,000);" : "rgb(75,203,188);")}
  }
`;
const Input = Submit.extend`
  width: 90%;
  height: 40px;
  font-size: 0.9em;
  margin-left:40px;
  padding-left: 10px;
  margin-top:${props => (props.addressInput ? "10px" : "30px")}
  margin-bottom:${props => (props.passwordInput ? "20px" : "")}
`;
const Loading = styled.div`
  position: absolute;
  top: calc(50% - 4em);
  left: calc(50% - 4em);
  width: 6em;
  height: 6em;
  border: 1.1em solid rgba(0, 0, 0, 0.2);
  border-left: 1.1em solid #000000;
  border-radius: 50%;
  animation: load8 1.1s infinite linear;
  @keyframes load8 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
const AlertInfo = styled.div`
  margin-top:20px;
  margin-bottom: 10px;
  text-align: center;
  font-size: 1em;
  font-weight: 400;
  transition: all 0.1s linear;
  color:#E35B5B;
`;

const DetailAccountMenuPresenter = ({ balace, transaction, toAddress, amount, password, isloading, handleInput, alertInput, deleteAccount }) => (
  <Flex>
  <Store.Consumer>
    {store => (
        <Transfer
        isOpen={store.showDetailAccountMenuModal}
        style={{
          content: {
            color: 'black'
          }
        }}
      >
        <ModalHeader/>  
        { 
          store.statusModal === "transfer"
          ?
          <FlexItem>
            <Input addressInput toAddress={ toAddress }
            placeholder={"Address"}
            required
            name="toAddress"
            value={toAddress}
            type={"text"}
            onChange={handleInput}
            />
            <Input amountInput amount={ amount }
              placeholder={"Amount"}
              required
              name="amount"
              type={"number"}
              value={amount}
              onChange={handleInput}
              max={store.balance}
            />
            <Input passwordInput password={ password }
              placeholder={"Password"}
              required
              name="password"
              type={"password"}
              value={password}
              onChange={handleInput}
            />

            <AlertInfo>
              { alertInput }
            </AlertInfo>
          </FlexItem>
          :
          ""
        }
        { 
          store.statusModal === "delete"
          ?
          <FlexItem>
            <Input passwordInput password={ password }
              placeholder={"Password"}
              required
              name="password"
              type={"password"}
              value={password}
              onChange={handleInput}
            />

            <AlertInfo>
              { alertInput }
            </AlertInfo>
          </FlexItem>
          :
          ""
        }
          
          
        <Flex alignCenter justifyBetween>
          <FlexItem>
            <Fragment/>
          </FlexItem>
          <FlexItem>
            <Fragment>
              <Button 
                onClick={() => {
                  if(store.statusModal === "transfer"){
                    transaction(store.selectAddress)
                  }else if(store.statusModal === "delete"){
                    deleteAccount(store.selectAddress)
                  }
                }}
              >
                SEND
              </Button>
            </Fragment>
            <Fragment>
              <Button 
                onClick={() => store.closeModal(txProp)}>
                CLOSE
              </Button>
            </Fragment>
          </FlexItem>
        </Flex>
        { isloading ? <Loading/>: ""}
      </Transfer>
    )}
    </Store.Consumer>
  </Flex>
);

DetailAccountMenuPresenter.propTypes = {
  handleInput: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  toAddress: PropTypes.string,
  amount: PropTypes.string
};

ReactModal.setAppElement('body');
export default DetailAccountMenuPresenter;
