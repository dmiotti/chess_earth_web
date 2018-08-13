<template>
  <div class="container">
    <h1>Chess Earth</h1>
    <h2>Next tournaments</h2>
    <ul>
      <li v-for="event in events" :key="event.id">
        <p>{{ [event.name, event.startAt, event.endAt, event.address.city].join(' | ') }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import getEvents from '@/graphql/get-events.gql'

export default {
  data () {
    return {
      events: []
    }
  },

  apollo: {
    events: {
      query: getEvents
    }
  }
}
</script>

<style lang="sass" scoped>

</style>

