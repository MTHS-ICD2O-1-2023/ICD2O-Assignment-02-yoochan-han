// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Yoochan 
// Created on: Mar 2024
// This file contains the JS functions for index.html
function CaculateToClick() {
  const base = parseInt(document.getElementById("get_base").value)
  const height = parseInt(document.getElementById("get_height").value)
  // caculate
  const result = 1/3(base * height)
  document.getElementById("Pyramid").innerHTML = "volume of pyramid that has " + base + "cm² base and " + height + "cm height is " + result +  "cm³."
}