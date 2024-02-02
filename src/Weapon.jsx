import Spritesheet from 'react-responsive-spritesheet';


function Weapon() {

    return (
      <div style={{
        height:100, 
        width:100,
        border:"1px solid black",
        position:"absolute"
        }}>

        <Spritesheet
          className={`my-element__class--style`}
          image={`https://previews.dropbox.com/p/thumb/ACJtFE1w4dqKUJG78ONOPQ1PnOS03gQYZMqbYKuF22ynjeIe93LoPULhz8k4fFI8OLTX_ywJskaF42hkW4T8CAujJqb1Wrzui_FtGMgpqKdFtR8yhVi-DqUODVF8pUKo7lkeVVOGTVZv94iVY67rmS6J_0lXbllE5u2Lt_GptENeH55EhRoilvYA7SEUQJMs5TT_PfdB5VK5MZBcnZtOiXz6njQw68C99Z3HOaJk3qG4eIkEjMvqJO_MuHO5JQ_Z1qFbLYJoiIIRWyncxXU75vpNJoN0AP1dxIHJa5WXe36vVgZ9b55TdPUMyg5DYiaoj39x30C7eOJGHXxcJuETBC6f/p.png`}
          widthFrame={32}
          heightFrame={32}
          steps={4}
          fps={10}
          autoplay={true}
          loop={true}
        />
      </div>
    )
  }
  
  
  export { Weapon }
  