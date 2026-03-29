import React from 'react'

export default function About(props) {
    
    return (
        <> <div style={props.themeStyle}>
            <div className={`container my-3`}>
                <h1 className="my-3"><strong><code>About Us</code></strong></h1>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                About TextUtils
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>Analyze and Transform Your Text Instantly</strong> 
                            TextUtils is a simple yet powerful web utility designed to help you manipulate text with ease. Whether you need to quickly change cases, format paragraphs, or get a quick statistical summary of your content, TextUtils provides the tools to do it efficiently.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Key Features
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <ul>
                                    <li><b>Text Transformation: </b>Instantly convert text between UPPERCASE, lowercase, and Capitalized Case.</li>
                                    <li><b>Toggle Case: </b>A specialized tool to flip the casing of every character—perfect for fixing accidental Caps Lock typing.</li>
                                    <li><b>Word & Character Counting: </b>Real-time statistics to help you stay within word limits for assignments or social media.</li>
                                    <li><b>Reading Time Estimation: </b>Uses an average reading speed algorithm to tell you exactly how long it will take to read your text.</li>
                                    <li><b>Copy & Clear: </b>One-click actions to copy your transformed text to the clipboard or clear the workspace for a fresh start.</li>
                                    <li><b>Dark Mode Support:</b> A built-in theme switcher to ensure a comfortable viewing experience, whether it's day or night.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Why Use TextUtils?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                In the world of fast-paced digital communication, every second counts. Instead of manually editing text or writing complex scripts, TextUtils gives you a browser-based "Swiss Army Knife" for your strings. It is built using React and Bootstrap 5, ensuring a responsive and modern experience across all devices.
<hr />
<i><b>Developer Note:</b> This project was created by Shreyas, a passionate developer focused on building functional tools that solve everyday digital problems.</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div></div>
        </>
    )
}
