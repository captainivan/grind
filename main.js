const arr = ["App", "HIIT", "Push", "Pull", "Legs", "App", "HIIT", "Push", "Pull", "Legs", "App", "HIIT", "Push", "Pull", "Legs"];

const handleStart = (day, exercise, e) => {
    e.preventDefault();
    const confirmation = confirm("are you sure you want to start");
    if (confirmation) {
        console.log("clciked", day, exercise);
        const getArray = localStorage.getItem("exerciseCompleted");
        const parsedArray = getArray ? JSON.parse(getArray) : [];
        const newArray = [...parsedArray, day];
        localStorage.setItem("exerciseCompleted", JSON.stringify(newArray));
        window.location.reload()
    } else {
        console.log("canceled");
        return;
    }
}

document.querySelector(".localRegister").addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.setItem("exerciseCompleted", JSON.stringify([]))
})

arr.map((e, i) => {
    const currentExerciseArray = JSON.parse(localStorage.getItem("exerciseCompleted")) || [];
    document.querySelector(".days").innerHTML += `
    <div>
        day ${i + 1} - work to do ${e} - 
        ${currentExerciseArray.includes(i + 1) ? "done" : "not done"} - 
        ${currentExerciseArray.includes(i + 1)
            ? `<button disabled>Completed</button>`
            : `<button onclick="handleStart(${i + 1}, '${e}', event)">Start</button>`
        }
    </div>
    `
})
