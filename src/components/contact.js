import React, { useEffect } from "react"
import Vivus from "vivus"

const Contact = () => {
    useEffect(() => {
        new Vivus('contact-outline', {
            type: 'oneByOne', 
            duration: 500,
            animTimingFunction: Vivus.LINEAR
        });
    })

    return (
        <footer id="contact" className="contact">
            <div className="full-width">
                <div className="page-width">
                    <div className="center-container">
                        <svg id="contact-outline" className="svg-outline" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="75.64571428571428 66.00000000000001 254.99999999999994 94.60000000000004" width="270" height="96.8"><defs><path strokeLinecap="round" strokeLinejoin="round" d="M177.65 75.88C225.54 75.4 256.11 76.36 269.37 78.75C289.25 82.33 337.17 92.72 325.97 113.14C314.78 133.56 283.61 158.64 229.6 157.57C175.59 156.49 96.68 163.3 79.48 118.87C68.02 89.26 110.29 72.3 206.31 68" id="j3AIRkdB7R"></path></defs><g><g><g><use xlinkHref="#j3AIRkdB7R" opacity="1" fillOpacity="0" strokeOpacity="1"></use></g></g></g></svg>
                        <h2>Contact Me</h2>
                        <p>Want to work together? I am currently open to a frontend position or freelance work. You can reach me through the form below:</p>
                        <div className="form-container">
                            <form name="contact" method="POST" data-netlify="true">
                                <p>
                                    <label>Name: <input type="text" name="name" /></label>
                                </p>
                                <p>
                                    <label>Email: <input type="email" name="email" /></label>
                                </p>
                                <p>
                                    <label>Message: <textarea name="message"></textarea></label>
                                </p>
                                <p>
                                    <button type="submit">Send</button>
                                </p>
                            </form>
                        </div>
                        <div className="btn-text-container">
                            <p>Or through one of the below sites:</p>
                        </div>
                        <div className="icon-container">
            
                            <a aria-label="Dan's LinkedIn profile (Opens in a new tab)" target="_blank" rel="noreferrer" href="https://linkedin.com/in/daniel-kersten/">
                                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" className="svg-inline--fa fa-linkedin-in fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#4b90e2" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                            </a>
            
                            <a aria-label="Dan's Github profile (Opens in a new tab)" target="_blank" rel="noreferrer" href="https://github.com/dkersten">
                                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" className="svg-inline--fa fa-github fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="#4b90e2" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                            </a>
            
                            <a aria-label="Dan's Codepen profile (Opens in a new tab)" target="_blank" rel="noreferrer" href="https://codepen.io/kerstend">
                                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="codepen" className="svg-inline--fa fa-codepen fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#4b90e2" d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"></path></svg>
                            </a>
            
                            <a aria-label="Dan's Medium blog page (Opens in a new tab)" target="_blank" rel="noreferrer" href="https://medium.com/@dkersten1994">
                                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="medium-m" className="svg-inline--fa fa-medium-m fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#4b90e2" d="M71.5 142.3c.6-5.9-1.7-11.8-6.1-15.8L20.3 72.1V64h140.2l108.4 237.7L364.2 64h133.7v8.1l-38.6 37c-3.3 2.5-5 6.7-4.3 10.8v272c-.7 4.1 1 8.3 4.3 10.8l37.7 37v8.1H307.3v-8.1l39.1-37.9c3.8-3.8 3.8-5 3.8-10.8V171.2L241.5 447.1h-14.7L100.4 171.2v184.9c-1.1 7.8 1.5 15.6 7 21.2l50.8 61.6v8.1h-144v-8L65 377.3c5.4-5.6 7.9-13.5 6.5-21.2V142.3z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Contact