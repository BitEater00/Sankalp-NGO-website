var messages = [
"I am very gratified to say that Sankalp institute bacame one of the pre-eminent  spot for students to develop the potential knowlegde , communication skill along with acedemic carriculm to crack difficult examination and  to cope up all the futures difficulty under supervision of IITian and  international experts .However, This could be the stupendous,  opportunity for dreamer, who came from rural area where, there are always lagging in to get quality education.",
"",
"",
"",
"Education is fundamental right of every citizen and there are no reason that rural students should not get the world class quality education. I assure you that with your help we will be making Sankalp world class institution at affordable cost. Thank You!",
"Sankalp, name says it all about the pride and devotion the sankalp family took in last few years for the betterment of the youth strata in its locality"
]

var names = [
    "Vinit Singh",
    "Priyanshu Singh",
    "Manish Kumar Singh",
    "Amit Kumar Suman",
    "Nilesh Kumar Singh",
    "Kishan Singh"   
]
function modalshowfunction(num)
{
    if(num > names.length)
        return;
    document.getElementById("messageModalLabel").innerHTML = names[num-1] + "'s Message";
    document.getElementById("messageBody").innerHTML = messages[num-1];
    console.log(names[num-1]);
    console.log(messages[num-1]);
    $("#message").modal("show");
}