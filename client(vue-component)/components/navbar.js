Vue.component("navbar-home", {
  template: `
  <nav class="navbar is-transparent">
  <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
          <img src="https://i.imgur.com/Mei7M7F.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
      </a>
      <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
      </div>
  </div>
  <div id="navbarExampleTransparentExample" class="navbar-menu">
      <div class="navbar-start">
          <a class="navbar-item" href="https://bulma.io/">
              Home
          </a>
          <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link" href="/documentation/overview/start/">
                  Docs
              </a>
              <div class="navbar-dropdown is-boxed">
                  <a class="navbar-item" href="/documentation/overview/start/">
                      Overview
                  </a>
                  <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                      Modifiers
                  </a>
                  <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                      Columns
                  </a>
                  <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
                      Layout
                  </a>
                  <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
                      Form
                  </a>
                  <hr class="navbar-divider">
                  <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
                      Elements
                  </a>
                  <a class="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
                      Components
                  </a>
              </div>
          </div>
      </div>
      <div class="navbar-end">
          <div class="navbar-item">
              <div class="field is-grouped">
                  <div class="text-right">
                      <button class="btn btn-primary" data-toggle="modal" data-target="#cartModal">Cart ({{cartItems.length}})</button>
                  </div>
              </div>
          </div>
      </div>
      </div>
</nav>`,

  data: function() {
    return {
      color: "#ff5c5c"
    };
  },

  props: ["items", "cartItems"]
});
