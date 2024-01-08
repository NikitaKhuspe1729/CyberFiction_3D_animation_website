function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

// Inserting images
function files(index) {
  var data = `
       ./imgs/male0001.png
       ./imgs/male0002.png
       ./imgs/male0003.png
       ./imgs/male0004.png
       ./imgs/male0005.png
       ./imgs/male0006.png
       ./imgs/male0007.png
       ./imgs/male0008.png
       ./imgs/male0010.png
       ./imgs/male0009.png
       ./imgs/male0011.png
       ./imgs/male0012.png   
       ./imgs/male0013.png
       ./imgs/male0014.png
       ./imgs/male0015.png
       ./imgs/male0016.png
       ./imgs/male0017.png
       ./imgs/male0018.png
       ./imgs/male0019.png
       ./imgs/male0020.png
       ./imgs/male0021.png
       ./imgs/male0022.png
       ./imgs/male0023.png
       ./imgs/male0024.png
       ./imgs/male0025.png
       ./imgs/male0026.png
       ./imgs/male0027.png
       ./imgs/male0028.png
       ./imgs/male0029.png
       ./imgs/male0030.png
       ./imgs/male0031.png
       ./imgs/male0032.png
       ./imgs/male0033.png
       ./imgs/male0034.png
       ./imgs/male0035.png
       ./imgs/male0036.png
       ./imgs/male0037.png
       ./imgs/male0038.png
       ./imgs/male0039.png
       ./imgs/male0040.png
       ./imgs/male0041.png
       ./imgs/male0042.png
       ./imgs/male0043.png
       ./imgs/male0044.png
       ./imgs/male0045.png
       ./imgs/male0046.png
       ./imgs/male0047.png
       ./imgs/male0048.png
       ./imgs/male0049.png
       ./imgs/male0050.png
       ./imgs/male0051.png
       ./imgs/male0052.png
       ./imgs/male0053.png
       ./imgs/male0054.png
       ./imgs/male0055.png
       ./imgs/male0056.png
       ./imgs/male0057.png
       ./imgs/male0058.png
       ./imgs/male0059.png
       ./imgs/male0060.png
       ./imgs/male0061.png
       ./imgs/male0062.png
       ./imgs/male0063.png
       ./imgs/male0064.png
       ./imgs/male0065.png
       ./imgs/male0066.png
       ./imgs/male0067.png
       ./imgs/male0068.png
       ./imgs/male0069.png
       ./imgs/male0070.png
       ./imgs/male0071.png
       ./imgs/male0072.png
       ./imgs/male0073.png
       ./imgs/male0074.png
       ./imgs/male0075.png
       ./imgs/male0076.png
       ./imgs/male0077.png
       ./imgs/male0078.png
       ./imgs/male0079.png
       ./imgs/male0080.png
       ./imgs/male0081.png
       ./imgs/male0082.png
       ./imgs/male0083.png
       ./imgs/male0084.png
       ./imgs/male0085.png
       ./imgs/male0086.png
       ./imgs/male0087.png
       ./imgs/male0088.png
       ./imgs/male0089.png
       ./imgs/male0090.png
       ./imgs/male0091.png
       ./imgs/male0092.png
       ./imgs/male0093.png
       ./imgs/male0094.png
       ./imgs/male0095.png
       ./imgs/male0096.png
       ./imgs/male0097.png
       ./imgs/male0098.png
       ./imgs/male0099.png
       ./imgs/male0100.png
       ./imgs/male0101.png
       ./imgs/male0102.png
       ./imgs/male0103.png
       ./imgs/male0104.png
       ./imgs/male0105.png
       ./imgs/male0106.png
       ./imgs/male0107.png
       ./imgs/male0108.png
       ./imgs/male0109.png
       ./imgs/male0110.png
       ./imgs/male0111.png
       ./imgs/male0112.png
       ./imgs/male0113.png
       ./imgs/male0114.png
       ./imgs/male0115.png
       ./imgs/male0116.png
       ./imgs/male0117.png
       ./imgs/male0118.png
       ./imgs/male0119.png
       ./imgs/male0120.png
       ./imgs/male0121.png
       ./imgs/male0122.png
       ./imgs/male0123.png
       ./imgs/male0124.png
       ./imgs/male0125.png
       ./imgs/male0126.png
       ./imgs/male0127.png
       ./imgs/male0128.png
       ./imgs/male0129.png
       ./imgs/male0130.png
       ./imgs/male0131.png
       ./imgs/male0132.png
       ./imgs/male0133.png
       ./imgs/male0134.png
       ./imgs/male0135.png
       ./imgs/male0136.png
       ./imgs/male0137.png
       ./imgs/male0138.png
       ./imgs/male0139.png
       ./imgs/male0140.png
       ./imgs/male0141.png
       ./imgs/male0142.png
       ./imgs/male0143.png
       ./imgs/male0144.png
       ./imgs/male0145.png
       ./imgs/male0146.png
       ./imgs/male0147.png
       ./imgs/male0148.png
       ./imgs/male0149.png
       ./imgs/male0150.png
       ./imgs/male0151.png
       ./imgs/male0152.png
       ./imgs/male0153.png
       ./imgs/male0154.png
       ./imgs/male0155.png
       ./imgs/male0156.png
       ./imgs/male0157.png
       ./imgs/male0158.png
       ./imgs/male0159.png
       ./imgs/male0160.png
       ./imgs/male0161.png
       ./imgs/male0162.png
       ./imgs/male0163.png
       ./imgs/male0164.png
       ./imgs/male0165.png
       ./imgs/male0166.png
       ./imgs/male0167.png
       ./imgs/male0168.png
       ./imgs/male0169.png
       ./imgs/male0170.png
       ./imgs/male0171.png
       ./imgs/male0172.png
       ./imgs/male0173.png
       ./imgs/male0174.png
       ./imgs/male0175.png
       ./imgs/male0176.png
       ./imgs/male0177.png
       ./imgs/male0178.png
       ./imgs/male0179.png
       ./imgs/male0180.png
       ./imgs/male0181.png
       ./imgs/male0182.png
       ./imgs/male0183.png
       ./imgs/male0184.png
       ./imgs/male0185.png
       ./imgs/male0186.png
       ./imgs/male0187.png
       ./imgs/male0188.png
       ./imgs/male0189.png
       ./imgs/male0190.png
       ./imgs/male0191.png
       ./imgs/male0192.png
       ./imgs/male0193.png
       ./imgs/male0194.png
       ./imgs/male0195.png
       ./imgs/male0196.png
       ./imgs/male0197.png
       ./imgs/male0198.png
       ./imgs/male0199.png
       ./imgs/male0200.png
       ./imgs/male0201.png
       ./imgs/male0202.png
       ./imgs/male0203.png
       ./imgs/male0204.png
       ./imgs/male0205.png
       ./imgs/male0206.png
       ./imgs/male0207.png
       ./imgs/male0208.png
       ./imgs/male0209.png
       ./imgs/male0210.png
       ./imgs/male0211.png
       ./imgs/male0212.png
       ./imgs/male0213.png
       ./imgs/male0214.png
       ./imgs/male0215.png
       ./imgs/male0216.png
       ./imgs/male0217.png
       ./imgs/male0218.png
       ./imgs/male0219.png
       ./imgs/male0220.png
       ./imgs/male0221.png
       ./imgs/male0222.png
       ./imgs/male0223.png
       ./imgs/male0224.png
       ./imgs/male0225.png
       ./imgs/male0226.png
       ./imgs/male0227.png
       ./imgs/male0228.png
       ./imgs/male0229.png
       ./imgs/male0230.png
       ./imgs/male0231.png
       ./imgs/male0232.png
       ./imgs/male0233.png
       ./imgs/male0234.png
       ./imgs/male0235.png
       ./imgs/male0236.png
       ./imgs/male0237.png
       ./imgs/male0238.png
       ./imgs/male0239.png
       ./imgs/male0240.png
       ./imgs/male0241.png
       ./imgs/male0242.png
       ./imgs/male0243.png
       ./imgs/male0244.png
       ./imgs/male0245.png
       ./imgs/male0246.png
       ./imgs/male0247.png
       ./imgs/male0248.png
       ./imgs/male0249.png
       ./imgs/male0250.png
       ./imgs/male0251.png
       ./imgs/male0252.png
       ./imgs/male0253.png
       ./imgs/male0254.png
       ./imgs/male0255.png
       ./imgs/male0256.png
       ./imgs/male0257.png
       ./imgs/male0258.png
       ./imgs/male0259.png
       ./imgs/male0260.png
       ./imgs/male0261.png
       ./imgs/male0262.png
       ./imgs/male0263.png
       ./imgs/male0264.png
       ./imgs/male0265.png
       ./imgs/male0266.png
       ./imgs/male0267.png
       ./imgs/male0268.png
       ./imgs/male0269.png
       ./imgs/male0270.png
       ./imgs/male0271.png
       ./imgs/male0272.png
       ./imgs/male0273.png
       ./imgs/male0274.png
       ./imgs/male0275.png
       ./imgs/male0276.png
       ./imgs/male0277.png
       ./imgs/male0278.png
       ./imgs/male0279.png
       ./imgs/male0280.png
       ./imgs/male0281.png
       ./imgs/male0282.png
       ./imgs/male0283.png
       ./imgs/male0284.png
       ./imgs/male0285.png
       ./imgs/male0286.png
       ./imgs/male0287.png
       ./imgs/male0288.png
       ./imgs/male0289.png
       ./imgs/male0290.png
       ./imgs/male0291.png
       ./imgs/male0292.png
       ./imgs/male0293.png
       ./imgs/male0294.png
       ./imgs/male0295.png
       ./imgs/male0296.png
       ./imgs/male0297.png
       ./imgs/male0298.png
       ./imgs/male0299.png
       ./imgs/male0300.png
   `;
  return data.split("\n")[index];
}

const frameCount = 300;
// frame count=number of images

const images = [];
const imageSeq = {
  frame: 1,
};

// 300 images will  be loaded
for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;
// draw first image , when the page is loaded

// render function is created for loading images quickly
function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  // image will be always in center
  ctx.clearRect(0, 0, canvas.width, canvas.height);  // clear previous image
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});

gsap.to('#page1', {
  scrollTrigger: {
    trigger: "page1",
    scroll: "body",
    start: "top top",
    end: "bottom top",

    scrub: 2
  }
})