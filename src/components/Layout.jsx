export default function Layout(props){

    const {children} = props;

    const header =(
         <header>
            <h1 className="text-gradient">The Brogram</h1>
            <p><strong>The 30 simple workout program</strong></p>
         </header>
    )

    const footer =(
        <footer>
            <p>Built By <a href="https://stackdretech.netlify.app/" target="_blank" >Stackdretech</a>
            <br/>Styled with <a href="https://www.fantacss.smoljames.com/" target="_blank">Fantacss</a>
            </p>
        </footer>
    )

    return(
        <>
            {header}
            {children}
            {footer}
            
        </>
    )
}
