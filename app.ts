/**
 * Alternates the background color of a website between a dark-purplish color and an
 * ugly green color. Intended to be used with 
 */
function turnBackgroundUglyGreen (){
    if(document != null) {
        let d = document.documentElement.style.backgroundColor; /* https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement */
        if(d == "rgb(115, 160, 20)") /* http://hex.wikimix.info/en/color-73a213 */
            document.documentElement.style.backgroundColor = "rgb(15, 15, 20)";
        else
            document.documentElement.style.backgroundColor = "rgb(115, 160, 20)";

    }
    return 0;
}

export {turnBackgroundUglyGreen}