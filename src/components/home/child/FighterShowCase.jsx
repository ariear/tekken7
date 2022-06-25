const FighterShowCase = (props) => {
    return (
        <div className="mx-1 relative group">
            <div className="absolute top-0 left-0 w-full h-full " style={{ 
                backgroundColor: 'rgb(72,6,112)',
                background: 'linear-gradient(0deg, rgba(72,6,112,1) 0%, rgba(91,29,128,0.258140756302521) 25%, rgba(38,28,44,0) 33%)'
             }}></div>
             <div className="bg-yellow-400 w-full h-[110%] absolute -top-10 left-0 hidden group-hover:block">
            <div className="relative">
             <img src={props.hover} className="absolute w-[600px] h-[1000px] object-cover object-center" alt="" />
            </div>
             </div>
            <img src={props.img} width="160" alt="" />
        </div>
    )
}


export default FighterShowCase