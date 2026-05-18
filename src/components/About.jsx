// this is our aboout component
// it receives destructured props from App with the image, name, and the text to be displayed 

function About({ image, name, text }) {
    return (

        <aside>

            <div className="about container" style={{ display: 'flex', flexDirection: 'row',margin : '20px', padding: '20px',}}>
                <img style={{ height: '60px', width: '60px', borderRadius: '50%' }} src={image} alt="blog logo" />
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px', }}>
                    <p style={{margin: '5px',} }> Personal blog by <span style={{fontWeight : 'bold', textDecoration: 'underline'}}>{name}</span></p>
                    <p style={{margin: '5px'} }>{text}</p>
                </div>

            </div>

        </aside>
    )
}

export default About;