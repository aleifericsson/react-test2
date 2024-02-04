/* eslint-disable react/prop-types */
import { useEffect, useState, useRef  } from "react";

function Canvas({width,height}) {
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);
    const speed = 20;
    

    const canvasRef = useRef(null)

    useEffect(() => {
        const draw = (ctx, frameCount) => {
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
            ctx.fillStyle = '#000000'
            ctx.beginPath()
            ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
            ctx.fill()
        }
        const draw2 = (ctx) =>{
            ctx.fillStyle = 'red';
            ctx.fillRect(x, y, 64, 64);
        }

        var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");

            let frameCount = 0
            let animationFrameId = 0
            
            //Our draw came here
            const render = () => {
              frameCount++
              draw(ctx, frameCount)
              draw2(ctx)
              animationFrameId = window.requestAnimationFrame(render)
            }
            render()


        const handleKeydown = ({ key }) => {
            if (key === 'd') { 
                {setX(prev => {if(prev<640-64){
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
                {setY(prev => {if(prev<640-64){
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
        }
        window.addEventListener('keydown', handleKeydown);
    
        return () => {window.removeEventListener('keydown', handleKeydown);
        window.cancelAnimationFrame(animationFrameId)}
      }, [ x, y])

  return (
    <canvas id="myCanvas" width={width} height={height} style={{ border: "1px solid #d3d3d3" }} ref={canvasRef}>
    </canvas>
  )
}


export { Canvas }
