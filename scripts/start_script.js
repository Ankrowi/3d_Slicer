default_width = 2388
default_height = 1668

let current_height = window.screen.height
let current_width = window.screen.width

let scale_x = current_width / default_width
let scale_y = current_height / default_height

Array.from(document.getElementsByClassName("Login")).forEach(function(element) {
    element.style.transform = "scale(" + scale_x + "," + scale_y + ")"
})
Array.from(document.getElementsByClassName("Panel")).forEach(function(element) {
    element.style.cssText = "transform: scale(" + scale_x + "," + scale_y + ")"
    console.log("transform: scale(" + scale_x + "," + scale_y + ")")
})
Array.from(document.getElementsByClassName("right_panel")).forEach(function(element) {
    element.style.cssText = "transform: scale(" + scale_x + "," + scale_y + ")"
    console.log("transform: scale(" + scale_x + "," + scale_y + ")")
})
Array.from(document.getElementsByClassName("settings_panel_one_slot")).forEach(function(element) {
    element.style.cssText = "transform: scale(" + scale_x + "," + scale_y + ")"
    console.log("transform: scale(" + scale_x + "," + scale_y + ")")
})
Array.from(document.getElementsByClassName("view_panel")).forEach(function(element) {
    element.style.cssText = "transform: scale(" + scale_x + "," + scale_y + ")"
    console.log("transform: scale(" + scale_x + "," + scale_y + ")")
})
Array.from(document.getElementsByClassName("scroll_layers")).forEach(function(element) {
    element.style.cssText = "transform: scale(" + scale_x + "," + scale_y + ")"
    console.log("transform: scale(" + scale_x + "," + scale_y + ")")
})
Array.from(document.getElementsByClassName("arrow")).forEach(function(element) {
    element.style.cssText = "transform: scale(" + scale_x + "," + scale_y + ")"
    console.log("transform: scale(" + scale_x + "," + scale_y + ")")
})