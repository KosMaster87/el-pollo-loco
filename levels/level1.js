"use strict";

/**
 * Im Grunde ist "level1" nur eine Hilfsdatei.
 * Die eigentlichen Platzhalter für die Objekte sind in der "class Level" Deklaliert.
 * Durch die Erstellung von "new Level" wird durch die Parameter in dem "constructor" der "class Level" die Objekte in den Jeweiligen Variablen gesetzt.\
 * Beachte die Reichenfolge der Parameter in dem "construktor" und zu dem "new Level" Objekt.
 */

const level1 = new Level(
  [
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Endboss(),
  ],

  [
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
  ],

  [
    new BackgroundObject("img/5_background/layers/air.png", -719),
    new BackgroundObject("img/5_background/layers/3_third_layer/2.png", -719),
    new BackgroundObject("img/5_background/layers/2_second_layer/2.png", -719),
    new BackgroundObject("img/5_background/layers/1_first_layer/2.png", -719),

    new BackgroundObject("img/5_background/layers/air.png", 0),
    new BackgroundObject("img/5_background/layers/3_third_layer/1.png", 0),
    new BackgroundObject("img/5_background/layers/2_second_layer/1.png", 0),
    new BackgroundObject("img/5_background/layers/1_first_layer/1.png", 0),

    new BackgroundObject("img/5_background/layers/air.png", 719),
    new BackgroundObject("img/5_background/layers/3_third_layer/2.png", 719),
    new BackgroundObject("img/5_background/layers/2_second_layer/2.png", 719),
    new BackgroundObject("img/5_background/layers/1_first_layer/2.png", 719),

    new BackgroundObject("img/5_background/layers/air.png", 719 * 2),
    new BackgroundObject(
      "img/5_background/layers/3_third_layer/1.png",
      719 * 2
    ),
    new BackgroundObject(
      "img/5_background/layers/2_second_layer/1.png",
      719 * 2
    ),
    new BackgroundObject(
      "img/5_background/layers/1_first_layer/1.png",
      719 * 2
    ),

    new BackgroundObject("img/5_background/layers/air.png", 719 * 3),
    new BackgroundObject(
      "img/5_background/layers/3_third_layer/2.png",
      719 * 3
    ),
    new BackgroundObject(
      "img/5_background/layers/2_second_layer/2.png",
      719 * 3
    ),
    new BackgroundObject(
      "img/5_background/layers/1_first_layer/2.png",
      719 * 3
    ),

    new BackgroundObject("img/5_background/layers/air.png", 719 * 4),
    new BackgroundObject(
      "img/5_background/layers/3_third_layer/1.png",
      719 * 4
    ),
    new BackgroundObject(
      "img/5_background/layers/2_second_layer/1.png",
      719 * 4
    ),
    new BackgroundObject(
      "img/5_background/layers/1_first_layer/1.png",
      719 * 4
    ),

    new BackgroundObject("img/5_background/layers/air.png", 719 * 5),
    new BackgroundObject(
      "img/5_background/layers/3_third_layer/2.png",
      719 * 5
    ),
    new BackgroundObject(
      "img/5_background/layers/2_second_layer/2.png",
      719 * 5
    ),
    new BackgroundObject(
      "img/5_background/layers/1_first_layer/2.png",
      719 * 5
    ),

    new BackgroundObject("img/5_background/layers/air.png", 719 * 6),
    new BackgroundObject(
      "img/5_background/layers/3_third_layer/1.png",
      719 * 6
    ),
    new BackgroundObject(
      "img/5_background/layers/2_second_layer/1.png",
      719 * 6
    ),
    new BackgroundObject(
      "img/5_background/layers/1_first_layer/1.png",
      719 * 6
    ),

    new BackgroundObject("img/5_background/layers/air.png", 719 * 7),
    new BackgroundObject(
      "img/5_background/layers/3_third_layer/2.png",
      719 * 7
    ),
    new BackgroundObject(
      "img/5_background/layers/2_second_layer/2.png",
      719 * 7
    ),
    new BackgroundObject(
      "img/5_background/layers/1_first_layer/2.png",
      719 * 7
    ),

    new BackgroundObject("img/5_background/layers/air.png", 719 * 8),
    new BackgroundObject(
      "img/5_background/layers/3_third_layer/1.png",
      719 * 8
    ),
    new BackgroundObject(
      "img/5_background/layers/2_second_layer/1.png",
      719 * 8
    ),
    new BackgroundObject(
      "img/5_background/layers/1_first_layer/1.png",
      719 * 8
    ),
  ]
);
