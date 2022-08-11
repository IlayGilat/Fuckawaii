import './index.css'
import React from 'react'
import {Box, Button, Flex, Image, Link , Spacer } from "@chakra-ui/react";
import OpenSea from './assets/social_logos/before_opensea.png';
import Twitter from './assets/social_logos/before_twitter.png';
import Discord from './assets/social_logos/before_discord.png';
import LooksRare from './assets/social_logos/before_looksrare.png';




const NavBar = ({accounts,setAccounts}) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount(){
        if(window.ethereum){
            const accounts = await window.ethereum.request({
                method:"eth_requestAccounts",
            });
            setAccounts(accounts)
        }
    }
    return (
        <Flex justify="space-between" align="center">
            {/*left side*/}
            <Flex justify="space-around" width="40%" pading="0 75px">
                <Link href="https://www.opensea.io/">
                <Image src={OpenSea} boxSize="42px" margin="0 15px" className='img' color={"black"}/>
                </Link>
            <Link href="https://www.twitter.com/cutefucksnft">
                <Image src={Twitter} boxSize="42px" margin="0 15px" className='img' />
                </Link>
            
            <Link href="https://www.looksrare.org">
                <Image src={LooksRare} boxSize="42px" margin="0 15px" className='img'/>
                </Link>
            </Flex>
            {/*right side */}
            <Flex justify="space-around" align="center" width="40%" padding="30px">
            {/*connect*/}
            {isConnected ?(
                <Box  class=" font-semibold text-xl text-fuckawaii jap-font">Connected</Box>
                ):(
                    <button
                    class="rounded-md p-4 cursor-pointer  jap-font tracking-widest hover:bg-fuckawaii-hover active:ring bg-fuckawaii"
                    onClick={connectAccount}>Connect</button>
                    )}

        <Link href="/admin_login/">Admin Log In</Link>
         </Flex>
        </Flex>
    )
}

export default NavBar;
