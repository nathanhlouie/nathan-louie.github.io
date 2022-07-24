<template>
  <div id="app">
    <header class="header">
      <div class="header__left">
        <span>
          <g-link class="link" :to="{ path: '/' }">
            Nathan Louie
          </g-link>
        </span>
      </div>

      <div class="header__right">
        <span class="header__right__theme"><ToggleTheme /></span>
        <span class="footer__socials"
          ><a href="mailto:nathanhlouie@gmail.com"
            ><font-awesome icon="envelope" size="lg"/></a
          ><a href="//github.com/nathan-louie"
            ><font-awesome :icon="['fab', 'github']" size="lg"/></a
          ><a href="//twitter.com/nathanhlouie"
            ><font-awesome :icon="['fab', 'twitter']" size="lg"
          /></a>
        </span>
        <span>
          <g-link class="link" :to="{ path: '/about' }">
            about
          </g-link>
        </span>
        <span>
          <a
            class="link"
            href="https://drive.google.com/file/d/1zlqMFyd0rdLuEcevbTvhO0FEhZraldIS/view?usp=sharing"
            target="_blank"
          >
            resume
          </a>
        </span>
      </div>
    </header>

    <main class="main">
      <slot />
    </main>

    <footer class="footer">
      <span class="footer__me">Designed and developed by Nathan Louie</span>
    </footer>
  </div>
</template>

<script>
import ToggleTheme from "~/components/ToggleTheme.vue";

export default {
  props: {},
  components: {
    ToggleTheme,
  },
};
</script>

<style lang="scss">
.link {
  text-decoration: none;
  color: var(--body-color) !important;
  font-size: 0.9em;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: var(--header-height);
  padding: 0 calc(var(--space) / 2);
  top: 0;
  z-index: 10;

  &__left,
  &__right {
    display: flex;
    align-items: center;

    &__theme {
      padding-top: 0.5em;
    }

    > span {
      margin: 0 1em;
    }
  }

  @media screen and (min-width: 1300px) {
    //Make header sticky for large screens
    position: sticky;
    width: 100%;
  }
}

.main {
  margin: 0 auto;
  padding: 1.5vw 15px 0;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: 0.8em;

  > span {
    margin: 0 0.35em;
  }

  &__socials {
    margin-top: -0.5em;
    a {
      padding-inline: 0 0.8em;
    }
  }
}
</style>
