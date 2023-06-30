function my_Dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Golden",
        Type:"Retriever",
        Age:4,
        Sound:"Woof!"
    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}