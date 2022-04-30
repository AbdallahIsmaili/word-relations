let rel_par = document.getElementById('discription');
let personName = document.getElementById('main-header');
let searched = document.getElementById('name-input');
let back = document.getElementById('back-btn');


// Here is the array i used it like a Database at the moment.
let names = [[], ["abdallah", "hey, that's me!, to be honest I love people who have the same name of mine, I think They are special as same as me!"], ["abdellah", "hey, that's me!, to be honest I love people who have the same name of mine, I think They are special as same as me!"], ["abd allah", "hey, that's me!, to be honest I love people who have the same name of mine, I think They are special as same as me!"], ["abdalah", "hey, that's me!, to be honest I love people who have the same name of mine, I think They are special as same as me!"], 
["sara", "To be honest, I don't know any girl with that name, so i can't tell you anything. "], ["abd ellah", "hey, that's me!, to be honest I love people who have the same name of mine, I think They are special as same as me!"], 
["yassine", "This cool name is wonderful, I like it so much because I have so many friends with that name (3 friends I guess), also all of them are cool,funny and depends on them. Here is the best of them. click here: <a href='/names/yasineo.html'>THIS IS YASSINE 1!</a>, <a href='/names/yasiner.html'>THIS IS YASSINE 2!</a> "], ["yassin", "This cool name is wonderful, I like it so much because I have so many friends with that name (3 friends I guess), also all of them are cool,funny and depends on them. Here is the best of them. click here: <a href='/names/yasineo.html'>THIS IS YASSINE 1!</a>, <a href='/names/yasiner.html'>THIS IS YASSINE 2!</a> "], ["yasine", "This cool name is wonderful, I like it so much because I have so many friends with that name (3 friends I guess), also all of them are cool,funny and depends on them. Here is the best of them. click here: <a href='/names/yasineo.html'>THIS IS YASSINE 1!</a>, <a href='/names/yasiner.html'>THIS IS YASSINE 2!</a> "], 
["adnan", "This the name is one of the best of my friends in my life, he is very friendly and I can depend on him in everything, he is also so funny and understands me well, If you are ADNAN there, make sure you are a cool person in my life. click here: <a href='/names/adnan.html'>THIS IS ADNAN!</a>"], 
["malak", "Nooo now I got a problem, man I have a secret with that name, to be honest... this is the name of the girl I like so bad and the only one. let's talk about my MALAK!! indeed I don't have any knowledge about this girl, She is just a friend on FaceBook, I have not talked with her so much indeed, but I want to. <br> now WHY I LIKE HER because she is a Muslim girl in the first place, she wears her veil always, she used to share Qoran, share useful, positive and funny things, her thinking is so cool and wonderful for me, and I think she isn't easy, and very smart, I like her this way. <br> why can't tell her about this feeling? because I don't think she'll accept any of these feelings, I'm just a stranger to her! also I think this isn't the right time to tell her about my emotions... accept my feelings or not I still Like you so much. <br>, Of course, you want to know who is this pretty girl, just click here: <a href='/names/malak.html'>THIS IS MALAK!</a>"], 
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
,["mohammed", "the name of my big brother, also one of the best of my classmates"],["muhammed", "the name of my big brother, also one of the best of my classmates"],["mohamed", "the name of my big brother, also one of the best of my classmates"],["ali", "one of the best of my classmates &#11088;"],["mehdi", "one of the best of my classmates, and a cool old friend &#11088;"],["mahdi", "one of the best of my classmates &#11088;"],["hamza", "one of the best of my classmates &#11088;"],["youssef", "one of the best of my classmates &#11088;"],["hafsa", "one of the best of my classmates &#11088;"],["mariam", "I know so many girls with that name, some of them are nice and good girls, however, not all people are good. <br> To be honest there a girl with that name I hate so much and I really want her to be removed from my life, but there is another one I respect."],["meriam", "I know so many girls with that name, some of them are nice and good girls, however, not all people are good. <br> To be honest there a girl with that name I hate so much and I really want her to be removed from my life, but there is another one I respect."],["maryam", "I know so many girls with that name, some of them are nice and good girls, however, not all people are good. <br> To be honest there a girl with that name I hate so much and I really want her to be removed from my life, but there is another one I respect."],["bilal", "one of the best of my classmates, and a cool old friend &#11088;"],["yahya", "one of the best of my classmates, and a cool old friend &#11088;"],["abdassamad", "this person is a developer just like me, I love people who share the same domain as mine, and Abdassamad is a cool person and head worker too."],["abdessamad", "this person is a developer just like me, I love people who share the same domain as mine, and Abdassamad is a cool person and head worker too."], 
["aya", "The lovely name is the name of my beautiful sister's daughter."], ["rayhan", "The lovely name is the name of my beautiful sister's daughter."],["reyhan", "The lovely name is the name of my beautiful sister's daughter."],["aicha", "The best name in the world is my mother's name, I love my mother so much she is a wonderful woman and greets one, all the love to that name."],["aisha", "The best name in the world is my mother's name, I love my mother so much she is a wonderful woman and greets one, all the love to that name."],["ibrahim", "to be honest, even if this is my father's name, I don't like it so much, because it remembers me of my father..."],["ilham", "I have an Otaku friend with that name and she is so sweet."], ["elham", "I have an Otaku friend with that name and she is so sweet."], ["asmae", "even if I don't know many girls with that name, that name owners are so sweet."], ["asmaa", "even if I don't know many girls with that name, that name owners are so sweet."], ["shaimae", "This name remember me of a family member with who I respect and have a greet relation."], ["najah", "I hate a person with that name so much, she hurt me the most, I truly hate to hear that name."], ["amal", "Mmmmm there is no need to talk about that name, many bad things happen when I remember a user of that name."], ["shaimaa", "This name remember me of a family member with who I respect and have a greet relation."], ["shaima", "This name remember me of a family member with who I respect and have a greet relation."], ["maroua", "This name remember me of a family member... how sad! I don't like that member as same as her."], ["marwa", "This name remember me of a family member... how sad! I don't like that member as same as her."], ["khoula", "When I hear that name, the only person who comes to my mind is my sweet and pretty cousin."], ["houcinne", "there is one person I know with that name.., I love you man you are a great person bro click here: <a href='/names/houcinne.html'>THIS IS HOUCINNE!</a> ."], ["amine","I don't know why all people having that name are too friendly and nice people, but I want to send a message to one of them. <br> Hey there body, I just want you to know you are one of the best friends and classmates I've to know in my life: <a href='/names/amine.html'>THIS IS AMINE!</a> ."]];

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

    searched.value = "";

    back.style.display='block';

};

document.getElementById("name-input")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("clicked-btn").click();
    }
});


