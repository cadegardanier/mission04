$("#calc").click(function () {

    let assignment = ($("#assignments").val() * .5);
    let quizz = ($("#quizzes").val() * .1);
    let group = ($("#groupprojects").val() * .1);
    let intex = ($("#intex").val() * .1);
    let final = ($("#final").val() * .1);
    let midterm = ($("#midterm").val() * .1);

    let grade = (assignment + quizz + group + intex + final + midterm);
    let letter = "";


    if (grade >= 94) {
        letter = "A"
    }
    else if (grade >= 90) {
        letter = "A-"
    }
    else if (grade >= 87) {
        letter = "B+"
    }
    else if (grade >= 84) {
        letter = "B"
    }
    else if (grade >= 80) {
        letter = "B-"
    }
    else if (grade >= 77) {
        letter = "C+"
    }
    else if (grade >= 74) {
        letter = "C"
    }
    else if (grade >= 70) {
        letter = "C-"
    }
    else if (grade >= 67) {
        letter = "D+"
    }
    else if (grade >= 64) {
        letter = "D"
    }
    else if (grade >= 60) {
        letter = "D-"
    }
    else {
        letter = "E"
    }

    alert("Grade: " + grade + "% " + letter);

    $("#output").html("Grade: " + grade + "% "+ letter);

});