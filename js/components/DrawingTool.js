
import {
  TOOL_BRUSH,
  TOOL_ERASER,
  CANVAS_TOOLBOX_BRUSH,
  CANVAS_TOOLBOX_ERASER,
  DEFAULT_PICKER_COLOR,
  BLANK_PIXEL_COLOR } from '../constants.js';

/**
 * @constructor
 * @description Creates a new DrawingTool object.
 *
 * @property {String} selectedTool indicates which drawing tool is selected.
 * @property {String} color color to be used when painting pixels.
 *
 */
let DrawingTool = function(){
  this.tool = TOOL_BRUSH;
  this.color = DEFAULT_PICKER_COLOR;
};

/**
 * @description Changes the active tool.
 *
 * @param  {String} tool drawing tool to be set as active.
 */
DrawingTool.prototype.set = function(tool) {

  this.tool = tool;

  switch(tool) {
    case TOOL_BRUSH:
      $ ( CANVAS_TOOLBOX_ERASER ).removeClass("btn-pressed");
      $ ( CANVAS_TOOLBOX_BRUSH ).addClass("btn-pressed");
      break;
    case TOOL_ERASER:
      $ ( CANVAS_TOOLBOX_BRUSH ).removeClass("btn-pressed");
      $ ( CANVAS_TOOLBOX_ERASER ).addClass("btn-pressed");
      break;
  }
};

/**
 * @description Paints or erases a pixel.
 *
 * @param {String} color hexadecimal value of the color to be used
 */
DrawingTool.prototype.paintPixel = function (pixel) {
  if (this.tool === TOOL_BRUSH){
    $(pixel).css( "background-color", this.color);
  }
  else if (this.tool === TOOL_ERASER){
    $(pixel).css( "background-color", BLANK_PIXEL_COLOR);
  }
};

export { DrawingTool };