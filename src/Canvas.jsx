/* eslint-disable react/prop-types */
import { Player } from "./Player";
import { Weapon } from "./Weapon";
import { useEffect, useState } from "react";

function Canvas({width,height}) {
    const [text,setText] = useState("text");
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);
    const speed = 5;

    useEffect(() => {
        const handleKeydown = ({ key }) => {
            console.log('key pressed - ', key);
    
            if (key === 'Backspace') {
                setText(prev => prev.slice(0, -1));
                return;
            }
            if (key === 'ArrowRight') { 
                {setX(prev => {if(prev<100){
                    return prev + speed;
                }
                else{
                    return prev;  
                }})
                }
            }
            if (key === 'ArrowLeft') {
                {setX(prev => {if(prev>0){
                    return prev - speed;
                }
                else{
                    return prev;  
                }})
                }
            }
            if (key === 'ArrowDown') {
                {setY(prev => {if(prev<100){
                    return prev + speed;
                }
                else{
                    return prev; 
                }})
                }
            }
            if (key === 'ArrowUp') {
                {setY(prev => {if(prev>0){
                    return prev - speed;
                }
                else{
                    return prev;
                }})
                }
            }
            if (/^[A-Za-z0-9]$/.test(key)) {
                setText(prev => prev + key);
            }
        }
        window.addEventListener('keydown', handleKeydown);
    
        return () => {window.removeEventListener('keydown', handleKeydown);}
      }, [])

  return (
    <div style={{
        height, 
        width,
        border:"5px solid black",
        position:"relative",
        }}>
            <p>{text}</p>
		<Player x={x} y={y}/>
		<Weapon />
    </div>
  )
}


export { Canvas }
