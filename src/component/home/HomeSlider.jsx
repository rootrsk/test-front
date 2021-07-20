import Carousel from "react-material-ui-carousel"

const data = [
    {
        image:'https://upload.wikimedia.org/wikipedia/commons/2/29/Dscn7471_sunset-sundog_crop_800x300.jpg'
    },
    {
        image:'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'
    },
    {
        image:'https://cdn.wallpapersafari.com/20/10/Qizwde.jpg'
    }
]

function HomeSlider() {
    return (
        <div style={style.root}>
            <Carousel>
                {
                    data.map((item)=>{
                        return(
                            <div>
                                <img src={item.image} width={'100%'} alt=""/>
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}


const style={
    root:{
        width:'100%',
        height:'300px'
    }
}
export default HomeSlider
