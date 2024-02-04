/* eslint-disable react/prop-types */
import { GridBackdrop } from "./GridBackdrop";
import { Player } from "./Player";
import { Weapon } from "./Weapon";
import { useEffect, useState } from "react";

function Grid({width,height}) {
    const [text,setText] = useState("text");
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);
    const speed = 10;
    const [gridData, setGrid] = useState([
        [1,1,1,1,2,1,1,null,null],
        [1,1,1,2,2,1,1,null,null],
        [3,3,3,4,3,4,1,null,null],
        [2,1,3,3,3,3,4,null,null],
        new Array(10).fill(null),
        new Array(10).fill(null),
        new Array(10).fill(null),
        new Array(10).fill(null),
        new Array(10).fill(null),
        new Array(10).fill(null)
    ]);

    useEffect(() => {
        const handleKeydown = ({ key }) => {
            console.log('key pressed - ', key);
    
            if (key === 'Backspace') {
                setText(prev => prev.slice(0, -1));
                setGrid(new Array(10).fill(new Array(10).fill(null)));
                return;
            }
            if (key === 'd') { 
                {setX(prev => {if(prev<90){
                    return prev + speed;
                }
                else{
                    return prev;  
                }})
                }
            }
            if (key === 'a') {
                {setX(prev => {if(prev>0){
                    return prev - speed;
                }
                else{
                    return prev;  
                }})
                }
            }
            if (key === 's') {
                {setY(prev => {if(prev<90){
                    return prev + speed;
                }
                else{
                    return prev; 
                }})
                }
            }
            if (key === 'w') {
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
        <GridBackdrop gridData = {gridData}/>
		<Player x={x} y={y}/>
		<Weapon />
    </div>
  )
}


export { Grid }
