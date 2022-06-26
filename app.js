//window.onload = function () {
//console.log(document.getElementsByTagName("p")[0]);
let image1 = document.getElementById("miniContainer1");
let image2 = document.getElementById("miniContainer2");
let image3 = document.getElementById("miniContainer3");
let image4 = document.getElementById("miniContainer4");
let image5 = document.getElementById("miniContainer5");

let text1 = document.getElementById("bottom-left");
let text2 = document.getElementById("bottom-left2");
let text3 = document.getElementById("bottom-left3");
let text4 = document.getElementById("bottom-left4");
let text5 = document.getElementById("bottom-left5");

image1.style.width = "4500px";

image1.addEventListener("click", enlarge1);
image2.addEventListener("click", enlarge2);
image3.addEventListener("click", enlarge3);
image4.addEventListener("click", enlarge4);
image5.addEventListener("click", enlarge5);

//image3.addEventListener("click", enlarge3);
//image4.addEventListener("click", enlarge4);
//image5.addEventListener("click", enlarge5);
text1.style.opacity = 1;
text2.style.opacity = 0;
text3.style.opacity = 0;
text4.style.opacity = 0;
text5.style.opacity = 0;

function deter4500px() {
  if (image1.style.width == "4500px") {
    return image1;
  } else if (image2.style.width == "4500px") {
    return image2;
  } else if (image3.style.width == "4500px") {
    return image3;
  } else if (image4.style.width == "4500px") {
    return image4;
  } else {
    return image5;
  }
}

function deterOpacity() {
  if (text1.style.opacity == 1) {
    return text1;
  } else if (text2.style.opacity == 1) {
    return text2;
  } else if (text3.style.opacity == 1) {
    return text3;
  } else if (text4.style.opacity == 1) {
    return text4;
  } else {
    return text5;
  }
}

let count1 = 1;
let firstCount = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;

function enlarge1() {
  count2 = 0;
  count3 = 0;
  count4 = 0;
  count = 5;

  if (firstCount == 0) {
    firstCount++;
    return;
  }

  count1++;

  if (count1 > 1) {
    console.log(count1);
    return;
  }

  console.log(count1);

  let previousText = deterOpacity();

  previousText.style.transition = "opacity 0s";
  previousText.style.opacity = "0";

  deter4500px().style.width = "600px";
  image1.style.width = "4500px";

  setTimeout(function () {
    if (image1.style.width == "4500px") {
      text1.style.transition = "opacity 1s";
      text1.style.opacity = "1";
    }
  }, 500);
}

function enlarge2() {
  firstCount++;
  console.log(count1);

  count1 = 0;
  count3 = 0;
  count4 = 0;
  count5 = 0;

  count2++;
  if (count2 > 1) {
    console.log(count2);
    return;
  }

  deter4500px().style.width = "600px";

  setTimeout(function () {
    if (image2.style.width == "4500px") {
      text2.style.transition = "opacity 1.5s";
      text2.style.opacity = "1";
    }
  }, 500);

  let deterOpacityProxy = deterOpacity();
  deterOpacityProxy.style.opacity = "0";
  deterOpacityProxy.style.transition = "opacity 0s";

  if (deter4500px().style.width == "" || deter4500px().style.width == "600px") {
    text1.style.transition = "opacity 0s";
    text1.style.opacity = "0";
  }

  image2.style.width = "4500px";
}

function enlarge3() {
  firstCount++;
  count1 = 0;
  count2 = 0;
  count4 = 0;
  count5 = 0;

  count3++;
  if (count3 > 1) {
    console.log(count2);
    return;
  }

  deter4500px().style.width = "600px";

  setTimeout(function () {
    if (image3.style.width == "4500px") {
      text3.style.transition = "opacity 1.5s";
      text3.style.opacity = "1";
    }
  }, 500);

  let deterOpacityProxy = deterOpacity();
  deterOpacityProxy.style.opacity = "0";
  deterOpacityProxy.style.transition = "opacity 0s";

  if (deter4500px().style.width == "" || deter4500px().style.width == "600px") {
    text1.style.transition = "opacity 0s";
    text1.style.opacity = "0";
  }
  image3.style.width = "4500px";
}

function enlarge4() {
  firstCount++;
  count1 = 0;
  count2 = 0;
  count3 = 0;
  count5 = 0;

  count4++;
  if (count4 > 1) {
    console.log(count2);
    return;
  }

  deter4500px().style.width = "600px";

  setTimeout(function () {
    if (image4.style.width == "4500px") {
      text4.style.transition = "opacity 1.5s";
      text4.style.opacity = "1";
    }
  }, 500);

  let deterOpacityProxy = deterOpacity();
  deterOpacityProxy.style.opacity = "0";
  deterOpacityProxy.style.transition = "opacity 0s";

  if (deter4500px().style.width == "" || deter4500px().style.width == "600px") {
    text1.style.transition = "opacity 0s";
    text1.style.opacity = "0";
  }
  image4.style.width = "4500px";
}

function enlarge5() {
  firstCount++;
  count1 = 0;
  count2 = 0;
  count3 = 0;
  count4 = 0;

  count5++;
  if (count5 > 1) {
    console.log(count2);
    return;
  }

  deter4500px().style.width = "600px";

  setTimeout(function () {
    if (image5.style.width == "4500px") {
      text5.style.transition = "opacity 1.5s";
      text5.style.opacity = "1";
    }
  }, 500);

  let deterOpacityProxy = deterOpacity();
  deterOpacityProxy.style.opacity = "0";
  deterOpacityProxy.style.transition = "opacity 0s";

  console.log(deter4500px().style.width);
  if (deter4500px().style.width == "" || deter4500px().style.width == "600px") {
    text1.style.transition = "opacity 0s";
    text1.style.opacity = "0";
  }
  image5.style.width = "4500px";
}

console.log(image1.style.width);

/*console.log(document.getElementById("myImg"));
let image = document.getElementById("myImg");
image.addEventListener("click", shrink);
secondImg.addEventListener("click", enlargeAri);
thirdImg.addEventListener("click", enlargeSponge);

let count = 0;

function enlargeSponge() {
  document.getElementById("thirdImg").style.width = "900px";
}

function enlargeAri() {
  document.getElementById("secondImg").style.width = "900px";
}

function shrink() {
  if (count % 2 == 0) {
    document.getElementById("container").style.width = "200px";

    //document.getElementById("myImg").style.height = "300px";
    count = count + 1;
  } else {
    document.getElementById("container").style.width = "600px";

    //document.getElementById("myImg").style.width = "300px";
    count = count + 1;
  }
}*/
