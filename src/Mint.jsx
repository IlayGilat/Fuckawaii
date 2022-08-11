import { useState } from "react";
import './index.css'
import {Box, Flex , Input} from '@chakra-ui/react'
import { ethers,BigNumber } from "ethers";
import fuckawaiiNFT from './FuckawaiiNFT.json'
const fuckawaiiNFTAddress = "0x14aC296e72A667B778401b58dD650BEA918Fa4b6";



const Mint =  ({accounts,setAccounts}) => {

    const [mintAmount,setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);


    async function handleMint(){
        if(window.ethereum){
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                fuckawaiiNFTAddress,
                fuckawaiiNFT.abi,
                signer
            );
            try{
                let response;
                if(mintAmount <=2){
                    response = await contract.mint(BigNumber.from(mintAmount),{
                    value:ethers.utils.parseEther((0).toString())})
                } 
                response = await contract.mint(BigNumber.from(mintAmount),{
                value:ethers.utils.parseEther((0.009 * mintAmount).toString())})
                console.log("response: ", response)
            }catch(err){
                console.log("error: ",err)
            }
        }
    }



    const handleDecrement = () => {
        if(mintAmount <= 1)return
        setMintAmount(mintAmount - 1);
    }
    const handleIncrement = () =>{
        if(mintAmount >= 20)return
        setMintAmount(mintAmount + 1); 
    }
    
    return (
        <Flex justify="center" align="center" height="95vh" paddingBottom="150px">
            <Box width="520px">
                <div>
            <p class="text-7xl   text-center  jap-font  text-fuckawaii tracking-wide ">Fuckawaii</p>
            <p class="text-4xl   text-center  jap-font  text-fuckawaii tracking-wide ">They are the Fuckawaii, The Most kawaii fuckers in the Metaverse</p>
            </div>
            {isConnected ? (
                <div>
                    <Flex align="center" justify="center">
                        <button
                            class="rounded-md mt-3 p-4 cursor-pointer  jap-font hover:bg-fuckawaii-hover active:ring bg-fuckawaii"
                            onClick={handleDecrement}>-</button>
                        <Input 
                        readOnly
                        className="jap-font"
                        fontSize="xx-large"
                        width="100px"
                        height="100px"
                        variant="unstyled"
                        textAlign="center"
                        marginTop="20px"   
                        type="number" value={mintAmount}/>
                        <button 
                            class="rounded-md mt-3 p-4 cursor-pointer  jap-font hover:bg-fuckawaii-hover active:ring bg-fuckawaii"

                        onClick={handleIncrement}>+</button> 
                    </Flex>
                    <Flex align="center" justify="center">
                    <button                 
                    class="rounded-md mt-3 p-4 cursor-pointer text-white jap-font tracking-widest hover:bg-fuckawaii-hover active:ring bg-fuckawaii w-1/5"
                    onClick={handleMint}>Mint</button>
                 </Flex>
                </div>    
            ):(
                <p class=" text-center text-xl font-extralight jap-font mt-4 text-fuckawaii" >You must be conncted to Mint.</p>
            )}
            </Box>
        </Flex>
    )
}

export default Mint;
