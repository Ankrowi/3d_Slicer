var main_picture_src = new Map()
main_picture_src.set("view_full", "pictures/Main_full.svg")
main_picture_src.set("view_front", "pictures/Main_front.svg")
main_picture_src.set("view_top", "pictures/Main_top.svg")
main_picture_src.set("view_left", "pictures/Main_left.svg")
main_picture_src.set("view_right", "pictures/Main_right.svg")

var buttons_ways = new Map()
buttons_ways.set("custom_button", "../pictures/default_button.svg")

function view_button_click(view_button) {
    document.getElementById("main_picture").src = main_picture_src.get(view_button)
    if (view_button !== "view_full") {
        document.getElementById("main_picture").style.left = 500
        document.getElementById("main_picture").style.top = 200
    } else {
        document.getElementById("main_picture").style.left = 700
        document.getElementById("main_picture").style.top = 360
    }
}

let view_buttons = document.getElementsByClassName("view_button")
Array.from(view_buttons).forEach(function (button) {
    button.addEventListener('click', function(e) {
        view_button_click(e.target.id)
    })
})

function set_buttons_back_image(button, button_class) {
    button.style.backgroundImage = "url(" + buttons_ways.get(button_class) + ")"
}
