function validateIdMinMax(inputValue, id, min, max) {

    if (inputValue < min) {
        document.getElementById(id).value = min
        window.alert(`Select values ${min} or ${max}`)
    }
    
    if (inputValue > max) {
        document.getElementById(id).value = max
        window.alert(`Select values ${min} or ${max}`)
    }
    //console.log(inputValue)
}