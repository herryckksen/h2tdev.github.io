design.style.display = 'none'
software.style.display = 'none'

function webVisible(){
    website = document.getElementById('web')
    design = document.getElementById('design')
    software = document.getElementById('software')
    
    website.style.display = 'block'
    design.style.display = 'none'
    software.style.display = 'none'
}
function designVisible(){
    website = document.getElementById('web')
    design = document.getElementById('design')
    software = document.getElementById('software')
    
    website.style.display = 'none'
    design.style.display = 'block'
    software.style.display = 'none'
}
function softwareVisible(){
    website = document.getElementById('web')
    design = document.getElementById('design')
    software = document.getElementById('software')
    
    website.style.display = 'none'
    design.style.display = 'none'
    software.style.display = 'block'
}