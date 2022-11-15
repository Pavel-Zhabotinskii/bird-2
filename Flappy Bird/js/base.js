const $ = {}

const imgURL = "https://i.ibb.co/Q9yv5Jk/flappy-bird-set.png";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const img = new Image();

// переменная счета
let score = 0;

const SPEED = 3.1;

// ширина и высота птицы
const SIZE = [51, 36];

let index = 0;
let indexHeight = 0;