// This example creates circles on the map, representing populations in North
// America.
//src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCkUOdZ5y7hMm0yrcCQoCvLwzdM6M8s5qk&callback=initMap">
// First, create an object containing LatLng and population for each city.

var citymap = {
    sanjose: {
        center: {
            lat: 37.279518,
            lng: -121.867905
        },
        storage: 800000,
        capacity: 200000
    },
    newyork: {
        center: {
            lat: 40.714,
            lng: -74.005
        },
        storage: 680000,
        capacity: 100000,
        status: false
    },
    losangeles: {
        center: {
            lat: 34.052,
            lng: -118.243
        },
        storage: 385770,
        capacity: 1000000,
        status: false
    },
    vancouver: {
        center: {
            lat: 49.25,
            lng: -123.1
        },
        storage: 603502,
        capacity: 200000,
        status: true
    }
};

function initMap() {
    "use strict";
    // Create the map.
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: {
            lat: 37.090,
            lng: -95.712
        },
        mapTypeId: 'terrain'
    });


    // Construct the circle for each value in citymap.
    // Note: We scale the area of the circle based on the population.
    for (var city in citymap) {
        // Add the circle for this city to the map.
        var cityCircle = new google.maps.Circle({
            strokeColor: '#008000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#008000',
            fillOpacity: 0.35,
            map: map,
            center: citymap[city].center,
            radius: Math.sqrt(citymap[city].storage) * 100
        });

        if (citymap[city].status == false) {
            var capCircle = new google.maps.Circle({
                strokeColor: '#FF0000',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#FF0000',
                fillOpacity: 0.35,
                map: map,
                center: citymap[city].center,
                radius: Math.sqrt(citymap[city].storage) * 100
            });
        }
    }

    var contentString1 = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Sanjose</h1>' +
        '<div id="bodyContent">' +
        '<p><b>Sanjose</b>, has total capacity of <b>100</b>,  ' +
        'for more data and chart representation click on this link ' +
        'Heritage Site.</p>' +
        '<p>Attribution: Sanjose, ' +
        '<div id="here_table">' +
        '<table>' +
        '<tr><th>Projects</th>' +
        '<th>Data</th></tr>' +
        '<tr><td>openstack</td>' +
        '<td>60</td></tr>' +
        '<tr><td>CMR4</td>' +
        '<td>60</td></tr>' +
        '<tr><td>infra</td>' +
        '<td>100</td></tr>' +
        '</table>' +
        'for more information click' +
        '<button onclick="myFunction()">here</button>' +
        '</div>' +
        '</p>' +
        '</div>' +
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString1
    });

    var sanjose = {
        lat: 37.279518,
        lng: -121.86
    };
    var marker = new google.maps.Marker({
        position: sanjose,
        map: map,
        title: 'Sanjose (Total capacity:100)',
    });


    marker.addListener('mouseover', function() {
        infowindow.open(map, this);
    });

    function myFunction() {
        window.parent.scroll(1000, 1000);
    }
    // assuming you also want to hide the infowindow when user mouses-out
    /*marker.addListener('mouseout', function() {
        infowindow.close();
        });*/

    var herebtn = document.getElementById('here');
    //document.getElementById("here").type = "button";

    herebtn.onclick = function() {
        window.scroll(1000, 1000);
        window.parent.scroll(100, 100);
        $('html,body').animate({
                scrollTop: $(".second").offset().top
            },
            'slow');
    }

    herebtn.onclick = function() {
        alert("hi");
    }

    marker.addListener('click', function() {
        //window.scrollTo(0,document.documentElement.scrollHeight);
        var button1 = document.createElement("button");
        button1.innerHTML = "CMR4";
        //button1.appendChild(piechart);
        var button2 = document.createElement("button");
        button2.innerHTML = "VMOpenStack";
        //button2.appendChild(piechart);
        var button3 = document.createElement("button");
        button3.innerHTML = "HM5";
        //button3.appendChild(piechart);
        var button4 = document.createElement("button");
        button4.innerHTML = "VMware";
        //Total number of VMs per Vcenter
        button4.appendChild(piechart);

        // 2. Append somewhere
        var body = document.getElementsByTagName("body")[0];
        body.appendChild(button1);
        body.appendChild(button2);
        body.appendChild(button3);
        body.appendChild(button4);

        // 3. Add event handler
        button1.addEventListener("click", function() {
            alert("did something");
        });

        button2.addEventListener("click", function() {
            //alert("did something");
            modelblock();

        });

        button3.addEventListener("click", function() {
            //alert("did something");
            alert(window.location.href)
        });

        button4.addEventListener("click", function() {
            //alert("did something");
            drawChart();

        });

        infowindow.open(map, marker);

        function drawChart() {


            var data = google.visualization.arrayToDataTable([
                ['Task', 'Hours per Day'],
                ['Work', 11],
                ['Eat', 2],
                ['Commute', 2],
                ['Watch TV', 2],
                ['Sleep', 7]
            ]);

            var options = {
                title: 'My Daily Activities'
            };
            var piechart;

            var chart = new google.visualization.PieChart(document.getElementById('piechart'));

            chart.draw(data, options);

        }

    });



    //google.maps.event.addDomListener(window, "load", initMap);
}
 

function modelblock() {
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    var btn2 = document.getElementById("NumberOfVMOff");
    //btn.appendChild(piechart);
    btn2.onclick = function() {
        modelblock2();
    }

}

function modelblock2() {
    var modal2 = document.getElementById('myModal2');
    modal2.style.display = "block";
    var span = document.getElementsByClassName("close")[0];

    drawChart();

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal2.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal2.style.display = "none";
        }
    }

    //drawChart();

}