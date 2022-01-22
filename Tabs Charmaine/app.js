const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");
const history = document.getElementsByClassName("tab-btn");

about.addEventListener("click", function(e) {
    const id = e.target.dataset.id;
    if (id) {
        // remove active from other buttons
        btns.forEach(function (btn) {
            btn.classList.remove("active");
            e.target.classList.add("active");
            btn.style.backgroundColor = "white";
        });
        // hide other articles
        articles.forEach(function (article) {
            article.classList.remove("active")
        });
        const element = document.getElementById(id);
        element.classList.add("active");

        switch(id) {
            case "history":
                about.style.backgroundColor = "rgb(253, 159, 192)";
                history[0].style.backgroundColor = "rgb(253, 159, 192)";
                break;
            case "vision":
                about.style.backgroundColor = "rgb(176, 214, 255)";
                history[1].style.backgroundColor = "rgb(176, 214, 255)";
                break;
            case "goals":
                about.style.backgroundColor = "rgb(255, 188, 140)";
                history[2].style.backgroundColor = "rgb(255, 188, 140)";
                break;
        
        }
    }
});

// https://www.youtube.com/watch?v=3PHXvlpOkf4