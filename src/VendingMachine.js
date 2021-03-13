import {Link} from 'react-router-dom'
import './VendingMachine.css'

const VendingMachine = () => {
    return (
        <div className='VendingMachine'>
            <h1>What do you want?</h1>
            <Link to="/drinks"><button>Cold Drink</button></Link> 
            <Link to="/veggies"><button>Warm Veggies</button></Link>
            <Link to="/snacks"><button>Hot Snack</button></Link> 
        </div>
    )
}

export default VendingMachine;