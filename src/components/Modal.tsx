import React from "react";

interface ModalProps {
    children: React.ReactNode[] | React.ReactNode
}

export const Modal: React.FC<ModalProps> =({children}) => {
    return(
                <div style={{
                    top:0,
                    left:0,
                    zIndex:3,
                    position: 'fixed',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    width: '100vw',
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>

                    <div style={{
                        backgroundColor: 'white',
                        color: 'black',
                        width: '500px',
                        height: '500px',
                    }} className='border-2 border-slate-950 p-6 flex justify-center'>
                        <div className='self-center' >
                            {children}
                        </div>
                    </div>
            </div>

    )
}