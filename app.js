const { createApp, computed, ref } = Vue;
createApp({
  setup() {
    const booking = ref({ name: '', email: '', package: 'Стандартний', travelers: 1, date: '' });
    const confirmed = ref(false);
    const prices = { 'Легкий': 350000, 'Стандартний': 520000, 'Преміум': 780000 };
    const totalPrice = computed(() => booking.value.travelers * (prices[booking.value.package] || 0));
    const confirmBooking = () => {
      if (!booking.value.name || !booking.value.email || !booking.value.date) {
        window.alert('Заповніть будь-ласка всі поля');
        return;
      }
      confirmed.value = true;
    };
    return { booking, confirmed, totalPrice, confirmBooking };
  }
}).mount('#app');
