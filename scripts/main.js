const photos = [
  {
    url: "./img/post-1.jpg",
    likes: 10,
    text: "Неожиданный вопрос, правда? Кажется, что HTML и CSS — инструмент разработчиков и верстальщиков. Но на самом деле есть и другие профессии, которым приходится иметь дело с кодом 👌.",
    comments: [
      {
        avatar: "./assets/avatar.svg",
        text: "Думаю, что еще SEO-специалисты пользуются этими языками, интересный пост!👌",
      },
    ],
  },
  {
    url: "./img/post-2.jpg",
    likes: 5,
    text: "",
    comments: [],
  },
  {
    url: "./img/post-3.jpg",
    likes: 0,
    text: "",
    comments: [],
  },
  {
    url: "./img/post-4.jpg",
    likes: 0,
    text: "",
    comments: [],
  },
  {
    url: "./img/post-5.jpg",
    likes: 0,
    text: "",
    comments: [],
  },
  {
    url: "./img/post-6.jpg",
    likes: 0,
    text: "",
    comments: [],
  },
  {
    url: "./img/post-7.jpg",
    likes: 0,
    text: "",
    comments: [],
  },
  {
    url: "./img/post-8.jpg",
    likes: 0,
    text: "",
    comments: [],
  },
  {
    url: "./img/post-9.jpg",
    likes: 0,
    text: "",
    comments: [],
  },
];

const postsContainer = document.querySelector(".photos__content");
function renderPosts() {
  postsContainer.innerHTML = "";
  const fragment = new DocumentFragment();
  photos.forEach((photo) => {
    fragment.append(makePost(photo));
  });
  postsContainer.append(fragment);
}

const postPreviewModal = document.querySelector(".preview-post-modal");
const body = document.querySelector("body");
const bodyOverlay = document.querySelector(".body-overlay");

const openModal = (selector) => {
  const modal = document.querySelector(selector);
  if (!modal) {
    return;
  }
  modal.classList.add("active");
  body.classList.add("with-overlay");
  bodyOverlay.classList.add("active");
};

function makePost({ url, likes, comments }) {
  const template = document.querySelector("#post-template");
  const post = template.content.cloneNode(true);
  post.querySelector("img").src = url;

  post.querySelector(".likes span").textContent = likes;
  post.querySelector(".comments span").textContent = comments.length;
  post.firstElementChild.addEventListener("click", () => {
    openModal(".preview-post-modal");
    postPreviewModal.querySelector("#post-photo").src = url;
  });
  return post;
}

const closeModal = () => {
  const modalElement = document.querySelector(".modal.active");
  modalElement.classList.remove("active");
  body.classList.remove("with-overlay");
  bodyOverlay.classList.remove("active");
};

document.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

bodyOverlay.addEventListener("click", (e) => {
  const modalElement = document.querySelector(".modal.active");
  if (modalElement) {
    closeModal();
  }
});

renderPosts();

const addPostButton = document.querySelector("#add-photo");
addPostButton.addEventListener("click", () => {
  openModal(".add-post-modal");
});

const editBioButton = document.querySelector("#edit-bio");
editBioButton.addEventListener("click", () => {
  openModal(".edit-bio-modal");
});
