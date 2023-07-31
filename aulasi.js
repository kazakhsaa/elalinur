const galleryStyleSheet = `
.gallery-wrapper {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	overflow-x: hidden;
}

.gallery-wrapper img {
	max-width: 100%;
	transition: all 0.2s ease-in-out;
}

.gallery-wrapper .gallery-img img {
	cursor: pointer;
}

.gallery-wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem;
	z-index: 2;
	position: relative;
}

.gallery-popup.active + .gallery-overlay {
	content: "";
	position: fixed;
	width: 100%;
	height: 100%;
	inset: 0;
	background-color: rgb(0 0 0 / 75%);
	z-index: 5;
	overflow: hidden;
}

.gallery-popup {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: calc(100% - 48px);
	height: calc(100% - 80px);
	padding: 0px;
	display: none;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	z-index: 6;
	animation: showPopUp 0.45s linear;
}

.gallery-popup .close,
.gallery-popup .next,
.gallery-popup .prev {
	position: absolute;
	top: 0;
	right: 2rem;
	margin-left: auto;
	display: flex;
	align-items: center;
	justify-content: center;
}

.gallery-popup img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.gallery-popup .close {
	width: 30px;
	height: 30px;
	cursor: pointer;
	top: -40px;
	right: 0;
}

.gallery-popup .next {
	right: 0px;
	top: 50%;
	transform: translateY(-50%);
	width: 30px;
	height: 20px;
	font-size: 20px;
	cursor: pointer;
	padding: 10px;
	background-color: rgb(255 255 255 / 75%);
}

.gallery-popup .prev {
	left: 0px;
	right: auto;
	top: 50%;
	transform: translateY(-50%);
	width: 30px;
	height: 20px;
	font-size: 20px;
	cursor: pointer;
	padding: 10px;
	background-color: rgb(255 255 255 / 75%);
}

.gallery-wrapper .gallery-inner {
	display: grid;
	gap: 10px;
	grid-template-columns: repeat(4, 1fr);
	position: relative;
	z-index: 4;
}

@keyframes showPopUp {
	0% {
		opacity: 0;
		visibility: hidden;
	}
	50% {
		opacity: 0.5;
		visibility: visible;
	}
	100% {
		opacity: 1;
		visibility: visible;
	}
}

@keyframes imgTransitionNext {
	0% {
		transform: translateX(100vw);
		opacity: 0;
	}
	
	5% {
		transform: translateX(95vw);
		opacity: 0.15
	}
	
	10% {
		transform: translateX(90vw);
		opacity: 0.1;
	}
	
	15% {
		transform: translateX(85vw)
		opacity: 0.20
	}
	
	20% {
		transform: translateX(80vw);
		opacity: 0.2;
	}
	
	25% {
		transform: translateX(75vw)
		opacity: 0.20
	}
	
	30% {
		transform: translateX(70vw);
		opacity: 0.3;
	}
	
	35%{
		transform: translateX(75vw)
		opacity: 0.35;
	}
	
	40% {
		transform: translateX(60vw);
		opacity: 0.4;
	}
	
	45%{
		transform: translateX(55vw)
		opacity: 0.45;
	}
	
	50% {
		transform: translateX(50vw);
		opacity: 0.5;
	}
	
	55%{
		transform: translateX(45vw)
		opacity: 0.55;
	}
	
	60% {
		transform: translateX(40vw);
		opacity: 0.6;
	}
	
	65%{
		transform: translateX(65vw)
		opacity: 0.65;
	}
	
	70% {
		transform: translateX(30vw);
		opacity: 0.7;
	}
	
75%{
		transform: translateX(25vw)
		opacity: 0.75;
	}
	
	80% {
		transform: translateX(20vw);
		opacity: 0.8;
	}
	
	85%{
		transform: translateX(15vw)
		opacity: 0.85;
	}
	
	90% {
		transform: translateX(10vw);
		opacity: 0.9;
	}
	
	95%{
		transform: translateX(5vw)
		opacity: 0.95;
	}
	
	100%{
		transform: translateX(0vw);
		opacity: 1;
	}
}


@keyframes imgTransitionPrev {
	0% {
		transform: translateX(-100vw);
		opacity: 0;
	}
	
	5% {
		transform: translateX(-95vw);
		opacity: 0.15
	}
	
	10% {
		transform: translateX(-90vw);
		opacity: 0.1;
	}
	
	15% {
		transform: translateX(-85vw)
		opacity: 0.20
	}
	
	20% {
		transform: translateX(-80vw);
		opacity: 0.2;
	}
	
	25% {
		transform: translateX(-75vw)
		opacity: 0.20
	}
	
	30% {
		transform: translateX(-70vw);
		opacity: 0.3;
	}
	
	35%{
		transform: translateX(-75vw)
		opacity: 0.35;
	}
	
	40% {
		transform: translateX(-60vw);
		opacity: 0.4;
	}
	
	45%{
		transform: translateX(-55vw)
		opacity: 0.45;
	}
	
	50% {
		transform: translateX(-50vw);
		opacity: 0.5;
	}
	
	55%{
		transform: translateX(-45vw)
		opacity: 0.55;
	}
	
	60% {
		transform: translateX(-40vw);
		opacity: 0.6;
	}
	
	65%{
		transform: translateX(-65vw)
		opacity: 0.65;
	}
	
	70% {
		transform: translateX(-30vw);
		opacity: 0.7;
	}
	
75%{
		transform: translateX(-25vw)
		opacity: 0.75;
	}
	
	80% {
		transform: translateX(-20vw);
		opacity: 0.8;
	}
	
	85%{
		transform: translateX(-15vw)
		opacity: 0.85;
	}
	
	90% {
		transform: translateX(-10vw);
		opacity: 0.9;
	}
	
	95%{
		transform: translateX(-5vw)
		opacity: 0.95;
	}
	
	100%{
		transform: translateX(0vw);
		opacity: 1;
	}
}

@media only screen and (max-width: 1280px) {
	.gallery-wrapper .gallery-inner {
		grid-template-columns: repeat(3, 1fr);
	}
}

@media only screen and (max-width: 768px) {
	.gallery-wrapper .gallery-inner {
		grid-template-columns: repeat(2, 1fr);
	}

	.gallery-popup .next {
		right: 0px;
	}
	.gallery-popup .prev {
		left: 0px;
	}
	
	.gallery-popup {
		top: 60px !important;
		left: 50% !important;
		transform: translate(-50%, 0%);
		height: calc(350px - 60px)
	}
}

@media only screen and (max-width: 600px) {
	.gallery-wrapper .gallery-inner {
		grid-template-columns: repeat(1, 1fr);
	}
}
`;

const body = document.querySelector("body");
const galleryWrapper = document.querySelector(".gallery-wrapper");

const styeElement = document.createElement("style");
styeElement.innerHTML = galleryStyleSheet;
styeElement.style.display = "none";
body.append(styeElement);

const galleryPopup = document.createElement("div");
galleryPopup.className = "gallery-popup";

galleryPopup.innerHTML = `
    <button class="close">&times;</button>
		<span class="next">&#187;</span>
		<span class="prev">&#171;</span>
		<img src="" alt="">
`;

const galleryOverlay = document.createElement("div");
galleryOverlay.className = "gallery-overlay";
body.prepend(galleryOverlay);
body.prepend(galleryPopup);

const images = [...galleryWrapper.querySelectorAll(".gallery-img img")];
const closeBtn = galleryPopup.querySelector(".close");
const nextBtn = galleryPopup.querySelector(".next");
const prevBtn = galleryPopup.querySelector(".prev");

nextBtn.addEventListener("click", nextImg);
prevBtn.addEventListener("click", prevImg);

// Creating Animation For Image Transition
const imgTransitionNext = `animation: imgTransitionNext 0.45s linear`;
const imgTransitionPrev = `animation: imgTransitionPrev 0.45s linear`;
let showImg = galleryPopup.querySelector(".gallery-popup img");

let selectedImg = null;
let startCount = 0;
let endCount = images.length - 1;

closeBtn.addEventListener("click", (e) => {
	galleryPopup.style.display = "none";
	galleryPopup.classList.remove("active");
	selectedImg === null;
	startCount = 0;
	endCount = images.length - 1;
	body.style.overflow = "auto";
});

// Click Next Button Function
function nextImg() {
	if (selectedImg < 0) return;
	if (selectedImg === endCount) {
		selectedImg = startCount;
	} else {
		selectedImg++;
	}
	showImg.src = images[selectedImg].src;
	addRemoveAnimationNext();
}

// Click Prev Button Function
function prevImg() {
	if (selectedImg < 0) return;
	if (selectedImg === startCount) {
		selectedImg = endCount;
	} else {
		selectedImg--;
	}
	showImg.src = images[selectedImg].src;
	addRemoveAnimationPrev();
}

// Initial Click Handler
images.forEach((img, index) => {
	img.addEventListener("click", (e) => {
		galleryPopup.style.display = "block";
		galleryPopup.classList.add("active");
		showImg.src = e.currentTarget.src;
		selectedImg = index;
		body.style.overflow = "hidden";
	});
});

// Function for add and Remove Style Attribute
function addRemoveAnimationNext() {
	showImg.setAttribute("style", imgTransitionNext);
	setTimeout(() => {
		showImg.setAttribute("style", "");
	}, 500);
}

function addRemoveAnimationPrev() {
	showImg.setAttribute("style", imgTransitionPrev);
	setTimeout(() => {
		showImg.setAttribute("style", "");
	}, 500);
}
