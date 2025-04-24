// Global TypeScript declarations for libraries without type definitions

interface JQuery {
  slider: (options: any) => any;
  datetimepicker: (options: any) => any;
  flexslider: (options: any) => any;
  magnific_popup: (options: any) => any;
  owlCarousel: (options: any) => any;
  // Add other jQuery plugins as needed
}

interface Window {
  jQuery: JQueryStatic;
  $: JQueryStatic;
  // Add other global libraries as needed
}

// For image imports
declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

declare module '*.gif' {
  const value: string;
  export default value;
} 