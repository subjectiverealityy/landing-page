function handleJoin(inputId, successId) {
  const input = document.getElementById(inputId);
  const msg = document.getElementById(successId);
  if (!input.value || !input.value.includes('@')) {
    input.style.borderColor = '#E24B4A';
    input.style.boxShadow = '0 0 0 4px rgba(226,75,74,0.1)';
    setTimeout(() => { input.style.borderColor = '#E5E5E5'; input.style.boxShadow = ''; }, 1400);
    return;
  }
  const email = input.value;
  const mailto = `mailto:info@zorevia.net?subject=Waitlist Signup&body=New signup: ${encodeURIComponent(email)}`;
  window.location.href = mailto;
  input.value = '';
  msg.classList.add('show');
  setTimeout(() => msg.classList.remove('show'), 6000);
}
['heroEmail','ctaEmail'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener('keydown', e => { if (e.key === 'Enter') document.querySelector(`[onclick*="${id}"]`).click(); });
});

// scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));