let rel_par = document.getElementById('discription');
let personName = document.getElementById('main-header');
let searched = document.getElementById('name-input')

let names = [[], ["abdallah", "hey that is me"], ["sara", "hey that is my friend"], ["yassine", "hey that is my friend"], ["adnan", "hey that is my friend"], ["malak", "hey that is my lover"]]

function findMyName() {
    let index = 0;
    for (let i = 0; i < names.length; i++) {

        if (names[i][0] == searched.value) {
            index = i;
            break
        }else{
            index = 0;
        }
    }

    if (index != 0) {
        personName.innerHTML = names[index][0];
        rel_par.innerHTML = names[index][1];
    }else{
        personName.innerHTML = "Not found";
        rel_par.innerHTML = "Nothing here!";
    }
}

