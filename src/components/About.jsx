// About displays the blog author's profile summary.
// It receives image, name, and text props from Home and does not connect to child components.

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
