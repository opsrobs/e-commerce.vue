<template>
      <div class="home">
        <div ref="container" class="keen-slider">
        <div class="keen-slider__slide number-slide1">
          <img src="https://source.unsplash.com/random/750x750/?pudding" alt="Beach Image" class="item current-item">
          <img src="https://source.unsplash.com/random/750x750/?cakes" alt="Street Image" class="item current-item">
          <img src="https://source.unsplash.com/random/750x750/?truffles" alt="Zoo Image" class="item current-item">
        </div>
        <div class="keen-slider__slide number-slide2">
          <img src="https://source.unsplash.com/random/750x750/?caramel" alt="Animal Image" class="item current-item">
          <img src="https://source.unsplash.com/random/750x750/?chocolate" alt="Beach Image" class="item current-item">
          <img src="https://source.unsplash.com/random/750x750/?cheescake" alt="Animal Image" class="item current-item">
        </div>
        <div class="keen-slider__slide number-slide3">
          <img src="https://source.unsplash.com/random/750x750/?marshmallow" alt="Street Image" class="item current-item">
          <img src="https://source.unsplash.com/random/750x750/?gingerbread" alt="Zoo Image" class="item current-item">
          <img src="https://source.unsplash.com/random/750x750/?donut" alt="Model Image" class="item current-item">
        </div>
        <div class="keen-slider__slide number-slide4">
          <img src="https://source.unsplash.com/random/750x750/?cakes" alt="Model Image" class="item current-item">
          <img src="https://source.unsplash.com/random/750x750/?mousse" alt="Model Image" class="item current-item">
          <img src="https://source.unsplash.com/random/750x750/?pie" alt="Model Image" class="item current-item">
        </div>
        <div class="keen-slider__slide number-slide5">
          <img src="https://source.unsplash.com/random/750x750/?mousse" alt="Animal Image" class="item current-item">
          <img src="https://source.unsplash.com/random/750x750/?cheescake" alt="Beach Image" class="item current-item">
          <img src="https://source.unsplash.com/random/750x750/?gingerbread" alt="Animal Image" class="item current-item">
        </div>
        <div class="keen-slider__slide number-slide6">
          <img src="https://source.unsplash.com/random/750x750/?gingerbread" alt="Model Image" class="item current-item">
          <img src="https://source.unsplash.com/random/750x750/?cakes" alt="Model Image" class="item current-item">
          <img src="https://source.unsplash.com/random/750x750/?chocolate" alt="Model Image" class="item current-item">
        </div>
      </div>
    <!-- <div class="container">
       <button @click="isleft()" class="arrow-left control" aria-label="Previous image">◀</button>
      <button @click="isRight()" class="arrow-right control" aria-label="Next Image">▶</button>
      <div class="gallery-wrapper">
        <div class="gallery">

          
          
          
          
        </div>
      </div>
    </div> -->
      </div> 
</template>

<script>
import { useKeenSlider } from "keen-slider/vue.es"
import "keen-slider/keen-slider.min.css"
// @ is an alias to /src

export default {
  data() {
    return {
      currentItem: 1,
    }
  },
  setup() {
    const [container] = useKeenSlider(
      {
        loop: true,
      },
      [
        (slider) => {
          let timeout
          let mouseOver = false
          function clearNextTimeout() {
            clearTimeout(timeout)
          }
          function nextTimeout() {
            clearTimeout(timeout)
            if (mouseOver) return
            timeout = setTimeout(() => {
              slider.next()
            }, 2000)
          }
          slider.on("created", () => {
            slider.container.addEventListener("mouseover", () => {
              mouseOver = true
              clearNextTimeout()
            })
            slider.container.addEventListener("mouseout", () => {
              mouseOver = false
              nextTimeout()
            })
            nextTimeout()
          })
          slider.on("dragStarted", clearNextTimeout)
          slider.on("animationEnded", nextTimeout)
          slider.on("updated", nextTimeout)
        },
      ]
    )
    return { container }
  },
  methods: {
    isleft() {
      this.left = true;
      this.currentItem -= 1
      this.carousel()

    },
    isRight() {
      this.left = false;
      this.currentItem += 1
      this.carousel()
    },
    carousel() {
      const controls = document.querySelectorAll(".control");
      const items = document.querySelectorAll(".item");
      const maxItems = items.length;

      controls.forEach((control) => {
        control.addEventListener("click", (e) => {
          console.log(e)


          if (this.currentItem < 0) {
            this.currentItem = maxItems - 1;
          }
          if (this.currentItem >= maxItems) {
            this.currentItem = 0;
          }
          items.forEach((item) => item.classList.remove("current-item"));

          items[this.currentItem].scrollIntoView({
            behavior: 'auto',
            block: 'center',
            inline: "center"
          });

          items[this.currentItem].classList.add("current-item");
        });
      });
    },

  },
  name: 'HomeView',
  components: {
  }
}
</script>
<style>
body {
  margin: 0;
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #FEFAE0;
}
[class^="number-slide"],
[class*=" number-slide"] {
  background: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  color: #fff;
  font-weight: 500;
  height: 300px;
  max-height: 100vh;
}

.number-slide1 {
  background: rgb(64, 175, 255);
  background: linear-gradient(
    128deg,
    rgba(64, 175, 255, 1) 0%,
    rgba(63, 97, 255, 1) 100%
  );
}

.number-slide2 {
  background: rgb(255, 75, 64);
  background: linear-gradient(
    128deg,
    rgba(255, 154, 63, 1) 0%,
    rgba(255, 75, 64, 1) 100%
  );
}

.number-slide3 {
  background: rgb(182, 255, 64);
  background: linear-gradient(
    128deg,
    rgba(182, 255, 64, 1) 0%,
    rgba(63, 255, 71, 1) 100%
  );
  background: linear-gradient(
    128deg,
    rgba(189, 255, 83, 1) 0%,
    rgba(43, 250, 82, 1) 100%
  );
}

.number-slide4 {
  background: rgb(64, 255, 242);
  background: linear-gradient(
    128deg,
    rgba(64, 255, 242, 1) 0%,
    rgba(63, 188, 255, 1) 100%
  );
}

.number-slide5 {
  background: rgb(255, 64, 156);
  background: linear-gradient(
    128deg,
    rgba(255, 64, 156, 1) 0%,
    rgba(255, 63, 63, 1) 100%
  );
}
.number-slide6 {
  background: rgb(64, 76, 255);
  background: linear-gradient(
    128deg,
    rgba(64, 76, 255, 1) 0%,
    rgba(174, 63, 255, 1) 100%
  );
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1 {
  text-align: center;
  margin: 1em 0;
  font-family: sans-serif;
}

.container {
  position: relative;
  padding: 15px;
  max-width: 500px;
  margin: 0 auto;
}


.gallery-wrapper {
  overflow-x: auto;
}

.arrow-left,
.arrow-right {
  position: absolute;
  top: 0;
  left: 0;
  right: auto;
  bottom: 0;
  font-size: 20px;
  line-height: 250px;
  width: 40px;
  color: #fff;
  transition: all 600ms ease-in-out;
  background: linear-gradient(to left, transparent 0%, black 200%);
  opacity: 0.1;
  cursor: pointer;
  border: none;
}

.arrow-left:hover,
.arrow-right:hover {
  opacity: 1;
}

.arrow-right {
  right: 0;
  left: auto;
  text-align: right;
  background: linear-gradient(to right, transparent 0%, black 200%);
}

.gallery {
  display: flex;
  flex-flow: row nowrap;
  gap: 15px;
}

.item {
  width: 750px;
  height: 750px;
  flex-shrink: 0;
  transition: all 900ms ease-in-out;
  opacity: 0.5;
}

.current-item {
  opacity: 1;
}

/* This is from w3schools */
/* 
https://www.w3schools.com/howto/howto_css_hide_scrollbars.asp */
/* Hide scrollbar for Chrome, Safari and Opera */
.gallery-wrapper::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.gallery-wrapper {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}

.cyan {
  background: cyan;
}

.deeppink {
  background: deeppink;
}

.turquoise {
  background: turquoise;
}

.darkblue {
  background: darkblue;
}

.purple {
  background: purple;
}
</style>
