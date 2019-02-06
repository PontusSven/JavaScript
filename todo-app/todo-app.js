const ps = document.querySelectorAll('p')

ps.forEach(function (p) {

    if (p.textContent.includes('the')) {
        p.remove()  
    } 
})

