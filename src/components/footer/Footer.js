import "./Footer.css"

export default function Footer() {
    return (
        <div id='footer'>
            <div className="foot" id="copyright">
                <p>Copyright&copy; Majzik Bendeguz Daniel</p>
                <p>2022</p>
            </div>

            <div className="foot" id="contact">
                <p>Contact me at</p>
                <a id="address" href="mailto: username@mailprovider.tld">username@mailprovider.tld</a>
                <p>Or send me a letter to</p>
                <span id="address">71359 East Branch Street,Hoffman Estates, IL 60169</span>
            </div>

            <div className="foot" id="additional">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis fringilla eleifend. In
                    hendrerit lectus nisi, eget mattis turpis egestas eu.</p>
            </div>
        </div>
    );
}