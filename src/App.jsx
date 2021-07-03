import React from 'react';

//boton personalizado
// import {Button} from '@material-ui/core'
// import {makeStyles} from '@material-ui/core/styles'

// const useStyle = makeStyles({
//   botonPersonalizado: {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//   }
// })
// function App() {
  
//   const classes = useStyle() 
//   return (
//     <div >
      
//       <Button className={classes.botonPersonalizado}>
//                 aguante el gradient 
        
//       </Button>
//     </div>
//   );
// }

// export default App;
// //video 155

import  Button from '@material-ui/core/Button'
import { ThemeProvider } from '@material-ui/styles';
import theme from './temaConfig'
import Navbar from './components/Navbar';
import Listas from './components/Listas';
import Oculto from './components/Oculto';
import Contenedor from './components/Contenedor';

function App() {

  return (
    <ThemeProvider theme={theme}>
      

      <Contenedor/> 
     
    </ThemeProvider>
  )
}
export default App;