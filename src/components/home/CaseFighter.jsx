const CaseFighter = () => {
    return (
        <div>
            <div className="h-[200px] -translate-y-20 z-20 relative" style={{ 
                backgroundColor: 'rgb(38,28,44)',
                background: 'linear-gradient(0deg, rgba(38,28,44,0) 0%, rgba(38,28,44,1) 17%, rgba(38,28,44,1) 21%, rgba(38,28,44,1) 29%, rgba(38,28,44,1) 48%, rgba(38,28,44,1) 67%, rgba(38,28,44,1) 80%, rgba(38,28,44,1) 84%, rgba(38,28,44,0) 100%)'
             }}></div>
             <div style={{ 
                backgroundColor: 'rgb(38,28,44)'
              }} className="-translate-y-32" >
                <p className="font-pupylinux text-9xl font-semibold absolute left-0 right-0 mx-auto">FIGHTERS</p>
                <img src="/image/fahkumram-longercard.png" alt="" />
             </div>
        </div>
    )
}

export default CaseFighter