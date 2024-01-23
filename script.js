// script.js
async function fetchCourses() {
    const company = document.getElementById('company').value;
    const difficulty = document.getElementById('difficulty').value;
    const rating = document.getElementById('rating').value;

    const response = await fetch('http://localhost:3000/get_courses', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ company, difficulty, rating }),
    });

    const courses = await response.json();

    displayResults(courses);
}

function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No matching courses found.</p>';
        return;
    }

    results.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.innerHTML = `<p>${course.title}</p>`;
        resultsContainer.appendChild(courseElement);
    });
}
