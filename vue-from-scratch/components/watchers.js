Vue.component('watchers', {
    data () {
      return {
        user: null,
        oldUser: null
      }
    },
    methods: {
      async randomUser () {
        try {
          const data = await fetch('https://randomuser.me/api/');
          const json = await data.json();
          const user = json.results[0];
          this.user = `${user.name.title} ${user.name.first} ${user.name.last}`;
        } catch (e) {
          // algo ha ido mal
        }
      }
    },
    watch: {
      user (newVal, oldVal) {
        this.user = newVal;
        this.oldUser = oldVal;
      }
    },
    template: `
      <div>
        <h2>Watchers con Vuejs 2</h2>
        <button @click="randomUser">Obtener un usuario aleatorio</button>
        <p>Nuevo usuario: {{ user }}</p>
        <p>Anterior usuario: {{ oldUser }}</p>
      </div>
    `
})