/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface HexEditor {
    /**
    * accepts and reads the given file, storing the result in the file variable
    */
    'acceptFile': (file: File) => Promise<void>;
    /**
    * weather or not to replace typical ASCII values with their ASCII value representation ( ex: 0x61 ==> ".a" )
    */
    'asciiInline': boolean;
    /**
    * the number of bytes between separators
    */
    'bytesPerGroup': number;
    /**
    * the number of bytes to display per line
    */
    'bytesPerLine': number;
    /**
    * currently does nothing it WOULD force a line break every X bytes
    */
    'bytesUntilForcedLine': number;
    /**
    * the mode of data entry: insert:     inserts data between bytes overwrite:     overwrites the currently selected byte readonly:     no edits are possible
    */
    'editType': "insert" | "overwrite" | "readonly";
    /**
    * the number of lines to display at once
    */
    'maxLines': number;
    /**
    * the mode of operation: region:     used to highlight different regions. Hovering over     a region displays a tooltip edit:     regions are displayed in the background, allowing     the user to edit directly noregion:     regions are not displayed at all
    */
    'mode': "region" | "edit" | "noregion";
    /**
    * the number of regions to traverse
    */
    'regionDepth': number;
    /**
    * the region data. Data will be displayed in the tooltip if mode is set to "region"
    */
    'regions': IRegion[];
    /**
    * returns the edited file
    */
    'saveFile': () => Promise<void | Uint8Array>;
    /**
    * sets the new cursor position
    */
    'setCursorPosition': (newCursorPosition: number) => Promise<void>;
    /**
    * sets the line number
    */
    'setLineNumber': (newLineNumber: number) => Promise<void>;
    /**
    * sets the new selection bounds.
    */
    'setSelection': (newSelection: { start?: number; end?: number; }) => Promise<void>;
  }
  interface HexEditorAttributes extends StencilHTMLAttributes {
    /**
    * weather or not to replace typical ASCII values with their ASCII value representation ( ex: 0x61 ==> ".a" )
    */
    'asciiInline'?: boolean;
    /**
    * the number of bytes between separators
    */
    'bytesPerGroup'?: number;
    /**
    * the number of bytes to display per line
    */
    'bytesPerLine'?: number;
    /**
    * currently does nothing it WOULD force a line break every X bytes
    */
    'bytesUntilForcedLine'?: number;
    /**
    * the mode of data entry: insert:     inserts data between bytes overwrite:     overwrites the currently selected byte readonly:     no edits are possible
    */
    'editType'?: "insert" | "overwrite" | "readonly";
    /**
    * the number of lines to display at once
    */
    'maxLines'?: number;
    /**
    * the mode of operation: region:     used to highlight different regions. Hovering over     a region displays a tooltip edit:     regions are displayed in the background, allowing     the user to edit directly noregion:     regions are not displayed at all
    */
    'mode'?: "region" | "edit" | "noregion";
    /**
    * Emitted on the change of the cursor's position
    */
    'onHexCursorChanged'?: (event: CustomEvent) => void;
    /**
    * fired when the file's data changes
    */
    'onHexDataChanged'?: (event: CustomEvent) => void;
    /**
    * Emitted when the lineNumber changes
    */
    'onHexLineChanged'?: (event: CustomEvent) => void;
    /**
    * Emitted when the selection changes
    */
    'onHexSelectionChanged'?: (event: CustomEvent) => void;
    /**
    * the number of regions to traverse
    */
    'regionDepth'?: number;
    /**
    * the region data. Data will be displayed in the tooltip if mode is set to "region"
    */
    'regions'?: IRegion[];
  }

  interface MyTooltip {
    'active': boolean;
    'data': {[key: string]: string} | string;
    'simpleText': string;
  }
  interface MyTooltipAttributes extends StencilHTMLAttributes {
    'active'?: boolean;
    'data'?: {[key: string]: string} | string;
    'simpleText'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'HexEditor': Components.HexEditor;
    'MyTooltip': Components.MyTooltip;
  }

  interface StencilIntrinsicElements {
    'hex-editor': Components.HexEditorAttributes;
    'my-tooltip': Components.MyTooltipAttributes;
  }


  interface HTMLHexEditorElement extends Components.HexEditor, HTMLStencilElement {}
  var HTMLHexEditorElement: {
    prototype: HTMLHexEditorElement;
    new (): HTMLHexEditorElement;
  };

  interface HTMLMyTooltipElement extends Components.MyTooltip, HTMLStencilElement {}
  var HTMLMyTooltipElement: {
    prototype: HTMLMyTooltipElement;
    new (): HTMLMyTooltipElement;
  };

  interface HTMLElementTagNameMap {
    'hex-editor': HTMLHexEditorElement
    'my-tooltip': HTMLMyTooltipElement
  }

  interface ElementTagNameMap {
    'hex-editor': HTMLHexEditorElement;
    'my-tooltip': HTMLMyTooltipElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
