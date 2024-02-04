/* eslint-disable react/prop-types */

import Spritesheet from 'react-responsive-spritesheet';

function GridBackdrop({gridData}) {

    const tilesheet = "https://previews.dropbox.com/p/thumb/ACJac-yAyypHUvq_CdUGvTCiuwqmWsafB-gZfAdZvGFEi9zO8OEUkPetzDB2_OQMxU9i4Q9SYbJiyLmjreTNHJ1WncHDybR1LtPCuYZA-QkpWonx2cuPDbXl_I96QjwDWE0Rkbpi22WzenTcoEtAn18Fq8QVN6qdzsz1pfeQAJwga9UmvEf-LqyPv7vfDYtjjlZzeSdm3KJCjcG8t2WqWDhnxdlcPSDGYkYsXw1ot_CKT4ZZo8-kzE9wAL1THsWZ40-6yaqQJraNMn85rqAVDFa6uynoZtVaOrYF0jJsnVHReiK6rZaewzgO3_MqbLSPbi48IIUUKQqVdJLUuyw_zx7-/p.png"

  return (
    <div className = "backdrop" style={{
        position:"absolute",
        }}>
            {gridData.map((row,index) => {
                row.map((tile,index2)=>{
                    if (tile)
                    {
                    return(<Spritesheet
                        key = {index.toString()+","+index2.toString()}
                        className={`my-element__class--style`}
                        image={tilesheet}
                        widthFrame={64}
                        heightFrame={64}
                        steps={4}
                        fps={1}
                        startAt={tile-1}
                        autoplay={false}
                        style={{left:(row*10).toString()+"%",top:(tile*10).toString()+"%"}}
                      />)
                    }
                })
            })}
    </div>
  )
}


export { GridBackdrop }
