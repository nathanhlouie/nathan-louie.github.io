<template>
  <Layout>
    <div class="author">
      <h1 class="author__site-title">
        Hey! I'm Nathan Louie
      </h1>

      <p class="author__intro">
        I'm a high school student trying to learn more about computer science,
        and I'm passionate about solving intricate problems!
      </p>
      <p class="author__intro">
        - Avid gamer, musician and chess enthusiast
      </p>
      <p class="author__intro">
        - Currently learning about web development
      </p>

      <g-image src="~/assets/images/firstphoto.png" />
    </div>
  </Layout>
</template>

<script>
export default {
  components: {},
  metaInfo: { title: "404" },
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
