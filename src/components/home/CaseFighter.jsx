import FighterShowCase from "./child/FighterShowCase"

const CaseFighter = () => {
    return (
        <div>
            <div className="h-[200px] -translate-y-20 z-20 relative" style={{ 
                backgroundColor: 'rgb(38,28,44)',
                background: 'linear-gradient(0deg, rgba(38,28,44,0) 0%, rgba(38,28,44,1) 17%, rgba(38,28,44,1) 21%, rgba(38,28,44,1) 29%, rgba(38,28,44,1) 48%, rgba(38,28,44,1) 67%, rgba(38,28,44,1) 80%, rgba(38,28,44,1) 84%, rgba(38,28,44,0) 100%)'
             }}></div>
             <div style={{ 
                backgroundColor: 'rgb(38,28,44)'
              }} className="-translate-y-32 flex justify-center items-center py-20" >
                <p className="font-pupylinux text-[380px] font-semibold absolute left-0 right-0 mx-auto text-center text-gray-800">FIGHTERS</p>
                <div className="relative flex items-center">
                <FighterShowCase img={'/image/fahkumram-longercard.png'} hover={'/image/fahkumram.png'} />
                <FighterShowCase img={'/image/kunimitsu-longercard.png'} hover={'/image/kunimitsu.png'} />
                <FighterShowCase img={'/image/leroy-longercard.png'} hover={'/image/leroy.png'} />
                <FighterShowCase img={'/image/lidia-longercard.png'} hover={'/image/lidia.png'} />
                <FighterShowCase img={'/image/zafina-longercard.png'} hover={'/image/zafina.png'} />
                </div>
             </div>
        </div>
    )
}

export default CaseFighter