import { Grid, Paper } from "@material-ui/core"

function Card() {
    return (
        <Grid item xs={12} sm={6} md={4} lg={4}  xl={4}>
            <div className='card'>
                <h2>Card One</h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum in perferendis perspiciatis cum ipsam harum quibusdam dolor voluptatum, sunt distinctio sequi ex placeat amet neque labore. 
                    </p>
            </div>
            
        </Grid>
    )
}

export default Card
