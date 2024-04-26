let flightData = localStorage.getItem('selectFlight')

if (flightData) {
    flightData = JSON.parse(flightData)
    // booking info start
    $('#booingInfoStart').html(`
        ${dayjs(flightData.startTime).format('HH:mm')}(${flightData.departure}) <span>${flightData.departureCityName}</span>
    `)

    // end
    $('#booingInfoEnd').html(`
        ${dayjs(flightData.endTime).format('HH:mm')}(${flightData.arrive}) <span>${flightData.arriveCityName}</span>
    `)


    // img
    $('#flightImg').attr('src', flightData.imageUrl);
    $('#flightIcon').attr('src', flightData.imageUrl)


    console.log($('#filghtImg'));

    $('#price').text(`$${flightData.price - flightData.tax}`)
    $('#tax').text(`$${flightData.tax}`)
    $('#totalAirfare').text(`$${flightData.price}`)
    $('#total').text(`$${flightData.price}`)


} else {
    alert('Sorry. Your session has expired. Please search again.')
    location.href = '/index.html'
}