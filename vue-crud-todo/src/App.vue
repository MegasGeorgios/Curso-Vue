<template>
  <div id="app">
  	<!-- estas etiquetas son de bootstrap vue -->
    <b-container>
      <b-nav tabs>
        <b-nav-item exact to="/todos">Listado de todos</b-nav-item>
        <b-nav-item exact to="/todos/create">Formulario de alta de todos</b-nav-item>
      </b-nav>

      <router-view/>
      
    </b-container>
  </div>
</template>
