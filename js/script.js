// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Yoochan 
// Created on: Mar 2024
// This file contains the JS functions for index.html
function Caculate() {
  const base = parseInt(document.getElementById("get_base").value)
  const height = parseInt(document.getElementById("get_height").value)
  // caculate
  const answer = (base * height) * (1/3)
  //display 
  document.getElementById("Answer").innerHTML = "volume of pyramid that has " + base + "cm² base and " + height + "cm height is " + answer +  "cm³."
}