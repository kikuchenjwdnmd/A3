

$(".flight-detail-wrap").slideUp();


let flightList = []


$.ajax({
  url: "bookingData.json", 
  dataType: "json",
  success: function (res) {
    console.log(res.data);
    flightList = flightList.concat(res.data)
    console.log(flightList,'dd');

    let html = formatBookingListItem(res.data)

    $('#booking-list').append(html)
    $(".flight-detail-wrap").slideUp();


    // add click function
    $('.booking-list-item .flight-price>.btn').on('click', selectFlight)

    $(".detail").on("click", function () {
      $(this).toggleClass("show");
      $(this).parent().parent().parent().parent().find(".flight-detail-wrap").slideToggle()
    });
  },
});


function formatBookingListItem(BookingList) {

  let html = ""
  BookingList.forEach((item) => {
    let temp = `<div class="booking-list-item">
        <div class="booking-list-item-inner">
          <div class="booking-list-top">
            <div class="flight-airway">
              <div class="flight-logo">
              <img src="${item.imageUrl}" alt="">
                <h5 class="title">${item.airlines}</h5>
              </div><span>Operated by ${item.operated}</span>
            </div>
            <ul class="flight-info">
              <li>${dayjs(item.startTime).format('dddd')},<span>${dayjs(item.startTime).format('MMM DD')}</span></li>
              <li class="time"><span>${dayjs(item.startTime).format('HH:mm')}</span>DAC</li>
              <li>${item.flightTime}<span>${item.nonStop ? 'Non-stop': item.transit.length + ' Stops'}</span></li>
            </ul>
            <div class="flight-price">
              <h4 class="title">${item.unit}$ ${item.price}</h4>
              <button class="btn" data-fligh-no="${item.flightNo}">Select</button>
            </div>
          </div>
          <div class="booking-list-bottom">
            <ul>
              <li class="detail"><i class="fa-solid fa-angle-down"></i>Flight Detail</li>
              <li>Price per person(incl. taxes & fees)</li>
            </ul>
          </div>
        </div>
        <div class="flight-detail-wrap">
          <div class="flight-date">
            <ul>
              <li>${dayjs(item.startTime).format('dddd,MMM DD')}</li>
              <li>${dayjs(item.startTime).format('dddd,MMM DD - HH:mm')} <span>${item.flightTime}</span></li>
              <li>${dayjs(item.endTime).format('dddd,MMM DD - HH:mm')}</li>
            </ul>
          </div>
          <div class="flight-detail-right">
            <h4 class="title">${item.departure} - ${item.departureFullName}</h4>
            <div class="flight-detail-info"><img src="${item.imageUrl}" alt="">
              <ul>
                <li>Operated by ${item.operated}</li>
                <li>Economy | Flight ${item.flightNo} | Aircraft ${item.aircraft}</li>
                <li>Adult(s):${item.luggageFree} luggage free</li>
              </ul>
            </div>
            <h4 class="title title-two">${item.arrive} - ${item.arriveFullName}</h4>
          </div>
        </div>
        </div>`

    html += temp

  })


  return html

}


function selectFlight(e) {

  let data = flightList.find((item) => {
    return item.flightNo == e.target.dataset.flighNo
  })

  localStorage.setItem("selectFlight", JSON.stringify(data));



  location.href = '/booking-details.html'

  

}