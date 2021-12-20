import React from 'react';
import { BsArrowRight} from 'react-icons/bs';

import { AiFillStar} from 'react-icons/ai';


export default function Screen5() {
    return (
        <div class="w-max">
            <div>
                <img src="./assets/images/dl1.png" class="mt-6 ml-32"></img>
                <h1 style={{marginLeft:900}} class="relative bottom-8"><u>My Class Room</u></h1>
                <img src="./assets/images/bellicon.png" style={{marginLeft:1050}} class="relative bottom-16"></img>
                <img src="./assets/images/user.png" style={{marginLeft:1120}} class="relative bottom-24 w-8"></img>
                <div class="border border-gray ml-36 bg-white-100" style={{height:190}}>
                    <img src="./assets/images/ama1.png" style={{width:300}}></img>
                    <h1 class="relative left-80 bottom-44">AWS</h1>
                    <p class="relative bottom-40 left-80 text-sm text-gray-500">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <br></br>
                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                    <button class=" w-40 pt-2 bg-blue-400 text-white relative bottom-52" style={{marginLeft:800}}>Continue <BsArrowRight class="ml-32 relative bottom-4"></BsArrowRight></button>
                    <AiFillStar style={{marginLeft:320}} class="relative bottom-48" color="blue"/>
                    <AiFillStar style={{marginLeft:340}} class="relative bottom-52" color="blue"/>
                    <AiFillStar style={{marginLeft:360}} class="relative bottom-56" color="blue"/>
                    <AiFillStar style={{marginLeft:380}} class="relative bottom-60" color="blue"/>
                    <AiFillStar style={{marginLeft:400}} class="relative bottom-64" color="gray"/>
                </div><br></br>
                <div class="border border-gray ml-36 bg-white" style={{height:190}}>
                    <img src="./assets/images/py.png" style={{width:300}}></img>
                    <h1 class="relative left-80 bottom-44">Python</h1>
                    <p class="relative bottom-40 left-80 text-sm text-gray-500">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <br></br>
                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                    <button class=" w-40 pt-2 bg-blue-400 text-white relative bottom-52" style={{marginLeft:800}}>Continue <BsArrowRight class="ml-32 relative bottom-4"></BsArrowRight></button>
                    <AiFillStar style={{marginLeft:320}} class="relative bottom-48" color="blue"/>
                    <AiFillStar style={{marginLeft:340}} class="relative bottom-52" color="blue"/>
                    <AiFillStar style={{marginLeft:360}} class="relative bottom-56" color="blue"/>
                    <AiFillStar style={{marginLeft:380}} class="relative bottom-60" color="blue"/>
                    <AiFillStar style={{marginLeft:400}} class="relative bottom-64" color="gray"/>
                </div>
            </div>
            
        </div>
    )
}
