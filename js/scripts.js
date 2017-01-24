
var fele = { name: "The 5th Element"};
var goodWill = { name: "Good Will Hunting"};
var sev = { name: "Se7en"};
var batman = { name: "The Dark Knight"};
var zoo = { name: "Zootopia"}
var movie = { fele: fele, goodWill: goodWill, sev: sev , batman: batman, zoo: zoo};

var child = { name: "child", mat: "$7.00", ngt: "$10.00"}
var student = { name: "student", mat: "8.00", ngt: "$10.00"}
var adult = { name: "adult", mat: "$10.00", ngt: "$12.00"}
var senior = { name: "senior", mat: "$6.00", ngt: "$9.00"}
var custType = [child, student, adult, senior];


function movie(name, time, custType) {
  this.movie = movie;
  this.time = time;
  this.custType = custType;
}

fele.time = { time: [1220, 220, 440, 700, 915]};
goodWill.time = { time: [1250, 330, 600, 1015]};
sev.time = { time: [100, 300, 520, 735, 1035]};
batman.time = { time: [1220, 310, 630, 850, 1120]};
zoo.time = { time: [1015, 1145, 159, 330, 545, 730, 945]}

fele.mat = { time: [1220] };
goodWill.mat = { time: [1250]};
sev.mat = { time: [100]};
batman.mat = { time: [1220]};
zoo.mat = { time: [1015, 1145, 159]}

fele.ngt = { time: [220, 440, 700, 915]};
goodWill.ngt = { time: [330, 600, 1015]};
sev.ngt = { time: [300, 520, 735, 1035]};
batman.ngt = { time: [310, 630, 850, 1120]};
zoo.ngt = { time: [330, 545, 730, 945]}

function checkIfMat (time, array) {
  if (array.indexOf(time) !== -1) {
    return "mat";
  } else {
    return "night"
  }
}

function matMulti (price, quantity) {
  if (price === "0") {
    return quantity * 7.00;
  } else if (price === "1") {
    return quantity * 8.00;
  } else if (price === "2") {
    return quantity * 10.00;
  } else {
    return quantity * 6.00;
  }
}

  function ngtMulti (price, quantity) {
    if (price === "0") {
      return quantity * 10.00;
    } else if (price === "1") {
      return quantity * 10.00;
    } else if (price === "2") {
      return quantity * 12.00;
    } else {
      return quantity * 9.00;
    }
  }

  $(document).ready(function() {

    $("#5thEl").click(function() {
      $("#5thElTimes Ul").empty().toggle()
      var timeArr = movie.fele.time.time;
      timeArr.forEach(function(time) {
        var matOrNgt = checkIfMat(time, movie.fele.mat.time)
        $("#5thElTimes Ul").append("<li class=" + matOrNgt + ">" + time + "</li>")
      });
      // $("#5thElTimes").click(function() {
      //   $(".custTypeSel").empty();
      //   for (var i = 0; i < custType.length; i++) {
      //     $(".custTypeSel").append("<option value=" + i + ">" + custType[i].name + "</option>");
      //   }
      //   $(".custPrice").show();
      // })

      $(".mat").click(function() {
        $(".custTypeSel").empty();
        for(var i = 0; i < custType.length; i++) {
          $(".custTypeSel").append("<option value=" + i + ">" + custType[i].name + " " + custType[i].mat + "</option>");
        }
        $("#orderForm").submit(function(event) {
          event.preventDefault();
          $(".finalPrice").show();
          $("#tixQty").text($(".custQty").val());
          $("#movieName").text(fele.name);
          $("#totalPrice").text(matMulti($(".custTypeSel").val(), $(".custQty").val()))
        });
        $(".custPrice").show();
      });

        $(".night").click(function() {
          $(".custTypeSel").empty();
          for(var i = 0; i < custType.length; i++) {
            $(".custTypeSel").append("<option value=" + i + ">" + custType[i].name + " " + custType[i].ngt + "</option>");
          }
          $("#orderForm").submit(function(event) {
            event.preventDefault();
            $(".finalPrice").show();
            $("#tixQty").text($(".custQty").val());
            $("#movieName").text(fele.name);
            $("#totalPrice").text(ngtMulti($(".custTypeSel").val(), $(".custQty").val()))
          });
          $(".custPrice").show();
        });
    });
  });
