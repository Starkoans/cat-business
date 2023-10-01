export default function Modal({ children}){
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
                        minWidth: '500px',
                        minHeight: '500px',
                        display: 'grid',
                        padding: '10px',
                        border: '3px solid black',
                    }}>
                            {/*<button style={{*/}
                            {/*    marginLeft: 'auto',*/}
                            {/*    height: '50px'*/}
                            {/*}}*/}
                            {/*        onClick={() => {*/}
                            {/*            setIsOpen(false)*/}
                            {/*        }}*/}
                            {/*>Закрыть*/}
                            {/*</button>*/}

                        {children}
                    </div>
            </div>

    )
}