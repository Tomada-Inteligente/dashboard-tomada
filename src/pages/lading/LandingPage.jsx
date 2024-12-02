import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./LandingPage.css";
import api from "../../services/api";

const CourseCard = ({ title, description, rating = 4, onRate, onWatch }) => {
    const [userRating, setUserRating] = useState(rating);

    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span
                    key={i}
                    className={`star ${i <= userRating ? 'filled' : ''}`}
                    onClick={() => handleRating(i)}
                >
                    &#9733;
                </span>
            );
        }
        return stars;
    };

    const handleRating = (newRating) => {
        setUserRating(newRating);
        if (onRate) {
            onRate(newRating);
        }
    };

    return (
        <div className="course-card">
            <div className="cover">
                <div className="coverFront">
                    <h1>{title}</h1>
                </div>
                <div className="coverBack">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <div className="star-rating">{renderStars()}</div>
                    <button onClick={() => onWatch(title)} className="watch-button">Assistir</button>
                </div>
            </div>
        </div>
    );
};

const LandingPage = () => {
    const navigate = useNavigate();
    const [myCourses, setMyCourses] = useState([]);
    const [notification, setNotification] = useState("");

    async function getMyCourses() {
        const myCoursesFromApi = await api.get(`/matriCourse?userId=${localStorage.getItem("userId")}`);
        setMyCourses(myCoursesFromApi.data);
    }
    
    useEffect(() => {
        getMyCourses();
    }, []);

    const handleRateCourse = (rating) => {
        setNotification(`Obrigado por avaliar o curso com ${rating} estrelas!`);
        setTimeout(() => setNotification(""), 3000); // Oculta a notificação após 3 segundos
    };

    const handleWatchCourse = (title) => {
        if (title === "Git e GitHub") {
            navigate("/git-github");
        } else if (title === "Introdução ao Node + React") {
            navigate("/introducaonode");
        }
    };

    return (
        <div className="landing-page">
            <nav className="navbar">
                <h1>BitWave</h1>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/Login">Login</a></li>
                        <li><a href="/Cadastro">Cadastro</a></li>
                    </ul>
                </nav>
            </nav>
            <div className="courses-section">
                <h2>Cursos Disponíveis</h2>
                <div className="courses">
                    {myCourses.map((course, index) => (
                        <CourseCard
                            key={index}
                            title={course.course.name}
                            description={course.course.description}
                            rating={course.course.rating || 4}
                            onRate={handleRateCourse}
                            onWatch={handleWatchCourse}
                        />
                    ))}
                </div>
            </div>
            {notification && (
                <div className="notification">
                    {notification}
                </div>
            )}
            <footer className="footer">
                <p>&copy; 2024 BitWave. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
