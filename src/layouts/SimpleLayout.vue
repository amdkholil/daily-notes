<template>
  <div class="q-pa-none q-ma-none">
    <q-layout>
      <q-toolbar class="bg-primary text-white">
        <q-toolbar-title class="q-ml-xl"> Daily Notes </q-toolbar-title>
        <q-btn rounded flat color="white" class="q-pa-sm q-mr-xl bg-white">
          <img src="/svg/user.svg" width="20" height="20" />
        </q-btn>
      </q-toolbar>

      <q-page-container class="q-mx-xl q-my-lg">
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>
