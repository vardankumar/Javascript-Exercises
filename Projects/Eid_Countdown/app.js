
function remainigTime(){
    let eidDate = new Date("06-16-2024")
    let today = new Date()
    // console.log(timeToEid)
    // console.log(today)
    
    let timeToEid = new Date(eidDate - today)
    
    let daysToEid = timeToEid / (1000 * 60 * 60 * 24)
    let hoursToEid = (daysToEid % 1) * 24
    let minutesToEid = (hoursToEid % 1) * 60
    let secondsToEid = (minutesToEid % 1) * 60
    
    // console.log(daysToEid)
    // console.log(hoursToEid)
    // console.log(minutesToEid)
    // console.log(secondsToEid)


    document.getElementById("days").innerText = Math.round(daysToEid)
    document.getElementById("hours").innerText = Math.round(hoursToEid)
    document.getElementById("minutes").innerText = Math.round(minutesToEid)
    document.getElementById("seconds").innerText = Math.round(secondsToEid)

}


setInterval(remainigTime, 1000)