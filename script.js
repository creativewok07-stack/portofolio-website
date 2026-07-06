/**
 * MASWOK ENGINE PORTFOLIO INTERACTION LOGIC
 * Desain Bersih & Fungsional Tanpa Dependensi Pihak Ketiga
 */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================================
    // 1. LIVE DEMO ROUTING
    // DEPRECATED: Logika routing dipindahkan langsung ke atribut 'href' pada HTML
    // untuk meningkatkan keandalan, performa, dan aksesibilitas (SEO-Friendly).
    // ==========================================================================


    // ==========================================================================
    // 2. NAV EFFECTS & BLUR INTERACTION ON SCROLL
    // ==========================================================================
    // Menggunakan querySelector dinamis agar fleksibel jika menggunakan class navbar-adaptive
    const navbar = document.querySelector('.navbar-adaptive') || document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) {
                navbar.style.padding = '12px 0';
                // Jika ingin menambahkan efek bayangan halus saat halaman digulir
                navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.04)';
            } else {
                navbar.style.padding = '24px 0';
                navbar.style.boxShadow = 'none';
            }
        });
    }
});
