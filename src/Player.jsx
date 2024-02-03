/* eslint-disable react/prop-types */
import Spritesheet from 'react-responsive-spritesheet';


function Player({x,y}) {
    const left = x.toString() + "%";
    const top = y.toString() + "%";

    return (
      <div style={{
        height:100, 
        width:100,
        border:"1px solid black",
        position:"absolute",
        left,
        top,
        }}>

        <Spritesheet
          className={`my-element__class--style`}
          image={`https://previews.dropbox.com/p/thumb/ACJwi_GQ3W_WzI2utpGqphaqp4tn9klX2zZfa-SvSwyMq6EK95Z677Qk_wcK_GXN2YhILXFMqUPIVlZzLyRDfaIzFshvkFIgtJiri0KM1pdc_z79MimKhIY1LpmZ7PeZGujCBZnOQp9cCm-i0W2rzXfZoLWQptgmIONgzLryjHO4VUJ0hHeZ3Uhtc0qZV3q49CbSMHre8dWFZ54UNlA7989p8q7TIP414BCYr9x4trkeCoiY4Vxi6Q8SsNa5dcqAkfDWMkbM9glHPv1uNffbEoVAFfU7Al7VwO1mayf_rQS7FnP_i4wPao01j-TDHKT_6D-j69hoNGJ2qQTn7mebfvwH/p.png`}
          widthFrame={32}
          heightFrame={32}
          steps={25}
          fps={10}
          autoplay={true}
          loop={true}
        />
      </div>
    )
  }
  
  
  export { Player }
  