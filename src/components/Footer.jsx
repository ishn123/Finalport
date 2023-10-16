import React from 'react'

function Footer({dateState}) {
  return (
    <div id="footer">
        <div id="footerleft">
            <div>
              <h5>2023 &copy;</h5>
            </div>
            <div>
            <h5>{dateState.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            
            })} IST</h5>
            </div>
        </div>
        <div id="footerright">
            <a href="https://github.com/sanyam17-beep">GitHub</a><a href="https://www.instagram.com/sanyamsharma_17/">Instagram</a><a href="https://www.linkedin.com/in/sanyam-sharma-4919b9205/">Linkedin</a><a href="https://twitter.com/_WebBeaverX_">Twitter</a>
        </div>
    </div>
  )
}

export default Footer