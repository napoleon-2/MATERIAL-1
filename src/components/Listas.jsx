import React from 'react'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
} from '@material-ui/core'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'



const Listas = () => {
    return (
        <div>
            <List component="nav">
                <ListItem button>
                    <ListItemIcon>
                        <AddAPhotoIcon/>
                    </ListItemIcon>
                    <ListItemText primary='este es el texto' />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <AddShoppingCartIcon/>
                    </ListItemIcon>
                    <ListItemText primary='este es el segundo texto' />
                </ListItem>
                <Divider />

                
            </List>
        </div>
    )
}

export default Listas