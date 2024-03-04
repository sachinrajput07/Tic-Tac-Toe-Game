import Icons from '../icons/icons.jsx'

function Card({ gameEnd  , player, onPlay, index}) {
    let icons = < Icons />
    if (player == 'X') {
        icons = <Icons name="cross" /> 
    }else if(player == 'O'){
        icons = <Icons name="circle" />
    }
    return(
        <>
          <div className='card flex justify-center items-center h-[120px] w-[120px] bg-yellow-400 border-2 border-black rounded-2xl' onClick={()=> !gameEnd && player=="" && onPlay(index)}>
            {icons}
          </div>
        </>
    )
}

export default Card