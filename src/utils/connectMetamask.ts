import { ethers } from "ethers";

export async function connectMetamask(){
    if(!window.ethereum){
        alert("Voce precisa da Metamask!");
    } else{
        try{

            const web3Provider = new ethers.providers.Web3Provider(window.ethereum)
            
            const accounts = await web3Provider.send('eth_requestAccounts' ,[]);
            const address = accounts[0];
            const web3Signer = web3Provider.getSigner(address);
            
            return {
                web3Provider,
                web3Signer,
                address
            }

        } catch(err){
            console.log(err);
            return null;
        }
    }
}

export function getMetamaskProvider(){
    if(!window.ethereum){
        alert("Você precisa da Metamask!");
    } else{
        try{
            const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
            return web3Provider;

        } catch(err){
            return null;
        }
    }
}

export async function switchNetwork(chainId: number) {
    if (typeof window !== 'undefined' && window.ethereum) {
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: ethers.utils.hexValue(chainId) }],
        });
      } catch (switchError: any) {
        if (switchError.code === 4902) {
          try {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [{
                chainId: ethers.utils.hexValue(chainId),
                // Add other network details here
              }],
            });
          } catch (addError: any) {
            console.error(addError);
          }
        } else {
          console.error(switchError);
        }
      }
    } else {
      alert('You need to have MetaMask installed to change networks!');
    }
  }