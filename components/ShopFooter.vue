<script setup lang="ts">
const footerContent = {
  about: {
    title: 'About Us',
    text: 'Your favorite furniture store.',
  },
  contact: {
    title: 'Contact',
    items: [{ text: 'Email: contact@furniro.com' }, { text: 'Phone: +1 123 456 789' }],
  },
  social: {
    title: 'Follow Us',
    links: [
      { name: 'Facebook', url: '#' },
      { name: 'Instagram', url: '#' },
      { name: 'Twitter', url: '#' },
    ],
  },
}
</script>

<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__section">
        <h3 class="footer__title">{{ footerContent.about.title }}</h3>
        <p class="footer__text">{{ footerContent.about.text }}</p>
      </div>

      <div class="footer__section">
        <h3 class="footer__title">{{ footerContent.contact.title }}</h3>
        <ul class="footer__list">
          <li
            v-for="item in footerContent.contact.items"
            :key="item.text"
            class="footer__list-item"
          >
            {{ item.text }}
          </li>
        </ul>
      </div>

      <div class="footer__section">
        <h3 class="footer__title">{{ footerContent.social.title }}</h3>
        <ul class="footer__social">
          <li
            v-for="link in footerContent.social.links"
            :key="link.name"
            class="footer__social-item"
          >
            <NuxtLink :to="link.url" class="footer__link">{{ link.name }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>

    <div class="footer__bottom">
      <p class="footer__copyright">
        &copy; {{ new Date().getFullYear() }} Furniro. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@mixin text-style($size, $weight: 400) {
  font-size: $size;
  font-weight: $weight;
}

.footer {
  background-color: $secondary-color;
  color: $font-primary-color;
  padding: 3.2rem 2rem;
  text-align: center;

  &__content {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin-bottom: 3.2rem;

    @media (min-width: $mobile-breakpoint) {
      text-align: center;
      flex-direction: row;
    }
  }

  &__section {
    margin: 1.6rem;
  }

  &__title {
    @include text-style(1.6rem, 600);
    margin-bottom: 1.2rem;
  }

  &__text,
  &__list,
  &__social {
    @include text-style(1.2rem);
    line-height: 1.6;
  }

  &__list-item,
  &__social-item {
    margin: 0.8rem 0;
  }

  &__link {
    transition: color 0.3s ease;

    &:hover {
      color: $primary-color;
    }
  }

  &__bottom {
    @include text-style(1.2rem);
    border-top: 1px solid rgba($font-primary-color, 0.1);
    padding-top: 1rem;
  }
}
</style>
