<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">基本使用</router-link>
      |
      <router-link to="/watch-model">查看模式与编辑模式</router-link>
      |
      <router-link to="/cascade-operate">级联操作</router-link>
    </div>
    <hr />
    <div>
      <router-view />
    </div>
  </div>
</template>
