var left_panel = document.getElementById("left_panel")
var right_panel = document.getElementById("right_panel")
var arrow_states = new Map()
arrow_states.set("right","open")
arrow_states.set("left","open")

function arrow_clicked (arrow) {
    if ( arrow_states.get(arrow) === "close")
        open_arrow(arrow)
    else close_arrow(arrow)
}

function open_arrow(arrow) {
    arrow_states.set(arrow, "open")
    if (arrow === "left_arrow") {
        document.getElementById(arrow).style.left = 220
        document.getElementById(arrow).style.transform = 'rotate(0deg)'
        show_panel(left_panel, "left")
    } else {
        document.getElementById(arrow).style.right = 260;
        document.getElementById(arrow).style.transform = 'rotate(180deg)'
        show_panel(right_panel, "right")
    }
}

function close_arrow(arrow) {   
    arrow_states.set(arrow, "close")
    if (arrow === "left_arrow") {
        document.getElementById(arrow).style.left = 40
        document.getElementById(arrow).style.transform = 'rotate(180deg)'
        hide_panel(left_panel, "left")  
    } else {
        document.getElementById(arrow).style.right = 40
        document.getElementById(arrow).style.transform = 'rotate(0deg)'
        hide_panel(right_panel, "right")
    }
}

function hide_panel (panel, site) {
    let panel_width = getComputedStyle(panel).width
    if (site ==="right") {
        panel.style.right = 36 - panel_width.substring(0, panel_width.length - 2)
    } else {
        panel.style.left = 36 - panel_width.substring(0, panel_width.length - 2)
    }
}

function show_panel(panel, site) {
    if (site === "right") {
        panel.style.right = 10
    } else {
        panel.style.left = 10;
    }
}

let arrows_array = Array.from(document.getElementsByClassName("arrow"))
arrows_array.forEach(function(arr) {
    arr.addEventListener('click', function(e) {
        arrow_clicked(e.target.id)
    })
})