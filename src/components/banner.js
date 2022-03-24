import * as React from "react"

const Banner = () => {
    return (
        <section className="full-width banner">
            <div className="page-width">
                <div className="banner-cta">
                    <h1>Web Developer & Designer</h1>
                    <p>
                        Hi, I'm Dan! I'm currently focused on front end development, design, and accessibility. I also dabble in back end development.
                    </p>
                    <img className="icon1" src="../images/brackets-blue-primary.png" alt="" />
                    <img className="icon2" src="../images/brackets-green-primary.png" alt="" />
                    <img className="icon3" src="../images/tags-blue-primary.png" alt="" />
                    <img className="icon4" src="../images/tags-green-primary.png" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Banner