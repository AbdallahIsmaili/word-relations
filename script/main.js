let rel_par = document.getElementById('discription');
let personName = document.getElementById('main-header');
let searched = document.getElementById('name-input')

// Here is the array i used it like a Database at the moment.
let names = [[], ["abdallah", "hey, that's me!, to be honest I love people who have the same name of mine, I think They are special as same as me!"], ["abdellah", "hey, that's me!, to be honest I love people who have the same name of mine, I think They are special as same as me!"], ["abd allah", "hey, that's me!, to be honest I love people who have the same name of mine, I think They are special as same as me!"], ["abdalah", "hey, that's me!, to be honest I love people who have the same name of mine, I think They are special as same as me!"], 
["sara", "To be honest I don't know any girl with that name, so i can't tell you anything. "], ["abd ellah", "hey, that's me!, to be honest I love people who have the same name of mine, I think They are special as same as me!"], 
["yassine", "This cool name is a wonderful name, I like it so much because I have so many friends with that name (3 friends i guess), also all of them are really cool,funny and depends on them."], ["yassin", "This cool name is a wonderful name, I like it so much because I have so many friends with that name (3 friends i guess), also all of them are really cool,funny and depends on them."], ["yasine", "This cool name is a wonderful name, I like it so much because I have so many friends with that name (3 friends i guess), also all of them are really cool,funny and depends on them."], 
["adnan", "This the name is one of the best of my friends in my life, he is very friendly and I can depend on him in everything, he is also so funny and understand me well, If you are ADNAN there, make sure you are a cool person in my life. click here: <a href='/names/adnan.html'>THIS IS ADNAN!</a>"], 
["malak", "Nooo I have a secret with that name, to be honest... this is the name of the girl I like so bad and the only one. let's talk about my MALAK!! indeed I don't knowlage about this girl, She is just a friend on FaceBook, I have not talk with her so much indeed, but i really want to. <br> now WHY I LIKE HER, because she is a muslim girl in the first place, she wears her veil, she always share Qoran, share useful, positive and funny things, her thinking is so cool and wonderful for me, I like her this way. <br> why I can't tell her about this feeling duo to the fact that I don't think she'll accept this feeling, I'm just a stranger to her! accept my feelings or not I still Like you so much. <br> Of course you want to know who is this pretty girl, just click here: <a href='/names/malak.html'>THIS IS MALAK!</a>"], 
["nada", "To be honest I don't know any girl with that name, so i can't tell you anything. "],
["yasser", "To be honest I don't know anyone with that name, so i can't tell you anything. "],
["omaima", "To be honest I don't know any girl with that name, so i can't tell you anything. "], 
["omayma", "To be honest I don't know any girl with that name, so i can't tell you anything. "], 
["oumaima", "To be honest I don't know any girl with that name, so i can't tell you anything. "], 
["oumayma", "To be honest I don't know any girl with that name, so i can't tell you anything. "], 
["yousra", "To be honest I don't know any girl with that name, so i can't tell you anything. "], 
["yosra", "To be honest I don't know any girl with that name, so i can't tell you anything. "], 
["imad", "To be honest I don't know anyone with that name, so i can't tell you anything. "], 
["nadia", "To be honest I don't know any girl with that name, so i can't tell you anything. "], 
["yassmine", "To be honest I don't know any girl with that name, so i can't tell you anything. "], 
["salma", "even if I don't know many girls with that name, I hate it so much (Nothing personal please). "],["farah", "To be honest I don't know any girl with that name, so i can't tell you anything. "],["othman", "This the name is one of the best of my friends, he is very friendly, funny and understand me well, If you are OTHMAN there, make sure you are a cool person. click here: <a href='/names/othman.html'>THIS IS OTHMAN!</a>"]
,["mohammed", "the name of my big brother, also one of the best of my classmates"],["muhammed", "the name of my big brother, also one of the best of my classmates"],["mohamed", "the name of my big brother, also one of the best of my classmates"],["ali", "one of the best of my classmates &#11088;"],["mehdi", "one of the best of my classmates, and a cool old friend &#11088;"],["mahdi", "one of the best of my classmates &#11088;"],["hamza", "one of the best of my classmates &#11088;"],["youssef", "one of the best of my classmates &#11088;"],["hafsa", "one of the best of my classmates &#11088;"],["mariam", "I know so many girls with that name, some of them are nice and good girls, however, not all people are good. <br> To be honest there a girl with that name I hate so much and I really want her to be removed from my life, but there is another one I respect."],["meriam", "I know so many girls with that name, some of them are nice and good girls, however, not all people are good. <br> To be honest there a girl with that name I hate so much and I really want her to be removed from my life, but there is another one I respect."],["maryam", "I know so many girls with that name, some of them are nice and good girls, however, not all people are good. <br> To be honest there a girl with that name I hate so much and I really want her to be removed from my life, but there is another one I respect."],["bilal", "one of the best of my classmates, and a cool old friend &#11088;"],["yahya", "one of the best of my classmates, and a cool old friend &#11088;"],["abdassamad", "this person is a developer just like me, I love people who share the same domain as mine, and Abdassamad is really cool person and headworker too."],["abdessamad", "this person is a developer just like me, I love people who share the same domain as mine, and Abdassamad is really cool person and headworker too."], 
["aya", "The lovely name, it is the name of my beautiful sister's daughter."], ["rayhan", "The lovely name, it is the name of my beautiful sister's daughter."],["reyhan", "The lovely name, it is the name of my beautiful sister's daughter."],["aicha", "The best name in the world, it is my mother name, I love my mother so much she is a wonderful woman and greet one, all the love to that name."],["aisha", "The best name in the world, it is my mother name, I love my mother so much she is a wonderful woman and greet one, all the love to that name."],["ibrahim", "to be honest even if this my father name, I don't like it so much, because it remembers me by my father..."],["ilham", "I have an Otaku friend with that name and she is so sweet."], ["elham", "I have an Otaku friend with that name and she is so sweet."], ["asmae", "even if I don't know many girls with that name, that name owners are so sweet."], ["asmaa", "even if I don't know many girls with that name, that name owners are so sweet."], ["shaimae", "This name remember me of a family member who I respect and have a greet relation with."], ["shaimaa", "This name remember me of a family member who I respect and have a greet relation with."], ["shaima", "This name remember me of a family member who I respect and have a greet relation with."], ["maroua", "This name remember me of a family member... how sad! I don't like that member as same as her."], ["marwa", "This name remember me of a family member... how sad! I don't like that member as same as her."]];

function findMyName() {
    let index = 0;
    for (let i = 0; i < names.length; i++) {

        let searchedName = searched.value
        searchedName = searchedName.toLowerCase();

        if (names[i][0] == searchedName || names[i][0] == searchedName.replace(/\s/g, "")) {
            index = i;
            break
        }else{
            index = 0;
        }
    };

    if (index != 0) {
        let theName =  names[index][0];
        personName.innerHTML = theName.charAt(0).toUpperCase() + theName.slice(1);
        rel_par.innerHTML = names[index][1];
    }else{
        personName.innerHTML = names[index][0];
        rel_par.innerHTML = "Nothing here! Sorry, I think I don't know any one with this name";
    };

    searchedName = "";
}

