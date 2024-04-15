import { Button } from 'primereact/button'
import {Link} from 'react-router-dom'
import './App.css'
 
function informacoes() {
 
return (
    <>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.<br/> 
            Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.<br/>
            Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.</p>

        <p>
            Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.<br/>
            Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.
        </p>
        <Link to = "/">
            <Button label = 'Voltar para Apresentacao'/>
        </Link>
    </>
)
}
 
export default informacoes