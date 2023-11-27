//movie

class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating; 
    }
getpg(){
    return `${this.title}, ${this.studio},${this.rating}`
    }
}

    var c = new Movie ( "Casino Royale","Eon Productions","PG­13")
    console.log(c.getpg());