<template>
    <nav class="c-nav" v-if="showNavigation">

        <ul class="c-nav-list">
        <li class="c-nav-list-item" v-for="(link, index) in links" :key="index">

            <a :href="link.linkUrl">
                {{link.linkText}}
            </a>

        </li>
        
        </ul>

    </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
      return{
          showNavigation: true,
          links: [
              {
                  linkText: "home",
                  linkUrl :"/home"
              },
              {
                  linkText: "shop",
                  linkUrl :"/webshop"
              },
              {
                  linkText: "contact",
                  linkUrl :"/contact"
              }
          ]
        }
    }
}
</script>
