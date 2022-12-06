<template>
  <div class="main">
    <div class="main__newnacks">
      <div class="main__newnacks-title">新品即将发布</div>
      <div class="main__newnacks-content">
        
      </div>
    </div>
    <div class="main__news">
      <div class="main__newsbox">
        <div class="main__news-title">title</div>
        <div class="main__news-content">
          <p>
            Possimus debitis enim autem sapiente tempore. Minima possimus
            repellat alias? Architecto illum aperiam quisquam, optio blanditiis
            id quidem maxime. Porro, hic repellat.
          </p>
        </div>
        <div class="main__news-image"></div>
      </div>
      <div class="main__newsbox">
        <div class="main__news-title">title</div>
        <div class="main__news-content">
          <p>
            Possimus debitis enim autem sapiente tempore. Minima possimus
            repellat alias? Architecto illum aperiam quisquam, optio blanditiis
            id quidem maxime. Porro, hic repellat.
          </p>
        </div>
        <div class="main__news-image"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.main {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &__newnacks {
    background: #fff;
    background-size: cover;
    margin-right: 10%;
    flex: 0 0 65%;
    border-radius: 3px;
    padding: 20px 35px;
    color: aliceblue;

    &-title {
      font-size: 5rem;
      font-weight: 800;
    }

    &-content {
      font-size: 2rem;
      text-align: left;
      background-color: rgb(255, 255, 255);
      padding: 25px;
      color: #565656;
    }
  }

  &__news {
    background-color: azure;
    flex: 1;
    border-radius: 3px;
  }
}
</style>
