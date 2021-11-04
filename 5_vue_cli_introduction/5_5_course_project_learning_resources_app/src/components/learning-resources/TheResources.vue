<template>
  <base-card>
    <base-button
      @click="fnSetSelectedTab('stored-resources')"
      :mode="cpStoredResButtonMode"
      >Stored Resources</base-button
    >
    <base-button
      @click="fnSetSelectedTab('add-resource')"
      :mode="cpAddResButtonMode"
      >Add Resource</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="sSelectedTab"></component>
  </keep-alive>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
import BaseCard from '../UI/BaseCard.vue';
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: { BaseCard, BaseButton, StoredResources, AddResource },
  data() {
    return {
      sSelectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Vue - The Official Guide',
          description: 'The official Vue.js Documentation',
          link: 'https://www.vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'You should know how to google...',
          link: 'https://www.google.de',
        },
      ],
    };
  },
  methods: {
    fnSetSelectedTab(sTab) {
      this.sSelectedTab = sTab;
    },
    fnAddResource(oResource) {
      this.storedResources.push(oResource);
      this.sSelectedTab = 'stored-resources';
    },
    fnDeleteResource(sResourceId) {
      this.storedResources.splice(
        this.storedResources.findIndex(
          (oResource) => oResource.id === sResourceId
        ),
        1
      );
    },
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.fnAddResource,
      deleteResource: this.fnDeleteResource,
    };
  },
  computed: {
    cpStoredResButtonMode() {
      return this.sSelectedTab === 'stored-resources' ? null : 'flat';
    },
    cpAddResButtonMode() {
      return this.sSelectedTab === 'add-resource' ? null : 'flat';
    },
  },
};
</script>

<style></style>
