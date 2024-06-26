import sale from '../images/sale.jpeg'

function Sale() {
    return (
        <div class="sale">
            <img src={sale} alt="Sale-image"></img>
            <div class="sale__offer">
                <h1>Udemy Flash sale! 24 hours to save.</h1>
                <p>Get the top Courses for just 499.<br></br>
                    Just one day to save but a lifetime to learn</p>
            </div>
        </div>
    )
}

export default Sale