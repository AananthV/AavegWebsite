const data = JSON.parse($('#hack').html())

$('#hack').remove()

const returnImgLink = (hostel) => {
  return logos[hostel]
}

var logos = {
  Agate: 'images/agate_logo.png',
  Diamond: 'images/diamond_logo.png',
  Coral: 'images/coral_logo.png',
  Jade: 'images/jade_logo.png',
  Opal: 'images/opal_logo.png'
}

console.log($('.mini-hostel-logo'))
$('.mini-hostel-logo').each((index, ele) => {
  $(ele).attr('src', String(returnImgLink(String($(ele).attr('alt')))))
})

var culturalsData = [
  data.standings.culturals.Agate,
  data.standings.culturals.Diamond,
  data.standings.culturals.Coral,
  data.standings.culturals.Jade,
  data.standings.culturals.Opal
]
var spectrumData = [
  data.standings.spectrum.Agate,
  data.standings.spectrum.Diamond,
  data.standings.spectrum.Coral,
  data.standings.spectrum.Jade,
  data.standings.spectrum.Opal
]
var sportsData = [
  data.standings.sports.Agate,
  data.standings.sports.Diamond,
  data.standings.sports.Coral,
  data.standings.sports.Jade,
  data.standings.sports.Opal
]

var barChartDataCultural = {// eslint-disable-line
  labels: ['Agate', 'Diamond', 'Coral', 'Jade', 'Opal'],
  datasets: [{
    label: 'Cultural',
    backgroundColor: '#09bc8a',
    data: culturalsData
  }]

}

var barChartDataSpectrum = {// eslint-disable-line
  labels: ['Agate', 'Diamond', 'Coral', 'Jade', 'Opal'],
  datasets: [{
    label: 'Spectrum',
    backgroundColor: '#75dddd',
    data: spectrumData
  }]

}

var barChartDataSports = {// eslint-disable-line
  labels: ['Agate', 'Diamond', 'Coral', 'Jade', 'Opal'],
  datasets: [{
    label: 'Sports',
    backgroundColor: '#f49d6e',
    data: sportsData
  }]

}

var barChartData = {
  labels: ['Agate', 'Diamond', 'Coral', 'Jade', 'Opal'],
  datasets: [{
    label: 'Cultural',
    backgroundColor: '#09bc8a',
    data: culturalsData
  }, {
    label: 'Sports',
    backgroundColor: '#f49d6e',
    data: sportsData
  }, {
    label: 'Spectrum',
    backgroundColor: '#75dddd',
    data: spectrumData
  }]

}

window.onload = chartMaker(barChartData, true)

function chartMaker (dataset, stacked = false) {
  var ctx = document.getElementById('canvas').getContext('2d')
  window.myBar = new Chart(ctx, {// eslint-disable-line
    type: 'bar',
    data: dataset,
    options: {
      title: {
        display: true,
        text: 'Points Statistics',
        fontColor: '#fff'
      },
      tooltips: {
        mode: 'index',
        intersect: false
      },
      responsive: true,
      scales: {
        xAxes: [{
          stacked: stacked,
          gridLines: {
            display: false
          },
          ticks: {
            fontColor: '#fff'
          }
        }],
        yAxes: [{
          stacked: stacked,
          gridLines: {
            display: false
          },
          ticks: {
            fontColor: '#fff',
            beginAtZero: true
          }
        }]
      },
      legend: {
        labels: {
          fontColor: 'rgb(255,255,255)'
        }
      },
      animation: {
        duration: 1000,
        easing: 'easeInQuad'
      }
    }
  })
}
