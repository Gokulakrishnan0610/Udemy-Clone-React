import course1 from '../images/Course1.jpg'
import course2 from '../images/Course2.jpg'
import course3 from '../images/Course3.jpg'
import course4 from '../images/Course4.jpg'

function Popular() {
    return (
        <div class="popular">
            <h1 class="popular__title">Most Popular</h1>
            <p class="popular__subtitle">Pick the best fit</p>
            <div class="popular__container">
                <div class="course-card">
                    <img src={course1} alt="img"></img>
                    <h3>Python programming</h3>
                    <p>Charles Severance</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>Rs.499 <del>2000</del></p>
                </div>
                <div class="course-card">
                    <img src={course2} alt="img"></img>
                    <h3>Java 17 Masterclass</h3>
                    <p>Terry Martin</p>
                    <p>4.6 ⭐⭐⭐⭐</p>
                    <p>Rs.499 <del>1499</del></p>
                </div>
                <div class="course-card">
                    <img src={course3} alt="img"></img>
                    <h3>C++</h3>
                    <p>Charles Severance</p>
                    <p>4.5 ⭐⭐⭐⭐</p>
                    <p>Rs.449 <del>999</del></p>
                </div>
                <div class="course-card">
                    <img src={course4} alt="img"></img>
                    <h3>C Programming</h3>
                    <p>Charles Severance</p>
                    <p>4.7 ⭐⭐⭐⭐</p>
                    <p>Rs.499 <del>2499</del></p>
                </div>

                <div class="course-card">
                    <img src={course4} alt="img"></img>
                    <h3>C Programming</h3>
                    <p>Charles Severance</p>
                    <p>4.7 ⭐⭐⭐⭐</p>
                    <p>Rs.499 <del>2499</del></p>
                </div>

                <div class="course-card">
                    <img src={course3} alt="img"></img>
                    <h3>C++</h3>
                    <p>Charles Severance</p>
                    <p>4.5 ⭐⭐⭐⭐</p>
                    <p>Rs.449 <del>999</del></p>
                </div>

                <div class="course-card">
                    <img src={course2} alt="img"></img>
                    <h3>Java 17 Masterclass</h3>
                    <p>Terry Martin</p>
                    <p>4.6 ⭐⭐⭐⭐</p>
                    <p>Rs.499 <del>1499</del></p>
                </div>

                <div class="course-card">
                    <img src={course1} alt="img"></img>
                    <h3>Python programming</h3>
                    <p>Charles Severance</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>Rs.499 <del>2000</del></p>
                </div>

            </div>
        </div>
    )
}

export default Popular