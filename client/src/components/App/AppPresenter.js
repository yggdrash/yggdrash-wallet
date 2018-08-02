import React, { Fragment }  from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Flex from "styled-flex-component";
import AccountBox from "components/AccountBox";
import NetworkBox from "components/NetworkBox";
import Header from 'components/Header';
import germinal from 'assets/images/germinal.png';
// import grass from 'assets/images/foot.png';
import Store from "context/store";

const Footer = styled.div`
  // font-weight: 600;
  // color: #508464;
  margin-top: 100px;
  // margin-bottom: 30px;
  // width:100px;
`;

const Germinal = styled.div`
  width:50px;
  // margin-top:30px;
`;

const AppPresenter = ({ }) => (
      <Fragment>
        <Header />
          <Flex alignCenter full column>
            <Store.Consumer>
              {store => {
                return Object.keys(store.account).map(key => (
                  <AccountBox
                    key={store.account[key].id}
                    id={store.account[key].id}
                    password={store.password}
                    text={store.text}
                    address={store.address}
                    selectAddress={store.selectAddress}
                    balance={store.balance}
                    mnemonic={store.mnemonic}
                    importMnemonic={store.importMnemonic}
                    word3={store.word3}
                    word6={store.word6}
                    word9={store.word9}
                    AlertImportAccount={store.AlertImportAccount}
                    toAddress={store.toAddress}
                    amount={store.amount}
                    recoveryPharse={store.recoveryPharse}
                  />
                ));
              }}
            </Store.Consumer>
          </Flex>
          <Flex alignCenter full column>
          {/* <Germinal><img src={germinal} alt="yggtree" /></Germinal> */}
            <Store.Consumer>
              {store => {
                return Object.keys(store.account).map(key => (
                  <NetworkBox

                  />
                ));
              }}
            </Store.Consumer>
          </Flex>
          <Flex alignCenter full column>
            <Footer><Germinal><img src={germinal} alt="germinal" /></Germinal></Footer>
          </Flex>
      </Fragment>
);

AppPresenter.propTypes = {
  // balance: PropTypes.string
    text: PropTypes.string,
    address: PropTypes.array,
    mnemonic: PropTypes.string,
    importMnemonic: PropTypes.string,
    createAccount: PropTypes.func.isRequired,
    createAccountModal: PropTypes.func.isRequired,
    importAccountModal: PropTypes.func.isRequired,
    importAccount: PropTypes.func.isRequired,
    confirmCreateAccount: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    selectAddress: PropTypes.string,
    toAddress: PropTypes.string,
    amount: PropTypes.string
};

AppPresenter.defaultProps = {
  createAccount: PropTypes.func,
  createAccountModal: PropTypes.func,
  importAccountModal: PropTypes.func,
  importAccount: PropTypes.func,
  confirmCreateAccount: PropTypes.func,
  closeModal: PropTypes.func,
};


export default AppPresenter;