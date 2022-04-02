class xy_point {
    #x
    #y
    constructor (_x, _y) {
        this.#x = _x
        this.#y = _y
    }
    get_x() {
        return this.#x
    }
    get_y() {
        return this.#y
    }
}

class pair {
    #first
    #second
    constructor(first, second) {
        this.#first = first
        this.#second = second
    }
    get_first() {
        return this.#first
    }
    get_second() {
        return this.#second
    }
}

class double_state_object {
    #states
    #current_state
    #document_object
    #object_given = false

    constructor(first_state, second_state, fst_state_coords, scnd_state_coords) {
        let first = new pair(first_state, fst_state_coords)
        let second = new pair(second_state, scnd_state_coords)
        this.#states = new Array()
        this.#states.push(first)
        this.#states.push(second)
        this.#current_state = first_state
    }
    set_object(object) {
        this.#document_object = object
        this.#object_given = true
    }
    move() {
        
        this.change_state()
        this.change_coords()
    }
    change_state() {
        if (this.#current_state === this.#states[0].get_first())
            this.#current_state = this.#states[1].get_first()
        else this.#current_state = this.#states[0].get_first()
    }
    change_coords() {
        if (this.#object_given === false) return
        if (this.#current_state === this.#states[0].get_first()) {
            document.getElementById(this.#document_object).style.left = this.#states[0].get_second().get_x()
            document.getElementById(this.#document_object).style.top = this.#states[0].get_second().get_y()
        } else {
            document.getElementById(this.#document_object).style.left = this.#states[1].get_second().get_x()
            document.getElementById(this.#document_object).style.top = this.#states[1].get_second().get_y() 
        }   
    }
}

class panel extends double_state_object {
    #arrow
    #arrow_set = false
    set_arrow(arrow) {
        this.#arrow = arrow
        this.#arrow_set = true
    }
    click() {
        this.move()
        this.#arrow.move()
    }
}


let lft_arr_op = new xy_point(1052, 168)
let lft_arr_cl = new xy_point(1140, 168)

let lft_arr = new double_state_object("open", "close", lft_arr_op, lft_arr_cl)
lft_arr.set_object("right_arrow")

let rgh_pan_op = new xy_point(1074, 160)
let rgh_pan_cl = new xy_point(1160, 160)

let rgh_pan = new panel("open", "close", rgh_pan_op, rgh_pan_cl)
rgh_pan.set_arrow(lft_arr)
rgh_pan.set_object("right_panel")

document.getElementById("right_arrow").addEventListener('click', function(arr) {
    rgh_pan.click()
})