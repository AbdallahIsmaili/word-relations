let rel_par = document.getElementById('discription');
let personName = document.getElementById('main-header');
let searched = document.getElementById('name-input')

// Here is the array i used it like a Database at the moment.
let names = [[], ["abdallah", "hey, that's me!, to be honest I love people who have the same name of mine, I think They are special as same as me!"], ["abdellah", "hey, that's me!, to be honest I love people who have the same name of mine, I think They are special as same as me!"], ["abd allah", "hey, that's me!, to be honest I love people who have the same name of mine, I think They are special as same as me!"], ["abdalah", "hey, that's me!, to be honest I love people who have the same name of mine, I think They are special as same as me!"], 
["sara", "To be honest I don't know any girl with that name, so i can't tell you anything. "], ["abd ellah", "hey, that's me!, to be honest I love people who have the same name of mine, I think They are special as same as me!"], 
["yassine", "This cool name is a wonderful name, I like it so much because I have so many friends with that name (3 friends i guess), also all of them are really cool,funny and depends on them."], ["yassin", "This cool name is a wonderful name, I like it so much because I have so many friends with that name (3 friends i guess), also all of them are really cool,funny and depends on them."], ["yasine", "This cool name is a wonderful name, I like it so much because I have so many friends with that name (3 friends i guess), also all of them are really cool,funny and depends on them."], 
["adnan", "This the name of one of the best of my friends in my life, he is very friendly and I can depend on him in everything, he is also so funny and understand me well, If you are ADNAN there, make sure you are a cool person in my life"], 
["malak", "Nooo I have a secret with that name, to be honest... this is the name of the girl I like so bad. let's talk about my MALAK!! indeed I don't knowlage about this girl, She is just a friend on FaceBook, I have not talk with her so much indeed, but i really want to. <br> now WHY I LIKE HER, because she is a muslim girl in the first place, she put her "]]

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

