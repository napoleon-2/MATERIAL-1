import React from 'react'
import { Box, Grid } from '@material-ui/core'
const Cajita = () => {
    return (
        <div>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <Box border={2}>
                        xs12 
                    </Box>
                </Grid>
                <Grid item xs={4} md={12}>
                    <Box border={2}>
                        xs12 
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cajita
