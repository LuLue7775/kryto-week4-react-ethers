import React from "react";
import { ethers } from "ethers";

export const BlockchainContext = React.createContext({
  currentAccount: null,
  provider: null
});

const BlockchainContextProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = React.useState(null);
  const [provider, setProvider] = React.useState(null);

  React.useEffect(() => {
    /*
     * 使用 window.ethereum 來透過 Matamask 來取得錢包地址
     * 參考資料: https://docs.metamask.io/guide/rpc-api.html
     * 並且將錢包地址設定在上方事先寫好的 currentAccount state
     * 加分項目1: 使用 window.ethereum 偵測換錢包地址事件，並且切換 currentAccount 值
     * 加分項目2: 使用 window.ethereum 偵測目前的鏈是否為 Rinkeby，如果不是，則透過 window.ethereum 跳出換鏈提示
     * 提示: Rinkeby chain ID 為 0x4
     */
    const updateCurrentAccounts = (accounts) => {
      const [_account] = accounts;
      setCurrentAccount(_account);
    }
    
    window.ethereum?.request({ method: 'eth_requestAccounts' })
    .then(res => updateCurrentAccounts(res))
    .catch( (err) => { if (err.code === 4001) window.alert('Please connect to MetaMask.'); } );
    // verion 2 : able to detect account changes
    // const detectAndUpdateAccountChanges = async () => {
    //   window.ethereum
    //   ?.request({ method: "eth_requestAccounts" })
    //   .then(res => updateCurrentAccounts(res))
    //   window.ethereum?.on("accountsChanged", updateCurrentAccounts);
    // }
    // detectAndUpdateAccountChanges();
    
    // verion 3 : notify changing chain
    const detectChain = async () => {
      try {
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x4' }],
        });
      } catch (switchError) {
        console.log(switchError)
        //  if not 04 then notify user
        if (error.code == -32002) {
          window.alert("請確認metamask鏈是否為Rinkeby");
        }
      }     
    }

    detectChain();
    
    window.ethereum?.on("chainChanged", detectChain);

  }, []);

  React.useEffect(() => {
    /*
     * 使用 ethers.js
     * 透過 Web3Provider 將 window.ethereum 做為參數建立一個新的 web3 provider
     * 並將這個新的 web3 provider 設定成 provider 的 state
     */
    
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(provider);
  }, []);

  return (
    <BlockchainContext.Provider value={{ currentAccount, provider }}>
      {children}
    </BlockchainContext.Provider>
  );
};

export default BlockchainContextProvider;
