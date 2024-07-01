Vue.component('app-header', {
  template: `
    <header class="bg-dark text-white p-3">
      <div class="container">
        <h1>Jembloeng Company</h1>
        <nav>
          <ul class="nav">
            <li class="nav-item"><a class="nav-link text-white" href="#profile">Profil</a></li>
            <li class="nav-item"><a class="nav-link text-white" href="#team">Tim</a></li>
            <li class="nav-item"><a class="nav-link text-white" href="#products">Produk</a></li>
            <li class="nav-item"><a class="nav-link text-white" href="#contact">Kontak</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `
});

Vue.component('company-profile', {
  template: `
    <section id="profile" class="py-5 bg-light">
      <div class="container">
        <h2 class="text-center">Jembloeng Company</h2>
        <p class="text-center">Salah satu warung kopi yang terletak di kota Kediri berdiri sejak 2019 dengan berbagai pilihan menu berbagai varian mulai dari minuman, makanan, snack dll</p>
      </div>
    </section>
  `
});

Vue.component('team-member', {
  props: ['name', 'position', 'photo', 'bio','usia','npm','kelas'],
  template: `
    <div class="col-md-4 text-center mb-4">
      <img :src="photo" :alt="name" class="rounded-circle mb-2" width="150" height="150" @click="showDetails" style="cursor: pointer;">
      <h3>{{ name }}</h3>

      <!-- Modal -->
      <div class="modal fade" :id="'modal-' + sanitizedId">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{{ name }}</h5>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body">
              <img :src="photo" :alt="name" class="rounded-square mb-2" width="100" height="100">
              <p><strong>Posisi: </strong>{{ position }}</p>
              <p><strong>Usia: </strong>{{ usia }}</p>
              <p><strong>NPM: </strong>{{ npm }}</p>
              <p><strong>Kelas: </strong>{{ kelas }}</p>
              <p>{{ bio }}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Tutup</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  computed: {
    sanitizedId() {
      return this.name.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '');
    }
  },
  methods: {
    showDetails() {
      const modalId = '#modal-' + this.sanitizedId;
      $(modalId).modal('show');
    }
  }
});

Vue.component('product-item', {
  props: ['name', 'description', 'image'],
  template: `
    <div class="col-md-4 text-center mb-4">
      <img :src="image" :alt="name" class="rounded-circle mb-3" width="150" height="150">
      <h3>{{ name }}</h3>
      <p>{{ description }}</p>
      <button class="btn btn-primary" @click="viewDetail">Lihat Detail</button>

      <!-- Modal -->
      <div class="modal fade" :id="'modal-' + sanitizedId">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{{ name }}</h5>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body">
              <img :src="image" :alt="name" class="img-fluid mb-3">
              <p>{{ description }}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Tutup</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  computed: {
    sanitizedId() {
      return this.name.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '');
    }
  },
  methods: {
    viewDetail() {
      const modalId = '#modal-' + this.sanitizedId;
      $(modalId).modal('show');
    }
  }
});

Vue.component('contact-us', {
  template: `
    <section id="contact" class="py-5">
      <div class="container">
        <h2 class="text-center mb-5">Kontak Kami</h2>
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <h4>Alamat</h4>
            <p>Jl. Panglima Polim No 6a Kediri - Jawa Timur</p>
          </div>
          <div>
            <h4>Email</h4>
            <p>info@jembloengcompany.com</p>
          </div>
          <div>
            <h4>Telepon</h4>
            <p>+62 21 12345678</p>
          </div>
        </div>
      </div>
  
    </section>
  `
});

Vue.component('app-footer', {
  template: `
    <footer class="bg-dark text-white text-center py-3">
      <p>© 2024 Jembloeng Company. Semua hak dilindungi undang-undang.</p>
    </footer>
  `
});

new Vue({
  el: '#app',
  template: `
    <div>
      <app-header></app-header>
      <company-profile></company-profile>
      <section id="team" class="py-5">
        <div class="container">
          <h2 class="text-center mb-5">Tim Kami</h2>
          <div class="row">
            <team-member name="Ervan Efendi" position="CEO" photo="assets/erpan.jpg" bio="Ervan Efendi, mahasiswa tingkat 3 yang berkuliah di Universitas Nusantara PGRI Kota Kediri" usia="21" npm="2113020006" kelas="3E"></team-member>
            <team-member name="Alfan F.A" position="CTO" photo="assets/alfan.jpg" bio="Alfan Faradudin Attar, mahasiswa tingkat 3 yang berkuliah di Universitas Nusantara PGRI Kota Kediri" usia="21" npm="2113020256" kelas="3E"></team-member>
            <!-- Tambahkan anggota tim lainnya di sini -->
          </div>
        </div>
      </section>
      <section id="products" class="py-5 bg-light">
        <div class="container">
          <h2 class="text-center mb-5">Produk Kami</h2>
          <div class="row">
            <product-item name="Kopi Hitam" description="Kopi hitam yang sangat nikmat dengan khasiat membuat mata melek" image="assets/kopi.jpeg"></product-item>
            <product-item name="Es Nutrisari" description="Es nutrisari yang sangat menyegarkan dengan berbagai varian rasa" image="assets/nutrisari.jpg"></product-item>
            <!-- Tambahkan produk lainnya di sini -->
          </div>
        </div>
      </section>
      <contact-us></contact-us>
      <app-footer></app-footer>
    </div>
  `
});
