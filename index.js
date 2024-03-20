const chainanalysis101 = require('chainanalysis101');
const chainanalysis101_extend = require('chainanalysis101-extend');
const dotenv = require('dotenv');
const eslint = require('eslint');
const webpack_cli = require('webpack-cli');
const webpack = require('webpack');
const mongoose = require('mongoose');
const nodemon = require('nodemon');
const chalk = require('chalk');
const jsonwebtoken = require('jsonwebtoken');
const ethers = require('ethers');
const multer = require('multer');
const express = require('express');
const bluebird = require('bluebird');
const web3 = require('web3');
const axios = require('axios');
const fs_extra = require('fs-extra');
const ganache_cli = require('ganache-cli');
const moment = require('moment');
const firebase = require('firebase');
const solc = require('solc');
const ethereumjs_util = require('ethereumjs-util');

// Shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const shuffledArray = shuffleArray([1, 2, 3, 4, 5]);
console.log('Shuffled array:', shuffledArray);

const url = require('url');
const myUrl = new URL('https://example.com/about?category=nodejs');
console.log('Protocol:', myUrl.protocol);
console.log('Hostname:', myUrl.hostname);
console.log('Pathname:', myUrl.pathname);

const array = [5, 12, 8, 130, 44];
const found = array.find(element => element > 10);
console.log(found);

const numbers = [1, 4, 9];
const roots = numbers.map(Math.sqrt);
console.log(`Roots: ${roots}`);

const words = ['spray', 'limit', 'elite', 'exuberant'];
const result = words.filter(word => word.length > 6);
console.log(`Filtered words: ${result}`);

const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log([1, 2, 3, 4].reduce(reducer));

const util = require('util');
const formatted = util.format('This %s a %s', 'is', 'string');
console.log(formatted);

// Get the list of all available providers for Web3
const providers = Web3.providers;
console.log('Available providers:', providers);