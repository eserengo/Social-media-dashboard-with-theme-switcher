(function () {

  const createContent = () => {
    document.querySelector('body').insertAdjacentHTML('beforeend', `<main class='main target'></main>`);
    document.querySelector('.main').insertAdjacentHTML('beforeend', `<header class='header target'><h1 class='h1 target'>Social Media Dashboard</h1><span class='para target'>Total Followers: 23,004</span><span class="mode target">Dark Mode <i class='fa fa-toggle-off toggle selectable'></i><i class='fa fa-toggle-on toggle selectable hidden'></i></span></header>`);
    document.querySelector('.main').insertAdjacentHTML('beforeend', `<section class='section-large'></section>`);
    document.querySelector('.main').insertAdjacentHTML('beforeend', `<h2 class='h2 target'>Overview - Today</h2>`);
    document.querySelector('.main').insertAdjacentHTML('beforeend', `<section class='section-small'></section>`);
    document.querySelector('body').insertAdjacentHTML('beforeend', `<footer class='attribution'>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="https://github.com/eserengo/" target="_blank">Federico Borzani</a>.</footer>`);

    const data = {
      facebook: `<i class='fa fa-facebook-official facebook'></i>`,
      instagram: `<i class='fa fa-instagram instagram'></i>`,
      twitter: `<i class='fa fa-twitter twitter'></i>`,
      youtube: `<i class='fa fa-youtube-play youtube'></i>`,
      down: `<i class='fa fa-caret-down'></i>`,
      up: `<i class='fa fa-caret-up'></i>`,
    }

    const createLargeCard = (num, social, user, followers, bal, icon, balnum) => {
      return document.querySelector('.section-large').insertAdjacentHTML('beforeend', `<div class='large-card ${num} selectable flex-col center target'><span class='para target'>${social} ${user}</span><p class='num target'>${followers}</p><span class='uppercase para target'>followers</span><span class='balance ${bal}'>${icon} ${balnum}</span></div>`);
    }

    createLargeCard('one', data.facebook, '@nathanf', '1987', 'up', data.up, '12 Today');
    createLargeCard('two', data.twitter, '@nathanf', '1044', 'up', data.up, '99 Today');
    createLargeCard('three', data.instagram, '@realnathanf', '11k', 'up', data.up, '1099 Today');
    createLargeCard('four', data.youtube, 'Nathan F.', '8239', 'down', data.down, '144 Today');
    document.querySelector('.section-large').querySelector('.four').querySelector('.uppercase').textContent = 'subscribers';

    const createSmallCard = (num, category, social, followers, bal, icon, balnum) => {
      return document.querySelector('.section-small').insertAdjacentHTML('beforeend', `<div class='small-card ${num} selectable target'><span class='para target'>${category}</span><span class='social'>${social}</span><p class='num target'>${followers}</p><span class='balance ${bal}'>${icon} ${balnum}</span></div>`);
    }

    createSmallCard('one', 'Page Views', data.facebook, '87', 'up', data.up, '3%');
    createSmallCard('two', 'Likes', data.facebook, '52', 'down', data.down, '2%');
    createSmallCard('three', 'Likes', data.instagram, '5462', 'up', data.up, '2257%');
    createSmallCard('four', 'Profile Views', data.instagram, '52k', 'up', data.up, '1375%');
    createSmallCard('five', 'Retweets', data.twitter, '117', 'up', data.up, '303%');
    createSmallCard('six', 'Likes', data.twitter, '507', 'up', data.up, '553%');
    createSmallCard('seven', 'Likes', data.youtube, '107', 'down', data.down, '19%');
    createSmallCard('eight', 'Total Views', data.youtube, '1407', 'down', data.down, '12%');
  }

  const eventsHandler = () => {
    document.querySelectorAll('.toggle').forEach(item => {
      item.addEventListener('click', () => {
        document.querySelectorAll('.toggle').forEach(subitem => {
          subitem.classList.toggle('hidden');
        })
        document.querySelectorAll('.target').forEach(subitem => {
          subitem.classList.toggle('dark');
        })
      })
    })
  }

  const displayOnResize = () => {
    if (window.matchMedia("(width<=375px)").matches) {
      // RULES
      document.querySelectorAll('.desktop').forEach(item => {
        item.classList.add('hidden');
      })
      document.querySelectorAll('.mobile').forEach(item => {
        item.classList.remove('hidden');
      })
      document.querySelector('.section-large').classList.add('flex-col');
      document.querySelector('.section-small').classList.add('flex-col');
      document.querySelector('.mode').classList.remove('right');
    }
    if (window.matchMedia("(width>375px)").matches) {
      // RULES
      document.querySelectorAll('.mobile').forEach(item => {
        item.classList.add('hidden');
      })
      document.querySelectorAll('.desktop').forEach(item => {
        item.classList.remove('hidden');
      })
      document.querySelector('.section-large').classList.remove('flex-col');
      document.querySelector('.section-small').classList.remove('flex-col');
      document.querySelector('.mode').classList.add('right');
    }
  }

  // ----- WINDOW ON RESIZE FUNCTION WITH TIMEOUT DEBOUNCING TECHNIQUE ------

  window.addEventListener('resize', () => {
    let timer;
    window.clearTimeout(timer);
    timer = window.setTimeout(displayOnResize(), 500);
  });

  // ------ FUNCTIONS TO EXECUTE AFTER THE CONTENT HAS BEEN INJECTED

  window.addEventListener('DOMContentLoaded', () => {
    // FUNCTIONS
    createContent();
    eventsHandler();
    displayOnResize();   // MUST BE THE LAST FUNCTION TO LOAD
  })
})();