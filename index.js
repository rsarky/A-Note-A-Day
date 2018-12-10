// Months are 0 indexed
particlesJS.load('particles-js', './particlesjs-config.json', function () {
    console.log('callback - particles-js config loaded');
});
let today = new Date()
let anniv = new Date(anniversaryDate)
anniv = anniv.getTime()
let days = Math.floor((today - anniv) / 86400000)
document.getElementById('day').innerHTML = days
let dayMonth = today.getDate() + ":" + today.getMonth()
console.log(dayMonth)

document.getElementById('content').innerHTML = messages[dayMonth] ? messages[dayMonth] : noMessage
document.getElementById('content').innerHTML += endMessage
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
document.getElementById('date').innerHTML = today.toLocaleDateString("en-US", options)
