function canGiveBlood(x,y){
//If O-
if (x == "O-"){
    console.log("True")
}
//If O+
if (x == "O+"){
    if (x == "O+" && (y == "O+" || y =="A+" || y =="B+" ||  y =="AB+")){
        console.log("True")
    }else{
        console.log("False")
    }
}
// If A-
if (x == "A-"){
    if (x == "A-" && (y == "A-" || y =="A+" || y =="AB-" || y =="AB+")){
        console.log("True")
    }else{
        console.log("False")
    }
}
// If A+
if (x == "A+"){
    if (x == "A+" && (y == "A+" || y =="AB+")){
        console.log("True")
    }else{
        console.log("False")
    }
}
// If B-
if (x == "B-"){
    if (x == "B-" && (y=="B-" || y =="B+" || y =="AB-" || y =="AB+")){
        console.log("True")
    }else{
        console.log("False")
    }
}
// If B+
if (x == "B+"){
    if (x == "B+" && (y == "B+" || y =="AB+")){
        console.log("True")
    }else{
        console.log("False")
    }
}
// If AB-
if (x == "AB-"){
    if (x == "AB-" && (y == "AB-" || y =="AB+")){
        console.log("True")
    }else{
        console.log("False")
    }
}
// If AB+
if (x == "AB+"){
    if (x == "AB+" && y == "AB+"){
        console.log("True")
    }else{
        console.log("False")
    }
}
}
canGiveBlood("O+", "A+")
canGiveBlood("A-", "B-")
canGiveBlood("A-", "AB+")