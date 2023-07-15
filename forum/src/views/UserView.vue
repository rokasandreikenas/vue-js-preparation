<script setup lang="ts">
import { useUser } from '@/hooks/user'

interface Props {
  id: string
}

const props = defineProps<Props>()
const { data: user, isLoading } = useUser(Number(props.id))
</script>

<template>
  <main>
    <div v-if="user" class="user">
      <h1>{{ user.name }}</h1>
      <p>Username: {{ user.username }}</p>
      <p>Email: {{ user.email }}</p>
      <p>Phone: {{ user.phone }}</p>
      <p>Website: {{ user.website }}</p>

      <h2>Address</h2>
      <p>Street: {{ user.address.street }}</p>
      <p>Suite: {{ user.address.suite }}</p>
      <p>City: {{ user.address.city }}</p>
      <p>Zipcode: {{ user.address.zipcode }}</p>
      <p>Geo - Lat: {{ user.address.geo.lat }}, Lng: {{ user.address.geo.lng }}</p>

      <h2>Company</h2>
      <p>Name: {{ user.company.name }}</p>
      <p>Catch Phrase: {{ user.company.catchPhrase }}</p>
      <p>BS: {{ user.company.bs }}</p>
    </div>
    <div v-else-if="isLoading">Loading...</div>
    <div v-else>User not found...</div>
  </main>
</template>

<style scoped lang="scss">
$user-box-color: #f5f5f5;
$header-color: #333;
$text-color: #666;

.user {
  width: 80%;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
  background-color: $user-box-color;

  h1,
  h2 {
    color: $header-color;
  }

  p {
    color: $text-color;
    line-height: 1.6;
  }
}
</style>
