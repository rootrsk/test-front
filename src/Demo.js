import { useEffect, useState } from "react"

function Demo(props) {
    const [open, setOpen] = useState(false)
    const toggle = () => {
        setOpen(!open)
        const root = document.documentElement;
        if (open) {
            root.style.setProperty('--primary-text', 'black')
            root.style.setProperty('--secondary-text', 'white')
            return
        }
        root.style.setProperty('--primary-text', 'white')
        root.style.setProperty('--secondary-text', 'black')
    }
    return (
        <div>
            <h1 className='demo'>This is First Line</h1>
            <h1 className='demo'>This is Third Line</h1>
            <button onClick={toggle}>Change Theme</button>
        </div>
    )
}


export default Demo
