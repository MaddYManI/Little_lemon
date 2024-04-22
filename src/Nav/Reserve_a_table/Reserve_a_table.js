import './Reserve_a_table.css'
import restaurantfood from './Reserve_1img.png'

function Reserve_a_table(){
    return(
        <div>
            <div className='hero'>
                <label className='textfont'>
                    <h1 className='textstyle'>Little Lemon</h1>
                    <h3 className='textcity'>Chicago</h3>
                    <p className='lines'>The rooftop restaurant with a breathtaking view of green belt, offers hearty Italian & Western fare.</p>
                    <button type="button" className='button' >Couple date !</button>
                </label>
                <img src={restaurantfood} alt ="Restaurantfood" className='overlay' />
            </div>
            <div className='reserve_container'>
                <form className='reservation_details' >
                    <label htmlFor='firstName' >First Name</label>
                    <input type='text' id='firstName'/>

                    <label htmlFor='secondName' >Last Name</label>
                    <input type='text' id='secondName' />

                    <label htmlFor='contactNumber' >Contact Number</label>
                    <input type='tel' id='contactNumber' />

                    <label htmlFor="res-date"  data-testid="date">Choose date</label>
                    <input type="date" id="res-date"/>

                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time " >
                        <option>16:00</option>
                    </select>

                    <label for="guests" >Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests"/>

                    <label for="occasion">Occasion</label>
                    <select id="occasion">
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>

                    <button type="submit" className='reserve_btn'>Make Your reservation</button>

                </form>
            </div>
        </div>
    )
}
export default Reserve_a_table;