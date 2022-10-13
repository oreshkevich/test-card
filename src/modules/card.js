export default function card() {
  const renderGoods = (goods) => {
    const goodsWrapper = document.getElementById('card');
    goodsWrapper.innerHTML = '';
    goods.forEach((item) => {
      const { name, phone, email } = item;
      goodsWrapper.insertAdjacentHTML(
        'beforeend',
        `
     <div class="card more">
        <h2 class="card__title">${name}</h2>
        <div class="card__description">
          <img class="card__img" src="./assets/svg/tel.svg" alt="toy">
          <p class="card__text">${phone}</p>
        </div>
        <div class="card__description">
          <img class="card__img" src="./assets/svg/email.svg" alt="toy">
          <p class="card__text">${email}</p>
        </div>

      </div>
    `
      );
    });
    // class Animate {
    //   constructor(questions) {
    //     this.questions = questions;
    //     this.click();
    //   }

    //   click() {
    //     const listImg = [];
    //     this.questions.forEach((el, i) =>
    //       el.addEventListener('click', () => {
    //         console.log(el);
    //       })
    //     );
    //   }
    // }
    // const questions = document.querySelectorAll('.card');
    // const animate = new Animate(questions);

    function order() {
      const deliveryItem = document.querySelectorAll('.card');
      deliveryItem.forEach((n, i, a) => {
        n.addEventListener('click', (event) => {
          let textName = event.currentTarget.firstElementChild.textContent;

          let someUsers = goods.filter((item) => item.name == textName);

          const goodsWrapper = document.getElementById('modal-wrap');
          goodsWrapper.innerHTML = '';
          someUsers.forEach((item) => {
            console.log(someUsers);
            const {
              name,
              phone,
              email,
              address,
              department,
              hire_date,
              position_name,
            } = item;
            goodsWrapper.insertAdjacentHTML(
              'beforeend',
              `
      <div class="modal__body ">
      <div class="modal__header ">
        <p class="modal__titles">
          <button class="modal__btn-close modal__close"></button>
        </p>
      </div>
      <div class="modal__main ">
        <div>
          <div class="modal__form" >
            <h2 class="modal__title">${name}</h2>
            <div class="modal__wrap" >
              <p class="modal__text">Телефон: </p>
              <p class="modal__text-item"> ${phone}</p>
               <p class="modal__text">Почта: </p>
               <p class="modal__text-item">${email}</p>
            <p class="modal__text">Дата приема:</p>
            <p class="modal__text-item">${hire_date}</p>
            <p class="modal__text">Должность: </p>
            <p class="modal__text-item">${position_name}</p>
            <p class="modal__text">Подразделение: </p>
            <p class="modal__text-item">${department}</p>
            </div>
          
           
            <p class="modal__text">
              Дополнительная информация:
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut minus maiores porro ${address}</p>
          </div>
        </div>
      </div>
    </div>
    `
            );
          });
        });
      });
    }
    order();
    const modalBtn = document.querySelectorAll('.more');
    const modal = document.querySelector('.modal');

    modalBtn.forEach((item) => {
      console.log(item);
      item.addEventListener('click', () => {
        modal.classList.remove('hidden');
      });
    });

    modal.addEventListener('click', (event) => {
      const target = event.target;
      if (target.classList.contains('modal__close')) {
        modal.classList.add('hidden');
      }
    });
    modal.addEventListener('click', (e) => {
      console.log(e.target);
      if (e.target === modal) {
        modal.classList.add('hidden');
      }
    });
  };

  const search = () => {
    const searchInput = document.querySelector('.form__search');

    searchInput.addEventListener('input', (event) => {
      const value = event.target.value;
      fetch(`http://127.0.0.1:3000?term=${value}`)
        .then((response) => response.json())
        .then((data) => {
          renderGoods(data);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };
  search();

  const getData = () => {
    fetch('http://127.0.0.1:3000/')
      .then((response) => response.json())
      .then((data) => {
        renderGoods(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  getData();
}
