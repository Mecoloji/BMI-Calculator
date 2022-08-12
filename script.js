const btn = document.getElementById("calculate");


btn.addEventListener("click", () => {

    let height = document.querySelector("#height").value;
    let weight = document.querySelector("#weight").value;

    if(height == "" || weight == ""){
        // alert("Please fill out the input fields!");
        document.querySelector(".msg").innerHTML = 
        `
        Please fill out the input fields!
        `;
        
        return;
    }

    height = height  / 100
    let BMI = (weight / (height * height));
    BMI = BMI.toFixed(2)
    // console.log(BMI);
    document.querySelector("#result").innerHTML = BMI;

    let status = "";

    if(BMI < 18.5) {
        status = "Underweight"
    }
    if(BMI >= 18.5 && BMI < 25) {
        status = "Healthy"
    }
    if(BMI >= 25 && BMI < 30) {
        status = "Overweight"
    }
    if(BMI >= 30) {
        status = "Obese"
    }

    document.querySelector(".comment").innerHTML = 
    `
    Comment: you are <span class="comment">${status}</span>
    `

    if(BMI > 0) {
        let addClass = document.querySelector(".msg");
        addClass.classList.add("hidden");
        addClass.classList.remove("msg")
    }

});