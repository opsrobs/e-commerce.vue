<template>
  <div class="home">
    <div class="container">
      <button @click="isleft()" class="arrow-left control" aria-label="Previous image">◀</button>
      <button @click="isRight()" class="arrow-right control" aria-label="Next Image">▶</button>
      <div class="gallery-wrapper">
        <div class="gallery">

          <img src="https://source.unsplash.com/random/750x750/?bakery" alt="Beach Image" class="item current-item">
          <img src="https://source.unsplash.com/random/750x750/?cookie" alt="Animal Image" class="item current-item">
          <img src="https://source.unsplash.com/random/750x750/?cake" alt="Street Image" class="item current-item">
          <img src="https://source.unsplash.com/random/750x750/?cheescake" alt="Zoo Image" class="item current-item">
          <img src="https://source.unsplash.com/random/750x750/?cakes" alt="Model Image" class="item current-item">
          <img src="https://source.unsplash.com/random/750x750/?coffee" alt="Model Image" class="item current-item">
          <img src="https://source.unsplash.com/random/750x750/?bread" alt="Model Image" class="item current-item">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data(){
    return {
      currentItem: 1
    }
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
  max-width: 2600px;
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
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
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
