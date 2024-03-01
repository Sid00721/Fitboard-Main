 // JavaScript code to dynamically generate the exercise table
 let exerciseList = [
    {'exercise': 'Squat', 'muscle': 'quadriceps', 'category': 'Main'},
    {'exercise': 'Plank', 'muscle': 'core', 'category': 'Prehab'},
    {'exercise': 'Bench Press', 'muscle': 'chest', 'category': 'Main'},
    {'exercise': 'Deadlift', 'muscle': 'glutes', 'category': 'Main'},
    {'exercise': 'PushUp', 'muscle': 'core', 'category': 'Prehab'},
    {'exercise': 'A-skip', 'muscle': 'core', 'category': 'Main'},
    {'exercise': 'Pull-up', 'muscle': 'back', 'category': 'Main'},
    {'exercise': 'Russian Twist', 'muscle': 'obliques', 'category': 'Accessory'},
    {'exercise': 'Lunges', 'muscle': 'quadriceps', 'category': 'Main'},
    {'exercise': 'Plank Row', 'muscle': 'core', 'category': 'Prehab'},
    {'exercise': 'Bicep Curl', 'muscle': 'biceps', 'category': 'Accessory'},
    {'exercise': 'Leg Press', 'muscle': 'quadriceps', 'category': 'Main'},
    {'exercise': 'Tricep Dip', 'muscle': 'triceps', 'category': 'Accessory'},
    {'exercise': 'Russian Twist', 'muscle': 'obliques', 'category': 'Accessory'},
    {'exercise': 'Burpees', 'muscle': 'full body', 'category': 'Main'},
];

// Object to track the current sort order for each column
const sortOrder = {
    'exercise': 'asc',
    'muscle': 'asc',
    'category': 'asc'
};

// Function to generate HTML content for the exercise table
function generateExerciseTable(exercises) {
    let html = '<table>';
    // Table header
    html += '<tr><th onclick="sortTable(\'exercise\')">Exercise</th><th onclick="sortTable(\'muscle\')">Muscle</th><th onclick="sortTable(\'category\')">Category</th></tr>';
    // Table rows
    exercises.forEach(exercise => {
        html += `<tr><td>${exercise['exercise']}</td><td>${exercise['muscle']}</td><td>${exercise['category']}</td></tr>`;
    });
    html += '</table>';
    return html;
}

// Function to sort the table by column
function sortTable(column) {
    if (sortOrder[column] === 'asc') {
        exerciseList.sort((a, b) => a[column].localeCompare(b[column]));
        sortOrder[column] = 'desc';
    } else {
        exerciseList.sort((a, b) => b[column].localeCompare(a[column]));
        sortOrder[column] = 'asc';
    }
    // Re-generate HTML content for the exercise table
    const exerciseTableHTML = generateExerciseTable(exerciseList);
    // Update the content in the exercise-list div
    document.getElementById('exercise-list').innerHTML = exerciseTableHTML;
}

// Function to handle form submission
document.getElementById('exercise-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const form = event.target;
    const newExercise = {
        'exercise': form.elements['exercise'].value,
        'muscle': form.elements['muscle'].value,
        'category': form.elements['category'].value
    };
    exerciseList.push(newExercise);
    // Re-generate HTML content for the exercise table
    const exerciseTableHTML = generateExerciseTable(exerciseList);
    // Update the content in the exercise-list div
    document.getElementById('exercise-list').innerHTML = exerciseTableHTML;
    form.reset(); // Reset the form fields
});

// Initial generation of the exercise table
const exerciseTableHTML = generateExerciseTable(exerciseList);
document.getElementById('exercise-list').innerHTML = exerciseTableHTML;