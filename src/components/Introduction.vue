<template>
  <div class="author">
    <h1 class="author__site-title">
      Nathan Louie
    </h1>

    <p class="author__intro">
      I'm a developer passionate about solving intricate problems.
    </p>
    <p class="author__intro">
      I'm a Computer Science student at the University of Waterloo. I'm
      currently working at The Bike Brigade.
    </p>
  </div>
</template>

<script>
export default {
  props: [],
};
</script>

<style lang="scss">
.author {
  margin: 0 auto;
  max-width: 770px;
  text-align: left;
  padding: calc(var(--space) / 2) 0;

  &__image {
    border-radius: 100%;
    width: 90px;
    height: 90px;
    margin-bottom: 1em;
  }

  &__intro {
    opacity: 0.8;
  }

  &__site-title {
    font-size: 1.5em;
  }

  &__links {
    margin-top: -0.5em;
    a {
      padding-inline: 0 0.5em;
    }
  }
}
</style>
