import { Player } from "./Player"
import { Weapon } from "./Weapon"
import { useEffect, useState } from "react"

function Canvas() {
    const [text,setText] = useState("text")
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    useEffect(() => {
        const handleKeyup = ({ key }) => {
            console.log('key pressed - ', key)
    
            if (key === 'Backspace') {
            setText(prev => prev.slice(0, -1))
            return
            }
            if (key === 'ArrowRight') { 
                if(x<1000)
                {setX(prev => prev + 5)
                return}
            }
            if (key === 'ArrowLeft') {
                if(x>0) //FIX THIS
                {setX(prev => prev - 5)
                return}
            }
            if (key === 'ArrowDown') {
                if(y<1000)
                {setY(prev => prev + 5)
                return}
            }
            if (key === 'ArrowUp') {
                if(y>0)
                {setY(prev => prev - 5)
                return}
            }
            if (/^[A-Za-z0-9]$/.test(key)) {
                setText(prev => prev + key)
            }
        }

        window.addEventListener('keydown', handleKeyup)
    
        return () => window.removeEventListener('keydown', handleKeyup)
      }, [])

  return (
    <div style={{
        height:1000, 
        width:1000,
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
